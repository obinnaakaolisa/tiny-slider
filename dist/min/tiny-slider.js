var tns=function(){function t(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i}function e(t){return["true","false","null"].indexOf(t)>=0?JSON.parse(t):t}function n(t,e){return localStorage.setItem(t,e),e}function i(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function a(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}function o(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):"addRule"in t&&t.addRule(e,n,i)}function r(t,e){return Math.atan2(t,e)*(180/Math.PI)}function s(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function l(t,e){return t.hasAttribute(e)}function c(t,e){return t.getAttribute(e)}function u(t){return void 0!==t.item}function d(t,e){if(t=u(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function f(t,e){t=u(t)||t instanceof Array?t:[t],e=e instanceof Array?e:[e];for(var n=e.length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function h(t){var e=t.cloneNode(!0);t.parentNode.insertBefore(e,t),t.remove(),t=null}function p(t){l(t,"hidden")||d(t,{hidden:""})}function v(t){l(t,"hidden")&&f(t,"hidden")}function m(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function y(t){for(var e=document.createElement("fakeelement"),n=(t.length,0);n<t.length;n++)if(prop=t[n],void 0!==e.style[prop])return prop;return!1}function g(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function b(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&S;t.addEventListener(n,e[n],i)}}function x(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&S;t.removeEventListener(n,e[n],i)}}function C(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}function E(t,e,n,i,a,o,r){function s(){o-=l,u+=d,t.style[e]=n+u+c+i,o>0?setTimeout(s,l):r()}var l=Math.min(o,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(t.style[e].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/o*l;setTimeout(s,l)}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){"use strict";var t,e,n,i=window,a=document,o=Object,r="length",s="item contains add remove toggle toString toLocaleString".split(" "),l=s[2],c=s[3],u=s[4],d="prototype",f="defineProperty"in o||"__defineGetter__"in o[d]||null,h=function(t,e,n,i){o.defineProperty?o.defineProperty(t,e,{configurable:!1===f||!!i,get:n}):t.__defineGetter__(e,n)},p=function(t,e){var n=this,i=[],a={},d=0,f=0,p=function(){if(d>=f)for(;f<d;++f)!function(t){h(n,t,function(){return v(),i[t]},!1)}(f)},v=function(){var n,o,s=arguments,l=/\s+/;if(s[r])for(o=0;o<s[r];++o)if(l.test(s[o]))throw n=new SyntaxError('String "'+s[o]+'" contains an invalid character'),n.code=5,n.name="InvalidCharacterError",n;for(i=(""+t[e]).replace(/^\s+|\s+$/g,"").split(l),""===i[0]&&(i=[]),a={},o=0;o<i[r];++o)a[i[o]]=!0;d=i[r],p()};return v(),h(n,r,function(){return v(),d}),n[s[6]]=n[s[5]]=function(){return v(),i.join(" ")},n.item=function(t){return v(),i[t]},n.contains=function(t){return v(),!!a[t]},n[l]=function(){v.apply(n,o=arguments);for(var o,s,l=0,c=o[r];l<c;++l)s=o[l],a[s]||(i.push(s),a[s]=!0);d!==i[r]&&(d=i[r]>>>0,t[e]=i.join(" "),p())},n[c]=function(){v.apply(n,o=arguments);for(var o,s={},l=0,c=[];l<o[r];++l)s[o[l]]=!0,delete a[o[l]];for(l=0;l<i[r];++l)s[i[l]]||c.push(i[l]);i=c,d=c[r]>>>0,t[e]=i.join(" "),p()},n[u]=function(t,e){return v.apply(n,[t]),void 0!==e?e?(n[l](t),!0):(n[c](t),!1):a[t]?(n[c](t),!1):(n[l](t),!0)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,s[n],{enumerable:!1})}(n,o.defineProperty),n},v=function(t,e,n){h(t[d],e,function(){var t,i=this,o="__defineGetter__defineProperty"+e;if(i[o])return t;if(i[o]=!0,!1===f){for(var s,l=v.mirror=v.mirror||a.createElement("div"),c=l.childNodes,u=c[r],d=0;d<u;++d)if(c[d]._R===i){s=c[d];break}s||(s=l.appendChild(a.createElement("div"))),t=p.call(s,i,n)}else t=new p(i,n);return h(i,e,function(){return t}),delete i[o],t},!0)};if(i.DOMTokenList)t=a.createElement("div").classList,d=i.DOMTokenList[d],t[l].apply(t,s),2>t[r]&&(e=d[l],n=d[c],d[l]=function(){for(var t=0,n=arguments;t<n[r];++t)e.call(this,n[t])},d[c]=function(){for(var t=0,e=arguments;t<e[r];++t)n.call(this,e[t])}),t[u]("List",!1)&&(d[u]=function(t,e){var n=this;return n[(e=void 0===e?!n.contains(t):e)?l:c](t),!!e});else{if(f)try{h({},"support")}catch(t){f=!1}p.polyfill=!0,i.DOMTokenList=p,v(i.Element,"classList","className"),v(i.HTMLLinkElement,"relList","rel"),v(i.HTMLAnchorElement,"relList","rel"),v(i.HTMLAreaElement,"relList","rel")}}();var w=!1;try{var T=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,T)}catch(t){}var S=!!w&&{passive:!0},D=navigator.userAgent,L=localStorage;L.tnsApp?L.tnsApp!==D&&(L.tnsApp=D,["tnsCalc","tnsSubpixel","tnsCSSMQ","tnsTf","tnsTsDu","tnsTsDe","tnsAnDu","tnsAnDe","tnsTsEn","tnsAnEn"].forEach(function(t){L.removeItem(t)})):L.tnsApp=D;var N=document,M={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},A=e(L.tnsCalc||n("tnsCalc",function(){var t=document,e=t.body,n=t.createElement("div"),i=!1;e.appendChild(n);try{for(var a,o=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],r=0;r<3;r++)if(a=o[r],n.style.width=a,10===n.offsetWidth){i=a.replace("(10px)","");break}}catch(t){}return e.removeChild(n),i}())),k=e(L.tnsSubpixel||n("tnsSubpixel",function(){var t,e=document,n=e.body,i=e.createElement("div"),a=e.createElement("div");i.style.cssText="width: 10px",a.style.cssText="float: left; width: 5.5px; height: 10px;",t=a.cloneNode(!0),i.appendChild(a),i.appendChild(t),n.appendChild(i);var o=a.offsetTop!==t.offsetTop;return n.removeChild(i),o}())),O=e(L.tnsCSSMQ||n("tnsCSSMQ",function(){var t=document,e=t.body,n=t.createElement("div");n.className="tns-mq-test",e.appendChild(n);var i=window.getComputedStyle?window.getComputedStyle(n).position:n.currentStyle.position;return e.removeChild(n),"absolute"===i}())),P=e(L.tnsTf||n("tnsTf",y(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]))),I=e(L.tnsTsDu||n("tnsTsDu",y(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]))),z=e(L.tnsTsDe||n("tnsTsDe",y(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]))),R=e(L.tnsAnDu||n("tnsAnDu",y(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]))),H=e(L.tnsAnDe||n("tnsAnDe",y(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]))),W=e(L.tnsTsEn||n("tnsTsEn",g(I,"Transition"))),j=e(L.tnsAnEn||n("tnsAnEn",g(R,"Animation")));return O||(k=!1),function(e){function n(t){clearTimeout(Ot),Ot=setTimeout(function(){kt!==y()&&(u(),"outer"===qt&&ge.emit("outerResized",St(t)))},100)}function u(){kt=y();var t=de,e=_t;(Zt||Yt)&&(_t=on()),zt||(G(),Et(),K()),Yt&&Xt&&Ct(),D(),Zt&&_t!==e&&(ge.emit("itemsChanged"),g(),rn(),Yt||O||T(),V(0),S(),Tt(),q(),de!==t&&(ge.emit("indexChanged",St()),U()),navigator.msMaxTouchPoints&&_())}function y(){return Rt.clientWidth}function g(){if(Gt<=_t){Kt=!1;de=It?ae:0,void 0!==de&&ge.emit("indexChanged",St()),ke&&p(ke),Ne&&p(Ne),Fe&&p(Fe)}else Kt=e.arrowKeys,Ae&&v(ke),De&&v(Ne),We&&v(Fe)}function w(t){return t.cssRules?t.cssRules.length:t.rules.length}function T(){Wt.style.width=100*oe/_t+"%"}function S(){if(ne){var t=de,e=de+_t;for(Xt&&(t-=1,e+=1);t<e;t++)[].forEach.call(Bt[t].querySelectorAll(".tns-lazy-img"),function(t){var e={};e[W]=function(t){t.stopPropagation()},b(t,e),t.classList.contains("loaded")||(t.src=c(t,"data-src"),t.classList.add("loaded"))})}}function D(){if($t){for(var t=[],e=de;e<de+_t;e++)[].forEach.call(Bt[e].querySelectorAll("img"),function(e){t.push(e)});0===t.length?B():L(t)}}function L(t){t.forEach(function(e,n){m(e)&&t.splice(n,1)}),0===t.length?B():setTimeout(function(){L(t)},16)}function B(){for(var t,e=[],n=de;n<de+_t;n++)e.push(Bt[n].offsetHeight);t=Math.max.apply(null,e),Ht.style.height!==t&&(I&&X(Qt),Ht.style.height=t+"px")}function G(){At=[0];for(var t,e=Bt[0].getBoundingClientRect().top,n=1;n<oe;n++)t=Bt[n].getBoundingClientRect().top,At.push(t-e)}function _(){Rt.style.msScrollSnapPointsX="snapInterval(0%, "+100/_t+"%)"}function F(){for(var t=oe;t--;){var e=Bt[t];t>=de&&t<de+_t?l(e,"tabindex")&&(d(e,{"aria-hidden":"false"}),f(e,["tabindex"])):l(e,"tabindex")||d(e,{"aria-hidden":"true",tabindex:"-1"})}}function q(){Ae&&(ze=Ie!==-1?Ie:!Jt&&Xt?(de-1)%Gt:de%Gt,Ie=-1,ze!==Re&&(d(Me[Re],{tabindex:"-1","aria-selected":"false"}),d(Me[ze],{tabindex:"0","aria-selected":"true"}),Re=ze))}function U(){if(De&&!Jt){var t=[],e=[];de===pe?(t.push(Te),e.push(Se),dt(Te,Se)):Vt||de!==ve?e.push(Te,Se):(t.push(Se),e.push(Te),dt(Se,Te)),t.length>0&&t.forEach(function(t){t.disabled||(t.disabled=!0)}),e.length>0&&e.forEach(function(t){t.disabled&&(t.disabled=!1)})}}function X(t,e){t=t?t/1e3+"s":"",e=e||Wt,e.style[I]=t,It||(e.style[R]=t),zt||(Ht.style[I]=t)}function Y(){var t;if(zt)if(Yt)t=-Yt*de+"px";else{var e=P?oe:_t;t=100*-de/e+"%"}else t=-At[de]+"px";return t}function K(t){t||(t=Y()),Wt.style[le]=ce+t+ue}function Q(t,e,n,i){for(var a=t,o=t+_t;a<o;a++){var r=Bt[a];i||(r.style.left=100*(a-de)/_t+"%"),I&&X(Qt,r),Mt&&z&&(r.style[z]=r.style[H]=Mt*(a-t)/1e3+"s"),r.classList.remove(e),r.classList.add(n),i&&ie.push(r)}}function V(t,e){void 0===t&&(t=Qt),I&&X(t),sn(t,e)}function J(){me=!0,se&&rn(),de!==fe&&ge.emit("indexChanged",St()),ge.emit("transitionStart",St()),V()}function $(t){function e(t){return t.toLowerCase().replace(/-/g,"")}if(ge.emit("transitionEnd",St(t)),!It&&ie.length>0)for(var n=0;n<_t;n++){var i=ie[n];i.style.left="",I&&X(0,i),Mt&&z&&(i.style[z]=i.style[H]=""),i.classList.remove(Lt),i.classList.add(Nt)}if(!t||!It&&t.target.parentNode===Wt||t.target===Wt&&e(t.propertyName)===e(le)){if(!se){var a=de;rn(),de!==a&&(V(0),ge.emit("indexChanged",St()))}F(),(Ae&&!Jt||Ae&&Jt&&Oe.indexOf(de%Gt)===-1)&&Tt(),q(),U(),S(),D(),"inner"===qt&&ge.emit("innerLoaded",St()),me=!1,fe=de}}function Z(t){if(!me){var e,n=de%Gt;switch(n<0&&(n+=Gt),t){case"next":e=1;break;case"prev":e=-1;break;case"first":e=-n;break;case"last":e=Gt-1-n;break;default:if("number"==typeof t){var i=t%Gt;i<0&&(i+=Gt),!Jt&&Xt&&(i+=1),e=i-n}}de+=e,se&&rn(),de%Gt!=fe%Gt&&J()}}function tt(t){me||(de+=t*Ft,J())}function et(){tt(-1)}function nt(){Vt&&de===ve?Z(0):tt(1)}function it(t){if(!me){for(var e,n=t.target||t.srcElement;null===c(n,"data-nav");)n=n.parentNode;e=Ie=Number(c(n,"data-nav")),Z(e)}}function at(){st(),d(Fe,{"data-action":"stop"}),Fe.innerHTML=Xe+Ge[1],qe=!0}function ot(){rt(),d(Fe,{"data-action":"start"}),Fe.innerHTML=Xe.replace("Stop","Start")+Ge[0],qe=!1}function rt(){qe="paused",clearInterval(He)}function st(){qe!==!0&&(clearInterval(He),He=setInterval(function(){tt(Be)},je))}function lt(){qe?ot():at()}function ct(){Ke!=N.hidden&&qe!==!1&&(N.hidden?rt():st()),Ke=N.hidden}function ut(t){switch(t=t||window.event,t.keyCode){case M.LEFT:et();break;case M.RIGHT:nt()}}function dt(t,e){"object"==typeof t&&"object"==typeof e&&t===N.activeElement&&(t.blur(),e.focus())}function ft(t){t=t||window.event;var e=t.keyCode;N.activeElement;switch(e){case M.LEFT:case M.UP:case M.PAGEUP:Te.disabled||et();break;case M.RIGHT:case M.DOWN:case M.PAGEDOWN:Se.disabled||nt();break;case M.HOME:Z(0);break;case M.END:Z(Gt-1)}}function ht(t){function n(t){return e.navContainer?t:Oe[t]}t=t||window.event;var i=t.keyCode,a=N.activeElement,o=Number(c(a,"data-nav")),r=Oe.length,s=Oe.indexOf(o);switch(e.navContainer&&(r=Gt,s=o),i){case M.LEFT:case M.PAGEUP:s>0&&dt(a,Me[n(s-1)]);break;case M.UP:case M.HOME:s>0&&dt(a,Me[n(0)]);break;case M.RIGHT:case M.PAGEDOWN:s<r-1&&dt(a,Me[n(s+1)]);break;case M.DOWN:case M.END:s<r-1&&dt(a,Me[n(r-1)]);break;case M.ENTER:case M.SPACE:it(t)}}function pt(){V(0,Wt.scrollLeft()),fe=de}function vt(t){return t.target||t.srcElement}function mt(t){return"a"===t.tagName.toLowerCase()}function yt(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function gt(t){t=t||window.event,mt(vt(t))&&"touchstart"!==t.type&&yt(t);var e="touchstart"===t.type?t.changedTouches[0]:t;Ze=parseInt(e.clientX),tn=parseInt(e.clientY),Qe=Number(Wt.style[le].replace(ce,"").replace(ue,"").replace(/(px|%)/g,"")),"touchstart"===t.type?ge.emit("touchStart",St(t)):(ge.emit("dragStart",St(t)),nn=!0)}function bt(t){if(t=t||window.event,nn&&"mousemove"===t.type&&!an&&(an=!0),null!==Ze){mt(vt(t))&&"touchmove"!==t.type&&yt(t);var n="touchmove"===t.type?t.changedTouches[0]:t;if(Ve=parseInt(n.clientX)-Ze,Je=parseInt(n.clientY)-tn,s(r(Je,Ve),15)===e.axis){Pt=!0,"touchmove"===t.type?ge.emit("touchMove",St(t)):ge.emit("dragMove",St(t));var i=Qe;if(zt)if(Yt)i+=Ve,i+="px";else{var a=P?Ve*_t*100/(kt*oe):100*Ve/kt;i+=a,i+="%"}else i+=Je,i+="px";P&&X(0),Wt.style[le]=ce+i+ue}}}function xt(t){if(t=t||window.event,nn&&(nn=!1),Pt){Pt=!1;var e=0===t.type.indexOf("touch")?t.changedTouches[0]:t;if(Ve=parseInt(e.clientX)-Ze,Je=parseInt(e.clientY)-tn,Ze=tn=null,zt){var n=-Ve*_t/kt;n=Ve>0?Math.floor(n):Math.ceil(n),de+=n}else{var i=-(Qe+Je);if(i<=0)de=pe;else if(i>=At[At.length-1])de=ve;else{var a=0;do{a++,de=Je<0?a+1:a}while(a<oe&&i>=At[a+1])}}0===t.type.indexOf("touch")?ge.emit("touchEnd",St(t)):ge.emit("dragEnd",St(t)),J()}if(an){an=!1;var o=vt(t);mt(o)&&b(o,{click:function t(e){yt(e),x(o,{click:t})}})}}function Ct(){Ht.style.cssText+="margin: 0px "+(Rt.clientWidth%Yt+Ut)/2+"px"}function Et(){Ht.style.height=At[de+_t]-At[de]+"px"}function wt(){Oe=[];for(var t=!Jt&&Xt?de-1:de,e=t%Gt%_t;e<Gt;)!Jt&&e+_t>Gt&&(e=Gt-_t),Oe.push(e),e+=_t;(Jt&&Oe.length*_t<Gt||!Jt&&Oe[0]>0)&&Oe.unshift(0)}function Tt(){Ae&&!e.navContainer&&(wt(),Oe!==Pe&&(Pe.length>0&&Pe.forEach(function(t){d(Me[t],{hidden:""})}),Oe.length>0&&Oe.forEach(function(t){f(Me[t],"hidden")}),Pe=Oe))}function St(t){return{container:Wt,slideItems:Bt,navContainer:ke,navItems:Me,controlsContainer:Ne,prevButton:Te,nextButton:Se,items:_t,slideBy:Ft,cloneCount:ae,slideCount:Gt,slideCountNew:oe,index:de,indexCached:fe,navCurrent:ze,navCurrentCached:Re,visibleNavIndexes:Oe,visibleNavIndexesCached:Pe,event:t||{}}}if(e=t({container:N.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},e||{}),!("object"!=typeof e.container||null===e.container||e.container.children.length<2)){if("gallery"===e.mode){e.axis="horizontal",e.edgePadding=!1,e.loop=!0,e.autoHeight=!0,e.slideBy="page";var Dt="tns-fadeIn",Lt="tns-fadeOut",Nt=e.animateNormal||"tns-normal",Mt=!1;W&&j&&(Dt=e.animateIn||Dt,Lt=e.animateOut||Lt,Mt=e.animateDelay||Mt)}var At,kt,Ot,Pt,It="carousel"===e.mode,zt="horizontal"===e.axis,Rt=N.createElement("div"),Ht=N.createElement("div"),Wt=e.container,jt=Wt.parentNode,Bt=Wt.children,Gt=Bt.length,_t=Math.min(e.items,Gt),Ft="page"===e.slideBy?_t:e.slideBy,qt=e.nested,Ut=e.gutter,Xt=e.edgePadding,Yt=!!e.fixedWidth&&e.fixedWidth+Number(e.gutter),Kt=e.arrowKeys,Qt=e.speed,Vt=e.rewind,Jt=!e.rewind&&e.loop,$t=e.autoHeight,Zt=!Yt&&e.responsive,te=!1,ee=a(),ne=e.lazyload,ie=[],ae=Jt?2*Gt:Xt?1:0,oe=It?Gt+2*ae:Gt+ae,re=!(!Yt||Jt||Xt),se=!It||!Jt,le=zt?"left":"top",ce="",ue="",de=It?ae:0,fe=de,he=Xt?1:0,pe=he,ve=oe-_t-he,me=!1,ye=e.onInit,ge=new C,be=Wt.id,xe=Wt.className,Ce=Bt[0].id,Ee=Bt[0].className,we=Wt.id||i();if(Zt&&(Zt[0]||(Zt[0]=Math.min(e.items,Gt)),te=Object.keys(Zt).sort(function(t,e){return t-e})),e.controls)var Te,Se,De=e.controls,Le=e.controlsText,Ne=!!e.controlsContainer&&e.controlsContainer;if(e.nav)var Me,Ae=e.nav,ke=e.navContainer||!1,Oe=[],Pe=Oe,Ie=-1,ze=0,Re=0;if(e.autoplay)var He,We=e.autoplay,je=e.autoplayTimeout,Be="forward"===e.autoplayDirection?1:-1,Ge=e.autoplayText,_e=e.autoplayHoverPause,Fe=e.autoplayButton,qe=!1,Ue=!1,Xe='<span class="tns-visually-hidden">Stop Animation</span>',Ye=e.autoplayResetOnVisibility,Ke=!1;if(e.touch)var Qe,Ve,Je,$e=e.touch,Ze=null,tn=null;if(e.mouseDrag)var en=e.mouseDrag,nn=!1,an=!1;P&&(le=P,ce="translate",ce+=zt?"X(":"Y(",ue=")");var on=function(){return Yt?function(){return Math.max(1,Math.min(Gt,Math.floor(kt/Yt)))}:function(){var t;return te.forEach(function(e){kt>=e&&(t=Zt[e])}),Math.max(1,Math.min(Gt,t))}}();ge.on("itemsChanged",function(){ve=oe-_t-he,"page"===e.slideBy&&(Ft=_t),F()}),function(){Rt.appendChild(Ht),jt.insertBefore(Rt,Wt),Ht.appendChild(Wt);var t="tns-outer",i="tns-inner",a=" tns-slider tns-"+e.mode;if(It&&(zt&&(Xt||Ut&&!Yt)?t+=" tns-ovh":i+=" tns-ovh"),Rt.className=t,Ht.className=i,$t&&(Ht.className+=" tns-ah",Ht.style[I]=Qt/1e3+"s"),""===Wt.id&&(Wt.id=we),a+=k?" tns-subpixel":" tns-no-subpixel",a+=A?" tns-calc":" tns-no-calc",It&&(a+=" tns-"+e.axis),Wt.className+=a,t=i=a=null,Xt)if(Yt)Ct();else{var r=Xt+Ut,s=Xt;Ht.style.cssText+=zt?"margin: 0 "+s+"px 0 "+r+"px":"padding: "+r+"px 0 "+s+"px 0"}kt=y();for(var l=0;l<Gt;l++){var c=Bt[l];c.id=we+"-item"+l,c.classList.add("tns-item"),!It&&Nt&&c.classList.add(Nt),d(c,{"aria-hidden":"true",tabindex:"-1"})}if(Jt||Xt){for(var h=N.createDocumentFragment(),p=N.createDocumentFragment(),v=ae;v--;){var m=v%Gt,x=Bt[m].cloneNode(!0);if(f(x,"id"),p.insertBefore(x,p.firstChild),It){var C=Bt[Gt-1-m].cloneNode(!0);f(C,"id"),h.appendChild(C)}}Wt.insertBefore(h,Wt.firstChild),Wt.appendChild(p),Bt=Wt.children}(Zt||Yt)&&(_t=on(),ge.emit("itemsChanged"));for(var E=de;E<de+_t;E++){var c=Bt[E];d(c,{"aria-hidden":"false"}),f(c,["tabindex"]),It||(c.style.left=100*(E-de)/_t+"%",c.classList.remove(Nt),c.classList.add(Dt))}var L="inner"===qt?" !important":"";if(zt){var M=(stringSlideFontSize=stringSlideGutter="","width:");if(It){var P=stringContainerFontSize="";if(P+="width:",Yt?(P+=Yt*oe+"px",M+=Yt+"px"):(O?P+=A?A+"("+100*oe+"% / "+_t+")":100*oe/_t+"%":T(),M+=A?A+"(100% / "+oe+")":100/oe+"%"),P+=";",k){var z=window.getComputedStyle(Bt[0]).fontSize;z.indexOf("em")!==-1&&(z=16*Number(z.replace(/r?em/,""))+"px"),stringContainerFontSize=" font-size: 0;",stringSlideFontSize=" font-size: "+z+";"}o(ee,"#"+we,P+stringContainerFontSize,w(ee))}else M+=A?A+"(100% / "+_t+")":100/_t+"%";if(M+=L+";",Ut&&(Xt||Yt||(Ht.style.marginRight=-Ut+"px"),stringSlideGutter="padding-right: "+Ut+"px;"),o(ee,"#"+we+" .tns-item",M+stringSlideGutter+stringSlideFontSize,w(ee)),It&&!k)for(var R=0;R<Bt.length;R++){var H=A?A+"("+100*R+"% / "+oe+")":100*R/oe+"%";O?ee.insertRule("#"+we+" .tns-item:nth-child("+(R+1)+") { margin-left: "+H+L+"; }",ee.cssRules.length):Bt[R].style.marginLeft=H}if(Zt&&O)for(var j=te.length,E=0;E<j;E++){var B,F=te[E],q=Zt[F];B=A?A+"(100% * "+oe+" / "+q+")":100*oe/q+"%",B="#"+we+"{width: "+B+"}",ee.insertRule("@media (min-width: "+F/16+"em) {"+B+"}",ee.cssRules.length)}}else Ut&&(Xt||(Ht.style.marginBottom=-Ut+"px"),o(ee,"#"+we+" .tns-item","margin-bottom: "+Ut+"px;",0)),G(),Et();if(It&&K(),navigator.msMaxTouchPoints&&(Rt.classList.add("ms-touch"),b(Rt,{scroll:pt}),_()),Ae){if(e.navContainer)d(ke,{"aria-label":"Carousel Pagination"}),Me=ke.children,[].forEach.call(Me,function(t,e){d(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":we+"-item"+e})});else{for(var U="",E=0;E<Gt;E++)U+='<button data-nav="'+E+'" tabindex="-1" aria-selected="false" aria-controls="'+we+"-item"+E+'" hidden type="button"></button>';U='<div class="tns-nav" aria-label="Carousel Pagination">'+U+"</div>",Rt.insertAdjacentHTML("afterbegin",U),[].forEach.call(Rt.children,function(t){t.classList.contains("tns-nav")&&(ke=t)}),Me=ke.children,Tt()}d(Me[0],{tabindex:"0","aria-selected":"true"})}if(We&&(Fe?d(Fe,{"data-action":"stop"}):(ke||(Rt.insertAdjacentHTML("afterbegin",'<div class="tns-nav" aria-label="Carousel Pagination"></div>'),ke=Rt.querySelector(".tns-nav")),ke.insertAdjacentHTML("beforeend",'<button data-action="stop" type="button">'+Xe+Ge[0]+"</button>"),Fe=ke.querySelector("[data-action]")),at()),De&&(e.controlsContainer?(Te=Ne.children[0],Se=Ne.children[1],d(Ne,{"aria-label":"Carousel Navigation",tabindex:"0"}),d(Te,{"data-controls":"prev"}),d(Se,{"data-controls":"next"}),d(Ne.children,{"aria-controls":we,tabindex:"-1"})):(Rt.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+we+'" type="button">'+Le[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+we+'" type="button">'+Le[1]+"</button></div>"),[].forEach.call(Rt.children,function(t){t.classList.contains("tns-controls")&&(Ne=t)}),Te=Ne.children[0],Se=Ne.children[1]),Jt||(Te.disabled=!0)),It){if(W){var X={};X[W]=$,b(Wt,X)}$e&&b(Wt,{touchstart:gt,touchmove:bt,touchend:xt,touchcancel:xt}),en&&b(Wt,{mousedown:gt,mousemove:bt,mouseup:xt,mouseleave:xt})}if(Ae)for(var Y=0;Y<Gt;Y++)b(Me[Y],{click:it,keydown:ht});De&&(b(Ne,{keydown:ft}),b(Te,{click:et}),b(Se,{click:nt})),We&&(b(Fe,{click:lt}),_e&&(b(Wt,{mouseover:function(){qe&&(ot(),Ue=!0)}}),b(Wt,{mouseout:function(){!qe&&Ue&&(at(),Ue=!1)}})),Ye&&b(document,{visibilitychange:ct})),Kt&&b(document,{keydown:ut}),"inner"===qt?ge.on("outerResized",function(){u(),ge.emit("innerLoaded",St())}):(b(window,{resize:n}),"outer"===qt&&ge.on("innerLoaded",D)),g(),S(),D(),"function"==typeof ye&&ye(St()),"inner"===qt&&ge.emit("innerLoaded",St())}();var rn=function(){return Jt?function(){var t=pe,e=ve;if(It&&(t+=Ft,e-=Ft),Yt&&kt%(Yt+Ut)!=0&&(e-=1),de>e)for(;de>=t+Gt;)de-=Gt;else if(de<t)for(;de<=e-Gt;)de+=Gt}:function(){de=Math.max(pe,Math.min(ve,de))}}(),sn=function(){return It?function(t,e){if(e||(e=Y()),re&&de===ve){var n=P?100*-((oe-_t)/oe):100*-(oe/_t-1);e=Math.max(Number(e.replace("%","")),n)+"%"}I||!t?(K(e),0===Qt&&$()):E(Wt,le,ce,ue,e,Qt,$),zt||Et()}:function(){ie=[];var t={};t[W]=t[j]=$,x(Bt[fe],t),b(Bt[de],t),Q(fe,Dt,Lt,!0),Q(de,Nt,Dt),W&&j&&0!==Qt||setTimeout($,0)}}();return{getInfo:St,events:ge,goTo:Z,destroy:function(){if(ee.disabled=!0,jt.insertBefore(Wt,Rt),Rt.remove(),Rt=Ht=null,Wt.id=be||"",Wt.className=xe||"",f(Wt,["style"]),Jt)for(var t=ae;t--;)Bt[0].remove(),Bt[Bt.length-1].remove();for(var i=Gt;i--;)Bt[i].id=Ce||"",Bt[i].className=Ee||"";f(Bt,["style","aria-hidden","tabindex"]),we=Gt=null,De&&(e.controlsContainer?(f(Ne,["aria-label","tabindex"]),f(Ne.children,["aria-controls","tabindex"]),h(Ne)):Ne=Te=Se=null),Ae&&(e.navContainer?(f(ke,["aria-label"]),f(Me,["aria-selected","aria-controls","tabindex"]),h(ke)):ke=null,Me=null),We&&(e.navContainer?h(Fe):ke=null,x(document,{visibilitychange:ct})),h(Wt),Kt&&x(document,{keydown:ut}),x(window,{resize:n})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
