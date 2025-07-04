/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, g as renderScript, e as renderTemplate, f as renderComponent } from '../chunks/astro/server_Dx1A4mH6.mjs';
import { $ as $$Layout } from '../chunks/Layout_kZdf2jjt.mjs';
export { renderers } from '../renderers.mjs';

const $$FirebaseAuth = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="firebase-auth" class="w-full max-w-md mx-auto"> <div id="auth-container"> <!-- Sign In Form --> <div id="signin-form" class="space-y-6"> <h2 class="text-2xl font-playfair font-semibold text-luxury-gold text-center mb-6">
Iniciar Sesión
</h2> <div class="space-y-4"> <input type="email" id="email" placeholder="Correo Electrónico" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold"> <input type="password" id="password" placeholder="Contraseña" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold"> </div> <div class="space-y-3"> <button id="signin-btn" class="w-full bg-luxury-gold text-luxury-black py-3 px-6 font-medium uppercase tracking-wide hover:bg-luxury-gold-dark transition-colors duration-300">
Iniciar Sesión
</button> <div class="relative"> <div class="absolute inset-0 flex items-center"> <div class="w-full border-t border-luxury-gold border-opacity-30"></div> </div> <div class="relative flex justify-center text-sm"> <span class="px-2 bg-luxury-gray text-luxury-gold-light">O continuar con</span> </div> </div> <button id="google-signin-btn" class="w-full bg-transparent border border-luxury-gold text-luxury-gold py-3 px-6 font-medium uppercase tracking-wide hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-300 flex items-center justify-center space-x-2"> <svg class="w-5 h-5" viewBox="0 0 24 24"> <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path> <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path> <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path> <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path> </svg> <span>Google</span> </button> </div> <p class="text-center text-sm text-luxury-gold-light">
¿No tienes una cuenta?
<button id="show-signup" class="text-luxury-gold hover:underline">Registrarse</button> </p> </div> <!-- Sign Up Form --> <div id="signup-form" class="space-y-6 hidden"> <h2 class="text-2xl font-playfair font-semibold text-luxury-gold text-center mb-6">
Crear Cuenta
</h2> <div class="space-y-4"> <input type="text" id="signup-name" placeholder="Nombre Completo" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold"> <input type="email" id="signup-email" placeholder="Correo Electrónico" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold"> <input type="password" id="signup-password" placeholder="Contraseña" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold"> </div> <button id="signup-btn" class="w-full bg-luxury-gold text-luxury-black py-3 px-6 font-medium uppercase tracking-wide hover:bg-luxury-gold-dark transition-colors duration-300">
Registrarse
</button> <p class="text-center text-sm text-luxury-gold-light">
¿Ya tienes una cuenta?
<button id="show-signin" class="text-luxury-gold hover:underline">Iniciar Sesión</button> </p> </div> <!-- Loading State --> <div id="loading" class="hidden text-center"> <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-luxury-gold mx-auto mb-4"></div> <p class="text-luxury-gold-light">Cargando...</p> </div> <!-- Error Message --> <div id="error-message" class="hidden bg-red-600 text-white p-3 rounded text-sm text-center"></div> </div> </div> ${renderScript($$result, "/Users/branduski/Documents/mehlej-joyeria2/src/components/FirebaseAuth.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/branduski/Documents/mehlej-joyeria2/src/components/FirebaseAuth.astro", void 0);

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel de Administraci\xF3n - MEHLEJ" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col items-center justify-center bg-luxury-black text-luxury-white p-4"> <div class="w-full max-w-md"> <h1 class="text-4xl font-playfair font-bold text-luxury-gold mb-6 text-center">Panel de Administración</h1> <p class="text-lg text-luxury-gold-light mb-8 text-center">Inicia sesión para administrar productos, inventario y pedidos.</p> <div id="loading-message" class="text-center text-luxury-gold-light mb-4"> <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-luxury-gold mx-auto mb-2"></div>
Verificando autenticación...
</div> <div id="auth-container" class="hidden"> ${renderComponent($$result2, "FirebaseAuth", $$FirebaseAuth, {})} <div class="mt-6 text-center"> <p class="text-luxury-gold-light text-sm">
¿Es tu primera vez?
<a href="/register" class="text-luxury-gold hover:underline">Crear cuenta de administrador</a> </p> </div> </div> </div> </main> ` })} ${renderScript($$result, "/Users/branduski/Documents/mehlej-joyeria2/src/pages/admin.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/branduski/Documents/mehlej-joyeria2/src/pages/admin.astro", void 0);

const $$file = "/Users/branduski/Documents/mehlej-joyeria2/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
