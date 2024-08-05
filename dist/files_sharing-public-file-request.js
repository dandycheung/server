(()=>{"use strict";var e,r,t,o={38943:(e,r,t)=>{var o=t(85168),n=t(85471);const a=(0,t(35947).YK)().setApp("files_sharing").detectUser().build(),i=localStorage.getItem("nick"),l=localStorage.getItem("publicAuthPromptShown");i&&l?a.debug(`Public auth prompt already shown. Current nickname is '${i}'`):(0,o.Ss)((0,n.$V)((()=>Promise.all([t.e(4208),t.e(5315)]).then(t.bind(t,45315)))),{},(()=>localStorage.setItem("publicAuthPromptShown","true")))}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=o,e=[],a.O=(r,t,o,n)=>{if(!t){var i=1/0;for(d=0;d<e.length;d++){t=e[d][0],o=e[d][1],n=e[d][2];for(var l=!0,c=0;c<t.length;c++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](t[c])))?t.splice(c--,1):(l=!1,n<i&&(i=n));if(l){e.splice(d--,1);var u=o();void 0!==u&&(r=u)}}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,o,n]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>e+"-"+e+".js?v="+{4254:"5c2324570f66dff0c8a1",5315:"f9fb4d207d7d0560bd27",9480:"a7fc50e8df280cf9e346"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="nextcloud:",a.l=(e,o,n,i)=>{if(r[e])r[e].push(o);else{var l,c;if(void 0!==n)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var s=u[d];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==t+n){l=s;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+n),l.src=e),r[e]=[o];var p=(t,o)=>{l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(delete r[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=9804,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var r=a.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={9804:0};a.f.j=(r,t)=>{var o=a.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var i=a.p+a.u(r),l=new Error;a.l(i,(t=>{if(a.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}}),"chunk-"+r,r)}},a.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,i=t[0],l=t[1],c=t[2],u=0;if(i.some((r=>0!==e[r]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(c)var d=c(a)}for(r&&r(t);u<i.length;u++)n=i[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),a.nc=void 0;var i=a.O(void 0,[4208],(()=>a(38943)));i=a.O(i)})();
//# sourceMappingURL=files_sharing-public-file-request.js.map?v=c27c701481bae555ca90