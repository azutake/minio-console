"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[4874],{94874:(e,s,t)=>{t.r(s),t.d(s,{default:()=>I});var i=t(72791),n=t(29945),o=t(57689),c=t(23814),a=t(56087),r=t(38442),l=t(45248),d=t(87995),u=t(44690),h=t(31776),m=t(59114),p=t(75578),x=t(27454),j=t(79844),b=t(61342),C=t(80184);const f=(0,p.Z)(i.lazy((()=>t.e(312).then(t.bind(t,312))))),I=()=>{const e=(0,u.TL)(),s=(0,o.s0)(),[t,p]=(0,i.useState)([]),[I,A]=(0,i.useState)(!1),[P,y]=(0,i.useState)(!1),[M,v]=(0,i.useState)(""),[F,S]=(0,i.useState)(""),g=(0,r.F)(a.C3,[a.Ft.ADMIN_GET_POLICY]),E=(0,r.F)(a.C3,a.bE),L=(0,r.F)(a.C3,a.K$),O=(0,r.F)(a.C3,a.XM),_=(0,r.F)(a.C3,a.GD);(0,i.useEffect)((()=>{k()}),[]),(0,i.useEffect)((()=>{I&&(L?h.h.policies.listPolicies().then((e=>{var s;const t=null!==(s=e.data.policies)&&void 0!==s?s:[];t.sort(((e,s)=>e.name>s.name?1:e.name<s.name?-1:0)),A(!1),p(t)})).catch((s=>{A(!1),e((0,d.Ih)(s))})):A(!1))}),[I,A,p,e,L]);const k=()=>{A(!0)},Z=[{type:"view",onClick:e=>{s("".concat(a.gA.POLICIES,"/").concat((0,l.LL)(e.name)))},disableButtonFunction:()=>!g},{type:"delete",onClick:e=>{y(!0),v(e)},sendOnlyId:!0,disableButtonFunction:()=>!E}],w=t.filter((e=>{var s;return null===(s=e.name)||void 0===s?void 0:s.includes(F)}));return(0,i.useEffect)((()=>{e((0,d.Sc)("list_policies"))}),[]),(0,C.jsxs)(i.Fragment,{children:[P&&(0,C.jsx)(f,{deleteOpen:P,selectedPolicy:M,closeDeleteModalAndRefresh:e=>{y(!1),e&&k()}}),(0,C.jsx)(j.Z,{label:"IAM Policies",actions:(0,C.jsx)(b.Z,{})}),(0,C.jsx)(n.Xgh,{children:(0,C.jsxs)(n.rjZ,{container:!0,children:[(0,C.jsxs)(n.rjZ,{item:!0,xs:12,sx:c.OR.actionsTray,children:[(0,C.jsx)(m.Z,{onChange:S,placeholder:"Search Policies",value:F,sx:{maxWidth:380}}),(0,C.jsx)(r.s,{scopes:[a.Ft.ADMIN_CREATE_POLICY],resource:a.C3,errorProps:{disabled:!0},children:(0,C.jsx)(x.Z,{tooltip:O?"":(0,a.MK)(a.XM,"create a Policy"),children:(0,C.jsx)(n.zxk,{id:"create-policy",label:"Create Policy",variant:"callAction",icon:(0,C.jsx)(n.dtP,{}),onClick:()=>{s("".concat(a.gA.POLICY_ADD))},disabled:!O})})})]}),(0,C.jsx)(n.rjZ,{item:!0,xs:12,children:(0,C.jsx)(r.s,{scopes:[a.Ft.ADMIN_LIST_USER_POLICIES],resource:a.C3,errorProps:{disabled:!0},children:(0,C.jsx)(x.Z,{tooltip:_?"":(0,a.MK)(a.GD,"view Policy details"),children:(0,C.jsx)(n.wQF,{itemActions:Z,columns:[{label:"Name",elementKey:"name"}],isLoading:I,records:w,entityName:"Policies",idField:"name"})})})}),(0,C.jsx)(n.rjZ,{item:!0,xs:12,sx:{marginTop:15},children:(0,C.jsx)(n.KfX,{title:"Learn more about IAM POLICIES",iconComponent:(0,C.jsx)(n.v42,{}),help:(0,C.jsxs)(i.Fragment,{children:["MinIO uses Policy-Based Access Control (PBAC) to define the authorized actions and resources to which an authenticated user has access. Each policy describes one or more actions and conditions that outline the permissions of a user or group of users.",(0,C.jsx)("br",{}),(0,C.jsx)("br",{}),"MinIO PBAC is built for compatibility with AWS IAM policy syntax, structure, and behavior. The MinIO documentation makes a best-effort to cover IAM-specific behavior and functionality. Consider deferring to the IAM documentation for more complete documentation on AWS IAM-specific topics.",(0,C.jsx)("br",{}),(0,C.jsx)("br",{}),"You can learn more at our"," ",(0,C.jsx)("a",{href:"https://min.io/docs/minio/linux/administration/identity-access-management.html?ref=con#access-management",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})})]})})]})}}}]);
//# sourceMappingURL=4874.602e9fc6.chunk.js.map