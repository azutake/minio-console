(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[127],{412:function(e,t,n){"use strict";var c=n(1),o=n(2),a=n.n(o),i=n(414),s=n(415),r=n(416),l=n(459),u=n(386),d=n(468),j=n(388),b=n(125),f=n.n(b),O=n(308),v=n(320),m=n(122),p=n(0);t.a=Object(v.a)((function(e){return Object(O.a)(Object(c.a)({},m.h))}))((function(e){var t=e.isOpen,n=void 0!==t&&t,o=e.onClose,b=e.onCancel,O=e.onConfirm,v=e.classes,m=void 0===v?{}:v,x=e.title,h=void 0===x?"":x,C=e.isLoading,k=e.confirmationContent,N=e.cancelText,g=void 0===N?"Cancel":N,E=e.confirmText,y=void 0===E?"Confirm":E,B=e.confirmButtonProps,T=void 0===B?{}:B,w=e.cancelButtonProps,D=void 0===w?{}:w,M=e.titleIcon,P=void 0===M?null:M;return Object(p.jsxs)(i.a,{open:n,onClose:function(e,t){"backdropClick"!==t&&o()},className:m.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[Object(p.jsxs)(s.a,{className:m.title,children:[Object(p.jsxs)("div",{className:m.titleText,children:[P," ",h]}),Object(p.jsx)("div",{className:m.closeContainer,children:Object(p.jsx)(j.a,{"aria-label":"close",className:m.closeButton,onClick:o,disableRipple:!0,size:"small",children:Object(p.jsx)(f.a,{})})})]}),Object(p.jsx)(r.a,{className:m.content,children:k}),Object(p.jsxs)(l.a,{className:m.actions,children:[Object(p.jsx)(u.a,Object(c.a)(Object(c.a)({className:m.cancelButton,onClick:b||o,disabled:C,type:"button"},D),{},{variant:"outlined",color:"primary",children:g})),Object(p.jsx)(d.a,Object(c.a)(Object(c.a)({className:m.confirmButton,type:"button",onClick:O,loading:C,disabled:C,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:Object(p.jsx)(a.a.Fragment,{}),autoFocus:!0},T),{},{children:y}))]})]})}))},435:function(e,t,n){"use strict";var c=n(16),o=n(2),a=n(52);t.a=function(e,t){var n=Object(o.useState)(!1),i=Object(c.a)(n,2),s=i[0],r=i[1];return[s,function(n,c,o){r(!0),a.a.invoke(n,c,o).then((function(t){r(!1),e(t)})).catch((function(e){r(!1),t(e)}))}]}},908:function(e,t,n){"use strict";n.r(t);var c=n(16),o=(n(2),n(39)),a=n.n(o),i=n(41),s=n(467),r=n(32),l=n(435),u=n(412),d=n(23),j=n(0),b=Object(i.b)(null,{setErrorSnackMessage:r.e});t.default=b((function(e){var t=e.closeDeleteModalAndRefresh,n=e.deleteOpen,o=e.selectedBucket,i=e.bucketEvent,r=e.setErrorSnackMessage,b=Object(l.a)((function(){return t(!0)}),(function(e){return r(e)})),f=Object(c.a)(b,2),O=f[0],v=f[1];if(!o)return null;return Object(j.jsx)(u.a,{title:"Delete Event",confirmText:"Delete",isOpen:n,titleIcon:Object(j.jsx)(d.w,{}),isLoading:O,onConfirm:function(){if(null!==i){var e=a()(i,"events",[]),t=a()(i,"prefix",""),n=a()(i,"suffix","");v("DELETE","/api/v1/buckets/".concat(o,"/events/").concat(i.arn),{events:e,prefix:t,suffix:n})}},onClose:function(){return t(!1)},confirmationContent:Object(j.jsx)(s.a,{children:"Are you sure you want to delete this event?"})})}))}}]);
//# sourceMappingURL=127.6a82fe86.chunk.js.map