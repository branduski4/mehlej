import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate } from './astro/server_Dx1A4mH6.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "MEHLEJ - Luxury Jewelry Collection. Discover timeless elegance and exceptional craftsmanship." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="bg-luxury-black text-luxury-white font-elegant"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/branduski/Documents/mehlej-joyeria2/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
