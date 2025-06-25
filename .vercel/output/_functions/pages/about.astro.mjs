/* empty css                                 */
import { c as createComponent, f as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dx1A4mH6.mjs';
import { $ as $$Layout } from '../chunks/Layout_kZdf2jjt.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About - MEHLEJ" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col items-center justify-center bg-luxury-black text-luxury-white"> <h1 class="text-4xl font-playfair font-bold text-luxury-gold mb-6">About MEHLEJ</h1> <p class="text-lg text-luxury-gold-light max-w-2xl text-center">
MEHLEJ is a luxury jewelry brand dedicated to timeless elegance and exceptional craftsmanship. Our curated collection features only the finest materials and meticulous attention to detail, ensuring every piece is a work of art. Discover the story behind our passion for beauty and excellence.
</p> </main> ` })}`;
}, "/Users/branduski/Documents/mehlej-joyeria2/src/pages/about.astro", void 0);

const $$file = "/Users/branduski/Documents/mehlej-joyeria2/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
