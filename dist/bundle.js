!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n){var r=document.createElement(e);return t&&t.map((function(e){return r.classList.add(e)})),n&&(r.innerHTML=n),r}function o(e,t){t.map((function(t){return e.appendChild(t)}))}n.r(t);var a=["#ec7324","#be1f31","#1da4db","#4bb050","#2e302f","#91338b","#695ea3","#2E2C75","#673A7E","#CC0071","#F80120","#F35B20","#FB9A00","#FFCC00","#FEF200"],i=(Math.PI,700);function l(e){var t=e||0;return{get:function(){return t},set:function(e){t=e}}}var u,c,f=new l(!0),d=new l,s=new l,m=new l,p=new l;var v=200,g=130,y=0,b=250;function h(){if(c.getContext){u.font="bold 30px Helvetica, Arial",u.fillStyle="white";for(var e=0;e<d.get();e++)w(e);u.fillStyle="black",u.beginPath(),u.moveTo(b+(v+35),b-10),u.lineTo(b+(v+35),b+10),u.lineTo(b+(v-5),b+10),u.lineTo(b+(v-0),b+20),u.lineTo(b+(v-30),b+0),u.lineTo(b+(v-0),b-20),u.lineTo(b+(v-5),b-10),u.lineTo(b+(v+35),b-10),u.fill()}}function w(e){var t=s.get(),n=2*Math.PI/d.get(),r=p.get()+e*n;u.fillStyle=a[e],u.beginPath();var o=r+n;u.arc(b,b,v,r,o,!1),u.arc(b,b,y,o,r,!0),u.fill(),u.save(),u.fillStyle="white",u.translate(b+Math.cos(r+n/2)*g,b+Math.sin(r+n/2)*g),u.rotate(r+n/2+Math.PI/2);var i=t[e];u.fillText(i,-u.measureText(i).width/2,0),u.restore()}var S=null,T=0,I=0,M=0;function x(){if((T+=30)>=I)!function(){clearTimeout(S),f.set(!1);var e=180*p.get()/Math.PI,t=2*Math.PI/d.get()*180/Math.PI,n=Math.floor((360-e%360)/t);u.save(),u.fillStyle="white",u.font="bold 120px Helvetica, Arial";var r=s.get()[n];m.set(r),u.fillText(r,250-u.measureText(r).width/2,290),u.restore()}();else{var e,t,n,r=M-(e=T,t=0,n=M,(e/=I/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t);p.set(p.get()+r*Math.PI/180),h(),S=setTimeout(x,30)}}function P(){f.set(!0),M=10*Math.random()+10,T=0,I=4e3,x()}function A(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"reload",(function(){return E})),n.d(t,"main",(function(){return O})),document.querySelector("#modal #teamSubmit").addEventListener("click",(function(){console.log("1"),document.location.reload()}));var C,E=function(){if(!f.get()){f.set(!0);var e=s.get();1===e.length&&(document.getElementById("modal").style.display="block",setTimeout((function(){document.getElementById("modal").classList.add("show")}),0)),e.length<=1||(e.splice(e.indexOf(m.get()),1),d.set(d.get()-1),O())}},j=function(e){e&&e.value&&(document.querySelector("#form .content").classList.add("hide"),setTimeout((function(){document.querySelector("#form .wrapper").style.transition="400ms",document.querySelector("#form .wrapper").classList.add("fullwrapper"),setTimeout((function(){var t;t=e,d.set(t.value),s.set(A(Array(parseInt(t.value)).keys()).map((function(e){return++e}))),O()}),400)}),400))},O=function(){document.getElementById("form").innerHTML=null;var e=r("input",["inpbutton"]);e.value="Spin",e.type="button",e.onclick=P;var t=r("input",["inpbutton"]);t.value="Go Again",t.type="button",t.onclick=E,t.style.backgroundColor="red";var n=r("div",["title"],"Spin the Wheel"),a=r("canvas");a.width=500,a.height=i,a.id="canvas";var l=r("div",["canvaswrapper"]);o(l,[a]);var f=r("div",["buttons"]);o(f,[n,e,t]);var d=document.getElementById("app"),s=r("div",["wrapper"]);o(s,[l,f]);var m=r("div",["app"]);o(m,[s]),d.children.length>0&&d.removeChild(d.children[0]),o(d,[m]),c=document.getElementById("canvas"),u=c.getContext("2d"),function(){if(c.getContext){u.clearRect(0,0,500,i);var e=new Image;e.src="./src/mg/back.png",e.onload=function(){u.drawImage(e,0,0,500,556),h()};var t=new Image;t.src="./src/mg/ref.png",t.onload=function(){u.drawImage(t,0,556,500,700)}}}()};C=document.querySelector("#form #teamInput"),document.querySelector("#form #teamSubmit").onclick=function(){return j(C)}}]);