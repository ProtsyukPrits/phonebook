"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[929],{4929:function(n,r,t){t.r(r),t.d(r,{default:function(){return F}});var e=t(5777),o=t(1413),i=t(896);function c(n){return Object.keys(n)[Math.floor(Math.random()*Object.keys(n).length)]}var s,a,l,u,f,d,h,x,p,g=t(184),m=function(){return(0,g.jsx)("div",{style:{width:"50px"},children:(0,g.jsx)(i.nQ,(0,o.Z)({},{skinTone:c(i.rS.colors.skin),eyes:c(i.AS),eyebrows:c(i.o0),mouth:c(i.zx),hair:c(i.B0),facialHair:c(i.HC),clothing:c(i.Rs),accessory:c(i.cn),graphic:c(i.o2),hat:c(i.zq),body:c(i.a2),hairColor:c(i.rS.colors.hair),clothingColor:c(i.rS.colors.clothing),circleColor:c(i.rS.colors.bgColors),lipColor:c(i.rS.colors.lipColors),hatColor:c(i.rS.colors.clothing),faceMaskColor:c(i.rS.colors.clothing),mask:!0,faceMask:!1,lashes:Math.random()>.5}))})},j=t(168),v=t(7691),b=(v.ZP.button(s||(s=(0,j.Z)(["\n  border-radius: 4px;\n  border-color: transparent;\n\n  margin-left: 16px;\n\n  &:hover, :focus {\n    background: #1e90ff;\n  }\n"]))),v.ZP.li(a||(a=(0,j.Z)(["\ndisplay: flex;\njustify-content: space-between;\n  margin: 4px 0;\n"])))),Z=v.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n"]))),y=v.ZP.div(u||(u=(0,j.Z)(["\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-left: 8px;\n"]))),k=function(n){var r=n.contact,t=n.onDelete;return(0,g.jsxs)(b,{children:[(0,g.jsxs)(Z,{children:[(0,g.jsx)(m,{}),(0,g.jsxs)(y,{children:[r.name," : ",r.number]})]}),(0,g.jsx)(e.zx,{size:"sm",border:"1px solid",borderRadius:"100%",type:"button",onClick:function(){t(r.id)},children:"Delete"})]})},C=t(9434),w=t(3634),P=t(2946),S=v.ZP.ul(f||(f=(0,j.Z)(["\n  overflow: auto;\n  height: 220px;\n"]))),z=function(){var n=(0,C.v9)(P.Af),r=(0,C.v9)(P.AD),t=(0,C.I0)(),e=n.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,g.jsx)(S,{children:e.map((function(n){return(0,g.jsx)(k,{contact:n,onDelete:function(){return t((0,w.GK)(n.id))}},n.id)}))})},A=v.ZP.label(d||(d=(0,j.Z)(["\n  display: grid;\n"]))),D=t(4808),I=t(3169),M=function(){var n=(0,C.I0)();return(0,g.jsxs)(A,{children:["Find contacts by name",(0,g.jsx)(I.II,{type:"text",name:"name",onChange:function(r){n((0,D.w)(r.target.value.toLowerCase().trim()))}})]})},_=v.ZP.div(h||(h=(0,j.Z)(["\n"]))),L=v.ZP.div(x||(x=(0,j.Z)(["\n  position: absolute;\n  top:0;\n  right:20%;\n  text-decoration: underline;\n  font-weight: 600;\n  \n"]))),R=v.ZP.span(p||(p=(0,j.Z)(["\ncolor: red;\n"]))),q=t(2791),F=function(){var n=(0,C.I0)(),r=(0,C.v9)(P.Af),t=(0,C.v9)(P.xU),e=(0,C.v9)(P.zh);return(0,q.useEffect)((function(){n((0,w.yF)())}),[n]),(0,g.jsxs)(_,{children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)(L,{children:["You have ",(0,g.jsx)(R,{children:r.length})," contacts"]}),(0,g.jsx)(M,{})]}),t&&!e&&(0,g.jsx)("b",{children:"Request in progress..."}),r.length>0&&(0,g.jsx)(z,{})]})}},2946:function(n,r,t){t.d(r,{AD:function(){return o},Af:function(){return e},xU:function(){return i},zh:function(){return c}});var e=function(n){return n.contacts.items},o=function(n){return n.filter.filtred},i=function(n){return n.contacts.isLoading},c=function(n){return n.contacts.error}}}]);
//# sourceMappingURL=929.0a24a133.chunk.js.map