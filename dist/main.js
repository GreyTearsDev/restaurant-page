(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>v});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),l=new URL(t(510),t.b),p=new URL(t(518),t.b),s=new URL(t(562),t.b),u=i()(r()),m=d()(l),f=d()(p),h=d()(s);u.push([n.id,`@font-face {\n  font-family: Lugrasimo;\n  src: url(${m});\n  font-style: normal;\n}\n\n@font-face {\n  font-family: Playfair;\n  src: url(${f}),\n    url(${h});\n  font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --light-accent: #b6b6b68e;\n  --accent: #e0bd54;\n  --white: #fff;\n  --black: #000000;\n  font-family: "Playfair";\n}\n\nbutton {\n  font-size: 100%;\n  font-family: inherit;\n  border: 0;\n  padding: 0;\n}\n\nbody {\n  position: relative;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--white);\n  color: var(--accent);\n  border-bottom: 1px solid #cd9b054e;\n}\n\nul {\n  display: flex;\n  gap: 5vw;\n  list-style: none;\n}\n\nli {\n  font-size: clamp(16px, 2rem, 2.2rem);\n  font-weight: 600;\n  transition-property: color scale;\n  transition-duration: 300ms;\n}\n\nli:hover {\n  cursor: pointer;\n  color: var(--black);\n  scale: 103%;\n}\n\nli:active {\n  cursor: pointer;\n  color: var(--black);\n  scale: 95%;\n}\n\n#content {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 10vh 1fr;\n}\n\n#hero-image {\n  position: absolute;\n  top: 0px;\n  z-index: -1;\n  transition-property: filter;\n  filter: blur(0px);\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n#main-home {\n  position: relative;\n  display: grid;\n  align-items: center;\n  grid-template-columns: repeat(1fr);\n}\n\n#title {\n  font-size: clamp(1.7rem, 3.5rem, 5rem);\n  font-family: "Lugrasimo";\n  color: var(--accent);\n}\n\n#home-info-container {\n  border: 1px solid #cd9b054e;\n  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.059);\n\n  width: clamp(350px, 35vw, 45vw);\n  margin-left: 15vw;\n  height: clamp(500px, 35vh, 90vh);\n  display: flex;\n  gap: 5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 5%;\n  word-spacing: 2px;\n  background-color: var(--white);\n}\n\n#home-info-container > p,\n#info-body {\n  font-size: clamp(16px, 1.5rem, 5rem);\n}\n\n#home-info-container > button {\n  padding: 0.7rem 1.4rem;\n  font-weight: 600;\n  color: var(--white);\n  background-color: var(--accent);\n\n  font-size: clamp(16px, 1.5rem, 5rem);\n  transition-property: color background-color scale box-shadow;\n  transition-duration: 300ms;\n}\n\n#home-info-container > button:hover,\n#home-info-container > button:focus {\n  box-shadow: 2px 4px 16px #0000005f;\n\n  cursor: pointer;\n  color: var(--white);\n  background-color: var(--black);\n  scale: 103%;\n}\n\n#home-info-container > button:active {\n  box-shadow: 2px 4px 16px #0000005f;\n\n  cursor: pointer;\n  color: var(--white);\n  background-color: var(--black);\n  scale: 97%;\n}\n\n#main-menu {\n  background-color: var(--white);\n  display: grid;\n  padding: 2vh 4vw;\n  grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));\n  grid-template-rows: repeat(2, 1fr);\n  gap: 2vw clamp(4vw, 5vw, 6vw);\n  width: 100vw;\n  height: 100%;\n}\n\n.item-body {\n  border: 1px solid #cd9b054e;\n  display: grid;\n  justify-content: center;\n  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.119);\n  padding: 10%;\n  grid-template-rows: 1fr;\n  transition-property: box-shadow, scale;\n  transition-duration: 300ms;\n}\n\n.item-body:hover {\n  box-shadow: 2px 4px 16px #cd9b055f;\n  cursor: pointer;\n  scale: 102%;\n}\n\n.item-body:active {\n  box-shadow: 3px 5px 18px #cd9b056c;\n  cursor: pointer;\n  scale: 99%;\n}\n\n.item-body > img {\n  width: 100%;\n  object-fit: cover;\n}\n\n.name-price-container {\n  width: 100%;\n  position: relative;\n  top: -4vh;\n  padding-top: 4vh;\n\n  background-color: var(--white);\n}\n\n.item-name {\n  font-size: 1.4em;\n}\n\n.item-price {\n  color: var(--accent);\n  font-size: 1.4em;\n}\n\n#contact-menu {\n  background-color: var(--accent);\n  display: flex;\n  justify-content: center;\n  padding: 4vh 4vw;\n}\n\n#info-body {\n  color: var(--black);\n  background-color: var(--white);\n  width: clamp(350px, 40%, 30vw);\n  height: clamp(200px, 500px, 70vh);\n  min-width: fit-content;\n  min-height: fit-content;\n  border: 1px solid #cd9b054e;\n  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.059);\n  padding: 1% 5%;\n}\n\n#info-body > p {\n  padding: 0.5vh 0;\n  word-spacing: 2px;\n}\n\n#contact-title {\n  color: var(--accent);\n  font-size: clamp(20px, 1.9rem, 8rem);\n  text-align: center;\n  padding-bottom: 2vh;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent);\n}\n\na:hover {\n  color: var(--light-accent);\n}\n`,""]);const v=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],l=o.base?d[0]+o.base:d[0],p=a[l]||0,s="".concat(l," ").concat(p);a[l]=p+1;var u=t(s),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:s,updater:f,references:1})}i.push(s)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},510:(n,e,t)=>{n.exports=t.p+"d80bf32e05bbfd3f566f.ttf"},562:(n,e,t)=>{n.exports=t.p+"2f795353f413479428d6.ttf"},518:(n,e,t)=>{n.exports=t.p+"20240034b80f50c3ad00.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"425c10838f8b6782fdfa.jpeg",e=t.p+"66582e94bfc42f5d9136.jpeg",o=t.p+"9f630625fe8494dbbba3.jpeg",r=t.p+"b4ef15ad177aa7a23278.jpeg",a=t.p+"20b6dd85bc4435298eb7.jpeg",i=t.p+"9e549a7e1dfe8c133f80.jpeg",c=t.p+"b09c15da99facb76d546.jpeg",d=()=>document.createElement("main"),l=function(n,e,t){const o=document.createElement("img"),r=document.createElement("h3"),a=document.createElement("p"),i=document.createElement("div"),c=document.createElement("div");return o.src=t,r.textContent=n,r.className="item-name",a.textContent=e,a.className="item-price",i.className="name-price-container",i.appendChild(r),i.appendChild(a),c.className="item-body",c.appendChild(o),c.appendChild(i),c};var p=t(379),s=t.n(p),u=t(795),m=t.n(u),f=t(569),h=t.n(f),v=t(565),b=t.n(v),g=t(216),x=t.n(g),y=t(589),w=t.n(y),C=t(426),E={};E.styleTagTransform=w(),E.setAttributes=b(),E.insert=h().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=x(),s()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals,function(){const t=(()=>{const n=document.createElement("div");return document.body.appendChild(n),n.id="content",n})(),p=(()=>{const n=document.createElement("ul"),e=document.createElement("header");return function(){const n=document.createElement("li"),e=document.createElement("li"),t=document.createElement("li"),o=[n,e,t];return n.textContent="Home",e.textContent="Menu",t.textContent="Contact",o}().forEach((e=>n.appendChild(e))),e.appendChild(n),e})(),s=function(){const e=(()=>{const n=document.createElement("h1"),e=document.createElement("p"),t=document.createElement("button"),o=document.createElement("div");return n.id="title",t.textContent="See our space",t.id="call-to-action",n.textContent="O Kazukuta",e.textContent="Join us for an intimate culinary escape where the waves meet the plate and every bite is a moment to remember",o.id="home-info-container",o.appendChild(n),o.appendChild(e),o.appendChild(t),o})(),t=d();return t.id="main-home",[((n,e)=>{const t=document.createElement("img");return t.src=n,t.alt="plate with boiled eggs",t.id="hero-image",t})(n),e].forEach((n=>t.appendChild(n))),t}(),u=function(){const n=d(),t=[l("Avocato Toast","5.300kz",e),l("Octopus Soup","12.000kz",o),l("Alberta Pizza","9.500kz",r),l("BBQ Pork","15.000kz",a),l("Pizza Basilicata","12.000kz",i),l("Lamb à Pombé","8.000kz",c)];return n.id="main-menu",t.forEach((e=>n.appendChild(e))),n}(),m=function(){const n=d(),e=(()=>{const n=document.createElement("div"),e=document.createElement("h3"),t=document.createElement("p"),o=document.createElement("p"),r=document.createElement("p"),a=document.createElement("p"),i=document.createElement("a"),c=[e,t,o,r,a];return e.textContent="Contact us",e.id="contact-title",t.textContent="Email: o@kazukuta.com",o.textContent="Phone: +244 999 888 777",r.textContent="Address: Fancy Av, Cool City - P.O  Box 404",a.textContent="GitHub: ",i.href="https://github.com/GreyTearsDev",i.textContent="@GreyTearsDev",a.appendChild(i),n.id="info-body",c.forEach((e=>{e.className="contact-text",n.appendChild(e)})),n})();return n.id="contact-menu",n.appendChild(e),n}();function f(n){switch(n.target.textContent){case"Home":t.removeChild(t.lastChild),t.appendChild(s);break;case"Menu":t.removeChild(t.lastChild),t.appendChild(u);break;case"Contact":t.removeChild(t.lastChild),t.appendChild(m)}}t.appendChild(p),t.appendChild(s),document.querySelectorAll("li").forEach((n=>n.addEventListener("click",f)))}()})()})();