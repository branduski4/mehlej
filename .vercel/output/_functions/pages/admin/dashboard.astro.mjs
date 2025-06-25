/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, g as renderScript, e as renderTemplate, f as renderComponent, F as Fragment, b as addAttribute } from '../../chunks/astro/server_Dx1A4mH6.mjs';
import { $ as $$Layout } from '../../chunks/Layout_kZdf2jjt.mjs';
import { g as getProductsFromFirestore } from '../../chunks/firestore_BzdIiygr.mjs';
export { renderers } from '../../renderers.mjs';

const $$StockManagement = createComponent(async ($$result, $$props, $$slots) => {
  let products = [];
  let loading = true;
  let error = false;
  try {
    const result = await getProductsFromFirestore();
    if (result.success) {
      products = result.products;
    } else {
      error = true;
      console.error("Error obteniendo productos:", result.error);
    }
  } catch (err) {
    error = true;
    console.error("Error en StockManagement:", err);
  } finally {
    loading = false;
  }
  function getOutOfStockProductsList() {
    return products.filter((product) => product.stock === 0);
  }
  return renderTemplate`${maybeRenderHead()}<div class="bg-luxury-gray rounded-lg p-6"> <h2 class="text-2xl font-playfair font-semibold text-luxury-gold mb-6">Administración de Inventario</h2> ${loading && renderTemplate`<div class="flex justify-center items-center py-12"> <div class="text-luxury-gold text-lg">Cargando inventario...</div> </div>`} ${error && renderTemplate`<div class="text-center py-12"> <div class="text-red-400 text-lg mb-4">Error al cargar el inventario</div> <button onclick="window.location.reload()" class="bg-luxury-gold text-luxury-black px-4 py-2 rounded hover:bg-luxury-gold-dark transition-colors duration-200">
Reintentar
</button> </div>`} ${!loading && !error && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"> <div class="bg-luxury-black p-4 rounded-lg"> <div class="text-3xl font-bold text-luxury-gold">${products.length}</div> <div class="text-luxury-gold-light text-sm">Total de Productos</div> </div> <div class="bg-luxury-black p-4 rounded-lg"> <div class="text-3xl font-bold text-green-400">${products.filter((p) => p.stock > 0).length}</div> <div class="text-luxury-gold-light text-sm">En Existencia</div> </div> <div class="bg-luxury-black p-4 rounded-lg"> <div class="text-3xl font-bold text-red-400">${getOutOfStockProductsList().length}</div> <div class="text-luxury-gold-light text-sm">Sin Existencia</div> </div> </div>  <div class="space-y-4 mb-8"> ${getOutOfStockProductsList().length > 0 && renderTemplate`<div class="bg-red-500 bg-opacity-20 border border-red-500 text-red-300 p-4 rounded-lg"> <h3 class="font-semibold mb-2">⚠️ Productos Sin Existencia</h3> <ul class="space-y-1"> ${getOutOfStockProductsList().map((product) => renderTemplate`<li class="text-sm">• ${product.name}</li>`)} </ul> </div>`} </div>  <div class="overflow-x-auto"> <table class="w-full text-left"> <thead class="bg-luxury-black text-luxury-gold-light"> <tr> <th class="p-3 font-medium">Producto</th> <th class="p-3 font-medium">Categoría</th> <th class="p-3 font-medium">Inventario Actual</th> <th class="p-3 font-medium">Estado</th> <th class="p-3 font-medium">Acciones</th> </tr> </thead> <tbody class="text-luxury-white"> ${products.map((product) => renderTemplate`<tr class="border-b border-luxury-gold border-opacity-20 hover:bg-luxury-black transition-colors duration-200"> <td class="p-3"> <div class="flex items-center space-x-3"> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-12 h-12 object-cover rounded"> <div> <div class="font-medium">${product.name}</div> <div class="text-sm text-luxury-gold-light">$${product.price}</div> </div> </div> </td> <td class="p-3 text-sm capitalize"> ${product.category === "rings" ? "Anillos" : product.category === "necklaces" ? "Collares" : product.category === "earrings" ? "Aretes" : product.category === "bracelets" ? "Brazaletes" : product.category === "watches" ? "Relojes" : product.category} </td> <td class="p-3"> <span${addAttribute(`font-medium ${product.stock === 0 ? "text-red-400" : "text-green-400"}`, "class")}> ${product.stock} </span> </td> <td class="p-3"> ${product.stock === 0 ? renderTemplate`<span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs">Sin Existencia</span>` : renderTemplate`<span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs">En Existencia</span>`} </td> <td class="p-3"> <div class="flex items-center space-x-2"> <button class="bg-luxury-gold text-luxury-black px-3 py-1 rounded text-sm hover:bg-luxury-gold-dark transition-colors duration-200"${addAttribute(`openEditProductModal('${product.id}', '${product.name}', '${product.description}', ${product.price}, '${product.image}', '${product.category}', ${product.stock}, ${product.featured})`, "onclick")}>
Editar
</button> <button class="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors duration-200"${addAttribute(`openDeleteProductModal('${product.id}', '${product.name}')`, "onclick")}>
Eliminar
</button> </div> </td> </tr>`)} </tbody> </table> </div> ` })}`} </div> <!-- Product Edit Modal --> <div id="edit-product-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4"> <div class="bg-luxury-gray rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"> <div class="flex justify-between items-center mb-6"> <h3 class="text-xl font-playfair font-semibold text-luxury-gold">Editar Producto</h3> <button onclick="closeEditProductModal()" class="text-luxury-gold-light hover:text-luxury-gold text-2xl font-bold">
×
</button> </div> <form id="edit-product-form" class="space-y-6"> <!-- Nombre del Producto --> <div> <label for="edit-product-name" class="block text-luxury-gold-light text-sm mb-2">Nombre del Producto *</label> <input type="text" id="edit-product-name" name="name" required class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="Ej: Anillo de Diamante"> </div> <!-- Descripción --> <div> <label for="edit-product-description" class="block text-luxury-gold-light text-sm mb-2">Descripción *</label> <textarea id="edit-product-description" name="description" required rows="3" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold resize-none" placeholder="Describe el producto..."></textarea> </div> <!-- Precio --> <div> <label for="edit-product-price" class="block text-luxury-gold-light text-sm mb-2">Precio (MXN) *</label> <input type="number" id="edit-product-price" name="price" required min="0" step="0.01" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="0.00"> </div> <!-- URL de la Imagen --> <div> <label for="edit-product-image" class="block text-luxury-gold-light text-sm mb-2">URL de la Imagen *</label> <input type="url" id="edit-product-image" name="image" required class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="https://ejemplo.com/imagen.jpg"> </div> <!-- Categoría --> <div> <label for="edit-product-category" class="block text-luxury-gold-light text-sm mb-2">Categoría *</label> <select id="edit-product-category" name="category" required class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold"> <option value="">Selecciona una categoría</option> <option value="rings">Anillos</option> <option value="necklaces">Collares</option> <option value="earrings">Aretes</option> <option value="bracelets">Brazaletes</option> <option value="watches">Relojes</option> </select> </div> <!-- Stock --> <div> <label for="edit-product-stock" class="block text-luxury-gold-light text-sm mb-2">Stock Disponible *</label> <input type="number" id="edit-product-stock" name="stock" required min="0" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="0"> </div> <!-- Producto Destacado --> <div class="flex items-center space-x-3"> <input type="checkbox" id="edit-product-featured" name="featured" class="w-4 h-4 text-luxury-gold bg-luxury-black border-luxury-gold rounded focus:ring-luxury-gold focus:ring-2"> <label for="edit-product-featured" class="text-luxury-gold-light text-sm">Producto Destacado</label> </div> <!-- Botones --> <div class="flex space-x-3 pt-4"> <button type="button" onclick="closeEditProductModal()" class="flex-1 px-4 py-2 bg-transparent border border-luxury-gold text-luxury-gold rounded hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-200">
Cancelar
</button> <button type="submit" class="flex-1 px-4 py-2 bg-luxury-gold text-luxury-black rounded hover:bg-luxury-gold-dark transition-colors duration-200">
Guardar Cambios
</button> </div> </form> </div> </div> <!-- Delete Product Confirmation Modal --> <div id="delete-product-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4"> <div class="bg-luxury-gray rounded-lg p-6 w-full max-w-md"> <div class="flex justify-between items-center mb-6"> <h3 class="text-xl font-playfair font-semibold text-luxury-gold">Confirmar Eliminación</h3> <button onclick="closeDeleteProductModal()" class="text-luxury-gold-light hover:text-luxury-gold text-2xl font-bold">
×
</button> </div> <div class="space-y-4"> <div class="text-center"> <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path> </svg> </div> <h4 class="text-lg font-medium text-luxury-white mb-2">¿Eliminar producto?</h4> <p class="text-luxury-gold-light text-sm mb-4">
¿Estás seguro de que quieres eliminar el producto <strong id="delete-product-name" class="text-luxury-white"></strong>?
</p> <p class="text-red-400 text-xs">
⚠️ Esta acción no se puede deshacer. El producto se eliminará permanentemente.
</p> </div> </div> <div class="flex space-x-3 mt-6"> <button onclick="closeDeleteProductModal()" class="flex-1 px-4 py-2 bg-transparent border border-luxury-gold text-luxury-gold rounded hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-200">
Cancelar
</button> <button onclick="confirmDeleteProduct()" class="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200">
Eliminar
</button> </div> </div> </div> ${renderScript($$result, "/Users/branduski/Documents/mehlej-joyeria2/src/components/StockManagement.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/branduski/Documents/mehlej-joyeria2/src/components/StockManagement.astro", void 0);

const $$AddProductModal = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Add Product Modal -->${maybeRenderHead()}<div id="add-product-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4"> <div class="bg-luxury-gray rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"> <div class="flex justify-between items-center mb-6"> <h3 class="text-xl font-playfair font-semibold text-luxury-gold">Agregar Nuevo Producto</h3> <button id="close-add-modal" class="text-luxury-gold-light hover:text-luxury-gold text-2xl font-bold">
×
</button> </div> <form id="add-product-form" class="space-y-6"> <!-- Nombre del Producto --> <div> <label for="product-name" class="block text-luxury-gold-light text-sm mb-2">Nombre del Producto *</label> <input type="text" id="product-name" name="name" required class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="Ej: Anillo de Diamante"> </div> <!-- Descripción --> <div> <label for="product-description" class="block text-luxury-gold-light text-sm mb-2">Descripción *</label> <textarea id="product-description" name="description" required rows="3" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold resize-none" placeholder="Describe el producto..."></textarea> </div> <!-- Precio --> <div> <label for="product-price" class="block text-luxury-gold-light text-sm mb-2">Precio (MXN) *</label> <input type="number" id="product-price" name="price" required min="0" step="0.01" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="0.00"> </div> <!-- URL de la Imagen --> <div> <label for="product-image" class="block text-luxury-gold-light text-sm mb-2">URL de la Imagen *</label> <input type="url" id="product-image" name="image" required class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="https://ejemplo.com/imagen.jpg"> </div> <!-- Categoría --> <div> <label for="product-category" class="block text-luxury-gold-light text-sm mb-2">Categoría *</label> <select id="product-category" name="category" required class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold"> <option value="">Selecciona una categoría</option> <option value="rings">Anillos</option> <option value="necklaces">Collares</option> <option value="earrings">Aretes</option> <option value="bracelets">Brazaletes</option> <option value="watches">Relojes</option> </select> </div> <!-- Stock --> <div> <label for="product-stock" class="block text-luxury-gold-light text-sm mb-2">Stock Disponible *</label> <input type="number" id="product-stock" name="stock" required min="0" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="0"> </div> <!-- Producto Destacado --> <div class="flex items-center space-x-3"> <input type="checkbox" id="product-featured" name="featured" class="w-4 h-4 text-luxury-gold bg-luxury-black border-luxury-gold rounded focus:ring-luxury-gold focus:ring-2"> <label for="product-featured" class="text-luxury-gold-light text-sm">Producto Destacado</label> </div> <!-- Botones --> <div class="flex space-x-3 pt-4"> <button type="button" id="cancel-add-product" class="flex-1 px-4 py-2 bg-transparent border border-luxury-gold text-luxury-gold rounded hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-200">
Cancelar
</button> <button type="submit" class="flex-1 px-4 py-2 bg-luxury-gold text-luxury-black rounded hover:bg-luxury-gold-dark transition-colors duration-200">
Agregar Producto
</button> </div> </form> </div> </div> ${renderScript($$result, "/Users/branduski/Documents/mehlej-joyeria2/src/components/AddProductModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/branduski/Documents/mehlej-joyeria2/src/components/AddProductModal.astro", void 0);

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  let products = [];
  let loading = true;
  let error = false;
  try {
    const result = await getProductsFromFirestore();
    if (result.success) {
      products = result.products;
    } else {
      error = true;
      console.error("Error obteniendo productos:", result.error);
    }
  } catch (err) {
    error = true;
    console.error("Error en dashboard:", err);
  } finally {
    loading = false;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel de Administraci\xF3n - MEHLEJ" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-luxury-black text-luxury-white"> <!-- Header --> <header class="bg-luxury-gray border-b border-luxury-gold border-opacity-20 p-6"> <div class="max-w-7xl mx-auto flex justify-between items-center"> <div> <h1 class="text-3xl font-playfair font-bold text-luxury-gold">Panel de Administración</h1> <p class="text-luxury-gold-light">Administra tu inventario de joyería y pedidos</p> </div> <div class="flex space-x-3"> <button id="add-product-btn" class="bg-luxury-gold text-luxury-black px-4 py-2 rounded hover:bg-luxury-gold-dark transition-colors duration-200">
+ Agregar Producto
</button> <button id="signout-btn" class="bg-transparent border border-luxury-gold text-luxury-gold px-4 py-2 rounded hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-200">
Cerrar Sesión
</button> </div> </div> </header> <!-- Main Content --> <div class="max-w-7xl mx-auto p-6"> <div class="space-y-8"> <!-- Quick Stats --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="bg-luxury-gray p-6 rounded-lg"> <h3 class="text-lg font-semibold text-luxury-gold mb-2">Total de Productos</h3> <p class="text-3xl font-bold text-luxury-white">${loading ? "..." : products.length}</p> </div> <div class="bg-luxury-gray p-6 rounded-lg"> <h3 class="text-lg font-semibold text-luxury-gold mb-2">Productos Destacados</h3> <p class="text-3xl font-bold text-luxury-white">${loading ? "..." : products.filter((p) => p.featured).length}</p> </div> <div class="bg-luxury-gray p-6 rounded-lg"> <h3 class="text-lg font-semibold text-luxury-gold mb-2">Categorías</h3> <p class="text-3xl font-bold text-luxury-white">${loading ? "..." : new Set(products.map((p) => p.category)).size}</p> </div> </div> <!-- Stock Management --> ${renderComponent($$result2, "StockManagement", $$StockManagement, {})} </div> </div> </main>  ${renderComponent($$result2, "AddProductModal", $$AddProductModal, {})} ` })} ${renderScript($$result, "/Users/branduski/Documents/mehlej-joyeria2/src/pages/admin/dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/branduski/Documents/mehlej-joyeria2/src/pages/admin/dashboard.astro", void 0);

const $$file = "/Users/branduski/Documents/mehlej-joyeria2/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
