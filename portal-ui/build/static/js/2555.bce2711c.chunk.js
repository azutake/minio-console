(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2555],{23804:function(e,n,t){"use strict";t(72791);var o=t(11135),r=t(25787),i=t(61889),s=t(80184);n.Z=(0,r.Z)((function(e){return(0,o.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var n=e.classes,t=e.iconComponent,o=e.title,r=e.help;return(0,s.jsx)("div",{className:n.root,children:(0,s.jsxs)(i.ZP,{container:!0,children:[(0,s.jsxs)(i.ZP,{item:!0,xs:12,className:n.leftItems,children:[t,o]}),(0,s.jsx)(i.ZP,{item:!0,xs:12,className:n.helpText,children:r})]})})}))},81806:function(e,n,t){"use strict";var o=t(1413),r=t(45987),i=(t(72791),t(11135)),s=t(25787),a=t(80184),c=["classes","children"];n.Z=(0,s.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var n=e.classes,t=e.children,i=(0,r.Z)(e,c);return(0,a.jsx)("button",(0,o.Z)((0,o.Z)({},i),{},{className:n.root,children:t}))}))},75578:function(e,n,t){"use strict";var o=t(1413),r=t(72791),i=t(80184);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function t(t){return(0,i.jsx)(r.Suspense,{fallback:n,children:(0,i.jsx)(e,(0,o.Z)({},t))})}return t}},59114:function(e,n,t){"use strict";var o=t(4942),r=t(1413),i=(t(72791),t(63466)),s=t(74900),a=t(27391),c=t(25787),l=t(11135),d=t(23814),u=t(80184);n.Z=(0,c.Z)((function(e){return(0,l.Z)({searchField:(0,r.Z)({},d.qg.searchField),adornment:{}})}))((function(e){var n=e.placeholder,t=void 0===n?"":n,r=e.classes,c=e.onChange,l=e.adornmentPosition,d=void 0===l?"end":l,p=e.overrideClass,h=e.value,m=(0,o.Z)({disableUnderline:!0},"".concat(d,"Adornment"),(0,u.jsx)(i.Z,{position:d,className:r.adornment,children:(0,u.jsx)(s.Z,{})}));return(0,u.jsx)(a.Z,{placeholder:t,className:p||r.searchField,id:"search-resource",label:"",InputProps:m,onChange:function(e){c(e.target.value)},variant:"standard",value:h})}))},60191:function(e,n,t){"use strict";t.r(n);var o=t(93433),r=t(29439),i=t(1413),s=t(72791),a=t(11135),c=t(25787),l=t(61889),d=t(64554),u=t(40986),p=t(51047),h=t(21639),m=t(23814),f=t(81207),v=t(92983),Z=t(32291),x=t(23804),g=t(81806),j=t(74794),b=t(59114),S=t(56087),P=t(38442),C=t(75578),A=t(40603),y=t(45248),I=t(60364),F=t(87995),R=t(80184),_=(0,C.Z)(s.lazy((function(){return t.e(8896).then(t.bind(t,88896))}))),k=(0,C.Z)(s.lazy((function(){return t.e(9134).then(t.bind(t,39134))})));n.default=(0,c.Z)((function(e){return(0,a.Z)((0,i.Z)((0,i.Z)({tableBlock:(0,i.Z)((0,i.Z)({},m.VX.tableBlock),{},{marginTop:15})},m.OR),{},{searchField:(0,i.Z)((0,i.Z)({},m.qg.searchField),{},{maxWidth:380})},(0,m.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=e.history,i=(0,I.I0)(),a=(0,s.useState)(!1),c=(0,r.Z)(a,2),m=c[0],C=c[1],M=(0,s.useState)(!1),E=(0,r.Z)(M,2),z=E[0],O=E[1],D=(0,s.useState)([]),G=(0,r.Z)(D,2),w=G[0],N=G[1],T=(0,s.useState)(""),L=(0,r.Z)(T,2),U=L[0],B=L[1],V=(0,s.useState)(!1),H=(0,r.Z)(V,2),K=H[0],q=H[1],W=(0,s.useState)([]),Y=(0,r.Z)(W,2),J=Y[0],Q=Y[1];(0,s.useEffect)((function(){O(!0)}),[]),(0,s.useEffect)((function(){O(!0)}),[]);var X=(0,P.F)(S.C3,[S.Ft.ADMIN_LIST_GROUPS]),$=(0,P.F)(S.C3,[S.Ft.ADMIN_REMOVE_USER_FROM_GROUP]),ee=(0,P.F)(S.C3,[S.Ft.ADMIN_GET_GROUP]);(0,s.useEffect)((function(){if(z)if(X){f.Z.invoke("GET","/api/v1/groups").then((function(e){var n=[];null!==e.groups&&(n=e.groups.sort(h.V2)),N(n),O(!1)})).catch((function(e){i((0,F.Ih)(e)),O(!1)}))}else O(!1)}),[z,i,X]);var ne=w.filter((function(e){return e.includes(U)})),te=function(e){t.push("".concat(S.gA.GROUPS,"/").concat((0,y.LL)(e)))},oe=[{type:"view",onClick:te,disableButtonFunction:function(){return!ee}},{type:"edit",onClick:te,disableButtonFunction:function(){return!ee}}];return(0,R.jsxs)(s.Fragment,{children:[m&&(0,R.jsx)(_,{deleteOpen:m,selectedGroups:J,closeDeleteModalAndRefresh:function(e){C(!1),Q([]),e&&O(!0)}}),K&&(0,R.jsx)(k,{open:K,selectedGroups:J,selectedUser:null,closeModalAndRefresh:function(){q(!1)}}),(0,R.jsx)(Z.Z,{label:"Groups"}),(0,R.jsxs)(j.Z,{children:[(0,R.jsxs)(l.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,R.jsx)(P.s,{resource:S.C3,scopes:[S.Ft.ADMIN_LIST_GROUPS],errorProps:{disabled:!0},children:(0,R.jsx)(b.Z,{placeholder:"Search Groups",onChange:B,overrideClass:n.searchField,value:U})}),(0,R.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,R.jsx)(P.s,{resource:S.C3,scopes:[S.Ft.ADMIN_ATTACH_USER_OR_GROUP_POLICY],matchAll:!0,errorProps:{disabled:!0},children:(0,R.jsx)(A.Z,{tooltip:"Select Policy",onClick:function(){q(!0)},text:"Assign Policy",icon:(0,R.jsx)(p.v42,{}),color:"primary",disabled:J.length<1,variant:"outlined"})}),(0,R.jsx)(P.s,{resource:S.C3,scopes:[S.Ft.ADMIN_REMOVE_USER_FROM_GROUP],matchAll:!0,errorProps:{disabled:!0},children:(0,R.jsx)(A.Z,{tooltip:"Delete Selected",onClick:function(){C(!0)},text:"Delete Selected",icon:(0,R.jsx)(p.pJl,{}),color:"secondary",disabled:0===J.length,variant:"outlined"})}),(0,R.jsx)(P.s,{resource:S.C3,scopes:[S.Ft.ADMIN_ADD_USER_TO_GROUP,S.Ft.ADMIN_LIST_USERS],matchAll:!0,errorProps:{disabled:!0},children:(0,R.jsx)(A.Z,{tooltip:"Create Group",text:"Create Group",variant:"contained",color:"primary",icon:(0,R.jsx)(p.dtP,{}),onClick:function(){t.push("".concat(S.gA.GROUPS_ADD))}})})]})]}),z&&(0,R.jsx)(u.Z,{}),!z&&(0,R.jsxs)(s.Fragment,{children:[w.length>0&&(0,R.jsxs)(s.Fragment,{children:[(0,R.jsx)(l.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,R.jsx)(P.s,{resource:S.C3,scopes:[S.Ft.ADMIN_LIST_GROUPS],errorProps:{disabled:!0},children:(0,R.jsx)(v.Z,{itemActions:oe,columns:[{label:"Name",elementKey:""}],isLoading:z,selectedItems:J,onSelect:$?function(e){var n=e.target,t=(n=void 0===n?{}:n).value,r=void 0===t?"":t,i=n.checked,s=void 0!==i&&i,a=(0,o.Z)(J);return s?a.push(r):a=a.filter((function(e){return e!==r})),Q(a),a}:void 0,records:ne,entityName:"Groups",idField:""})})}),(0,R.jsx)(l.ZP,{item:!0,xs:12,marginTop:"25px",children:(0,R.jsx)(x.Z,{title:"Groups",iconComponent:(0,R.jsx)(p.wws,{}),help:(0,R.jsxs)(s.Fragment,{children:["A group can have one attached IAM policy, where all users with membership in that group inherit that policy. Groups support more simplified management of user permissions on the MinIO Tenant.",(0,R.jsx)("br",{}),(0,R.jsx)("br",{}),"You can learn more at our"," ",(0,R.jsx)("a",{href:"https://docs.min.io/minio/k8s/tutorials/group-management.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]}),0===w.length&&(0,R.jsx)(l.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,R.jsx)(l.ZP,{item:!0,xs:8,children:(0,R.jsx)(x.Z,{title:"Groups",iconComponent:(0,R.jsx)(p.oyc,{}),help:(0,R.jsxs)(s.Fragment,{children:["A group can have one attached IAM policy, where all users with membership in that group inherit that policy. Groups support more simplified management of user permissions on the MinIO Tenant.",(0,R.jsxs)(P.s,{resource:S.C3,scopes:[S.Ft.ADMIN_ADD_USER_TO_GROUP,S.Ft.ADMIN_LIST_USERS],matchAll:!0,children:[(0,R.jsx)("br",{}),(0,R.jsx)("br",{}),"To get started,"," ",(0,R.jsx)(g.Z,{onClick:function(){t.push("".concat(S.gA.GROUPS_ADD))},children:"Create a Group"}),"."]})]})})})})]})]})]})}))},21639:function(e,n,t){"use strict";t.d(n,{LQ:function(){return o},V2:function(){return i},g4:function(){return r}});var o=function(e,n){return e.accessKey>n.accessKey?1:e.accessKey<n.accessKey?-1:0},r=function(e,n){return e.name>n.name?1:e.name<n.name?-1:0},i=function(e,n){return e>n?1:e<n?-1:0}},26759:function(e,n,t){"use strict";var o=t(95318);n.Z=void 0;var r=o(t(45649)),i=t(80184),s=(0,r.default)((0,i.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");n.Z=s},70366:function(e,n,t){"use strict";var o=t(95318);n.Z=void 0;var r=o(t(45649)),i=t(80184),s=(0,r.default)((0,i.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");n.Z=s},97911:function(e,n,t){"use strict";var o=t(95318);n.Z=void 0;var r=o(t(45649)),i=t(80184),s=(0,r.default)((0,i.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");n.Z=s},94454:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var o=t(4942),r=t(63366),i=t(87462),s=t(72791),a=t(94419),c=t(12065),l=t(97278),d=t(76189),u=t(80184),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=t(14036),v=t(31402),Z=t(66934),x=t(21217);function g(e){return(0,x.Z)("MuiCheckbox",e)}var j=(0,t(75878).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),b=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],S=(0,Z.ZP)(l.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,f.Z)(t.color))]]}})((function(e){var n,t=e.theme,r=e.ownerState;return(0,i.Z)({color:t.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,c.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(n={},(0,o.Z)(n,"&.".concat(j.checked,", &.").concat(j.indeterminate),{color:t.palette[r.color].main}),(0,o.Z)(n,"&.".concat(j.disabled),{color:t.palette.action.disabled}),n))})),P=(0,u.jsx)(h,{}),C=(0,u.jsx)(p,{}),A=(0,u.jsx)(m,{}),y=s.forwardRef((function(e,n){var t,o,c=(0,v.Z)({props:e,name:"MuiCheckbox"}),l=c.checkedIcon,d=void 0===l?P:l,p=c.color,h=void 0===p?"primary":p,m=c.icon,Z=void 0===m?C:m,x=c.indeterminate,j=void 0!==x&&x,y=c.indeterminateIcon,I=void 0===y?A:y,F=c.inputProps,R=c.size,_=void 0===R?"medium":R,k=(0,r.Z)(c,b),M=j?I:Z,E=j?I:d,z=(0,i.Z)({},c,{color:h,indeterminate:j,size:_}),O=function(e){var n=e.classes,t=e.indeterminate,o=e.color,r={root:["root",t&&"indeterminate","color".concat((0,f.Z)(o))]},s=(0,a.Z)(r,g,n);return(0,i.Z)({},n,s)}(z);return(0,u.jsx)(S,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":j},F),icon:s.cloneElement(M,{fontSize:null!=(t=M.props.fontSize)?t:_}),checkedIcon:s.cloneElement(E,{fontSize:null!=(o=E.props.fontSize)?o:_}),ownerState:z,ref:n},k,{classes:O}))}))},63466:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var o=t(4942),r=t(63366),i=t(87462),s=t(72791),a=t(28182),c=t(94419),l=t(14036),d=t(20890),u=t(93840),p=t(52930),h=t(66934),m=t(21217);function f(e){return(0,m.Z)("MuiInputAdornment",e)}var v,Z=(0,t(75878).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=t(31402),g=t(80184),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,l.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,o.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),S=s.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiInputAdornment"}),o=t.children,h=t.className,m=t.component,Z=void 0===m?"div":m,S=t.disablePointerEvents,P=void 0!==S&&S,C=t.disableTypography,A=void 0!==C&&C,y=t.position,I=t.variant,F=(0,r.Z)(t,j),R=(0,p.Z)()||{},_=I;I&&R.variant,R&&!_&&(_=R.variant);var k=(0,i.Z)({},t,{hiddenLabel:R.hiddenLabel,size:R.size,disablePointerEvents:P,position:y,variant:_}),M=function(e){var n=e.classes,t=e.disablePointerEvents,o=e.hiddenLabel,r=e.position,i=e.size,s=e.variant,a={root:["root",t&&"disablePointerEvents",r&&"position".concat((0,l.Z)(r)),s,o&&"hiddenLabel",i&&"size".concat((0,l.Z)(i))]};return(0,c.Z)(a,f,n)}(k);return(0,g.jsx)(u.Z.Provider,{value:null,children:(0,g.jsx)(b,(0,i.Z)({as:Z,ownerState:k,className:(0,a.Z)(M.root,h),ref:n},F,{children:"string"!==typeof o||A?(0,g.jsxs)(s.Fragment,{children:["start"===y?v||(v=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):null,o]}):(0,g.jsx)(d.Z,{color:"text.secondary",children:o})}))})}))},26769:function(e,n,t){var o=t(39066),r=t(93629),i=t(43141);e.exports=function(e){return"string"==typeof e||!r(e)&&i(e)&&"[object String]"==o(e)}}}]);
//# sourceMappingURL=2555.bce2711c.chunk.js.map