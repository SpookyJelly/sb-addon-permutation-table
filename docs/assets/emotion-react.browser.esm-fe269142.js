import{r as h}from"./index-570b25c1.js";import{s as be,R as xe,c as Se,K as we,a as E,b as v,r as u,D as $e,d as ve,e as Ce,h as Ee,f as $,W as c,M as y,g as B,i as H,j as A,m as Ae,k as Pe,l as Re,n as X,t as ee,o as Te,p as z,q as Oe,u as ke,v as re}from"./Serializer-50d2b3bd.js";import{a as Me,u as Y}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";function Ne(e){var r=be(e);return function(t,n,a,s){for(var i="",o=0;o<r;o++)i+=e[o](t,n,a,s)||"";return i}}function _e(e){return function(r){r.root||(r=r.return)&&e(r)}}function Ie(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Fe(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Le=function(){function e(t){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Fe(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Ie(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}();function We(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var ze=function(r,t,n){for(var a=0,s=0;a=s,s=z(),a===38&&s===12&&(t[n]=1),!ee(s);)X();return ke(r,re)},Ge=function(r,t){var n=-1,a=44;do switch(ee(a)){case 0:a===38&&z()===12&&(t[n]=1),r[n]+=ze(re-1,t,n);break;case 2:r[n]+=Oe(a);break;case 4:if(a===44){r[++n]=z()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=Te(a)}while(a=X());return r},je=function(r,t){return Pe(Ge(Re(r),t))},U=new WeakMap,De=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!U.get(n))&&!a){U.set(r,!0);for(var s=[],i=je(t,s),o=n.props,d=0,m=0;d<i.length;d++)for(var x=0;x<o.length;x++,m++)r.props[m]=s[d]?i[d].replace(/&\f/g,o[x]):o[x]+" "+i[d]}}},qe=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function te(e,r){switch(Ee(e,r)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+A+e+y+e+e;case 6828:case 4268:return c+e+y+e+e;case 6165:return c+e+y+"flex-"+e+e;case 5187:return c+e+u(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+y+"flex-$1$2")+e;case 5443:return c+e+y+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return c+e+y+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return c+e+y+u(e,"shrink","negative")+e;case 5292:return c+e+y+u(e,"basis","preferred-size")+e;case 6060:return c+"box-"+u(e,"-grow","")+c+e+y+u(e,"grow","positive")+e;case 4554:return c+u(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(B(e)-1-r>6)switch($(e,r+1)){case 109:if($(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+A+($(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~H(e,"stretch")?te(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if($(e,r+1)!==115)break;case 6444:switch($(e,B(e)-3-(~H(e,"!important")&&10))){case 107:return u(e,":",":"+c)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+c+($(e,14)===45?"inline-":"")+"box$3$1"+c+"$2$3$1"+y+"$2box$3")+e}break;case 5936:switch($(e,r+11)){case 114:return c+e+y+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+y+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+y+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return c+e+y+e+e}return e}var Ve=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case $e:r.return=te(r.value,r.length);break;case we:return E([v(r,{value:u(r.value,"@","@"+c)})],a);case xe:if(r.length)return Se(r.props,function(s){switch(Ae(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return E([v(r,{props:[u(s,/:(read-\w+)/,":"+A+"$1")]})],a);case"::placeholder":return E([v(r,{props:[u(s,/:(plac\w+)/,":"+c+"input-$1")]}),v(r,{props:[u(s,/:(plac\w+)/,":"+A+"$1")]}),v(r,{props:[u(s,/:(plac\w+)/,y+"input-$1")]})],a)}return""})}},Ke=[Ve],Be=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(g){var S=g.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var a=r.stylisPlugins||Ke,s={},i,o=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(g){for(var S=g.getAttribute("data-emotion").split(" "),w=1;w<S.length;w++)s[S[w]]=!0;o.push(g)});var d,m=[De,qe];{var x,ye=[ve,_e(function(g){x.insert(g)})],me=Ne(m.concat(a,ye)),he=function(S){return E(Ce(S),me)};d=function(S,w,pe,ge){x=pe,he(S?S+"{"+w.styles+"}":w.styles),ge&&(L.inserted[w.name]=!0)}}var L={key:t,sheet:new Le({key:t,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:d};return L.sheet.hydrate(o),L},ne={exports:{}},f={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=typeof Symbol=="function"&&Symbol.for,j=l?Symbol.for("react.element"):60103,D=l?Symbol.for("react.portal"):60106,P=l?Symbol.for("react.fragment"):60107,R=l?Symbol.for("react.strict_mode"):60108,T=l?Symbol.for("react.profiler"):60114,O=l?Symbol.for("react.provider"):60109,k=l?Symbol.for("react.context"):60110,q=l?Symbol.for("react.async_mode"):60111,M=l?Symbol.for("react.concurrent_mode"):60111,N=l?Symbol.for("react.forward_ref"):60112,_=l?Symbol.for("react.suspense"):60113,He=l?Symbol.for("react.suspense_list"):60120,I=l?Symbol.for("react.memo"):60115,F=l?Symbol.for("react.lazy"):60116,Ye=l?Symbol.for("react.block"):60121,Ue=l?Symbol.for("react.fundamental"):60117,Ze=l?Symbol.for("react.responder"):60118,Je=l?Symbol.for("react.scope"):60119;function p(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case j:switch(e=e.type,e){case q:case M:case P:case T:case R:case _:return e;default:switch(e=e&&e.$$typeof,e){case k:case N:case F:case I:case O:return e;default:return r}}case D:return r}}}function se(e){return p(e)===M}f.AsyncMode=q;f.ConcurrentMode=M;f.ContextConsumer=k;f.ContextProvider=O;f.Element=j;f.ForwardRef=N;f.Fragment=P;f.Lazy=F;f.Memo=I;f.Portal=D;f.Profiler=T;f.StrictMode=R;f.Suspense=_;f.isAsyncMode=function(e){return se(e)||p(e)===q};f.isConcurrentMode=se;f.isContextConsumer=function(e){return p(e)===k};f.isContextProvider=function(e){return p(e)===O};f.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===j};f.isForwardRef=function(e){return p(e)===N};f.isFragment=function(e){return p(e)===P};f.isLazy=function(e){return p(e)===F};f.isMemo=function(e){return p(e)===I};f.isPortal=function(e){return p(e)===D};f.isProfiler=function(e){return p(e)===T};f.isStrictMode=function(e){return p(e)===R};f.isSuspense=function(e){return p(e)===_};f.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===P||e===M||e===T||e===R||e===_||e===He||typeof e=="object"&&e!==null&&(e.$$typeof===F||e.$$typeof===I||e.$$typeof===O||e.$$typeof===k||e.$$typeof===N||e.$$typeof===Ue||e.$$typeof===Ze||e.$$typeof===Je||e.$$typeof===Ye)};f.typeOf=p;ne.exports=f;var Qe=ne.exports,ae=Qe,Xe={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},er={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ie={};ie[ae.ForwardRef]=Xe;ie[ae.Memo]=er;var rr=!0;function tr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var oe=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||rr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},ce=function(r,t,n){oe(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var s=t;do r.insert(t===s?"."+a:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function nr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var sr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ar=/[A-Z]|^ms/g,ir=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fe=function(r){return r.charCodeAt(1)===45},Z=function(r){return r!=null&&typeof r!="boolean"},W=We(function(e){return fe(e)?e:e.replace(ar,"-$&").toLowerCase()}),J=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(ir,function(n,a,s){return b={name:a,styles:s,next:b},a})}return sr[r]!==1&&!fe(r)&&typeof t=="number"&&t!==0?t+"px":t};function C(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return b={name:t.name,styles:t.styles,next:b},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)b={name:n.name,styles:n.styles,next:b},n=n.next;var a=t.styles+";";return a}return or(e,r,t)}case"function":{if(e!==void 0){var s=b,i=t(e);return b=s,C(e,r,i)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function or(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=C(e,r,t[a])+";";else for(var s in t){var i=t[s];if(typeof i!="object")r!=null&&r[i]!==void 0?n+=s+"{"+r[i]+"}":Z(i)&&(n+=W(s)+":"+J(s,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var o=0;o<i.length;o++)Z(i[o])&&(n+=W(s)+":"+J(s,i[o])+";");else{var d=C(e,r,i);switch(s){case"animation":case"animationName":{n+=W(s)+":"+d+";";break}default:n+=s+"{"+d+"}"}}}return n}var Q=/label:\s*([^\s;\n{]+)\s*(;|$)/g,b,V=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,s="";b=void 0;var i=r[0];i==null||i.raw===void 0?(a=!1,s+=C(n,t,i)):s+=i[0];for(var o=1;o<r.length;o++)s+=C(n,t,r[o]),a&&(s+=i[o]);Q.lastIndex=0;for(var d="",m;(m=Q.exec(s))!==null;)d+="-"+m[1];var x=nr(s)+d;return{name:x,styles:s,next:b}},K={}.hasOwnProperty,ue=h.createContext(typeof HTMLElement<"u"?Be({key:"css"}):null),pr=ue.Provider,de=function(r){return h.forwardRef(function(t,n){var a=h.useContext(ue);return r(t,a,n)})},le=h.createContext({}),G="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",cr=function(r,t){var n={};for(var a in t)K.call(t,a)&&(n[a]=t[a]);return n[G]=r,n},fr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return oe(t,n,a),Me(function(){return ce(t,n,a)}),null},ur=de(function(e,r,t){var n=e.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=e[G],s=[n],i="";typeof e.className=="string"?i=tr(r.registered,s,e.className):e.className!=null&&(i=e.className+" ");var o=V(s,void 0,h.useContext(le));i+=r.key+"-"+o.name;var d={};for(var m in e)K.call(e,m)&&m!=="css"&&m!==G&&(d[m]=e[m]);return d.ref=t,d.className=i,h.createElement(h.Fragment,null,h.createElement(fr,{cache:r,serialized:o,isStringTag:typeof a=="string"}),h.createElement(a,d))}),dr=ur,gr=function(r,t){var n=arguments;if(t==null||!K.call(t,"css"))return h.createElement.apply(void 0,n);var a=n.length,s=new Array(a);s[0]=dr,s[1]=cr(r,t);for(var i=2;i<a;i++)s[i]=n[i];return h.createElement.apply(null,s)},br=de(function(e,r){var t=e.styles,n=V([t],void 0,h.useContext(le)),a=h.useRef();return Y(function(){var s=r.key+"-global",i=new r.sheet.constructor({key:s,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),o=!1,d=document.querySelector('style[data-emotion="'+s+" "+n.name+'"]');return r.sheet.tags.length&&(i.before=r.sheet.tags[0]),d!==null&&(o=!0,d.setAttribute("data-emotion",s),i.hydrate([d])),a.current=[i,o],function(){i.flush()}},[r]),Y(function(){var s=a.current,i=s[0],o=s[1];if(o){s[1]=!1;return}if(n.next!==void 0&&ce(r,n.next,!0),i.tags.length){var d=i.tags[i.tags.length-1].nextElementSibling;i.before=d,i.flush()}r.insert("",n,i,!1)},[r,n.name]),null});function lr(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return V(r)}var xr=function(){var r=lr.apply(void 0,arguments),t="animation-"+r.name;return{name:t,styles:"@keyframes "+t+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};export{pr as C,br as G,le as T,Be as a,lr as c,tr as g,ce as i,gr as j,xr as k,We as m,oe as r,V as s,de as w};
//# sourceMappingURL=emotion-react.browser.esm-fe269142.js.map
