(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3720:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>o,routeModule:()=>x,tree:()=>d});var l=s(482),a=s(9108),r=s(2563),i=s.n(r),n=s(8300),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);s.d(t,c);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,6e3)),"D:\\website templates\\Envanto Templates\\Main\\finatex\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1342)),"D:\\website templates\\Envanto Templates\\Main\\finatex\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["D:\\website templates\\Envanto Templates\\Main\\finatex\\src\\app\\page.tsx"],m="/page",h={require:s,loadChunk:()=>Promise.resolve()},x=new l.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8616:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,1900,23)),Promise.resolve().then(s.t.bind(s,1476,23)),Promise.resolve().then(s.bind(s,2141)),Promise.resolve().then(s.bind(s,116)),Promise.resolve().then(s.bind(s,7799)),Promise.resolve().then(s.bind(s,5569))},2141:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var l=s(5344),a=s(3729),r=s(8428),i=s(9410),n=s(6506),c=s(7068);let d=()=>{let e=(0,r.usePathname)(),[t,s]=(0,a.useState)(!1),[d,o]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{s(window.scrollY>400)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:`header-menu style-one bg-white ${t?"fixed":""}`,children:[(0,l.jsxs)("div",{className:"container flex items-center justify-between h-20",children:[l.jsx(n.default,{className:"menu-left-block",href:"/",children:l.jsx(i.default,{src:"/images/Logo.jpg",width:2e3,height:1e3,alt:"logo",priority:!0,className:"w-[149px] max-sm:w-[132px]"})}),l.jsx("div",{className:"menu-center-block h-full",children:(0,l.jsxs)("ul",{className:"menu-nav flex items-center xl:gap-2 h-full",children:[l.jsx("li",{className:`nav-item h-full flex items-center justify-center home ${"/"===e?"active":""}`,children:l.jsx(n.default,{className:"nav-link text-title",href:"/",children:l.jsx("span",{children:"Home"})})}),l.jsx("li",{className:`nav-item h-full flex items-center justify-center ${e.includes("/about/")?"active":""}`,children:l.jsx(n.default,{className:"nav-link text-title",href:"/about/about-one",children:l.jsx("span",{children:"About"})})}),l.jsx("li",{className:`nav-item h-full flex items-center justify-center ${e.includes("/service")?"active":""}`,children:l.jsx(n.default,{className:"nav-link text-title",href:"/service/service-one",children:l.jsx("span",{children:"Services"})})}),l.jsx("li",{className:`nav-item h-full flex items-center justify-center ${e.includes("/contact/")?"active":""}`,children:l.jsx(n.default,{className:"nav-link text-title",href:"/contact/contact-one",children:l.jsx("span",{children:"Contact"})})})]})}),(0,l.jsxs)("div",{className:"menu-right-block flex items-center",children:[l.jsx("div",{className:"icon-call",children:l.jsx("i",{className:"icon-phone-call text-4xl"})}),(0,l.jsxs)("div",{className:"text ml-3",children:[l.jsx("div",{className:"text caption1",children:"Free Consultancy"}),l.jsx("div",{className:"number text-button",children:"+91 9944325858"})]}),l.jsx("div",{className:"menu-humburger hidden pointer",onClick:()=>o(!d),children:l.jsx(c.a,{className:"text-2xl",weight:"bold"})})]})]}),l.jsx("div",{id:"menu-mobile-block",className:`${d&&"open"}`,children:l.jsx("div",{className:"menu-mobile-main",children:l.jsx("div",{className:"container",children:(0,l.jsxs)("ul",{className:"menu-nav-mobile h-full pt-1 pb-1",children:[l.jsx("li",{className:"nav-item-mobile h-full pt-2 pb-2 pl-3 pr-3",children:l.jsx(n.default,{className:"nav-link-mobile",href:"/",children:"Home"})}),l.jsx("li",{className:"nav-item-mobile h-full pt-2 pb-2 pl-3 pr-3",children:l.jsx(n.default,{className:"nav-link-mobile",href:"/about/about-one",children:"About"})}),l.jsx("li",{className:"nav-item-mobile h-full pt-2 pb-2 pl-3 pr-3",children:l.jsx(n.default,{className:"nav-link-mobile",href:"/service/service-one",children:"Services"})}),l.jsx("li",{className:"nav-item-mobile h-full pt-2 pb-2 pl-3 pr-3",children:l.jsx(n.default,{className:"nav-link-mobile",href:"/contact/contact-one",children:"Contact"})})]})})})})]})})}},116:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var l=s(5344),a=s(3729);let r=({classname:e})=>{let[t,s]=(0,a.useState)(0),[r,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=setInterval(()=>{s(t=>{let s=t+10;return s>=2500?(clearInterval(e),2500):s})},30),t=setInterval(()=>{i(e=>{let s=e+10;return s>=1200?(clearInterval(t),1200):s})},30);return()=>{clearInterval(e),clearInterval(t)}},[]),l.jsx("div",{className:"container",children:l.jsx("div",{className:`counter-block ${e}`,children:(0,l.jsxs)("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-y-8",children:[l.jsx("div",{className:"item",children:(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsxs)("div",{className:"count-block flex items-center",children:[l.jsx("div",{className:"counter heading3",children:t}),l.jsx("span",{className:"heading3",children:"+"})]}),l.jsx("div",{className:"body1 text-secondary text-center",children:"Successful Loans"})]})}),l.jsx("div",{className:"item",children:(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[l.jsx("div",{className:"count-block flex items-center",children:l.jsx("div",{className:"counter heading3",children:r})}),l.jsx("div",{className:"body1 text-secondary text-center",children:"Current Man"})]})})]})})})}},7799:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var l=s(5344),a=s(3729),r=s(7222);let i={some:0,all:1};var n=s(8816);let c=({data:e})=>{let t=(0,a.useRef)(null),s=function(e,{root:t,margin:s,amount:l,once:n=!1}={}){let[c,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!e.current||n&&c)return;let a={root:t&&t.current||void 0,margin:s,amount:l};return function(e,t,{root:s,margin:l,amount:a="some"}={}){let n=function(e,t,s){var l;if("string"==typeof e){let a=document;t&&((0,r.k)(!!t.current,"Scope provided, but no element detected."),a=t.current),s?(null!==(l=s[e])&&void 0!==l||(s[e]=a.querySelectorAll(e)),e=s[e]):e=a.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e),c=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{let s=c.get(e.target);if(!!s!==e.isIntersecting){if(e.isIntersecting){let s=t(e);"function"==typeof s?c.set(e.target,s):d.unobserve(e.target)}else s&&(s(e),c.delete(e.target))}})},{root:s,rootMargin:l,threshold:"number"==typeof a?a:i[a]});return n.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(d(!0),n?void 0:()=>d(!1)),a)},[t,e,s,n,l]),c}(t,{once:!0});return l.jsx(l.Fragment,{children:l.jsx("section",{className:"service-block lg:mt-[100px] sm:mt-16 mt-10",ref:t,children:(0,l.jsxs)("div",{className:"container",children:[l.jsx("h3",{className:"heading3 text-center",children:"Type of Loans"}),l.jsx("div",{className:"list-service grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10",style:{transform:s?"none":"translateY(60px)",opacity:s?1:0,transition:"all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"},children:e.slice(0,6).map((e,t)=>l.jsx(n.Z,{data:e,style:"style-one",number:t},t))})]})})})}},5569:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var l=s(5344),a=s(9410),r=s(6506),i=s(509),n=s(8697),c=s(1067),d=s(3583);s(7061);let o=()=>l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:"slider-block style-one",children:[l.jsx("div",{className:"prev-arrow flex items-center justify-center",children:l.jsx(i.W,{className:"text-white heading6",weight:"bold"})}),l.jsx("div",{className:"slider-main",children:(0,l.jsxs)(c.tq,{spaceBetween:0,slidesPerView:1,navigation:{prevEl:".prev-arrow",nextEl:".next-arrow"},loop:!0,pagination:{clickable:!0},speed:400,modules:[d.tl,d.pt,d.W_],className:"h-full relative",autoplay:{delay:4e3},children:[l.jsx(c.o5,{children:(0,l.jsxs)("div",{className:"slider-item slider-first",children:[l.jsx("div",{className:"bg-img",children:l.jsx(a.default,{src:"/images/slider/Home_Banner_1.jpg",width:4e3,height:3e3,alt:"bgslider",priority:!0,className:"w-full h-full object-cover"})}),l.jsx("div",{className:"container",children:(0,l.jsxs)("div",{className:"text-content flex-columns-between",children:[(0,l.jsxs)("div",{className:"heading2",children:[(0,l.jsxs)("div",{className:"relative overflow-hidden",children:[l.jsx("span",{className:"block relative overflow-hidden",children:"Simplify and Secure"}),l.jsx("span",{className:"block absolute top-0 left-0 w-full h-full",children:"Simplify and Secure"})]}),(0,l.jsxs)("div",{className:"relative overflow-hidden",children:[l.jsx("span",{className:"block relative overflow-hidden",children:"Your Payments with"}),l.jsx("span",{className:"block absolute top-0 left-0 w-full h-full",children:"Your Payments with"})]}),(0,l.jsxs)("div",{className:"relative overflow-hidden",children:[l.jsx("span",{className:" text-blue block relative overflow-hidden",children:"Our Solution"}),l.jsx("span",{className:" text-blue block absolute top-0 left-0 w-full h-full",children:"Our Solution"})]})]}),(0,l.jsxs)("div",{className:"body2 mt-3 text-secondary",children:["Our platform offers secure and reliable investment ",l.jsx("br",{}),"opportunities in the rapidly growing world of cryptocurrency."]}),l.jsx("div",{className:"button-block md:mt-10 mt-6",children:l.jsx(r.default,{className:"button-main bg-blue text-white",href:"/service/service-one",children:"Discovery now"})})]})})]})}),l.jsx(c.o5,{children:(0,l.jsxs)("div",{className:"slider-item slider-second",children:[l.jsx("div",{className:"bg-img",children:l.jsx(a.default,{src:"/images/slider/Home_Banner_2.jpg",width:4e3,height:3e3,alt:"bgslider",priority:!0,className:"w-full h-full object-cover"})}),l.jsx("div",{className:"container",children:(0,l.jsxs)("div",{className:"text-content flex-columns-between",children:[(0,l.jsxs)("div",{className:"heading2",children:[(0,l.jsxs)("div",{className:"relative overflow-hidden",children:[l.jsx("span",{className:"block relative overflow-hidden",children:"Empower Your"}),l.jsx("span",{className:"block absolute top-0 left-0 w-full h-full",children:"Empower Your"})]}),(0,l.jsxs)("div",{className:"relative overflow-hidden",children:[l.jsx("span",{className:"block relative overflow-hidden",children:"Business with"}),l.jsx("span",{className:"block absolute top-0 left-0 w-full h-full",children:"Business with"})]}),(0,l.jsxs)("div",{className:"relative overflow-hidden",children:[l.jsx("span",{className:" text-blue block relative overflow-hidden",children:"Seamless Payments"}),l.jsx("span",{className:" text-blue block absolute top-0 left-0 w-full h-full",children:"Seamless Payments"})]})]}),(0,l.jsxs)("div",{className:"body2 mt-3 text-secondary",children:["Our platform offers secure and reliable investment ",l.jsx("br",{}),"opportunities in the rapidly growing world of cryptocurrency."]}),l.jsx("div",{className:"button-block md:mt-10 mt-6",children:l.jsx(r.default,{className:"button-main bg-blue text-white",href:"/service/service-one",children:"Discovery now"})})]})})]})}),l.jsx(c.o5,{children:(0,l.jsxs)("div",{className:"slider-item slider-third",children:[l.jsx("div",{className:"bg-img",children:l.jsx(a.default,{src:"/images/slider/Home_Banner_3.jpg",width:4e3,height:3e3,alt:"bgslider",priority:!0,className:"w-full h-full object-cover"})}),l.jsx("div",{className:"container",children:(0,l.jsxs)("div",{className:"text-content flex-columns-between",children:[(0,l.jsxs)("div",{className:"heading2",children:[(0,l.jsxs)("div",{className:"relative overflow-hidden",children:[l.jsx("span",{className:"block relative overflow-hidden",children:"Powerful Payment"}),l.jsx("span",{className:"block absolute top-0 left-0 w-full h-full",children:"Powerful Payment"})]}),(0,l.jsxs)("div",{className:"relative overflow-hidden",children:[l.jsx("span",{className:"block relative overflow-hidden",children:"Solutions for"}),l.jsx("span",{className:"block absolute top-0 left-0 w-full h-full",children:"Solutions for"})]}),(0,l.jsxs)("div",{className:"relative overflow-hidden",children:[l.jsx("span",{className:" text-blue block relative overflow-hidden",children:"Seamless Transactions"}),l.jsx("span",{className:" text-blue block absolute top-0 left-0 w-full h-full",children:"Seamless Transactions"})]})]}),(0,l.jsxs)("div",{className:"body2 mt-3 text-secondary",children:["Trust us to help you navigate the complex landscape and"," ",l.jsx("br",{}),"achieve your financial goals with peace of mind."]}),l.jsx("div",{className:"button-block md:mt-10 mt-6",children:l.jsx(r.default,{className:"button-main bg-blue text-white",href:"/service/service-one",children:"Discovery now"})})]})})]})})]})}),l.jsx("div",{className:"next-arrow flex items-center justify-center",children:l.jsx(n.T,{className:"text-white heading6",weight:"bold"})})]})})},6e3:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var l=s(5036),a=s(7298),r=s(8037),i=s(6843);let n=(0,i.createProxy)(String.raw`D:\website templates\Envanto Templates\Main\finatex\src\components\Slider\SliderOne.tsx`),{__esModule:c,$$typeof:d}=n,o=n.default,m=(0,i.createProxy)(String.raw`D:\website templates\Envanto Templates\Main\finatex\src\components\Section\Service\ServiceOne.tsx`),{__esModule:h,$$typeof:x}=m,u=m.default;var f=s(4096),p=s(6274),v=s(2813),j=s(8564);let b=()=>l.jsx(l.Fragment,{children:(0,l.jsxs)("section",{className:"case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10",children:[l.jsx("div",{className:"container",children:l.jsx("div",{className:"heading text-center",children:l.jsx("h3",{className:"heading3",children:"Our Process"})})}),l.jsx("div",{className:"list-case-study md:mt-10 mt-6",children:(0,l.jsxs)("div",{className:"list grid lg:grid-cols-4 sm:grid-cols-2",children:[l.jsx("div",{className:"w-full",children:(0,l.jsxs)("div",{className:"case-study-item",children:[l.jsx("div",{className:"bg-img",children:l.jsx(v.default,{width:5e3,height:5e3,className:"w-full h-full block",src:"/images/component/person_2.jpg",alt:"img"})}),(0,l.jsxs)("div",{className:"text flex flex-col justify-between gap-3",children:[l.jsx("div",{className:"heading5",children:l.jsx(p.default,{className:"text-white",href:"/case-studies/case-studies-one",children:"Free Cibil Check"})}),l.jsx("div",{className:"body2 text-white",children:"We are committed to providing reliable and high-quality financial advisory in our services."}),(0,l.jsxs)(p.default,{className:"flex items-center gap-1",href:"/case-studies/case-studies-one",children:[l.jsx("div",{className:"text-button text-white",children:"Read More "}),l.jsx(j.U,{weight:"bold",className:"text-xs text-white mt-1"})]})]})]})}),l.jsx("div",{className:"w-full",children:(0,l.jsxs)("div",{className:"case-study-item",children:[(0,l.jsxs)("div",{className:"bg-img",children:[" ",l.jsx(v.default,{width:5e3,height:5e3,className:"w-full h-full block",src:"/images/component/person_3.jpg",alt:"img"})]}),(0,l.jsxs)("div",{className:"text flex flex-col justify-between gap-3",children:[l.jsx("div",{className:"heading5",children:l.jsx(p.default,{className:"text-white",href:"/case-studies/case-studies-one",children:"Documentation"})}),l.jsx("div",{className:"body2 text-white",children:"With an experienced and skilled team, we bring the necessary expertise to enhance work productivity."}),(0,l.jsxs)(p.default,{className:"flex items-center gap-1",href:"/case-studies/case-studies-one",children:[l.jsx("div",{className:"text-button text-white",children:"Read More "}),l.jsx(j.U,{weight:"bold",className:"text-xs text-white mt-1"})]})]})]})}),l.jsx("div",{className:"w-full",children:(0,l.jsxs)("div",{className:"case-study-item",children:[(0,l.jsxs)("div",{className:"bg-img",children:[" ",l.jsx(v.default,{width:5e3,height:5e3,className:"w-full h-full block",src:"/images/component/person_1.jpg",alt:"img"})]}),(0,l.jsxs)("div",{className:"text flex flex-col justify-between gap-3",children:[l.jsx("div",{className:"heading5",children:l.jsx(p.default,{className:"text-white",href:"/case-studies/case-studies-one",children:"Approval"})}),l.jsx("div",{className:"body2 text-white",children:"We constantly seek advanced solutions to address challenges and deliver the highest value to our customers."}),(0,l.jsxs)(p.default,{className:"flex items-center gap-1",href:"/case-studies/case-studies-one",children:[l.jsx("div",{className:"text-button text-white",children:"Read More "}),l.jsx(j.U,{weight:"bold",className:"text-xs text-white mt-1"})]})]})]})}),l.jsx("div",{className:"w-full",children:(0,l.jsxs)("div",{className:"case-study-item",children:[(0,l.jsxs)("div",{className:"bg-img",children:[" ",l.jsx(v.default,{width:5e3,height:5e3,className:"w-full h-full block",src:"/images/component/person_4.jpg",alt:"img"})]}),(0,l.jsxs)("div",{className:"text flex flex-col justify-between gap-3",children:[l.jsx("div",{className:"heading5",children:l.jsx(p.default,{className:"text-white",href:"/case-studies/case-studies-one",children:"Sanction & Disbursement,Payments"})}),l.jsx("div",{className:"body2 text-white",children:"With over 21 years of serving industrial customers and over 3000 projects, we have the experience to solve almost."}),(0,l.jsxs)(p.default,{className:"flex items-center gap-1",href:"/case-studies/case-studies-one",children:[l.jsx("div",{className:"text-button text-white",children:"Read More "}),l.jsx(j.U,{weight:"bold",className:"text-xs text-white mt-1"})]})]})]})})]})})]})});var g=s(3338),N=s(7678);function w(){return l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:"overflow-x-hidden",children:[(0,l.jsxs)("header",{id:"header",children:[l.jsx(a.Z,{}),l.jsx(r.ZP,{})]}),(0,l.jsxs)("main",{className:"content",children:[l.jsx(o,{}),l.jsx(u,{data:f}),l.jsx(b,{}),l.jsx(N.ZP,{classname:"bg-gray-100 my-16"}),l.jsx("footer",{id:"footer",children:l.jsx(g.Z,{})})]})]})})}},8037:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});let l=(0,s(6843).createProxy)(String.raw`D:\website templates\Envanto Templates\Main\finatex\src\components\Header\Menu\MenuOne.tsx`),{__esModule:a,$$typeof:r}=l,i=l.default},7298:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var l=s(5036);s(2);var a=s(6274),r=s(5531),i=s(7328);let n=()=>l.jsx(l.Fragment,{children:l.jsx("div",{className:"top-nav style-one bg-dark",children:(0,l.jsxs)("div",{className:"container flex items-center justify-between h-[44px]",children:[(0,l.jsxs)("div",{className:"left-block flex items-center",children:[(0,l.jsxs)("div",{className:"location flex items-center max-lg:hidden",children:[l.jsx(r.$,{className:"text-white text-xl"}),l.jsx("span",{className:"ml-2 caption1 text-white",children:"93,1st Floor, Navalar Nagar, Bye Pass Road, Madurai - 625 016"})]}),(0,l.jsxs)("div",{className:"mail lg:ml-7 flex items-center",children:[l.jsx(i.w,{className:"text-white text-xl"}),l.jsx("span",{className:"ml-2 caption1 text-white",children:"customercare@jpfinserv.com"})]})]}),(0,l.jsxs)("div",{className:"right-block flex items-center gap-5",children:[l.jsx("div",{className:"line h-6 w-px bg-grey max-sm:hidden",children:" "}),(0,l.jsxs)("div",{className:"list-social flex items-center gap-2.5 style-one max-sm:hidden",children:[l.jsx(a.default,{className:"item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center",href:"https://www.facebook.com/profile.php?id=61566147273973",target:"_blank",children:l.jsx("i",{className:"icon-facebook text-sm"})}),l.jsx(a.default,{className:"item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center",href:"https://www.instagram.com/jpfinserv/",target:"_blank",children:l.jsx("i",{className:"icon-insta text-[10px]"})})]})]})]})})})},7678:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});let l=(0,s(6843).createProxy)(String.raw`D:\website templates\Envanto Templates\Main\finatex\src\components\Section\Counter\CounterTwo.tsx`),{__esModule:a,$$typeof:r}=l,i=l.default},509:(e,t,s)=>{"use strict";s.d(t,{W:()=>f});var l=s(3729),a=s(5203);let r=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M160,48V208L80,128Z",opacity:"0.2"}),l.createElement("path",{d:"M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"}))]]);var i=Object.defineProperty,n=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,s)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x=(e,t)=>{for(var s in t||(t={}))o.call(t,s)&&h(e,s,t[s]);if(d)for(var s of d(t))m.call(t,s)&&h(e,s,t[s]);return e},u=(e,t)=>n(e,c(t));let f=(0,l.forwardRef)((e,t)=>l.createElement(a.Z,u(x({ref:t},e),{weights:r})));f.displayName="CaretLeft"},7222:(e,t,s)=>{"use strict";s.d(t,{K:()=>a,k:()=>r});var l=s(254);let a=l.Z,r=l.Z},254:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});let l=e=>e},8564:(e,t,s)=>{"use strict";s.d(t,{U:()=>f});var l=s(2),a=s(4193);let r=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M144.49,136.49l-80,80a12,12,0,0,1-17-17L119,128,47.51,56.49a12,12,0,0,1,17-17l80,80A12,12,0,0,1,144.49,136.49Zm80-17-80-80a12,12,0,1,0-17,17L199,128l-71.52,71.51a12,12,0,0,0,17,17l80-80A12,12,0,0,0,224.49,119.51Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M136,128,56,208V48Z",opacity:"0.2"}),l.createElement("path",{d:"M141.66,122.34l-80-80A8,8,0,0,0,48,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,141.66,122.34ZM64,188.69V67.31L124.69,128Zm157.66-55-80,80a8,8,0,0,1-11.32-11.32L204.69,128,130.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,221.66,133.66Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M140.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L127.51,128,51.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,140.24,132.24Zm80-8.48-80-80a6,6,0,0,0-8.48,8.48L207.51,128l-75.75,75.76a6,6,0,1,0,8.48,8.48l80-80A6,6,0,0,0,220.24,123.76Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M138.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L130.34,128,53.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,138.83,130.83Zm80-5.66-80-80a4,4,0,0,0-5.66,5.66L210.34,128l-77.17,77.17a4,4,0,0,0,5.66,5.66l80-80A4,4,0,0,0,218.83,125.17Z"}))]]);var i=Object.defineProperty,n=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,s)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x=(e,t)=>{for(var s in t||(t={}))o.call(t,s)&&h(e,s,t[s]);if(d)for(var s of d(t))m.call(t,s)&&h(e,s,t[s]);return e},u=(e,t)=>n(e,c(t));let f=(0,l.forwardRef)((e,t)=>l.createElement(a.Z,u(x({ref:t},e),{weights:r})));f.displayName="CaretDoubleRight"},7328:(e,t,s)=>{"use strict";s.d(t,{w:()=>f});var l=s(2),a=s(4193);let r=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),l.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.57L42.28,60H213.72ZM104.63,128,36,190.91V65.09Zm5.92,5.43L125.3,147a4,4,0,0,0,5.4,0l14.75-13.52L213.72,196H42.28ZM151.37,128,220,65.09V190.91Z"}))]]);var i=Object.defineProperty,n=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,h=(e,t,s)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x=(e,t)=>{for(var s in t||(t={}))o.call(t,s)&&h(e,s,t[s]);if(d)for(var s of d(t))m.call(t,s)&&h(e,s,t[s]);return e},u=(e,t)=>n(e,c(t));let f=(0,l.forwardRef)((e,t)=>l.createElement(a.Z,u(x({ref:t},e),{weights:r})));f.displayName="Envelope"}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),l=t.X(0,[638,225,215,425,629,946,725],()=>s(3720));module.exports=l})();