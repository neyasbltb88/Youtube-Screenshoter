(()=>{"use strict";function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw l}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=function(){var e,t,n,r,o=document.querySelector("#primary.style-scope.ytd-watch-flexy"),i=null==o?void 0:o.querySelector("#upload-info"),l=document.querySelector("video"),c=document.createElement("canvas"),u=c.getContext("2d"),a=null!=o&&o.querySelector(".title.style-scope")?null===(e=document.querySelector(".title.style-scope"))||void 0===e?void 0:e.innerText:null===(t=document.querySelector(".ytp-title-link.yt-uix-sessionlink"))||void 0===t?void 0:t.innerText,d=l.currentTime,s=null==o||null===(n=o.querySelector(".style-scope.ytd-video-secondary-info-renderer"))||void 0===n?void 0:n.querySelector("#upload-info"),y=null!=s&&s.querySelector(".yt-simple-endpoint.yt-formatted-string")?null==s?void 0:s.querySelector(".yt-simple-endpoint.yt-formatted-string").innerHTML:null===(r=document.querySelector(".ytp-ce-channel-title.ytp-ce-link"))||void 0===r?void 0:r.innerHTML;y||(y="[Миниатюра]"),c.width=l.videoWidth,c.height=l.videoHeight,console.log(o),console.log(i),console.log(y),u.drawImage(l,0,0,c.width,c.height),c.toBlob((function(e){var t,n,r,o=URL.createObjectURL(e);t=o,n=function(e,t,n){return"".concat(e," - ").concat(t," (").concat(new Date(1e3*n).toISOString().substr(11,8),").png")}(y,a,d),r=function(e,t){var n=document.createElement("a");return n.href=e,n.setAttribute("download",t),n.className="download-js",n.innerHTML="downloading...",n.style.display="none",n.addEventListener("click",(function(e){return e.stopPropagation()}),{once:!0}),n}(t,n),document.body.appendChild(r),setTimeout((function(){r.click(),document.body.removeChild(r)}),66)}),"image/png")};setTimeout((function(){var e=document.querySelector(".ytp-right-controls"),t=document.createElement("div");t.setAttribute("class","ytp-button"),t.setAttribute("style","font-size: 1.6em"),t.innerHTML="&#128247;",e.insertAdjacentElement("afterbegin",t),t.addEventListener("click",n)}),2e3),function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=new Set;document.addEventListener("keydown",(function(t){i.add(t.code);var o,l=e(r);try{for(l.s();!(o=l.n()).done;){var c=o.value;if(!i.has(c))return}}catch(e){l.e(e)}finally{l.f()}i.clear(),n()})),document.addEventListener("keyup",(function(e){i.delete(e.code)}))}("ControlLeft","KeyQ")})();