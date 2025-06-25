import { h as decodeKey } from './chunks/astro/server_Dx1A4mH6.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CVujoCil.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/branduski/Documents/mehlej-joyeria2/","cacheDir":"file:///Users/branduski/Documents/mehlej-joyeria2/node_modules/.astro/","outDir":"file:///Users/branduski/Documents/mehlej-joyeria2/dist/","srcDir":"file:///Users/branduski/Documents/mehlej-joyeria2/src/","publicDir":"file:///Users/branduski/Documents/mehlej-joyeria2/public/","buildClientDir":"file:///Users/branduski/Documents/mehlej-joyeria2/dist/client/","buildServerDir":"file:///Users/branduski/Documents/mehlej-joyeria2/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.10.1_@types+node@20.19.1_jiti@1.21.7_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C71COSQY.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C71COSQY.css"}],"routeData":{"route":"/admin/dashboard","isIndex":false,"type":"page","pattern":"^\\/admin\\/dashboard\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/dashboard.astro","pathname":"/admin/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C71COSQY.css"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C71COSQY.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C71COSQY.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C71COSQY.css"},{"type":"inline","content":"@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in-up[data-astro-cid-bbe6dxrz]{animation:fadeInUp 1s ease-out}.line-clamp-1[data-astro-cid-tjdfhdqb]{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-2[data-astro-cid-tjdfhdqb]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/branduski/Documents/mehlej-joyeria2/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/branduski/Documents/mehlej-joyeria2/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["/Users/branduski/Documents/mehlej-joyeria2/src/pages/admin/dashboard.astro",{"propagation":"none","containsHead":true}],["/Users/branduski/Documents/mehlej-joyeria2/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/branduski/Documents/mehlej-joyeria2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/branduski/Documents/mehlej-joyeria2/src/pages/register.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/admin/dashboard@_@astro":"pages/admin/dashboard.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.10.1_@types+node@20.19.1_jiti@1.21.7_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/branduski/Documents/mehlej-joyeria2/node_modules/.pnpm/astro@5.10.1_@types+node@20.19.1_jiti@1.21.7_rollup@4.44.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BHYJI9Qf.mjs","\u0000@astrojs-manifest":"manifest_WV5mJqQx.mjs","@astrojs/vue/client.js":"_astro/client.BGjdLgJU.js","/Users/branduski/Documents/mehlej-joyeria2/src/pages/admin/dashboard.astro?astro&type=script&index=0&lang.ts":"_astro/dashboard.astro_astro_type_script_index_0_lang.BqXB3vBS.js","/Users/branduski/Documents/mehlej-joyeria2/src/pages/register.astro?astro&type=script&index=0&lang.ts":"_astro/register.astro_astro_type_script_index_0_lang.DrizniK2.js","/Users/branduski/Documents/mehlej-joyeria2/src/pages/admin.astro?astro&type=script&index=0&lang.ts":"_astro/admin.astro_astro_type_script_index_0_lang.C19ONMGi.js","/Users/branduski/Documents/mehlej-joyeria2/src/components/StockManagement.astro?astro&type=script&index=0&lang.ts":"_astro/StockManagement.astro_astro_type_script_index_0_lang.C_MzDpuz.js","/Users/branduski/Documents/mehlej-joyeria2/src/components/AddProductModal.astro?astro&type=script&index=0&lang.ts":"_astro/AddProductModal.astro_astro_type_script_index_0_lang.Dhtzl4jI.js","/Users/branduski/Documents/mehlej-joyeria2/src/components/FirebaseAuth.astro?astro&type=script&index=0&lang.ts":"_astro/FirebaseAuth.astro_astro_type_script_index_0_lang.nc0nONri.js","/Users/branduski/Documents/mehlej-joyeria2/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.CIuuaM6_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.C71COSQY.css","/_astro/AddProductModal.astro_astro_type_script_index_0_lang.Dhtzl4jI.js","/_astro/FirebaseAuth.astro_astro_type_script_index_0_lang.nc0nONri.js","/_astro/Navigation.astro_astro_type_script_index_0_lang.CIuuaM6_.js","/_astro/StockManagement.astro_astro_type_script_index_0_lang.C_MzDpuz.js","/_astro/admin.astro_astro_type_script_index_0_lang.C19ONMGi.js","/_astro/client.BGjdLgJU.js","/_astro/dashboard.astro_astro_type_script_index_0_lang.BqXB3vBS.js","/_astro/firebase.D9-hzClm.js","/_astro/firestore.Ghab-HAF.js","/_astro/register.astro_astro_type_script_index_0_lang.DrizniK2.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"qzV4ks1l7kLK/sKq3zKe0nFMMi74kOLPMHy1dnCb494="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
