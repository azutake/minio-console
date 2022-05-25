"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9145],{59145:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var i=t(29439),a=t(1413),o=t(72791),s=t(60364),c=t(11135),l=t(25787),r=t(61889),u=t(23814),d=t(20890),f=t(45248),p=t(46431),m=t.n(p),x=t(91523),h=t(10703),v=t(40603),g=t(80184),b=(0,l.Z)((function(e){return(0,c.Z)((0,a.Z)({paperContainer:{padding:"15px",display:"flex",alignItems:"center",justifyContent:"center"},licenseInfoValue:{textTransform:"none",fontSize:14,fontWeight:"bold"},licenseContainer:{position:"relative",padding:"20px 52px 0px 28px",background:"#032F51",boxShadow:"0px 3px 7px #00000014","& h2":{color:"#FFF",marginBottom:67},"& a":{textDecoration:"none"},"& h3":{color:"#FFFFFF",marginBottom:"30px",fontWeight:"bold"},"& h6":{color:"#FFFFFF !important"}},licenseInfo:{color:"#FFFFFF",position:"relative"},licenseInfoTitle:{textTransform:"none",color:"#BFBFBF",fontSize:11},verifiedIcon:{width:96,position:"absolute",right:0,bottom:29},noUnderLine:{textDecoration:"none"}},(0,u.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=e.tenant,i=e.loadingActivateProduct,a=e.loadingLicenseInfo,s=e.licenseInfo,c=e.activateProduct;return(0,g.jsx)(h.Z,{className:t&&t.subnet_license?n.licenseContainer:"",children:t&&t.subnet_license?(0,g.jsx)(o.Fragment,{children:(0,g.jsxs)(r.ZP,{container:!0,className:n.licenseInfo,children:[(0,g.jsxs)(r.ZP,{item:!0,xs:6,children:[(0,g.jsx)(d.Z,{variant:"button",display:"block",gutterBottom:!0,className:n.licenseInfoTitle,children:"License"}),(0,g.jsx)(d.Z,{variant:"overline",display:"block",gutterBottom:!0,className:n.licenseInfoValue,children:"Commercial License"}),(0,g.jsx)(d.Z,{variant:"button",display:"block",gutterBottom:!0,className:n.licenseInfoTitle,children:"Organization"}),(0,g.jsx)(d.Z,{variant:"overline",display:"block",gutterBottom:!0,className:n.licenseInfoValue,children:t.subnet_license.organization}),(0,g.jsx)(d.Z,{variant:"button",display:"block",gutterBottom:!0,className:n.licenseInfoTitle,children:"Registered Capacity"}),(0,g.jsx)(d.Z,{variant:"overline",display:"block",gutterBottom:!0,className:n.licenseInfoValue,children:(0,f.ae)((1099511627776*t.subnet_license.storage_capacity).toString(10))}),(0,g.jsx)(d.Z,{variant:"button",display:"block",gutterBottom:!0,className:n.licenseInfoTitle,children:"Expiry Date"}),(0,g.jsx)(d.Z,{variant:"overline",display:"block",gutterBottom:!0,className:n.licenseInfoValue,children:(0,g.jsx)(m(),{format:"YYYY-MM-DD",children:t.subnet_license.expires_at})})]}),(0,g.jsxs)(r.ZP,{item:!0,xs:6,children:[(0,g.jsx)(d.Z,{variant:"button",display:"block",gutterBottom:!0,className:n.licenseInfoTitle,children:"Subscription Plan"}),(0,g.jsx)(d.Z,{variant:"overline",display:"block",gutterBottom:!0,className:n.licenseInfoValue,children:t.subnet_license.plan}),(0,g.jsx)(d.Z,{variant:"button",display:"block",gutterBottom:!0,className:n.licenseInfoTitle,children:"Requestor"}),(0,g.jsx)(d.Z,{variant:"overline",display:"block",gutterBottom:!0,className:n.licenseInfoValue,children:t.subnet_license.email})]}),(0,g.jsx)("img",{className:n.verifiedIcon,src:"/verified.svg",alt:"verified"})]})}):!a&&(0,g.jsxs)(r.ZP,{className:n.paperContainer,children:[!s&&(0,g.jsx)(x.rU,{to:"/license",onClick:function(e){e.stopPropagation()},className:n.noUnderLine,children:(0,g.jsx)(v.Z,{tooltip:"Activate Product",text:"Activate Product",onClick:function(){return!1},color:"primary",variant:"contained"})}),s&&t&&(0,g.jsx)(v.Z,{disabled:i,tooltip:"Attach License",text:"Attach License",onClick:function(){return c(t.namespace,t.name)},color:"primary",variant:"contained"})]})})})),Z=t(81207),j=t(72401),F=t(87995),I=t(17238),k=(0,l.Z)((function(e){return(0,c.Z)((0,a.Z)((0,a.Z)({},u.oZ),{},{loaderAlign:{textAlign:"center"}},(0,u.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=(0,s.I0)(),a=(0,s.v9)((function(e){return e.tenants.tenantDetails.loadingTenant})),c=(0,s.v9)((function(e){return e.tenants.tenantDetails.tenantInfo})),l=(0,o.useState)(),u=(0,i.Z)(l,2),d=u[0],f=u[1],p=(0,o.useState)(!0),m=(0,i.Z)(p,2),x=m[0],h=m[1],v=(0,o.useState)(!1),k=(0,i.Z)(v,2),y=k[0],B=k[1];return(0,o.useEffect)((function(){x&&Z.Z.invoke("GET","/api/v1/subscription/info").then((function(e){f(e),h(!1)})).catch((function(e){h(!1)}))}),[x]),(0,g.jsxs)(o.Fragment,{children:[(0,g.jsx)("h1",{className:n.sectionTitle,children:"License"}),a?(0,g.jsx)("div",{className:n.loaderAlign,children:(0,g.jsx)(j.Z,{})}):(0,g.jsx)(o.Fragment,{children:c&&(0,g.jsx)(r.ZP,{container:!0,children:(0,g.jsx)(r.ZP,{item:!0,xs:12,children:(0,g.jsx)(b,{tenant:c,loadingLicenseInfo:x,loadingActivateProduct:y,licenseInfo:d,activateProduct:function(e,n){y||(B(!0),Z.Z.invoke("POST","/api/v1/subscription/namespaces/".concat(e,"/tenants/").concat(n,"/activate"),{}).then((function(){B(!1),t((0,I.V2)(!0)),h(!0)})).catch((function(e){B(!1),t((0,F.Ih)(e))})))}})})})})]})}))}}]);
//# sourceMappingURL=9145.e9982ac4.chunk.js.map