(this["webpackJsonppcbuilder-admin"]=this["webpackJsonppcbuilder-admin"]||[]).push([[25],{354:function(e,t,s){"use strict";var a=s(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(s(327)),n=s(5),l=(0,c.default)((0,n.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Grade");t.default=l},427:function(e,t,s){},428:function(e,t,s){"use strict";var a=s(1),c=s(379),n=s(334),l=s(328),i=s(335),o=s(322),r=s(0),j=s.n(r),d=s(320),m=s(357),b=(s(329),s(336),s(352),s(341),s(321),s(23),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,s=arguments.length>2?arguments[2]:void 0,a=String(e).toLowerCase(),c=String(s.getOptionValue(t)).toLowerCase(),n=String(s.getOptionLabel(t)).toLowerCase();return c===a||n===a}),u={formatCreateLabel:function(e){return'Create "'.concat(e,'"')},isValidNewOption:function(e,t,s,a){return!(!e||t.some((function(t){return b(e,t,a)}))||s.some((function(t){return b(e,t,a)})))},getNewOptionData:function(e,t){return{label:t,value:e,__isNew__:!0}},getOptionValue:d.c,getOptionLabel:d.b},h=Object(o.j)({allowCreateWhileLoading:!1,createOptionPosition:"last"},u),O=function(e){var t,s;return s=t=function(t){Object(i.a)(r,t);var s=Object(o.i)(r);function r(e){var t;Object(n.a)(this,r),(t=s.call(this,e)).select=void 0,t.onChange=function(e,s){var a=t.props,n=a.getNewOptionData,l=a.inputValue,i=a.isMulti,r=a.onChange,j=a.onCreateOption,d=a.value,m=a.name;if("select-option"!==s.action)return r(e,s);var b=t.state.newOption,u=Array.isArray(e)?e:[e];if(u[u.length-1]!==b)r(e,s);else if(j)j(l);else{var h=n(l,l),O={action:"create-option",name:m,option:h};r(i?[].concat(Object(c.a)(Object(o.e)(d)),[h]):h,O)}};var a=e.options||[];return t.state={newOption:void 0,options:a},t}return Object(l.a)(r,[{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"render",value:function(){var t=this,s=this.state.options;return j.a.createElement(e,Object(a.a)({},this.props,{ref:function(e){t.select=e},options:s,onChange:this.onChange}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var s=e.allowCreateWhileLoading,a=e.createOptionPosition,n=e.formatCreateLabel,l=e.getNewOptionData,i=e.inputValue,r=e.isLoading,j=e.isValidNewOption,d=e.value,m=e.getOptionValue,b=e.getOptionLabel,u=e.options||[],h=t.newOption;return{newOption:h=j(i,Object(o.e)(d),u,{getOptionValue:m,getOptionLabel:b})?l(i,n(i)):void 0,options:!s&&r||!h?u:"first"===a?[h].concat(Object(c.a)(u)):[].concat(Object(c.a)(u),[h])}}}]),r}(r.Component),t.defaultProps=h,s}(d.a),p=Object(m.a)(O);t.a=p},628:function(e,t,s){"use strict";s.r(t);var a=s(11),c=s(36),n=s(319),l=s(0),i=s(354),o=s.n(i),r=s(811),j=(s(427),s(325)),d=s(428),m=s(8),b=s(9),u=s(378),h=s.n(u),O=s(57),p=s(65),x=s(5);t.default=function(){Object(m.i)().work_package_number;var e=Object(O.b)(),t=Object(l.useState)(0),s=Object(c.a)(t,2),i=s[0],u=s[1],N=Object(l.useState)(),f=Object(c.a)(N,2),g=f[0],v=f[1],y=Object(m.h)(),k=(Object(m.g)(),Object(l.useState)(1)),w=Object(c.a)(k,2),C=(w[0],w[1]),P=Object(l.useState)(""),S=Object(c.a)(P,2),_=S[0],L=S[1],T=function(e,t){u(e),C(t)},F=Object(l.useState)(""),V=Object(c.a)(F,2),D=V[0],A=V[1],H=function(){A(!D)},M={option:function(e,t){return Object(a.a)(Object(a.a)({},e),{},{fontSize:"14px !important"})}},z=Object(l.useState)(""),E=Object(c.a)(z,2),I=E[0],W=E[1];Object(l.useEffect)((function(){void 0!=y.state&&(console.log("project",y.state.project),v(y.state.project),L(y.state.project.project.task_delivery_order.title)),console.log("project",g)}),[]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(n.k,{children:[Object(x.jsxs)(n.A,{alignment:"center",show:D,onClose:H,children:[Object(x.jsx)(n.C,{onDismiss:function(){return A(!D)},closeButton:!0,children:Object(x.jsx)(n.D,{className:"modal-title-projects",children:Object(x.jsx)("span",{className:"edit-profile-form-header",children:"Edit Project Info"})})}),Object(x.jsx)(n.B,{children:Object(x.jsx)(n.k,{children:Object(x.jsx)(n.s,{children:Object(x.jsxs)(n.I,{children:[Object(x.jsxs)(n.j,{lg:"12",className:"mb-2",children:[Object(x.jsx)(n.y,{htmlFor:"subTaskName",className:"custom-label-5",children:"Sub Task Name"}),Object(x.jsx)(n.w,{id:"subTaskName",name:"subTaskName",type:"text",className:"custom-forminput-6"})]}),Object(x.jsxs)(n.j,{lg:"6",className:"mb-2",children:[Object(x.jsx)(n.y,{htmlFor:"pmName",className:"custom-label-5",children:"PM Name"}),Object(x.jsx)(n.w,{id:"pmName",name:"pmName",type:"text",className:"custom-forminput-6",readOnly:!0})]}),Object(x.jsxs)(n.j,{lg:"6",className:"mb-2",children:[Object(x.jsx)(n.y,{htmlFor:"wpNumber",className:"custom-label-5",children:"Work Package Number"}),Object(x.jsx)(n.w,{id:"wpNumber",name:"wpNumber",type:"number",className:"custom-forminput-6",min:"0"})]}),Object(x.jsxs)(n.j,{lg:"12",className:"mb-2",children:[Object(x.jsx)(n.y,{htmlFor:"taskTitle",className:"custom-label-5",children:"Task Title"}),Object(x.jsx)(n.w,{id:"taskTitle",name:"taskTitle",type:"text",className:"custom-forminput-6"})]}),Object(x.jsxs)(n.j,{lg:"12",classID:"mb-2",children:[Object(x.jsx)(n.y,{htmlFor:"assignees",className:"custom-label-5",children:"Assignee(s)"}),Object(x.jsx)(d.a,{closeMenuOnSelect:!1,"aria-labelledby":"assignees",id:"assignees",placeholder:"Select from list or create new",isClearable:!0,onChange:function(e){return function(e,t){"assignees"===e&&W(t)}("assignees",e)},isMulti:!0,classNamePrefix:"custom-forminput-6",value:I,options:[{value:"1",label:"La Casa De papel"},{value:"2",label:"Aninda"},{value:"3",label:"Pial Noman"},{value:"4",label:"Saif Rahi"}],styles:M})]}),Object(x.jsxs)(n.j,{lg:"6",className:"mb-2",children:[Object(x.jsx)(n.y,{htmlFor:"estPersons",className:"custom-label-5",children:"Estimated Person(s)"}),Object(x.jsx)(n.w,{id:"estPersons",name:"estPersons",type:"number",className:"custom-forminput-6",min:"0"})]}),Object(x.jsxs)(n.j,{lg:"6",className:"mb-2",children:[Object(x.jsx)(n.y,{htmlFor:"plannedVal",className:"custom-label-5",children:"Planned Value"}),Object(x.jsx)(n.w,{id:"plannedVal",name:"plannedVal",type:"number",className:"custom-forminput-6",min:"0"})]}),Object(x.jsxs)(n.j,{lg:"6",className:"mb-2",children:[Object(x.jsx)(n.y,{htmlFor:"plannedHrs",className:"custom-label-5",children:"Planned Value"}),Object(x.jsx)(n.w,{id:"plannedHrs",name:"plannedHrs",type:"number",className:"custom-forminput-6",min:"0"})]}),Object(x.jsxs)(n.j,{lg:"6",className:"mb-2",children:[Object(x.jsx)(n.y,{htmlFor:"remHrs",className:"custom-label-5",children:"Planned Value"}),Object(x.jsx)(n.w,{id:"remHrs",name:"remHrs",type:"number",className:"custom-forminput-6",min:"0"})]}),Object(x.jsx)(n.j,{md:"12",className:"mt-2",children:Object(x.jsxs)("div",{className:"project-form-button-holders mt-3",children:[Object(x.jsx)(n.f,{className:"profile-form-btn update-profile",children:"Update Info"}),Object(x.jsx)(n.f,{className:"profile-form-btn cancel-update",onClick:function(){return H()},type:"reset",children:"Cancel"})]})})]})})})})]}),Object(x.jsx)("h3",{className:"dash-header-1",children:"Project Details"}),0===i?Object(x.jsxs)("div",{className:"card-header-portion-ongoing",children:[Object(x.jsxs)("h4",{className:"ongoing-card-header-1",children:[Object(x.jsx)(r.a,{"aria-label":"favourite",disabled:!0,size:"medium",color:"primary",children:Object(x.jsx)(o.a,{fontSize:"inherit",className:"fav-button"})}),void 0!=g?g.project.task_delivery_order.title:""]}),Object(x.jsx)(n.f,{className:"edit-ongoing-project-title",variant:"ghost",onClick:function(e){return T(1,0)},children:Object(x.jsx)(j.b,{name:"cil-pencil",className:"mr-1 pen-icon"})})]}):null,1===i?Object(x.jsxs)("div",{className:"card-header-portion-ongoing",children:[Object(x.jsx)(n.s,{children:Object(x.jsx)(n.w,{value:_,onChange:function(e){return L(e.target.value)},className:"custom-forminput-6",type:"text"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)(n.f,{type:"button",variant:"ghost",className:"confirm-name",onClick:function(t){return s=g.project.task_delivery_order.id,console.log({title:_}),void b.a.put("project/change-tdo-title/"+s+"/",{title:_}).then((function(t){console.log("rs",t.data),"True"==t.data.success&&(u(0),C(0),e(Object(p.d)(localStorage.getItem(b.i))),h()("Updated","Task Delivery Order name has been updated","success"))})).catch((function(e){console.log(e),h()("Failed","Proccess Failed","error")}));var s},children:Object(x.jsx)(j.b,{name:"cil-check-circle",className:"mr-1 tick",size:"xl"})}),Object(x.jsx)(n.f,{type:"button",variant:"ghost",className:"cancel-name",onClick:function(e){return T(0,1)},children:Object(x.jsx)(j.b,{name:"cil-x-circle",className:"mr-1 cross",size:"xl"})})]})]}):null,Object(x.jsx)("hr",{className:"header-underline1"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col-md-10 offset-md-1 col-sm-12 col-xs-12 mt-1 mb-2",children:Object(x.jsx)(n.g,{className:"card-ongoing-project",children:Object(x.jsxs)(n.h,{className:"details-project-body",children:[Object(x.jsxs)("div",{className:"ongoing-initial-info row",children:[Object(x.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(x.jsx)("h6",{className:"tiny-header2",children:"Sub Task Name"}),Object(x.jsx)("h6",{className:"project-point-details",children:"Do lungi dance"})]}),Object(x.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(x.jsx)("h6",{className:"tiny-header2",children:"PM Name"}),Object(x.jsx)("h6",{className:"project-point-details",children:"The one and only "})]}),Object(x.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(x.jsx)("h6",{className:"tiny-header2",children:"Work Package Number"}),Object(x.jsx)("h6",{className:"project-point-details",children:"IDGAF"})]}),Object(x.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(x.jsx)("h6",{className:"tiny-header2",children:"Task Title"}),Object(x.jsx)("h6",{className:"project-point-details",children:"Send object in mqtt"})]}),Object(x.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(x.jsx)("h6",{className:"tiny-header2",children:"Estimated Person(s)"}),Object(x.jsx)("h6",{className:"project-point-details",children:"1,bceause why hire more!"})]}),Object(x.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(x.jsx)("h6",{className:"tiny-header2",children:"Planned Value"}),Object(x.jsx)("h6",{className:"project-point-details",children:"120 "})]}),Object(x.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(x.jsx)("h6",{className:"tiny-header2",children:"Planned Hours"}),Object(x.jsx)("h6",{className:"project-point-details",children:"120 "})]}),Object(x.jsxs)("div",{className:"tasks-done-2 col-lg-4",children:[Object(x.jsx)("h6",{className:"tiny-header2",children:"Remaining Hours"}),Object(x.jsx)("h6",{className:"project-point-details",children:"120 "})]})]}),Object(x.jsxs)("div",{className:"col-md-12 mt-4 mb-2",children:[Object(x.jsx)("h5",{className:"projectName mb-3",children:"Asssignee(s)-(6)"}),Object(x.jsx)("div",{className:"file-show-ongoing-details row",children:void 0!=g&&Array.from(g.assignees).map((function(e,t){return Object(x.jsx)("div",{className:"col-md-6 col-sm-6 col-lg-3",children:Object(x.jsxs)("div",{className:"file-attached-ongoing rounded-pill",children:[Object(x.jsx)(n.f,{type:"button",onClick:function(){e.id},className:"remove-file-ongoing",children:Object(x.jsx)("img",{src:"assets/icons/icons8-close-64-blue.png",className:"close-icon-size"})}),e.first_name+" "+e.last_name]})},t)}))})]}),Object(x.jsx)("div",{className:"col-md-12 mt-2 mb-2",children:Object(x.jsxs)("div",{className:"project-actions",children:[Object(x.jsxs)(n.f,{className:"edit-project-ongoing-task",onClick:function(){return H()},children:[Object(x.jsx)(j.b,{name:"cil-pencil",className:"mr-1"})," Edit "]}),Object(x.jsxs)(n.f,{type:"button",onClick:function(){return e=g.project.work_package_index,void h()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this record!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t&&b.a.delete("/project/subtask/delete/"+e+"/").then((function(e){"True"==e.data.success?h()("Poof! Your selected loan record has been deleted!",{icon:"success"}):"False"==e.data.success&&h()("Poof!"+e.data.message,{icon:"error"})})).catch((function(e){}))}));var e},className:"delete-project-2",children:[Object(x.jsx)(j.b,{name:"cil-trash",className:"mr-1"})," Delete"]})]})})]})})})})]})})}}}]);
//# sourceMappingURL=25.fae8c6b5.chunk.js.map