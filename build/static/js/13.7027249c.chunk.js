(this["webpackJsonppcbuilder-admin"]=this["webpackJsonppcbuilder-admin"]||[]).push([[13],{326:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},339:function(e,t,n){"use strict";var r=n(320),c=n(357),a=n(334),i=n(328),o=n(335),s=n(322),l=n(0),d=n.n(l),u=n(145),j=n(61),m=n(342),h=(n(100),n(343),n(336),n(329),n(352),n(341),n(321),n(23),l.Component,Object(c.a)(r.a));t.a=h},343:function(e,t,n){var r=n(344),c=n(345),a=n(346),i=n(347);e.exports=function(e){return r(e)||c(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},344:function(e,t,n){var r=n(326);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},345:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},346:function(e,t,n){var r=n(326);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},347:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},369:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},425:function(e,t,n){"use strict";var r=n(322),c=n(356),a=n(342),i=n(370),o=n(0),s=n.n(o),l=n(1),d=n(334),u=n(328),j=n(335),m=n(316),h=n(735),f=(n(329),n(341),n(321),n(23),Array.isArray),p=Object.keys,b=Object.prototype.hasOwnProperty;function x(e,t){if(e===t)return!0;if(e&&t&&"object"==Object(i.a)(e)&&"object"==Object(i.a)(t)){var n,r,c,a=f(e),o=f(t);if(a&&o){if((r=e.length)!=t.length)return!1;for(n=r;0!==n--;)if(!x(e[n],t[n]))return!1;return!0}if(a!=o)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var d=e instanceof RegExp,u=t instanceof RegExp;if(d!=u)return!1;if(d&&u)return e.toString()==t.toString();var j=p(e);if((r=j.length)!==p(t).length)return!1;for(n=r;0!==n--;)if(!b.call(t,j[n]))return!1;for(n=r;0!==n--;)if(("_owner"!==(c=j[n])||!e.$$typeof)&&!x(e[c],t[c]))return!1;return!0}return e!==e&&t!==t}var O=function(e){return function(t){t.in,t.onExited,t.appear,t.enter,t.exit;var n=Object(c.a)(t,["in","onExited","appear","enter","exit"]);return s.a.createElement(e,n)}},v=function(e){var t=e.component,n=e.duration,a=void 0===n?1:n,i=e.in;e.onExited;var o=Object(c.a)(e,["component","duration","in","onExited"]),d={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(a,"ms")},exiting:{opacity:0},exited:{opacity:0}};return s.a.createElement(m.a,{mountOnEnter:!0,unmountOnExit:!0,in:i,timeout:a},(function(e){var n={style:Object(r.j)({},d[e])};return s.a.createElement(t,Object(l.a)({innerProps:n},o))}))},g=function(e){Object(j.a)(n,e);var t=Object(r.i)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).duration=260,e.rafID=void 0,e.state={width:"auto"},e.transition={exiting:{width:0,transition:"width ".concat(e.duration,"ms ease-out")},exited:{width:0}},e.getWidth=function(t){t&&isNaN(e.state.width)&&(e.rafID=window.requestAnimationFrame((function(){var n=t.getBoundingClientRect().width;e.setState({width:n})})))},e.getStyle=function(e){return{overflow:"hidden",whiteSpace:"nowrap",width:e}},e.getTransition=function(t){return e.transition[t]},e}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){this.rafID&&window.cancelAnimationFrame(this.rafID)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,c=t.in,a=this.state.width;return s.a.createElement(m.a,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:c,timeout:this.duration},(function(t){var c=Object(r.j)(Object(r.j)({},e.getStyle(a)),e.getTransition(t));return s.a.createElement("div",{ref:e.getWidth,style:c},n)}))}}]),n}(o.Component),N=function(e){return function(t){var n=t.in,r=t.onExited,a=Object(c.a)(t,["in","onExited"]);return s.a.createElement(g,{in:n,onExited:r},s.a.createElement(e,Object(l.a)({cropWithEllipsis:n},a)))}},y=function(e){return function(t){return s.a.createElement(v,Object(l.a)({component:e,duration:t.isMulti?260:1},t))}},A=function(e){return function(t){return s.a.createElement(v,Object(l.a)({component:e},t))}},E=function(e){return function(t){return s.a.createElement(h.a,Object(l.a)({component:e},t))}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.c)({components:e}),n=t.Input,a=t.MultiValue,i=t.Placeholder,o=t.SingleValue,s=t.ValueContainer,l=Object(c.a)(t,["Input","MultiValue","Placeholder","SingleValue","ValueContainer"]);return Object(r.j)({Input:O(n),MultiValue:N(a),Placeholder:y(i),SingleValue:A(o),ValueContainer:E(s)},l)},w=S(),k=(w.Input,w.MultiValue,w.Placeholder,w.SingleValue,w.ValueContainer,Object(a.a)(S,(function(e,t){try{return x(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i))return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}})));t.a=k},729:function(e,t,n){},730:function(e,t,n){},733:function(e,t,n){"use strict";n.r(t);var r=n(319),c=n(0),a=n.n(c),i=n(325),o=(n(729),n(59)),s=n(60),l=n(76),d=n(62),u=n(64),j=n(5),m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).showMore=function(){4===e.state.itemToShow?e.setState({itemToShow:e.state.cars.length,expanded:!0}):e.setState({itemToShow:4,expanded:!1})},e.state={cars:[{fileName:"VOMock.docX",uploadedBy:"HASAN RATAN",createdAt:"12/11/2021"},{fileName:"VOMock.docX",uploadedBy:"HASAN RATAN",createdAt:"12/11/2021"},{fileName:"VOMock.docX",uploadedBy:"HASAN RATAN",createdAt:"12/11/2021"},{fileName:"VOMock.docX",uploadedBy:"HASAN RATAN",createdAt:"12/11/2021"},{fileName:"VOMock.docX",uploadedBy:"HASAN RATAN",createdAt:"12/11/2021"},{fileName:"VOMock.docX",uploadedBy:"HASAN RATAN",createdAt:"12/11/2021"},{fileName:"VOMock.docX",uploadedBy:"HASAN RATAN",createdAt:"12/11/2021"},{fileName:"VOMock.docX",uploadedBy:"HASAN RATAN",createdAt:"12/11/2021"}],itemToShow:4,expanded:!1},e.showMore=e.showMore.bind(Object(l.a)(e)),e}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{className:"project-name",children:"Virtual Office"}),Object(j.jsx)("div",{className:"expand-btn-holder",children:Object(j.jsx)(r.f,{className:"see-all-btn mb-3",onClick:this.showMore,children:this.state.expanded?Object(j.jsx)("span",{children:"Show less"}):Object(j.jsx)("span",{children:"Show all"})})}),Object(j.jsx)(r.I,{children:this.state.cars.slice(0,this.state.itemToShow).map((function(e,t){return Object(j.jsx)(r.j,{lg:"3",md:"6",sm:"6",children:Object(j.jsx)(r.g,{className:"doc-cards",children:Object(j.jsxs)(r.h,{className:"doc-file-body",children:[Object(j.jsx)("div",{className:"icon-holder-shared-files",children:Object(j.jsx)(i.b,{name:"cil-file",className:"file-icon-show",size:"2xl"})}),Object(j.jsx)("h5",{className:"file-name mt-2",children:e.fileName}),Object(j.jsxs)("h6",{className:"create-time",children:[Object(j.jsx)("span",{className:"thicc-header",children:"Created:"}),e.createdAt]}),Object(j.jsxs)("h6",{className:"uploadedBy",children:[Object(j.jsx)("span",{className:"thicc-header",children:"Uploaded by:"}),e.uploadedBy]})]})})},t)}))})]})}}]),n}(a.a.Component),h=n(36),f=n(11),p=(n(730),n(339)),b=(n(425),function(){var e={option:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{fontSize:"14px !important"})}},t=Object(c.useState)(""),n=Object(h.a)(t,2),a=n[0],i=n[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(r.g,{className:"mt-4 upload-docs",children:Object(j.jsx)(r.h,{children:Object(j.jsxs)(r.k,{children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(r.y,{className:"custom-label-5",htmlFor:"prjctSelect",children:"Select Project"}),Object(j.jsx)(p.a,{closeMenuOnSelect:!0,"aria-labelledby":"prjctSelect",id:"prjctSelect",minHeight:"35px",placeholder:"Select from list",isClearable:!0,isMulti:!1,onChange:function(e){return function(e,t){"options"===e&&i(t)}("options",e)},classNamePrefix:"custom-forminput-6",value:a,options:[{value:"1",label:"Virtual Office"},{value:"2",label:"Virtual Doctor"},{value:"3",label:"Smart Home"},{value:"4",label:"WASA AMR"}],styles:e})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(r.y,{htmlFor:"attachments",className:"custom-label-5",children:"Upload Documents"}),Object(j.jsxs)(r.y,{className:"custom-file-upload",children:[Object(j.jsx)(r.w,{type:"file",id:"attachments",className:"form-control form-control-file",multiple:!0}),Object(j.jsx)("img",{src:"assets/icons/upload-thin.svg",alt:"",className:"upload-icon"})]})]}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6 col-sm-6 col-lg-4",children:Object(j.jsxs)("div",{className:"file-attached-ongoing rounded-pill",children:[Object(j.jsx)(r.f,{className:"remove-file-ongoing",children:Object(j.jsx)("img",{src:"assets/icons/icons8-close-64-blue.png",className:"close-icon-size"})}),"abcdjskjdksjkds.xvts"]})}),Object(j.jsx)("div",{className:"col-md-6 col-sm-6 col-lg-4",children:Object(j.jsxs)("div",{className:"file-attached-ongoing rounded-pill",children:[Object(j.jsx)(r.f,{className:"remove-file-ongoing",children:Object(j.jsx)("img",{src:"assets/icons/icons8-close-64-blue.png",className:"close-icon-size"})}),"abcdjskjdksjkds.xvts"]})})]})}),Object(j.jsx)("div",{className:"mb-3 mt-4",children:Object(j.jsxs)("div",{className:"project-form-button-holders ",children:[Object(j.jsx)(r.f,{className:"profile-form-btn update-profile",children:"Upload Documents"}),Object(j.jsx)(r.f,{className:"profile-form-btn cancel-update",children:"Cancel"})]})})]})})})})});t.default=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(r.k,{children:Object(j.jsxs)(r.T,{activeTab:"uploadDocs",children:[Object(j.jsxs)(r.E,{variant:"tabs",className:"tab-style",children:[Object(j.jsx)(r.F,{children:Object(j.jsxs)(r.G,{"data-tab":"uploadDocs",className:"special",children:[Object(j.jsx)(i.b,{name:"cil-arrow-thick-to-top"})," Upload Documents"]})}),Object(j.jsx)(r.F,{children:Object(j.jsxs)(r.G,{"data-tab":"viewDocs",className:"special",children:[Object(j.jsx)(i.b,{name:"cil-library",className:"mr-1"}),"View Shared Documents"]})})]}),Object(j.jsxs)(r.R,{children:[Object(j.jsx)(r.S,{"data-tab":"uploadDocs",children:Object(j.jsxs)(r.k,{children:[Object(j.jsx)("h3",{className:"profile-page-header",children:"Upload Documents"}),Object(j.jsx)(r.I,{children:Object(j.jsx)("div",{className:"col-lg-8 offset-lg-2",children:Object(j.jsx)(b,{})})})]})}),Object(j.jsx)(r.S,{"data-tab":"viewDocs",children:Object(j.jsxs)(r.k,{children:[Object(j.jsx)("h3",{className:"profile-page-header",children:"View Shared Documents"}),Object(j.jsx)(r.I,{children:Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(m,{})})})]})})]})]})})})}},735:function(e,t,n){"use strict";var r=n(3),c=n(1),a=n(369),i=n(14),o=(n(13),n(0)),s=n.n(o),l=n(55);function d(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(o.isValidElement)(e)?t(e):e}(e)})),n}function u(e,t,n){return null!=n[t]?n[t]:e.props[t]}function j(e,t,n){var r=d(e.children),c=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,c=Object.create(null),a=[];for(var i in e)i in t?a.length&&(c[i]=a,a=[]):a.push(i);var o={};for(var s in t){if(c[s])for(r=0;r<c[s].length;r++){var l=c[s][r];o[c[s][r]]=n(l)}o[s]=n(s)}for(r=0;r<a.length;r++)o[a[r]]=n(a[r]);return o}(t,r);return Object.keys(c).forEach((function(a){var i=c[a];if(Object(o.isValidElement)(i)){var s=a in t,l=a in r,d=t[a],j=Object(o.isValidElement)(d)&&!d.props.in;!l||s&&!j?l||!s||j?l&&s&&Object(o.isValidElement)(d)&&(c[a]=Object(o.cloneElement)(i,{onExited:n.bind(null,i),in:d.props.in,exit:u(i,"exit",e),enter:u(i,"enter",e)})):c[a]=Object(o.cloneElement)(i,{in:!1}):c[a]=Object(o.cloneElement)(i,{onExited:n.bind(null,i),in:!0,exit:u(i,"exit",e),enter:u(i,"enter",e)})}})),c}var m=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},h=function(e){function t(t,n){var r,c=(r=e.call(this,t,n)||this).handleExited.bind(Object(a.a)(r));return r.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},r}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,c=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,d(n.children,(function(e){return Object(o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:u(e,"appear",n),enter:u(e,"enter",n),exit:u(e,"exit",n)})}))):j(e,c,a),firstRender:!1}},n.handleExited=function(e,t){var n=d(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(c.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,c=Object(r.a)(e,["component","childFactory"]),a=this.state.contextValue,i=m(this.state.children).map(n);return delete c.appear,delete c.enter,delete c.exit,null===t?s.a.createElement(l.a.Provider,{value:a},i):s.a.createElement(l.a.Provider,{value:a},s.a.createElement(t,c,i))},t}(s.a.Component);h.propTypes={},h.defaultProps={component:"div",childFactory:function(e){return e}};t.a=h}}]);
//# sourceMappingURL=13.7027249c.chunk.js.map