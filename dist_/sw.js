if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const t=e=>s(e,o),f={module:{uri:o},exports:l,require:t};i[o]=Promise.all(n.map((e=>f[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Default-ba4ad734.js",revision:null},{url:"assets/Home-e9d5f047.js",revision:null},{url:"assets/index-df627e6b.js",revision:null},{url:"assets/index-fa57880f.css",revision:null},{url:"assets/logo-3f834fa8.svg",revision:null},{url:"favicon.ico",revision:"25e23892d1b98272cdeb2d655319c3eb"},{url:"images/pwa-192x192.png",revision:"74312e435a4f8a0476f16c435778bf12"},{url:"images/pwa-512x512.png",revision:"aee1d9eaf476c56f46e095b63459944d"},{url:"index.html",revision:"2729c320c713333a14970b036530b9f7"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"25e23892d1b98272cdeb2d655319c3eb"},{url:"images/pwa-192x192.png",revision:"74312e435a4f8a0476f16c435778bf12"},{url:"images/pwa-512x512.png",revision:"aee1d9eaf476c56f46e095b63459944d"},{url:"manifest.webmanifest",revision:"37c9d74a6291968ba67835d299dfd04f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));