"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[8398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const a={id:"skip",title:"Skip",sidebar_position:19},o=void 0,p={unversionedId:"api/middleware/skip",id:"api/middleware/skip",title:"Skip",description:"Skip middleware for Fiber that skips a wrapped handler if a predicate is true.",source:"@site/docs/api/middleware/skip.md",sourceDirName:"api/middleware",slug:"/api/middleware/skip",permalink:"/api/middleware/skip",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/docusaurus-migration/docs/api/middleware/skip.md",tags:[],version:"current",lastUpdatedBy:"Ren\xe9 Werner",lastUpdatedAt:1674161996,formattedLastUpdatedAt:"Jan 19, 2023",sidebarPosition:19,frontMatter:{id:"skip",title:"Skip",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Session",permalink:"/api/middleware/session"},next:{title:"Timeout",permalink:"/api/middleware/timeout"}},l={},s=[{value:"Signatures",id:"signatures",level:3},{value:"Examples",id:"examples",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Skip middleware for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," that skips a wrapped handler if a predicate is true."),(0,n.kt)("h3",{id:"signatures"},"Signatures"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"func New(handler fiber.Handler, exclude func(c *fiber.Ctx) bool) fiber.Handler\n")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/skip"\n)\n')),(0,n.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(skip.New(handler, func(ctx *fiber.Ctx) bool { return ctx.Method() == fiber.MethodOptions }))\n")))}d.isMDXComponent=!0}}]);