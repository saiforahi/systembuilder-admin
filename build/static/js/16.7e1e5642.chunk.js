(this["webpackJsonppcbuilder-admin"]=this["webpackJsonppcbuilder-admin"]||[]).push([[16],{326:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,c=new Array(t);s<t;s++)c[s]=e[s];return c},e.exports.default=e.exports,e.exports.__esModule=!0},339:function(e,t,s){"use strict";var c=s(320),n=s(357),r=s(334),a=s(328),l=s(335),o=s(322),i=s(0),b=s.n(i),u=s(145),j=s(61),d=s(342),m=(s(100),s(343),s(336),s(329),s(352),s(341),s(321),s(23),i.Component,Object(n.a)(c.a));t.a=m},343:function(e,t,s){var c=s(344),n=s(345),r=s(346),a=s(347);e.exports=function(e){return c(e)||n(e)||r(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},344:function(e,t,s){var c=s(326);e.exports=function(e){if(Array.isArray(e))return c(e)},e.exports.default=e.exports,e.exports.__esModule=!0},345:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},346:function(e,t,s){var c=s(326);e.exports=function(e,t){if(e){if("string"===typeof e)return c(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?c(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},347:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},640:function(e,t,s){"use strict";s.r(t);var c=s(36),n=s(319),r=s(0),a=s.n(r),l=(s(641),s(57)),o=s(65),i=s(339),b=s(5);t.default=function(){var e=Object(l.c)((function(e){return e.projects.data})),t=Object(l.c)((function(e){return e.projects.assignee})),s=Object(l.b)();a.a.useEffect((function(){s(Object(o.d)(5))}),[]);var u=Object(r.useState)(null),j=Object(c.a)(u,2),d=j[0],m=j[1],p=Object(r.useState)(null),O=Object(c.a)(p,2),x=O[0],f=O[1],h=Object(r.useState)(null),g=Object(c.a)(h,2),v=g[0],_=g[1],y=Object(r.useState)(null),w=Object(c.a)(y,2),N=w[0],S=w[1],k=Object(r.useState)(null),C=Object(c.a)(k,2),A=C[0],M=C[1],I=Object(r.useState)(null),E=Object(c.a)(I,2),B=E[0],D=E[1],L=Object(r.useState)(null),P=Object(c.a)(L,2),W=P[0],F=P[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(n.k,{children:Object(b.jsx)(n.I,{children:Object(b.jsx)("div",{className:"col-md-8 offset-md-2 col-sm-12",children:Object(b.jsxs)(n.g,{className:"custom-wbs-card-1",children:[Object(b.jsxs)(n.i,{className:"project-wbs-1",children:[" ",Object(b.jsx)("h4",{className:"section-name-wbscreate",children:"Create a WBS"})]}),Object(b.jsx)(n.h,{children:Object(b.jsx)(n.k,{children:Object(b.jsx)(n.s,{onSubmit:function(){var e={project:d.id,work_package_number:d.work_package_number,assignee:null,reporter:"5",title:v.target.value,description:N.target.value,start_date:A.target.value,end_date:B.target.value,hours_worked:"0",status:"1",progress:"0",comments:"",deliverable:""};W.forEach((function(t){e.assignee=t.id;var c=s(Object(o.e)(e));console.log("Create WBS:",c)}))},children:Object(b.jsxs)(n.I,{children:[Object(b.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(b.jsx)(n.y,{className:"custom-label-wbs5",children:"Select Project"}),Object(b.jsx)(i.a,{options:e,getOptionLabel:function(e){return e.task_delivery_order+" / "+e.sub_task},getOptionValue:function(e){return e.id},onChange:function(e){s(Object(o.b)(e.work_package_number)),console.log("assigneeList",t),m(e),f(e.planned_delivery_date)}})]}),null!=d?Object(b.jsx)("div",{className:"col-lg-12 mb-3",children:Object(b.jsx)(n.a,{color:"primary",children:Object(b.jsxs)("small",{children:[Object(b.jsx)("b",{children:"Planned Delivery Date: "})," ",d.planned_delivery_date,Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"Planned Hours: "})," ",d.planned_hours,Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"Remaining Hours: "})," ",d.remaining_hours]})})}):Object(b.jsx)(b.Fragment,{}),Object(b.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(b.jsx)(n.y,{className:"custom-label-wbs5",children:"Title"}),Object(b.jsx)(n.w,{className:"custom-forminput-6",onChange:_})]}),Object(b.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(b.jsx)(n.y,{className:"custom-label-wbs5",children:"Description"}),Object(b.jsx)(n.U,{className:"custom-forminput-6",onChange:S})]}),Object(b.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(b.jsx)(n.y,{className:"custom-label-wbs5",children:"Start date"}),Object(b.jsx)(n.w,{type:"date",className:"custom-forminput-6",onChange:M})]}),Object(b.jsxs)("div",{className:"col-lg-6 mb-3",children:[Object(b.jsx)(n.y,{className:"custom-label-wbs5",children:"End date"}),Object(b.jsx)(n.w,{max:x,type:"date",className:"custom-forminput-6",onChange:D})]}),Object(b.jsxs)("div",{className:"col-lg-12 mb-3",children:[Object(b.jsx)(n.y,{className:"custom-label-wbs5",children:"Assignee(s)"}),Object(b.jsx)(i.a,{className:"custom-forminput-6",options:t,isMulti:!0,getOptionLabel:function(e){return e.first_name+" "+e.last_name},getOptionValue:function(e){return e.id},onChange:F})]}),Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("div",{className:"projectwbs-form-button-holders mt-3",children:[Object(b.jsx)(n.f,{type:"submit",className:"create-btn-prjctwbs create-wbs",children:"Create WBS"}),Object(b.jsx)(n.f,{className:"create-btn-prjctwbs cancel-wbs",children:"Cancel"})]})})]})})})})]})})})})})}},641:function(e,t,s){}}]);
//# sourceMappingURL=16.7e1e5642.chunk.js.map