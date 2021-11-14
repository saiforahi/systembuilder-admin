(this["webpackJsonpsystembuilder-admin"]=this["webpackJsonpsystembuilder-admin"]||[]).push([[9],{497:function(e,a,t){},498:function(e,a,t){},529:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(54),o=t(10),r=t(37),l=t(6),d=t(301),i=t(19),m=function(){return localStorage.getItem(i.h).split(",")},b=function(e){return!!m().includes(e)},j=[{path:"/dashboard",exact:!0,name:"Dashboard",component:c.a.lazy((function(){return t.e(14).then(t.bind(null,523))}))},{path:"/dashboard/products",exact:!0,name:"Products",component:c.a.lazy((function(){return t.e(17).then(t.bind(null,524))}))},{path:"/dashboard/brands",exact:!0,name:"Brands",component:c.a.lazy((function(){return Promise.all([t.e(1),t.e(12)]).then(t.bind(null,525))}))},{path:"/dashboard/brands/create",exact:!0,name:"Create Brand",component:c.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(13)]).then(t.bind(null,526))}))},{path:"/dashboard/laptops",exact:!0,name:"Laptops",component:c.a.lazy((function(){return Promise.all([t.e(1),t.e(16)]).then(t.bind(null,527))}))},{path:"/dashboard/laptops/create",exact:!0,name:"Create Laptop",component:c.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(4)]).then(t.bind(null,528))}))},{path:"/dashboard/laptops/edit/:id",exact:!0,name:"Edit Laptop",component:c.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(4)]).then(t.bind(null,528))}))}],u=t(4),p=Object(u.jsx)("div",{className:"pt-3 text-center",children:Object(u.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),h=function(){var e=Object(n.useState)(m()),a=Object(r.a)(e,2);a[0],a[1];return c.a.useEffect((function(){console.log("Container mounted")}),[]),Object(u.jsx)("main",{className:"c-main",children:Object(u.jsx)(d.j,{children:Object(u.jsx)(n.Suspense,{fallback:p,children:Object(u.jsx)(l.d,{children:j.map((function(e,a){return e.component&&Object(u.jsx)(l.b,{path:e.path,exact:e.exact,name:e.name,render:function(a){return Object(u.jsx)(d.p,{children:Object(u.jsx)(e.component,Object(o.a)({},a))})}},a)}))})})})})},x=c.a.memo(h),O=t(302),f=t(62),v=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.sidebar.sidebarShow}));return c.a.useEffect((function(){console.log("sidebar --- ",a)}),[]),Object(u.jsxs)(d.s,{withSubheader:!0,children:[Object(u.jsx)(d.I,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(a)||"responsive";e(Object(f.a)(t))}}),Object(u.jsx)(d.I,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(a)&&"responsive";e(Object(f.a)(t))}}),Object(u.jsx)(d.t,{className:"d-md-down-none mr-auto"}),Object(u.jsx)(d.t,{className:"px-3",children:Object(u.jsx)(N,{})}),Object(u.jsx)(d.H,{className:"px-3 justify-content-between",children:Object(u.jsx)(d.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3 custom-router",routes:j})})]})},N=function(){var e=Object(l.g)(),a=JSON.parse(localStorage.getItem(i.j));return Object(n.useEffect)((function(){console.log("user",a)}),[]),Object(u.jsxs)(d.l,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(u.jsxs)(d.o,{className:"c-header-nav-link",caret:!1,children:[Object(u.jsx)("div",{className:"c-avatar",children:Object(u.jsx)(d.u,{src:null!=a.profile_pic?i.b+a.profile_pic:"avatars/user-avatar-default.png",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})}),Object(u.jsx)("span",{className:"ml-2  u-name",children:a.name})]}),Object(u.jsxs)(d.n,{className:"pt-0",placement:"bottom-end",children:[Object(u.jsx)(d.m,{header:!0,tag:"div",color:"light",className:"text-center drop-text",children:Object(u.jsx)("strong",{children:"Account"})}),Object(u.jsxs)(d.m,{className:"drop-text",to:"/dashboard/profile",children:[Object(u.jsx)(O.a,{name:"cil-user",className:"mfe-2"}),"Profile"]}),Object(u.jsx)(d.m,{divider:!0}),Object(u.jsxs)(d.m,{onClick:function(){i.a.get("logout").then((function(a){localStorage.clear(),e.push("/")})).catch((function(a){localStorage.clear(),e.push("/")}))},className:"drop-text",children:[Object(u.jsx)(O.a,{name:"cil-account-logout",className:"mfe-2"}),"Log out"]})]})]})},g=(t(497),O.a,function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.sidebar.sidebarShow}));return c.a.useEffect((function(){console.log("has group",b("pm"))}),[]),Object(u.jsxs)(d.B,{colorScheme:"light",show:a,onShowChange:function(a){return e(Object(f.a)(a))},children:[Object(u.jsxs)(d.C,{className:"d-md-down-none custom-color",to:"/",children:[Object(u.jsx)("span",{className:"c-sidebar-brand-full name-brand1",children:"System Builder"}),Object(u.jsx)("span",{className:"c-sidebar-brand-minimized name-brand1",children:"SB"})]}),Object(u.jsxs)(d.E,{className:"vo-sidebar",children:[Object(u.jsx)(d.G,{to:"/dashboard",icon:"cil-speedometer",name:"Dashboard",className:"vo-navItem"}),Object(u.jsxs)(d.F,{icon:"cib-ghost",name:"Products",className:"vo-navItem",children:[b("admin")&&Object(u.jsx)(d.G,{to:"/dashboard/products/create-new-product",name:"Add New Product",className:"vo-navItem"}),Object(u.jsx)(d.G,{to:"/dashboard/products",name:"All Products",className:"vo-navItem"}),Object(u.jsx)(d.G,{to:"/dashboard/laptops",name:"Laptops",className:"vo-navItem"})]}),Object(u.jsx)(d.F,{icon:"cil-spreadsheet",name:"Basic Data",className:"vo-navItem",children:Object(u.jsx)(d.G,{to:"/dashboard/brands",name:"Brands",className:"vo-navItem"})})]}),Object(u.jsx)(d.D,{})]})}),w=c.a.memo(g),S=(t(498),t(63)),y=t(64),I=t(65);a.default=function(){var e=Object(s.b)();return c.a.useEffect((function(){e(Object(S.b)()),e(Object(y.b)()),e(Object(I.b)())}),[]),Object(u.jsxs)("div",{className:"c-app c-default-layout",children:[Object(u.jsx)(w,{}),Object(u.jsxs)("div",{className:"c-wrapper",children:[Object(u.jsx)(v,{}),Object(u.jsx)("div",{className:"c-body pt-10 custom-color-c-app",children:Object(u.jsx)(x,{})})]})]})}}}]);
//# sourceMappingURL=9.ef4b887c.chunk.js.map