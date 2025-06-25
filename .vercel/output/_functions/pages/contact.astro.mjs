/* empty css                                 */
import { c as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dx1A4mH6.mjs';
import { $ as $$Layout } from '../chunks/Layout_kZdf2jjt.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - MEHLEJ" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col items-center justify-center bg-luxury-black text-luxury-white"> <h1 class="text-4xl font-playfair font-bold text-luxury-gold mb-6">Contact Us</h1> <p class="text-lg text-luxury-gold-light max-w-2xl text-center mb-8">
For inquiries, bespoke orders, or assistance, please fill out the form below or email us at <a href="mailto:info@mehlej.com" class="text-luxury-gold underline">info@mehlej.com</a>.
</p> <form class="bg-luxury-gray p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"> <input type="text" placeholder="Name" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" required> <input type="email" placeholder="Email" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" required> <textarea placeholder="Message" rows="4" class="w-full px-4 py-3 rounded bg-luxury-black text-luxury-white border border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold" required></textarea> <button type="submit" class="w-full bg-luxury-gold text-luxury-black py-3 px-6 font-medium uppercase tracking-wide hover:bg-luxury-gold-dark transition-colors duration-300">
Send Message
</button> </form> </main> ` })}`;
}, "/Users/branduski/Documents/mehlej-joyeria2/src/pages/contact.astro", void 0);

const $$file = "/Users/branduski/Documents/mehlej-joyeria2/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
