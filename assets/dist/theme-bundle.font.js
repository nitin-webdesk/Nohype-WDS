!function(t){var n={};function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=341)}({341:function(t,n,i){var e=i(342),o=document.querySelector('link[href*="https://fonts.googleapis.com/css"]').getAttribute("href"),a=/family=([^&]*)/gm.exec(o)[1].replace(/\+/gm," ").split("|");e.load({custom:{families:a},classes:!1})},342:function(t,n,i){var e;!function(){function o(t,n,i){return t.call.apply(t.bind,arguments)}function a(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function s(t,n,i){return(s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var f=!!window.FontFace;function l(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function h(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function d(t,n,i){function e(){r&&o&&a&&(r(s),r=null)}n=l(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=!0,s=null,r=i||null;f?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,s=Error("Stylesheet failed to load"),e()}):setTimeout((function(){o=!0,e()}),0),h(t,"head",n)}function v(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var a=l(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,i&&i(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout((function(){s||(s=!0,i&&i(Error("Script load timeout")))}),e||5e3),a}return null}function m(){this.a=0,this.c=null}function w(t){return t.a++,function(){t.a--,b(t)}}function y(t,n){t.c=n,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function j(t){this.a=t||"-"}function x(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function _(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function S(t){return t.a+t.f}function k(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function T(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function A(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new j("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function O(t){if(t.g){var n=g(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),p(t.f,i,e)}C(t,"inactive")}function C(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,S(i)):t.h[n]())}function N(){this.c={}}function P(t,n){this.c=t,this.f=n,this.a=l(this.c,"span",{"aria-hidden":"true"},this.f)}function E(t){h(t.c,"body",t.a)}function I(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+_(t.c)+";font-style:"+k(t)+";font-weight:"+t.f+"00;"}function W(t,n,i,e,o,a){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=a||void 0}function B(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),t=I(t=new x(this.a.c+",serif",S(this.a))),this.g.a.style.cssText=t,t=I(t=new x(this.a.c+",sans-serif",S(this.a))),this.h.a.style.cssText=t,t=I(t=new x("serif",S(this.a))),this.j.a.style.cssText=t,t=I(t=new x("sans-serif",S(this.a))),this.m.a.style.cssText=t,E(this.g),E(this.h),E(this.j),E(this.m)}j.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},W.prototype.start=function(){var t=this.c.o.document,n=this,i=r(),e=new Promise((function(e,o){!function a(){r()-i>=n.f?o():t.fonts.load(function(t){return k(t)+" "+t.f+"00 300px "+_(t.c)}(n.a),n.h).then((function(t){1<=t.length?e():setTimeout(a,25)}),(function(){o()}))}()})),o=null,a=new Promise((function(t,i){o=setTimeout(i,n.f)}));Promise.race([a,e]).then((function(){o&&(clearTimeout(o),o=null),n.g(n.a)}),(function(){n.j(n.a)}))};var F={D:"serif",C:"sans-serif"},M=null;function L(){if(null===M){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);M=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return M}function D(t,n,i){for(var e in F)if(F.hasOwnProperty(e)&&n===t.f[F[e]]&&i===t.f[F[e]])return!0;return!1}function $(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=L()&&D(t,i,e)),n?r()-t.A>=t.w?L()&&D(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?q(t,t.v):q(t,t.B):function(t){setTimeout(s((function(){$(this)}),t),50)}(t):q(t,t.v)}function q(t,n){setTimeout(s((function(){u(this.g.a),u(this.h.a),u(this.j.a),u(this.m.a),n(this.a)}),t),0)}function H(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}B.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),$(this)};var z=null;function G(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&p(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),C(t,"active")):O(t.a))}function K(t){this.j=t,this.a=new N,this.h=0,this.f=this.g=!0}function R(t,n,i,e,o){var a=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,r=e||{};if(0===i.length&&a)O(n.a);else{n.f+=i.length,a&&(n.j=a);var c,f=[];for(c=0;c<i.length;c++){var l=i[c],h=r[l.c],u=n.a,g=l;if(u.g&&p(u.f,[u.a.c("wf",g.c,S(g).toString(),"loading")]),C(u,"fontloading",g),u=null,null===z)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);z=g?42<parseInt(g[1],10):!d}else z=!1;u=z?new W(s(n.g,n),s(n.h,n),n.c,l,n.s,h):new B(s(n.g,n),s(n.h,n),n.c,l,n.s,t,h),f.push(u)}for(c=0;c<f.length;c++)f[c].start()}}),0)}function U(t,n){this.c=t,this.a=n}function V(t,n){this.c=t,this.a=n}function X(t,n){this.c=t||J,this.a=[],this.f=[],this.g=n||""}H.prototype.g=function(t){var n=this.a;n.g&&p(n.f,[n.a.c("wf",t.c,S(t).toString(),"active")],[n.a.c("wf",t.c,S(t).toString(),"loading"),n.a.c("wf",t.c,S(t).toString(),"inactive")]),C(n,"fontactive",t),this.m=!0,G(this)},H.prototype.h=function(t){var n=this.a;if(n.g){var i=g(n.f,n.a.c("wf",t.c,S(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,S(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,S(t).toString(),"inactive")),p(n.f,e,o)}C(n,"fontinactive",t),G(this)},K.prototype.load=function(t){this.c=new c(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,i){var e=[],o=i.timeout;!function(t){t.g&&p(t.f,[t.a.c("wf","loading")]),C(t,"loading")}(n);e=function(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var a=t.c[e];a&&o.push(a(n[e],i))}return o}(t.a,i,t.c);var a=new H(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load((function(n,i,e){R(t,a,n,i,e)}))}(this,new A(this.c,t),t)},U.prototype.load=function(t){var n=this,i=n.a.projectId,e=n.a.version;if(i){var o=n.c.o;v(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(e?"?v="+e:""),(function(e){e?t([]):(o["__MonotypeConfiguration__"+i]=function(){return n.a},function n(){if(o["__mti_fntLst"+i]){var e,a=o["__mti_fntLst"+i](),s=[];if(a)for(var r=0;r<a.length;r++){var c=a[r].fontfamily;null!=a[r].fontStyle&&null!=a[r].fontWeight?(e=a[r].fontStyle+a[r].fontWeight,s.push(new x(c,e))):s.push(new x(c))}t(s)}else setTimeout((function(){n()}),50)}())})).id="__MonotypeAPIScript__"+i}else t([])},V.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new m;for(n=0,i=e.length;n<i;n++)d(this.c,e[n],w(s));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var c=e[1].split(","),f=0;f<c.length;f+=1)r.push(new x(e[0],c[f]));else r.push(new x(e[0]));y(s,(function(){t(r,a)}))};var J="https://fonts.googleapis.com/css";function Q(t){this.f=t,this.a=[],this.c={}}var Y={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Z={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},tt={i:"i",italic:"i",n:"n",normal:"n"},nt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function it(t,n){this.c=t,this.a=n}var et={Arimo:!0,Cousine:!0,Tinos:!0};function ot(t,n){this.c=t,this.a=n}function at(t,n){this.c=t,this.f=n,this.a=[]}it.prototype.load=function(t){var n=new m,i=this.c,e=new X(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(e,o);var a=new Q(o);!function(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),a=["n4"];if(2<=e.length){var s;if(s=[],r=e[1])for(var r,c=(r=r.split(",")).length,f=0;f<c;f++){var l;if((l=r[f]).match(/^[\w-]+$/))if(null==(u=nt.exec(l.toLowerCase())))l="";else{if(l=null==(l=u[2])||""==l?"n":tt[l],null==(u=u[1])||""==u)u="4";else var h=Z[u],u=h||(isNaN(u)?"4":u.substr(0,1));l=[l,u].join("")}else l="";l&&s.push(l)}0<s.length&&(a=s),3==e.length&&(s=[],0<(e=(e=e[2])?e.split(","):s).length&&(e=Y[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=Y[o])&&(t.c[o]=e),e=0;e<a.length;e+=1)t.a.push(new x(o,a[e]))}}(a),d(i,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(e),w(n)),y(n,(function(){t(a.a,a.c,et)}))},ot.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?v(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",(function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)e.push(new x(a,s[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(e)}}),2e3):t([])},at.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,a=i.fonts.length;o<a;++o){var s=i.fonts[o];e.a.push(new x(s.name,T("font-weight:"+s.weight+";font-style:"+s.style)))}t(e.a)},v(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+n+".js",(function(n){n&&t([])}))):t([])};var st=new K(window);st.a.c.custom=function(t,n){return new V(n,t)},st.a.c.fontdeck=function(t,n){return new at(n,t)},st.a.c.monotype=function(t,n){return new U(n,t)},st.a.c.typekit=function(t,n){return new ot(n,t)},st.a.c.google=function(t,n){return new it(n,t)};var rt={load:s(st.load,st)};void 0===(e=function(){return rt}.call(n,i,n,t))||(t.exports=e)}()}});
//# sourceMappingURL=theme-bundle.font.js.map
