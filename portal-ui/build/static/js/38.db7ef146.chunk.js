(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[38],{405:function(e,t,n){"use strict";var o=n(1),r=(n(2),n(444)),a=n(308),i=n(320),l=n(122),c=n(0);t.a=Object(i.a)((function(e){return Object(a.a)(Object(o.a)({},l.s))}))((function(e){var t=e.classes,n=e.className,o=void 0===n?"":n,a=e.children;return Object(c.jsx)("div",{className:t.contentSpacer,children:Object(c.jsx)(r.a,{container:!0,children:Object(c.jsx)(r.a,{item:!0,xs:12,className:o,children:a})})})}))},406:function(e,t,n){"use strict";var o=n(16),r=n(13),a=n(1),i=n(2),l=n.n(i),c=n(39),s=n.n(c),d=n(404),u=n.n(d),p=n(96),b=n(388),h=n(984),m=n(444),f=n(387),j=n(375),g=n(787),v=n(450),O=n(308),x=n(320),y=n(483),S=n(449),w=n.n(S),T=n(448),k=n.n(T),C=n(447),A=n.n(C),E=n(20),N=n(385),L="#081C42",_="#081C42",R=n(0),F=function(e){var t=e.active,n=void 0!==t&&t;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(R.jsx)("path",{fill:n?_:L,d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"})})},I=function(e){var t=e.active,n=void 0!==t&&t;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(R.jsx)("path",{fill:n?_:L,d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"})})},P=function(e){var t=e.active,n=void 0!==t&&t;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:Object(R.jsx)("path",{fill:n?_:L,d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"})})},M=function(e){var t=e.active,n=void 0!==t&&t;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(R.jsx)("path",{fill:n?_:L,d:"M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})})},q=n(131),z=n(132),B=n(23),K=n(133),D=Object(x.a)((function(){return Object(O.a)({spacing:{margin:"0 8px"},buttonDisabled:{"&.MuiButtonBase-root.Mui-disabled":{cursor:"not-allowed",filter:"grayscale(100%)",opacity:"30%"}}})}))((function(e){var t=e.type,n=e.onClick,o=e.valueToSend,r=e.idField,a=e.selected,i=e.to,l=e.sendOnlyId,c=void 0!==l&&l,s=e.disabled,d=void 0!==s&&s,p=e.classes,h=e.label,m=c?o[r]:o,f="string"===typeof t?function(e,t){switch(e){case"view":case"preview":return Object(R.jsx)(B.Nb,{});case"edit":return Object(R.jsx)(q.default,{});case"delete":return Object(R.jsx)(z.a,{});case"description":return Object(R.jsx)(B.pb,{});case"share":return Object(R.jsx)(B.bc,{});case"cloud":return Object(R.jsx)(F,{active:t});case"console":return Object(R.jsx)(I,{active:t});case"download":return Object(R.jsx)(K.default,{});case"disable":return Object(R.jsx)(P,{active:t});case"format":return Object(R.jsx)(M,{active:t})}return null}(t,a):t,j=Object(R.jsx)(b.a,{"aria-label":"string"===typeof t?t:"",size:"small",className:"".concat(p.spacing," ").concat(d?p.buttonDisabled:""),disabled:d,onClick:n?function(e){e.stopPropagation(),d?e.preventDefault():n(m)}:function(){return null},children:f});return h&&""!==h&&(j=Object(R.jsx)(N.a,{title:h,children:j})),n?j:u()(i)?d?j:Object(R.jsx)(E.a,{to:"".concat(i,"/").concat(m),onClick:function(e){e.stopPropagation()},children:j}):null})),H=n(407),Q=n(53),W=n(122),U=function(e,t,n,o,a,l,c,d,p,b,h){var m=function(e,t,n,o,a,i,l){var c=Object(r.a)(e);i&&(c=e.filter((function(e){return l.includes(e.elementKey)})));var s=t;return o&&(s-=45),a&&(s-=n),c.reduce((function(e,t){return t.width?e-t.width:e}),s)/c.filter((function(e){return!e.width})).length}(e,t,n,o,a,d,p);return e.map((function(e,t){if(d&&!p.includes(e.elementKey))return null;var n=!e.enableSort||!e.enableSort;return Object(R.jsx)(v.b,{dataKey:e.elementKey,headerClassName:"titleHeader ".concat(e.headerTextAlign?"text-".concat(e.headerTextAlign):""),headerRenderer:function(){return Object(R.jsxs)(i.Fragment,{children:[b===e.elementKey&&Object(R.jsx)(i.Fragment,{children:"ASC"===h?Object(R.jsx)(A.a,{}):Object(R.jsx)(k.a,{})}),e.label]})},className:e.contentTextAlign?"text-".concat(e.contentTextAlign):"",cellRenderer:function(t){var n=t.rowData,o=!!l&&l.includes(u()(n)?n:n[c]);return function(e,t,n){var o=u()(e)?e:s()(e,t.elementKey,null),r=t.renderFullObject?e:o,a=t.renderFunction?t.renderFunction(r):r;return Object(R.jsx)(i.Fragment,{children:Object(R.jsx)("span",{className:n?"selected":"",children:a})})}(n,e,o)},width:e.width||m,disableSort:n,defaultSortDirection:"ASC"},"col-tb-".concat(t.toString()))}))};t.a=Object(x.a)((function(){return Object(O.a)(Object(a.a)(Object(a.a)({paper:{display:"flex",overflow:"auto",flexDirection:"column",padding:"8px 16px",boxShadow:"none",border:"#EAEDEE 1px solid",borderRadius:3,minHeight:200,overflowY:"scroll",position:"relative","&::-webkit-scrollbar":{width:3,height:3}},noBackground:{backgroundColor:"transparent",border:0},disabled:{backgroundColor:"#fbfafa",color:"#cccccc"},defaultPaperHeight:{height:"calc(100vh - 205px)"},loadingBox:{paddingTop:"100px",paddingBottom:"100px"},overlayColumnSelection:{position:"absolute",right:0,top:0},popoverContent:{maxHeight:250,overflowY:"auto",padding:"0 10px 10px"},shownColumnsLabel:{color:"#9c9c9c",fontSize:12,padding:10,borderBottom:"#eaeaea 1px solid",width:"100%"},checkAllWrapper:{marginTop:-16},"@global":{".rowLine":{borderBottom:"1px solid ".concat("#9c9c9c80"),height:40,color:"#393939",fontSize:14,transitionDuration:.3,"&:focus":{outline:"initial"},"&:hover:not(.ReactVirtualized__Table__headerRow)":{userSelect:"none",backgroundColor:"#ececec",fontWeight:600,"&.canClick":{cursor:"pointer"},"&.canSelectText":{userSelect:"text"}},"& .selected":{color:"#081C42",fontWeight:600}},".headerItem":{userSelect:"none",fontWeight:700,fontSize:14,fontStyle:"initial",display:"flex",alignItems:"center",outline:"none"},".ReactVirtualized__Table__headerRow":{fontWeight:700,fontSize:14,borderColor:"#39393980",textTransform:"initial"},".optionsAlignment":{textAlign:"center","& .min-icon":{width:16,height:16}},".text-center":{textAlign:"center"},".text-right":{textAlign:"right"},".progress-enabled":{paddingTop:3,display:"inline-block",margin:"0 10px",position:"relative",width:18,height:18},".progress-enabled > .MuiCircularProgress-root":{position:"absolute",left:0,top:3}}},W.d),W.u))}))((function(e){var t=e.itemActions,n=e.columns,r=e.onSelect,a=e.records,c=e.isLoading,s=e.loadingMessage,d=void 0===s?Object(R.jsx)(p.a,{component:"h3",children:"Loading..."}):s,O=e.entityName,x=e.selectedItems,S=e.idField,T=e.classes,k=e.radioSelection,C=void 0!==k&&k,A=e.customEmptyMessage,E=void 0===A?"":A,N=e.customPaperHeight,L=void 0===N?"":N,_=e.noBackground,F=void 0!==_&&_,I=e.columnsSelector,P=void 0!==I&&I,M=e.textSelectable,q=void 0!==M&&M,z=e.columnsShown,B=void 0===z?[]:z,K=e.onColumnChange,W=void 0===K?function(e,t){}:K,V=e.infiniteScrollConfig,J=e.sortConfig,Y=e.autoScrollToBottom,G=void 0!==Y&&Y,X=e.disabled,Z=void 0!==X&&X,$=e.onSelectAll,ee=Object(i.useState)(!1),te=Object(o.a)(ee,2),ne=te[0],oe=te[1],re=l.a.useState(null),ae=Object(o.a)(re,2),ie=ae[0],le=ae[1],ce=t?t.find((function(e){return"view"===e.type})):null,se=function(e){oe(!ne),le(e.currentTarget)},de=function(){oe(!1),le(null)};return Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsxs)(f.a,{className:"".concat(T.paper," ").concat(F?T.noBackground:"","\n        ").concat(Z?T.disabled:""," \n        ").concat(""!==L?L:T.defaultPaperHeight),children:[c&&Object(R.jsxs)(m.a,{container:!0,className:T.loadingBox,children:[Object(R.jsx)(m.a,{item:!0,xs:12,style:{textAlign:"center"},children:d}),Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(j.a,{})})]}),P&&!c&&a.length>0&&Object(R.jsx)("div",{className:T.overlayColumnSelection,children:function(e){return Object(R.jsxs)(i.Fragment,{children:[Object(R.jsx)(b.a,{"aria-describedby":"columnsSelector",color:"primary",onClick:se,size:"large",children:Object(R.jsx)(w.a,{fontSize:"inherit"})}),Object(R.jsxs)(h.a,{anchorEl:ie,id:"columnsSelector",open:ne,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:de,children:[Object(R.jsx)("div",{className:T.shownColumnsLabel,children:"Shown Columns"}),Object(R.jsx)("div",{className:T.popoverContent,children:e.map((function(e){return Object(R.jsx)(H.a,{label:e.label,checked:B.includes(e.elementKey),onChange:function(t){W(e.elementKey,t.target.checked)},id:"chbox-".concat(e.label),name:"chbox-".concat(e.label),value:e.label},"tableColumns-".concat(e.label))}))})]})]})}(n)}),a&&!c&&a.length>0?Object(R.jsx)(v.c,{isRowLoaded:function(e){var t=e.index;return!!a[t]},loadMoreRows:V?V.loadMoreRecords:function(){return new Promise((function(){return!0}))},rowCount:V?V.recordsCount:a.length,children:function(e){var o=e.onRowsRendered,l=e.registerChild;return Object(R.jsx)(v.a,{children:function(e){var c=e.width,s=e.height,d=function(e,t){var n=45*t+15;return n<80?80:n>e?e:n}(c,t?t.filter((function(e){return"view"!==e.type})).length:0),p=!(!r||!x),b=!!(t&&t.length>1||t&&1===t.length&&"view"!==t[0].type);return Object(R.jsxs)(v.d,{ref:l,disableHeader:!1,headerClassName:"headerItem",headerHeight:40,height:s,noRowsRenderer:function(){return Object(R.jsx)(i.Fragment,{children:""!==E?E:"There are no ".concat(O," yet.")})},overscanRowCount:10,rowHeight:40,width:c,rowCount:a.length,rowGetter:function(e){var t=e.index;return a[t]},onRowClick:function(e){!function(e){if(ce){var t=ce.sendOnlyId?e[S]:e,n=!1;if(ce.disableButtonFunction&&ce.disableButtonFunction(t)&&(n=!0),ce.to&&!n)return void Q.a.push("".concat(ce.to,"/").concat(t));ce.onClick&&!n&&ce.onClick(t)}}(e.rowData)},rowClassName:"rowLine ".concat(ce?"canClick":""," ").concat(!ce&&q?"canSelectText":""),onRowsRendered:o,sort:J?J.triggerSort:void 0,sortBy:J?J.currentSort:void 0,sortDirection:J?J.currentDirection:void 0,scrollToIndex:G?a.length-1:-1,children:[p&&Object(R.jsx)(v.b,{headerRenderer:function(){return Object(R.jsx)(i.Fragment,{children:$?Object(R.jsx)("div",{className:T.checkAllWrapper,children:Object(R.jsx)(H.a,{label:"",onChange:$,value:"all",id:"selectAll",name:"selectAll",checked:(null===x||void 0===x?void 0:x.length)===a.length})}):Object(R.jsx)(i.Fragment,{children:"Select"})})},dataKey:"select-".concat(S),width:45,disableSort:!0,cellRenderer:function(e){var t=e.rowData,n=!!x&&x.includes(u()(t)?t:t[S]);return Object(R.jsx)(g.a,{value:u()(t)?t:t[S],color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:n,onChange:r,onClick:function(e){e.stopPropagation()},checkedIcon:Object(R.jsx)("span",{className:C?T.radioSelectedIcon:T.checkedIcon}),icon:Object(R.jsx)("span",{className:C?T.radioUnselectedIcon:T.unCheckedIcon})})}}),U(n,c,d,p,b,x||[],S,P,B,J?J.currentSort:"",J?J.currentDirection:void 0),b&&Object(R.jsx)(v.b,{headerRenderer:function(){return Object(R.jsx)(i.Fragment,{children:"Options"})},dataKey:S,width:d,headerClassName:"optionsAlignment",className:"optionsAlignment",cellRenderer:function(e){var n=e.rowData,o=!!x&&x.includes(u()(n)?n:n[S]);return function(e,t,n,o){return e.map((function(e,r){if("view"===e.type)return null;var a="string"===typeof t?t:t[o],i=!1;return e.disableButtonFunction&&e.disableButtonFunction(a)&&(i=!0),e.showLoaderFunction&&e.showLoaderFunction(a)?Object(R.jsx)("div",{className:"progress-enabled",children:Object(R.jsx)(y.a,{color:"primary",size:18,variant:"indeterminate"},"actions-loader-".concat(e.type,"-").concat(r.toString()))}):Object(R.jsx)(D,{label:e.label,type:e.type,onClick:e.onClick,to:e.to,valueToSend:t,selected:n,idField:o,sendOnlyId:!!e.sendOnlyId,disabled:i},"actions-".concat(e.type,"-").concat(r.toString()))}))}(t||[],n,o,S)}})]})}})}}):Object(R.jsx)(i.Fragment,{children:!c&&Object(R.jsx)("div",{children:""!==E?E:"There are no ".concat(O," yet.")})})]})})}))},407:function(e,t,n){"use strict";var o=n(1),r=n(2),a=n.n(r),i=n(444),l=n(787),c=n(822),s=n(385),d=n(308),u=n(320),p=n(122),b=n(123),h=n(0);t.a=Object(u.a)((function(e){return Object(d.a)(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},p.i),p.E),p.d),{},{fieldContainer:Object(o.a)(Object(o.a)({},p.i.fieldContainer),{},{display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"15px 0",marginBottom:0,flexBasis:"initial"})}))}))((function(e){var t=e.label,n=e.onChange,o=e.value,r=e.id,d=e.name,u=e.checked,p=void 0!==u&&u,m=e.disabled,f=void 0!==m&&m,j=e.tooltip,g=void 0===j?"":j,v=e.classes;return Object(h.jsx)(a.a.Fragment,{children:Object(h.jsxs)(i.a,{item:!0,xs:12,className:v.fieldContainer,children:[Object(h.jsx)("div",{children:Object(h.jsx)(l.a,{name:d,id:r,value:o,color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:p,onChange:n,checkedIcon:Object(h.jsx)("span",{className:v.checkedIcon}),icon:Object(h.jsx)("span",{className:v.unCheckedIcon}),disabled:f})}),""!==t&&Object(h.jsxs)(c.a,{htmlFor:r,className:v.noMinWidthLabel,children:[Object(h.jsx)("span",{children:t}),""!==g&&Object(h.jsx)("div",{className:v.tooltipContainer,children:Object(h.jsx)(s.a,{title:g,placement:"top-start",children:Object(h.jsx)("div",{className:v.tooltip,children:Object(h.jsx)(b.a,{})})})})]})]})})}))},413:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return o}))},420:function(e,t,n){"use strict";n(2);var o=n(308),r=n(320),a=n(444),i=n(0);t.a=Object(r.a)((function(e){return Object(o.a)({root:{border:"1px solid rgb(234, 237, 238)",borderRadius:5,paddingTop:10,paddingLeft:40,paddingRight:40,paddingBottom:40,marginTop:10,marginBottom:10,backgroundColor:"#fbfafa"},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:20,display:"flex",alignItems:"center","& .min-icon":{width:"2.5rem",marginRight:".8rem"}},helpText:{fontSize:16}})}))((function(e){var t=e.classes,n=e.iconComponent,o=e.title,r=e.help;return Object(i.jsx)("div",{className:t.root,children:Object(i.jsxs)(a.a,{container:!0,children:[Object(i.jsxs)(a.a,{item:!0,xs:12,className:t.leftItems,children:[n,o]}),Object(i.jsx)(a.a,{item:!0,xs:12,className:t.helpText,children:r})]})})}))},430:function(e,t,n){"use strict";var o=n(3),r=n(4),a=n(2),i=(n(12),n(8)),l=n(94),c=n(315),s=n(9),d=n(14),u=n(935),p=n(936),b=n(982),h=n(822),m=n(983),f=n(5),j=n(410),g=n(397),v=n(11),O=n(70),x=n(95);function y(e){return Object(O.a)("MuiFormHelperText",e)}var S=Object(x.a)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),w=n(0),T=["children","className","component","disabled","error","filled","focused","margin","required","variant"],k=Object(s.a)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.size&&t["size".concat(Object(v.a)(n.size))],n.contained&&t.contained,n.filled&&t.filled]}})((function(e){var t,n=e.theme,r=e.ownerState;return Object(o.a)({color:n.palette.text.secondary},n.typography.caption,(t={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},Object(f.a)(t,"&.".concat(S.disabled),{color:n.palette.text.disabled}),Object(f.a)(t,"&.".concat(S.error),{color:n.palette.error.main}),t),"small"===r.size&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})})),C=a.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiFormHelperText"}),a=n.children,c=n.className,s=n.component,u=void 0===s?"p":s,p=Object(r.a)(n,T),b=Object(g.a)(),h=Object(j.a)({props:n,muiFormControl:b,states:["variant","size","disabled","error","filled","focused","required"]}),m=Object(o.a)({},n,{component:u,contained:"filled"===h.variant||"outlined"===h.variant,variant:h.variant,size:h.size,disabled:h.disabled,error:h.error,filled:h.filled,focused:h.focused,required:h.required}),f=function(e){var t=e.classes,n=e.contained,o=e.size,r=e.disabled,a=e.error,i=e.filled,c=e.focused,s=e.required,d={root:["root",r&&"disabled",a&&"error",o&&"size".concat(Object(v.a)(o)),n&&"contained",c&&"focused",i&&"filled",s&&"required"]};return Object(l.a)(d,y,t)}(m);return Object(w.jsx)(k,Object(o.a)({as:u,ownerState:m,className:Object(i.a)(f.root,c),ref:t},p,{children:" "===a?Object(w.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):a}))})),A=n(972);function E(e){return Object(O.a)("MuiTextField",e)}Object(x.a)("MuiTextField",["root"]);var N=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],L={standard:u.a,filled:p.a,outlined:b.a},_=Object(s.a)(m.a,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),R=a.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiTextField"}),s=n.autoComplete,u=n.autoFocus,p=void 0!==u&&u,b=n.children,m=n.className,f=n.color,j=void 0===f?"primary":f,g=n.defaultValue,v=n.disabled,O=void 0!==v&&v,x=n.error,y=void 0!==x&&x,S=n.FormHelperTextProps,T=n.fullWidth,k=void 0!==T&&T,R=n.helperText,F=n.id,I=n.InputLabelProps,P=n.inputProps,M=n.InputProps,q=n.inputRef,z=n.label,B=n.maxRows,K=n.minRows,D=n.multiline,H=void 0!==D&&D,Q=n.name,W=n.onBlur,U=n.onChange,V=n.onFocus,J=n.placeholder,Y=n.required,G=void 0!==Y&&Y,X=n.rows,Z=n.select,$=void 0!==Z&&Z,ee=n.SelectProps,te=n.type,ne=n.value,oe=n.variant,re=void 0===oe?"outlined":oe,ae=Object(r.a)(n,N),ie=Object(o.a)({},n,{autoFocus:p,color:j,disabled:O,error:y,fullWidth:k,multiline:H,required:G,select:$,variant:re}),le=function(e){var t=e.classes;return Object(l.a)({root:["root"]},E,t)}(ie);var ce={};if("outlined"===re&&(I&&"undefined"!==typeof I.shrink&&(ce.notched=I.shrink),z)){var se,de=null!=(se=null==I?void 0:I.required)?se:G;ce.label=Object(w.jsxs)(a.Fragment,{children:[z,de&&"\xa0*"]})}$&&(ee&&ee.native||(ce.id=void 0),ce["aria-describedby"]=void 0);var ue=Object(c.a)(F),pe=R&&ue?"".concat(ue,"-helper-text"):void 0,be=z&&ue?"".concat(ue,"-label"):void 0,he=L[re],me=Object(w.jsx)(he,Object(o.a)({"aria-describedby":pe,autoComplete:s,autoFocus:p,defaultValue:g,fullWidth:k,multiline:H,name:Q,rows:X,maxRows:B,minRows:K,type:te,value:ne,id:ue,inputRef:q,onBlur:W,onChange:U,onFocus:V,placeholder:J,inputProps:P},ce,M));return Object(w.jsxs)(_,Object(o.a)({className:Object(i.a)(le.root,m),disabled:O,error:y,fullWidth:k,ref:t,required:G,color:j,variant:re,ownerState:ie},ae,{children:[z&&Object(w.jsx)(h.a,Object(o.a)({htmlFor:ue,id:be},I,{children:z})),$?Object(w.jsx)(A.a,Object(o.a)({"aria-describedby":pe,id:ue,labelId:be,value:ne,input:me},ee,{children:b})):me,R&&Object(w.jsx)(C,Object(o.a)({id:pe},S,{children:R}))]}))}));t.a=R},434:function(e,t,n){"use strict";var o=n(1),r=n(5),a=n(413),i=(n(2),n(308)),l=n(320),c=n(388),s=n(385),d=n(8),u=n(0),p=["classes","children","variant","tooltip"];t.a=Object(l.a)((function(e){return Object(i.a)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var t=e.classes,n=e.children,i=e.variant,l=void 0===i?"outlined":i,b=e.tooltip,h=Object(a.a)(e,p),m=Object(u.jsx)(c.a,Object(o.a)(Object(o.a)({},h),{},{className:Object(d.a)(t.root,Object(r.a)({},t.contained,"contained"===l)),children:n}));return b&&""!==b?Object(u.jsx)(s.a,{title:b,children:Object(u.jsx)("span",{children:m})}):m}))},443:function(e,t,n){"use strict";var o=n(5),r=n(1),a=(n(2),n(461)),i=n(136),l=n(430),c=n(320),s=n(308),d=n(122),u=n(0);t.a=Object(c.a)((function(e){return Object(s.a)({searchField:Object(r.a)({},d.v.searchField),adornment:{}})}))((function(e){var t=e.placeholder,n=void 0===t?"":t,r=e.classes,c=e.onChange,s=e.adornmentPosition,d=void 0===s?"end":s,p=e.overrideClass,b=Object(o.a)({disableUnderline:!0},"".concat(d,"Adornment"),Object(u.jsx)(a.a,{position:d,className:r.adornment,children:Object(u.jsx)(i.default,{})}));return Object(u.jsx)(l.a,{placeholder:n,className:p||r.searchField,id:"search-resource",label:"",InputProps:b,onChange:function(e){c(e.target.value)},variant:"standard"})}))},461:function(e,t,n){"use strict";var o=n(5),r=n(4),a=n(3),i=n(2),l=(n(12),n(8)),c=n(94),s=n(11),d=n(96),u=n(439),p=n(397),b=n(9),h=n(70),m=n(95);function f(e){return Object(h.a)("MuiInputAdornment",e)}var j=Object(m.a)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=n(14),v=n(0),O=["children","className","component","disablePointerEvents","disableTypography","position","variant"],x=Object(b.a)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat(Object(s.a)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(a.a)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===n.variant&&Object(o.a)({},"&.".concat(j.positionStart,"&:not(.").concat(j.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),y=i.forwardRef((function(e,t){var n=Object(g.a)({props:e,name:"MuiInputAdornment"}),o=n.children,b=n.className,h=n.component,m=void 0===h?"div":h,j=n.disablePointerEvents,y=void 0!==j&&j,S=n.disableTypography,w=void 0!==S&&S,T=n.position,k=n.variant,C=Object(r.a)(n,O),A=Object(p.a)()||{},E=k;k&&A.variant,A&&!E&&(E=A.variant);var N=Object(a.a)({},n,{hiddenLabel:A.hiddenLabel,size:A.size,disablePointerEvents:y,position:T,variant:E}),L=function(e){var t=e.classes,n=e.disablePointerEvents,o=e.hiddenLabel,r=e.position,a=e.size,i=e.variant,l={root:["root",n&&"disablePointerEvents",r&&"position".concat(Object(s.a)(r)),i,o&&"hiddenLabel",a&&"size".concat(Object(s.a)(a))]};return Object(c.a)(l,f,t)}(N);return Object(v.jsx)(u.a.Provider,{value:null,children:Object(v.jsx)(x,Object(a.a)({as:m,ownerState:N,className:Object(l.a)(L.root,b),ref:t},C,{children:"string"!==typeof o||w?Object(v.jsxs)(i.Fragment,{children:["start"===T?Object(v.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,o]}):Object(v.jsx)(d.a,{color:"text.secondary",children:o})}))})}));t.a=y},502:function(e,t,n){"use strict";var o=n(1),r=n(413),a=(n(2),n(308)),i=n(320),l=n(0),c=["classes","children"];t.a=Object(i.a)((function(e){return Object(a.a)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var t=e.classes,n=e.children,a=Object(r.a)(e,c);return Object(l.jsx)("button",Object(o.a)(Object(o.a)({},a),{},{className:t.root,children:n}))}))},651:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"a",(function(){return v}));var o,r=n(5),a="notify_postgres",i="notify_mysql",l="notify_kafka",c="notify_amqp",s="notify_mqtt",d="notify_redis",u="notify_nats",p="notify_elasticsearch",b="notify_webhook",h="notify_nsq",m=function(e){return e.map((function(e){return{service_name:"".concat(e.service,":").concat(e.account_id),status:e.status}}))},f=[{actionTrigger:a,targetTitle:"Postgres SQL",logo:"/postgres-logo.svg"},{actionTrigger:l,targetTitle:"Kafka",logo:"/kafka-logo.svg"},{actionTrigger:c,targetTitle:"AMQP",logo:"/amqp-logo.svg"},{actionTrigger:s,targetTitle:"MQTT",logo:"/mqtt-logo.svg"},{actionTrigger:d,targetTitle:"Redis",logo:"/redis-logo.svg"},{actionTrigger:u,targetTitle:"NATS",logo:"/nats-logo.svg"},{actionTrigger:i,targetTitle:"Mysql",logo:"/mysql-logo.svg"},{actionTrigger:p,targetTitle:"Elastic Search",logo:"/elasticsearch-logo.svg"},{actionTrigger:b,targetTitle:"Webhook",logo:"/webhooks-logo.svg"},{actionTrigger:h,targetTitle:"NSQ",logo:"/nsq-logo.svg"}],j=[{name:"queue-dir",label:"Queue Directory",required:!0,tooltip:"staging dir for undelivered messages e.g. '/home/events'",type:"string",placeholder:"Enter Queue Directory"},{name:"queue-limit",label:"Queue Limit",required:!1,tooltip:"maximum limit for undelivered messages, defaults to '10000'",type:"number",placeholder:"Enter Queue Limit"},{name:"comment",label:"Comment",required:!1,type:"comment",placeholder:"Enter Comment"}],g=function(e){return e.filter((function(e){return""!==e.value}))},v=(o={},Object(r.a)(o,l,[{name:"brokers",label:"Brokers",required:!0,tooltip:"Comma separated list of Kafka broker addresses",type:"string",placeholder:"Enter Brokers"},{name:"topic",label:"Topic",tooltip:"Kafka topic used for bucket notifications",type:"string",placeholder:"Enter Topic"},{name:"sasl_username",label:"SASL Username",tooltip:"Username for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Username"},{name:"sasl_password",label:"SASL Password",tooltip:"Password for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Password"},{name:"sasl_mechanism",label:"SASL Mechanism",tooltip:"SASL authentication mechanism, default 'PLAIN'",type:"string"},{name:"tls_client_auth",label:"TLS Client Auth",tooltip:"Client Auth determines the Kafka server's policy for TLS client auth",type:"string",placeholder:"Enter TLS Client Auth"},{name:"sasl",label:"SASL",tooltip:"Set to 'on' to enable SASL authentication",type:"on|off"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS skip verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"client_tls_cert",label:"client TLS cert",tooltip:"Path to client certificate for mTLS auth",type:"path",placeholder:"Enter TLS Client Cert"},{name:"client_tls_key",label:"client TLS key",tooltip:"Path to client key for mTLS auth",type:"path",placeholder:"Enter TLS Client Key"},{name:"version",label:"Version",tooltip:"Specify the version of the Kafka cluster e.g '2.2.0'",type:"string",placeholder:"Enter Kafka Version"}].concat(j)),Object(r.a)(o,c,[{name:"url",required:!0,label:"URL",tooltip:"AMQP server endpoint e.g. `amqp://myuser:mypassword@localhost:5672`",type:"url"},{name:"exchange",label:"Exchange",tooltip:"Name of the AMQP exchange",type:"string",placeholder:"Enter Exchange"},{name:"exchange_type",label:"Exchange Type",tooltip:"AMQP exchange type",type:"string",placeholder:"Enter Exchange Type"},{name:"routing_key",label:"Routing Key",tooltip:"Routing key for publishing",type:"string",placeholder:"Enter Routing Key"},{name:"mandatory",label:"Mandatory",tooltip:"Quietly ignore undelivered messages when set to 'off', default is 'on'",type:"on|off"},{name:"durable",label:"Durable",tooltip:"Persist queue across broker restarts when set to 'on', default is 'off'",type:"on|off"},{name:"no_wait",label:"No Wait",tooltip:"Non-blocking message delivery when set to 'on', default is 'off'",type:"on|off"},{name:"internal",label:"Internal",tooltip:"Set to 'on' for exchange to be not used directly by publishers, but only when bound to other exchanges",type:"on|off"},{name:"auto_deleted",label:"Auto Deleted",tooltip:"Auto delete queue when set to 'on', when there are no consumers",type:"on|off"},{name:"delivery_mode",label:"Delivery Mode",tooltip:"Set to '1' for non-persistent or '2' for persistent queue",type:"number",placeholder:"Enter Delivery Mode"}].concat(j)),Object(r.a)(o,d,[{name:"address",required:!0,label:"Address",tooltip:"Redis server's address. For example: `localhost:6379`",type:"address",placeholder:"Enter Address"},{name:"key",required:!0,label:"Key",tooltip:"Redis key to store/update events, key is auto-created",type:"string",placeholder:"Enter Key"},{name:"password",label:"Password",tooltip:"Redis server password",type:"string",placeholder:"Enter Password"}].concat(j)),Object(r.a)(o,s,[{name:"broker",required:!0,label:"Broker",tooltip:"MQTT server endpoint e.g. `tcp://localhost:1883`",type:"uri",placeholder:"Enter Brokers"},{name:"topic",required:!0,label:"Topic",tooltip:"name of the MQTT topic to publish",type:"string",placeholder:"Enter Topic"},{name:"username",label:"Username",tooltip:"MQTT username",type:"string",placeholder:"Enter Username"},{name:"password",label:"Password",tooltip:"MQTT password",type:"string",placeholder:"Enter Password"},{name:"qos",label:"QOS",tooltip:"Set the quality of service priority, defaults to '0'",type:"number",placeholder:"Enter QOS"},{name:"keep_alive_interval",label:"Keep Alive Interval",tooltip:"Keep-alive interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Keep Alive Internal"},{name:"reconnect_interval",label:"Reconnect Interval",tooltip:"Reconnect interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Reconnect Interval"}].concat(j)),Object(r.a)(o,u,[{name:"address",required:!0,label:"Address",tooltip:"NATS server address e.g. '0.0.0.0:4222'",type:"address",placeholder:"Enter Address"},{name:"subject",required:!0,label:"Subject",tooltip:"NATS subscription subject",type:"string",placeholder:"Enter NATS Subject"},{name:"username",label:"Username",tooltip:"NATS username",type:"string",placeholder:"Enter NATS Username"},{name:"password",label:"Password",tooltip:"NATS password",type:"string",placeholder:"Enter NATS password"},{name:"token",label:"Token",tooltip:"NATS token",type:"string",placeholder:"Enter NATS token"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"ping_interval",label:"Ping Interval",tooltip:"Client ping commands interval in s,m,h,d. Disabled by default",type:"duration",placeholder:"Enter Ping Interval"},{name:"streaming",label:"Streaming",tooltip:"Set to 'on', to use streaming NATS server",type:"on|off"},{name:"streaming_async",label:"Streaming async",tooltip:"Set to 'on', to enable asynchronous publish",type:"on|off"},{name:"streaming_max_pub_acks_in_flight",label:"Streaming max publish ACKS in flight",tooltip:"Number of messages to publish without waiting for ACKs",type:"number",placeholder:"Enter Streaming in flight value"},{name:"streaming_cluster_id",label:"Streaming Cluster ID",tooltip:"Unique ID for NATS streaming cluster",type:"string",placeholder:"Enter Streaming Cluster ID"},{name:"cert_authority",label:"Cert Authority",tooltip:"Path to certificate chain of the target NATS server",type:"string",placeholder:"Enter Cert Authority"},{name:"client_cert",label:"Client Cert",tooltip:"Client cert for NATS mTLS auth",type:"string",placeholder:"Enter Client Cert"},{name:"client_key",label:"Client Key",tooltip:"Client cert key for NATS mTLS auth",type:"string",placeholder:"Enter Client Key"}].concat(j)),Object(r.a)(o,p,[{name:"url",required:!0,label:"URL",tooltip:"Elasticsearch server's address, with optional authentication info",type:"url",placeholder:"Enter URL"},{name:"index",required:!0,label:"Index",tooltip:"Elasticsearch index to store/update events, index is auto-created",type:"string",placeholder:"Enter Index"},{name:"format",required:!0,label:"Format",tooltip:"'namespace' reflects current bucket/object list and 'access' reflects a journal of object operations, defaults to 'namespace'",type:"enum",placeholder:"Enter Format"}].concat(j)),Object(r.a)(o,b,[{name:"endpoint",required:!0,label:"Endpoint",tooltip:"webhook server endpoint e.g. http://localhost:8080/minio/events",type:"url",placeholder:"Enter Endpoint"},{name:"auth_token",label:"Auth Token",tooltip:"opaque string or JWT authorization token",type:"string",placeholder:"Enter auth_token"}].concat(j)),Object(r.a)(o,h,[{name:"nsqd_address",required:!0,label:"NSQD Address",tooltip:"NSQ server address e.g. '127.0.0.1:4150'",type:"address",placeholder:"Enter nsqd_address"},{name:"topic",required:!0,label:"Topic",tooltip:"NSQ topic",type:"string",placeholder:"Enter Topic"},{name:"tls",label:"TLS",tooltip:"set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'trust server TLS without verification, defaults to "on" (verify)',type:"on|off"}].concat(j)),o)},874:function(e,t,n){"use strict";n.r(t);var o=n(16),r=n(1),a=n(2),i=n(41),l=n(308),c=n(320),s=n(375),d=n(51),u=n(444),p=n(875),b=n.n(p),h=n(386),m=n(651),f=n(23),j=n(406),g=n(32),v=n(122),O=n(52),x=n(138),y=n(53),S=n(420),w=n(434),T=n(502),k=n(405),C=n(443),A=n(0),E={setErrorSnackMessage:g.e},N=Object(i.b)(null,E);t.default=Object(c.a)((function(e){return Object(l.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},v.a),v.y),Object(v.f)(e.spacing(4))),{},{twHeight:{minHeight:400},tableBlock:Object(r.a)({},v.B.tableBlock),rightActionItems:{display:"flex","& button":{whiteSpace:"nowrap"}},searchField:Object(r.a)(Object(r.a)({},v.v.searchField),{},{maxWidth:380})}))}))(N((function(e){var t=e.classes,n=e.setErrorSnackMessage,r=Object(a.useState)([]),i=Object(o.a)(r,2),l=i[0],c=i[1],p=Object(a.useState)(""),g=Object(o.a)(p,2),v=g[0],E=g[1],N=Object(a.useState)(!1),L=Object(o.a)(N,2),_=L[0],R=L[1];Object(a.useEffect)((function(){if(_){O.a.invoke("GET","/api/v1/admin/notification_endpoints").then((function(e){var t=[];null!==e.notification_endpoints&&(t=e.notification_endpoints),c(Object(m.b)(t)),R(!1)})).catch((function(e){n(e),R(!1)}))}}),[_,n]),Object(a.useEffect)((function(){R(!0)}),[]);var F=l.filter((function(e){return""===v||e.service_name.indexOf(v)>=0}));return Object(A.jsx)(a.Fragment,{children:Object(A.jsxs)(k.a,{children:[Object(A.jsxs)(u.a,{item:!0,xs:12,className:t.actionsTray,children:[Object(A.jsx)(C.a,{placeholder:"Search target",onChange:E,overrideClass:t.searchField}),Object(A.jsxs)("div",{className:t.rightActionItems,children:[Object(A.jsx)(w.a,{color:"primary","aria-label":"Refresh List",onClick:function(){R(!0)},size:"large",children:Object(A.jsx)(x.default,{})}),Object(A.jsx)(h.a,{variant:"contained",color:"primary",endIcon:Object(A.jsx)(f.d,{}),onClick:function(){y.a.push("/notification-endpoints/add")},children:"Add Notification Target"})]})]}),_&&Object(A.jsx)(s.a,{}),!_&&Object(A.jsxs)(a.Fragment,{children:[l.length>0&&Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(u.a,{item:!0,xs:12,className:t.tableBlock,children:Object(A.jsx)(j.a,{itemActions:[],columns:[{label:"Status",elementKey:"status",renderFunction:function(e){return Object(A.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(A.jsx)(b.a,{style:"Offline"===e?{color:d.a[500]}:{}}),e]})},width:150},{label:"Service",elementKey:"service_name"}],isLoading:_,records:F,entityName:"Notification Endpoints",idField:"service_name",customPaperHeight:t.twHeight})}),Object(A.jsx)(u.a,{item:!0,xs:12,children:Object(A.jsx)(S.a,{title:"Notification Endpoints",iconComponent:Object(A.jsx)(f.sb,{}),help:Object(A.jsxs)(a.Fragment,{children:["MinIO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. MinIO supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications.",Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),"You can learn more at our"," ",Object(A.jsx)("a",{href:"https://docs.min.io/minio/baremetal/monitoring/bucket-notifications/bucket-notifications.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]}),0===l.length&&Object(A.jsx)(u.a,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:Object(A.jsx)(u.a,{item:!0,xs:8,children:Object(A.jsx)(S.a,{title:"Notification Targets",iconComponent:Object(A.jsx)(f.sb,{}),help:Object(A.jsxs)(a.Fragment,{children:["MinIO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. MinIO supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications.",Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),"To get started,"," ",Object(A.jsx)(T.a,{onClick:function(){y.a.push("/notification-endpoints/add")},children:"Add a Notification Target"}),"."]})})})})]})]})})})))},875:function(e,t,n){"use strict";var o=n(72);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(73)),a=n(0),i=(0,r.default)((0,a.jsx)("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");t.default=i}}]);
//# sourceMappingURL=38.db7ef146.chunk.js.map