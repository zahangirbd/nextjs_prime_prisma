(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5990:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>p,routeModule:()=>m,tree:()=>c});var s=r(3137),a=r(4647),n=r(4183),i=r.n(n),o=r(1775),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=s.AppPageRouteModule,c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3214)),"/mnt/d/node-projects/pmd-front/next-prime-app/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9197)),"/mnt/d/node-projects/pmd-front/next-prime-app/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/mnt/d/node-projects/pmd-front/next-prime-app/src/app/page.tsx"],u="/page",x={require:r,loadChunk:()=>Promise.resolve()},m=new l({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},213:(e,t,r)=>{Promise.resolve().then(r.bind(r,4191))},4191:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ProductsTable:()=>c});var s=r(80),a=r(9885);class n{async getProducts(){let e=await fetch("/api/products"),t=await e.json();return t}async addProduct(e){let t=await fetch("/api/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();return r}}var i=r(4780),o=r(8740),d=r(215),l=r(5132);r(8986),r(9637),r(4766),r(8914);let c=()=>{let[e,t]=(0,a.useState)([]),[r,c]=(0,a.useState)(!1),[p,u]=(0,a.useState)(""),[x,m]=(0,a.useState)(""),[h,g]=(0,a.useState)(0),[j,v]=(0,a.useState)(""),[y,f]=(0,a.useState)("");(0,a.useEffect)(()=>{let e=new n;e.getProducts().then(e=>t(e))},[]);let P=e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"}),b=s.jsx("div",{className:"table-header",children:"Products"});return s.jsx("div",{className:"datatable-doc-demo",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsxs)(i.w,{value:e,header:b,className:"p-datatable-customers",size:"normal",children:[s.jsx(o.s,{field:"id",header:"ID"}),s.jsx(o.s,{field:"name",header:"Name"}),s.jsx(o.s,{field:"price",header:"Price",body:e=>P(e.price)}),s.jsx(o.s,{header:"Image",body:e=>s.jsx("img",{src:`${e.imgUrl}`,alt:e.imgUrl})}),s.jsx(o.s,{field:"category",header:"Category"})]}),(0,s.jsxs)(d.V,{header:"Add Product",modal:!0,visible:r,style:{width:"50vw"},onHide:()=>c(!1),children:[(0,s.jsxs)("div",{children:[s.jsx("h3",{children:"Name"}),s.jsx("input",{type:"text",value:p,onChange:e=>u(e.target.value)})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{children:"Description"}),s.jsx("input",{type:"text",value:x,onChange:e=>m(e.target.value)})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{children:"Price"}),s.jsx("input",{type:"number",value:h,onChange:e=>g(Number(e.target.value)||0)})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{children:"Image URL"}),s.jsx("input",{type:"text",value:j,onChange:e=>v(e.target.value)})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{children:"Category"}),s.jsx("input",{type:"text",value:y,onChange:e=>f(e.target.value)})]}),s.jsx("br",{}),s.jsx("div",{children:s.jsx(l.Button,{type:"button",label:"Add",onClick:()=>{if(console.log("add-product button pressed"),!p||h<=0||!y){c(!1);return}let e={name:p,description:x,price:h,imgUrl:j,category:y};console.log("Adding product with the following values"),console.log(e);let t=new n;t.addProduct(e).then(e=>{c(!1)}).catch(e=>{console.log(`Error: ${e.message}`),c(!1)})}})})]}),s.jsx("br",{}),s.jsx(l.Button,{type:"button",label:"Add Product",onClick:()=>c(!0)})]})})}},3214:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(8144),a=r(7536);let n=(0,a.createProxy)(String.raw`/mnt/d/node-projects/pmd-front/next-prime-app/src/app/products.tsx`),{__esModule:i,$$typeof:o}=n;n.default;let d=n.ProductsTable;function l(){return s.jsx(d,{})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(6885);let a=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},8914:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[965,109,340],()=>r(5990));module.exports=s})();