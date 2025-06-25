import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, query, collection, orderBy, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDeyNH-n8EyllTyWsbb3dCNOQrHE6OiotI",
  authDomain: "mehlej-joyeria-d4e69.firebaseapp.com",
  projectId: "mehlej-joyeria-d4e69",
  storageBucket: "mehlej-joyeria-d4e69.firebasestorage.app",
  messagingSenderId: "359017632725",
  appId: "1:359017632725:web:59d2e8fa031687bf12235c"
};
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Error initializing Firebase:", error);
  app = initializeApp({
    apiKey: "demo-api-key",
    authDomain: "demo-project.firebaseapp.com",
    projectId: "demo-project",
    storageBucket: "demo-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "demo-app-id"
  });
}
getAuth(app);
const db = getFirestore(app);
getStorage(app);

const PRODUCTS_COLLECTION = "products";
async function getProductsFromFirestore() {
  try {
    const q = query(
      collection(db, PRODUCTS_COLLECTION),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc2) => {
      const data = doc2.data();
      products.push({
        id: doc2.id,
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image,
        category: data.category,
        stock: data.stock,
        featured: data.featured || false,
        createdAt: data.createdAt?.toDate() || /* @__PURE__ */ new Date(),
        updatedAt: data.updatedAt?.toDate() || /* @__PURE__ */ new Date()
      });
    });
    return { success: true, products };
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return { success: false, error, products: [] };
  }
}

export { getProductsFromFirestore as g };
