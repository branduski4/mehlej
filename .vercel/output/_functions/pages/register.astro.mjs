/* empty css                                 */
import { c as createComponent, f as renderComponent, g as renderScript, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dx1A4mH6.mjs';
import { $ as $$Layout } from '../chunks/Layout_kZdf2jjt.mjs';
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro de Administrador - MEHLEJ" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col items-center justify-center bg-luxury-black text-luxury-white p-4"> <div class="w-full max-w-md"> <h1 class="text-4xl font-playfair font-bold text-luxury-gold mb-6 text-center">Registro de Administrador</h1> <p class="text-lg text-luxury-gold-light mb-8 text-center">Crea tu cuenta de administrador para acceder al panel de control.</p> <div class="bg-luxury-gray rounded-lg p-6"> <form id="register-form" class="space-y-4"> <div> <label for="name" class="block text-luxury-gold-light text-sm mb-2">Nombre Completo</label> <input type="text" id="name" required class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="Tu nombre completo"> </div> <div> <label for="email" class="block text-luxury-gold-light text-sm mb-2">Correo Electrónico</label> <input type="email" id="email" required class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="tu@email.com"> </div> <div> <label for="password" class="block text-luxury-gold-light text-sm mb-2">Contraseña</label> <input type="password" id="password" required minlength="6" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="Mínimo 6 caracteres"> </div> <div> <label for="confirm-password" class="block text-luxury-gold-light text-sm mb-2">Confirmar Contraseña</label> <input type="password" id="confirm-password" required class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" placeholder="Repite tu contraseña"> </div> <div id="register-error" class="text-red-400 text-sm hidden"></div> <div id="register-success" class="text-green-400 text-sm hidden"></div> <button type="submit" class="w-full bg-luxury-gold text-luxury-black py-3 px-6 font-medium rounded hover:bg-luxury-gold-dark transition-colors duration-300">
Crear Cuenta
</button> </form> <div class="mt-6 text-center"> <p class="text-luxury-gold-light text-sm">
¿Ya tienes una cuenta?
<a href="/admin" class="text-luxury-gold hover:underline">Iniciar Sesión</a> </p> </div> </div> </div> </main> ` })} ${renderScript($$result, "/Users/branduski/Documents/mehlej-joyeria2/src/pages/register.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/branduski/Documents/mehlej-joyeria2/src/pages/register.astro", void 0);

const $$file = "/Users/branduski/Documents/mehlej-joyeria2/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
