if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const f=e=>n(e,s),d={module:{uri:s},exports:t,require:f};i[s]=Promise.all(o.map((e=>d[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-841be561"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icon512_maskable.png",revision:"55a777ad5aa1472f6f816daacd590f80"},{url:"icon512_rounded.png",revision:"c728ca8fb6f4df5b222f27a542647eba"},{url:"index.html",revision:"99b2a48a054ce24dfc3590048f06fab1"},{url:"manifest.json",revision:"21f4f0deb63c6e9d869aa7df7d0b8aea"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
