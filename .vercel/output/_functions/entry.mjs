import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CajmzvcT.mjs';
import { manifest } from './manifest_WV5mJqQx.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/dashboard.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/register.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.10.1_@types+node@20.19.1_jiti@1.21.7_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/dashboard.astro", _page2],
    ["src/pages/admin.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/register.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ca2c20f4-1b1d-4f20-b6cf-ad1ed0c2c5d7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
