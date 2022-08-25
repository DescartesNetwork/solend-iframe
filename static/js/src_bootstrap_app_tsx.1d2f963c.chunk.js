/*! For license information please see src_bootstrap_app_tsx.1d2f963c.chunk.js.LICENSE.txt */
(globalThis.webpackChunksolend=globalThis.webpackChunksolend||[]).push([["src_bootstrap_app_tsx"],{45597:(e,t,r)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return a.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return i.default}});var n=s(r(77267)),o=s(r(18126)),a=s(r(69363)),i=s(r(83272));function s(e){return e&&e.__esModule?e:{default:e}}const l=[n.default,o.default];t.h0=l},651:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Page:()=>C,__esModule:()=>P.X$,logo:()=>P.jY,panels:()=>P.h0,readme:()=>P.ng});var n=r(55754),o=r(68275),a=r(92950),i=r(45263),s=r(80754);const l=function(e){var t=e.appId,r=e.src,n=e.title,o=e.wallet,l=e.verbose,c=void 0!==l&&l;return(0,a.useEffect)((function(){return new s.Gateway(o,c).terminate}),[]),(0,i.jsx)("iframe",{id:t+"-iframe",src:r,title:n,style:{height:"calc(100vh - 64px)",margin:-12,marginTop:-24,border:"none",width:"100vw"},loading:"lazy",allowFullScreen:!0})};const c={appId:"solend",url:"https://descartesnetwork.github.io/solend-iframe/index.js"},p={devnet:{node:"https://api.devnet.solana.com"},testnet:{node:"https://api.testnet.solana.com"},mainnet:{node:"https://api.mainnet-beta.solana.com"}},u={manifest:{development:{...c},production:{...c}}[o.env],sol:p[o.net]};var d=r(94751);const f=()=>(0,i.jsxs)(d.Row,{gutter:[24,24],children:[(0,i.jsx)(d.Col,{span:24,style:{height:32}}),(0,i.jsx)(d.Col,{span:24,style:{textAlign:"center"},children:(0,i.jsxs)(d.Space,{direction:"vertical",children:[(0,i.jsx)(d.Typography.Title,{level:2,style:{color:"#fafafa"},children:"\u26a0\ufe0f Only supported on Solana mainnet."}),(0,i.jsx)(d.Typography.Text,{style:{color:"#fafafa"},children:"You can open the Control Center, switch to mainnet and experience the application."})]})})]}),{manifest:{appId:y}}=u,b=()=>{const{setBackground:e}=(0,o.useUI)();return(0,a.useEffect)((()=>{e({light:"#0f1118",dark:"#0f1118"})}),[e]),"mainnet"!==o.net?(0,i.jsx)(f,{}):(0,i.jsx)(l,{appId:y,src:"https://solend.fi/dashboard/",title:"Solend is the autonomous interest rate machine for lending on Solana.",wallet:window.sentre.wallet})};var h=r(19289),g=r(71256),m=r(48744),j=r.n(m),v=r(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const O={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof g.PublicKey||e instanceof j()||v.isBuffer(e)}},w="main",x=(0,h.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:r}=t;const{main:{counter:n}}=r();return{counter:n+1}})),_=(0,h.createSlice)({name:w,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(x.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)}))}}).reducer,S=(0,h.configureStore)({middleware:e=>e(O),devTools:!1,reducer:{main:_}});var P=r(45597);const{manifest:{appId:k}}=u,C=()=>(0,i.jsx)(o.AntdProvider,{appId:k,children:(0,i.jsx)(n.Provider,{store:S,children:(0,i.jsx)(b,{})})})},25882:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))r.call(i,p)&&(l[p]=i[p]);if(t){s=t(i);for(var u=0;u<s.length;u++)n.call(i,s[u])&&(l[s[u]]=i[s[u]])}}return l}},62175:(e,t,r)=>{"use strict";r(25882);var n=r(92950),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,p=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:p,props:a,_owner:i.current}}t.jsx=c,t.jsxs=c},45263:(e,t,r)=>{"use strict";e.exports=r(62175)},83272:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/README.c1fa02220e5b992d3bfe.md"},69363:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/logo.b5dbc35a243118c7d194.png"},77267:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-1.b67946f3d664deb84c83.jpeg"},18126:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel-2.da457f01458599822211.png"},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx.1d2f963c.chunk.js.map