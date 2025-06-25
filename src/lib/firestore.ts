import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import type { Product } from "../types";

const PRODUCTS_COLLECTION = "products";

// Agregar un nuevo producto a Firestore
export async function addProductToFirestore(
  productData: Omit<Product, "id" | "createdAt" | "updatedAt">
) {
  try {
    const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), {
      ...productData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    console.log("Producto agregado con ID:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error agregando producto:", error);
    return { success: false, error };
  }
}

// Obtener todos los productos de Firestore
export async function getProductsFromFirestore() {
  try {
    const q = query(
      collection(db, PRODUCTS_COLLECTION),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);

    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      products.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image,
        category: data.category,
        stock: data.stock,
        featured: data.featured || false,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      });
    });

    return { success: true, products };
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return { success: false, error, products: [] };
  }
}

// Actualizar un producto en Firestore
export async function updateProductInFirestore(
  productId: string,
  updates: Partial<Product>
) {
  try {
    const productRef = doc(db, PRODUCTS_COLLECTION, productId);
    await updateDoc(productRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });

    console.log("Producto actualizado:", productId);
    return { success: true };
  } catch (error) {
    console.error("Error actualizando producto:", error);
    return { success: false, error };
  }
}

// Eliminar un producto de Firestore
export async function deleteProductFromFirestore(productId: string) {
  try {
    await deleteDoc(doc(db, PRODUCTS_COLLECTION, productId));
    console.log("Producto eliminado:", productId);
    return { success: true };
  } catch (error) {
    console.error("Error eliminando producto:", error);
    return { success: false, error };
  }
}

// Obtener productos por categoría
export async function getProductsByCategory(category: string) {
  try {
    const q = query(
      collection(db, PRODUCTS_COLLECTION),
      where("category", "==", category),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);

    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      products.push({
        id: doc.id,
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image,
        category: data.category,
        stock: data.stock,
        featured: data.featured || false,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      });
    });

    return { success: true, products };
  } catch (error) {
    console.error("Error obteniendo productos por categoría:", error);
    return { success: false, error, products: [] };
  }
}
