"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5947],{41123:function(G,O,e){e.d(O,{Z:function(){return A}});var s=e(87462),a=e(67294),B={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M555.88 488.24h-92.62v-82.79h92.62zm0-286.24h-92.62v85.59h92.62zm109.45 203.45H572.7v82.79h92.62zm-218.9-101.02h-92.61v84.18h92.6zm109.45 0h-92.61v84.18h92.6zm388.69 140.3c-19.65-14.02-67.36-18.23-102.44-11.22-4.2-33.67-23.85-63.14-57.53-89.8l-19.65-12.62-12.62 19.64c-25.26 39.29-32.28 103.83-5.62 145.92-12.63 7.02-36.48 15.44-67.35 15.44H67.56c-12.63 71.56 8.42 164.16 61.74 227.3C181.22 801.13 259.8 832 360.83 832c220.3 0 384.48-101.02 460.25-286.24 29.47 0 95.42 0 127.7-63.14 1.4-2.8 9.82-18.24 11.22-23.85zm-717.04-39.28h-92.61v82.79h92.6zm109.45 0h-92.61v82.79h92.6zm109.45 0h-92.61v82.79h92.6zM336.98 304.43h-92.61v84.19h92.6z"}}]},name:"docker",theme:"outlined"},p=B,f=e(84089),y=function(S,m){return a.createElement(f.Z,(0,s.Z)({},S,{ref:m,icon:p}))},v=a.forwardRef(y),A=v},24963:function(G,O,e){var s=e(67294),a=(0,s.createContext)({});O.Z=a},50070:function(G,O,e){e.r(O),e.d(O,{AppDetailContext:function(){return $},default:function(){return H}});var s=e(15009),a=e.n(s),B=e(99289),p=e.n(B),f=e(5574),y=e.n(f),v=e(24963),A=e(2831),b=e(60335),S=e(41123),m=e(54006),x=e(86738),E=e(25593),l=e(50136),D=e(67294),C=e(85893),$=(0,D.createContext)({});function H(){var k,c=(0,D.useContext)(v.Z),h=c.lang,g=c.loading,n=(0,m.useParams)(),q=(0,m.useSearchParams)(),ee=y()(q,2),J=ee[0],ne=ee[1],t=(k=J.get("tab"))!==null&&k!==void 0?k:"edit",o=(0,D.useState)("edit"),_=y()(o,2),r=_[0],i=_[1],j=(0,m.useNavigate)(),L=(0,D.useState)(1),T=y()(L,2),M=T[0],K=T[1],Z=(0,m.useAccess)(),I=[{label:(0,C.jsx)(m.Link,{to:"/app/detail/edit/".concat(n.id,"?tab=edit"),children:"\u5BB9\u5668\u8BE6\u60C5"}),key:"edit"},{label:(0,C.jsx)(m.Link,{to:"/app/detail/domain/".concat(n.id,"?tab=domain"),children:"\u57DF\u540D\u7BA1\u7406"}),key:"domain"},{label:(0,C.jsx)(x.Z,{style:{width:500},title:h("notification.title.tip"),description:"\u6587\u4EF6\u7BA1\u7406\u4F1A\u81EA\u52A8\u521B\u5EFA dpanel-plugin-exolorer \u5BB9\u5668\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",onConfirm:function(){j("/app/detail/file/".concat(n.id,"?tab=file")),F(I.filter(function(U){return U.key!="fileConfirm"})),i("file")},okText:"Yes",cancelText:"No",children:(0,C.jsx)(E.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"})}),key:"fileConfirm"},{label:(0,C.jsx)(E.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"}),key:"file",onClick:function(){j("/app/detail/file/".concat(n.id,"?tab=file"))}},{label:(0,C.jsx)(E.Z.Link,{children:"\u8FD0\u884C\u65E5\u5FD7"}),key:"log",onClick:function(){j("/app/detail/log/".concat(n.id,"?tab=log"))}},{label:(0,C.jsx)(E.Z.Link,{children:"\u8FD0\u884C\u72B6\u6001"}),key:"stat",onClick:function(){j("/app/detail/stat/".concat(n.id,"?tab=stat"))}},{label:"",key:"containerName",icon:(0,C.jsx)(S.Z,{}),disabled:!0}],N=(0,D.useState)(I),w=y()(N,2),X=w[0],F=w[1];(0,D.useEffect)(function(){g.show(),i(t);var P=function(){var U=p()(a()().mark(function Q(){var Y,W,z,V;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return W=I,d.next=3,(0,A.aF)();case 3:return z=d.sent,Z.canSeeContainerDomain||(W=W.filter(function(u){return u.key!="domain"})),z.data.plugin.explorer.isCreated||(W=W.filter(function(u){return u.key!="file"})),z.data.plugin.explorer.isCreated&&(W=W.filter(function(u){return u.key!="fileConfirm"})),d.next=9,(0,b.jV)({md5:(Y=n.id)!==null&&Y!==void 0?Y:""});case 9:V=d.sent,W.map(function(u){return u.key=="containerName"&&(u.label=V.data.info.Name),(!V.data.info.State.Running||V.data.info.State.Restarting)&&(u.key=="file"||u.key=="fileConfirm"||u.key=="stat")&&(u.disabled=!0),u}),F(W),g.destroy();case 13:case"end":return d.stop()}},Q)}));return function(){return U.apply(this,arguments)}}();P()},[M]);var R=function(U){U.key!="fileConfirm"&&i(U.key)};return(0,C.jsxs)($.Provider,{value:{reload:function(){K(M+1)}},children:[(0,C.jsx)(l.Z,{mode:"horizontal",onClick:R,selectedKeys:[r],items:X}),(0,C.jsx)(m.Outlet,{})]})}},2831:function(G,O,e){e.d(O,{Ll:function(){return A},aF:function(){return y},d6:function(){return S}});var s=e(15009),a=e.n(s),B=e(99289),p=e.n(B),f=e(54006);function y(){return v.apply(this,arguments)}function v(){return v=p()(a()().mark(function x(){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,f.request)("/api/common/home/info",{method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},x)})),v.apply(this,arguments)}function A(){return b.apply(this,arguments)}function b(){return b=p()(a()().mark(function x(){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,f.request)("/api/common/home/usage",{method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},x)})),b.apply(this,arguments)}function S(){return m.apply(this,arguments)}function m(){return m=p()(a()().mark(function x(){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,f.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},x)})),m.apply(this,arguments)}},60335:function(G,O,e){e.d(O,{IE:function(){return A},IW:function(){return y},KK:function(){return l},LJ:function(){return C},Re:function(){return H},eE:function(){return x},jV:function(){return S}});var s=e(15009),a=e.n(s),B=e(99289),p=e.n(B),f=e(54006);function y(c){return v.apply(this,arguments)}function v(){return v=p()(a()().mark(function c(h){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/app/container/status",{method:"POST",data:h}));case 1:case"end":return n.stop()}},c)})),v.apply(this,arguments)}function A(c){return b.apply(this,arguments)}function b(){return b=p()(a()().mark(function c(h){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/app/container/get-list",{data:h,method:"POST"}));case 1:case"end":return n.stop()}},c)})),b.apply(this,arguments)}function S(c){return m.apply(this,arguments)}function m(){return m=p()(a()().mark(function c(h){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/app/container/get-detail",{data:h,method:"POST"}));case 1:case"end":return n.stop()}},c)})),m.apply(this,arguments)}function x(c){return E.apply(this,arguments)}function E(){return E=p()(a()().mark(function c(h){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/app/container/update",{data:h,method:"POST"}));case 1:case"end":return n.stop()}},c)})),E.apply(this,arguments)}function l(){return D.apply(this,arguments)}function D(){return D=p()(a()().mark(function c(){return a()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,f.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return g.stop()}},c)})),D.apply(this,arguments)}function C(c){return $.apply(this,arguments)}function $(){return $=p()(a()().mark(function c(h){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/app/container/export",{method:"POST",data:h,responseType:"blob"}));case 1:case"end":return n.stop()}},c)})),$.apply(this,arguments)}function H(c){return k.apply(this,arguments)}function k(){return k=p()(a()().mark(function c(h){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/app/container/commit",{method:"POST",data:h}));case 1:case"end":return n.stop()}},c)})),k.apply(this,arguments)}},86738:function(G,O,e){e.d(O,{Z:function(){return ne}});var s=e(67294),a=e(21640),B=e(93967),p=e.n(B),f=e(21770),y=e(98423),v=e(53124),A=e(55241),b=e(86743),S=e(81643),m=e(14726),x=e(33671),E=e(10110),l=e(24457),D=e(66330),C=e(83559);const $=t=>{const{componentCls:o,iconCls:_,antCls:r,zIndexPopup:i,colorText:j,colorWarning:L,marginXXS:T,marginXS:M,fontSize:K,fontWeightStrong:Z,colorTextHeading:I}=t;return{[o]:{zIndex:i,[`&${r}-popover`]:{fontSize:K},[`${o}-message`]:{marginBottom:M,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${o}-message-icon ${_}`]:{color:L,fontSize:K,lineHeight:1,marginInlineEnd:M},[`${o}-title`]:{fontWeight:Z,color:I,"&:only-child":{fontWeight:"normal"}},[`${o}-description`]:{marginTop:T,color:j}},[`${o}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:M}}}}},H=t=>{const{zIndexPopupBase:o}=t;return{zIndexPopup:o+60}};var k=(0,C.I$)("Popconfirm",t=>$(t),H,{resetStyle:!1}),c=function(t,o){var _={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(_[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)o.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(_[r[i]]=t[r[i]]);return _};const h=t=>{const{prefixCls:o,okButtonProps:_,cancelButtonProps:r,title:i,description:j,cancelText:L,okText:T,okType:M="primary",icon:K=s.createElement(a.Z,null),showCancel:Z=!0,close:I,onConfirm:N,onCancel:w,onPopupClick:X}=t,{getPrefixCls:F}=s.useContext(v.E_),[R]=(0,E.Z)("Popconfirm",l.Z.Popconfirm),P=(0,S.Z)(i),U=(0,S.Z)(j);return s.createElement("div",{className:`${o}-inner-content`,onClick:X},s.createElement("div",{className:`${o}-message`},K&&s.createElement("span",{className:`${o}-message-icon`},K),s.createElement("div",{className:`${o}-message-text`},P&&s.createElement("div",{className:`${o}-title`},P),U&&s.createElement("div",{className:`${o}-description`},U))),s.createElement("div",{className:`${o}-buttons`},Z&&s.createElement(m.ZP,Object.assign({onClick:w,size:"small"},r),L||(R==null?void 0:R.cancelText)),s.createElement(b.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,x.nx)(M)),_),actionFn:N,close:I,prefixCls:F("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},T||(R==null?void 0:R.okText))))};var n=t=>{const{prefixCls:o,placement:_,className:r,style:i}=t,j=c(t,["prefixCls","placement","className","style"]),{getPrefixCls:L}=s.useContext(v.E_),T=L("popconfirm",o),[M]=k(T);return M(s.createElement(D.ZP,{placement:_,className:p()(T,r),style:i,content:s.createElement(h,Object.assign({prefixCls:T},j))}))},q=function(t,o){var _={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(_[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)o.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(_[r[i]]=t[r[i]]);return _};const J=s.forwardRef((t,o)=>{var _,r;const{prefixCls:i,placement:j="top",trigger:L="click",okType:T="primary",icon:M=s.createElement(a.Z,null),children:K,overlayClassName:Z,onOpenChange:I,onVisibleChange:N}=t,w=q(t,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:X}=s.useContext(v.E_),[F,R]=(0,f.Z)(!1,{value:(_=t.open)!==null&&_!==void 0?_:t.visible,defaultValue:(r=t.defaultOpen)!==null&&r!==void 0?r:t.defaultVisible}),P=(d,u)=>{R(d,!0),N==null||N(d),I==null||I(d,u)},U=d=>{P(!1,d)},Q=d=>{var u;return(u=t.onConfirm)===null||u===void 0?void 0:u.call(void 0,d)},Y=d=>{var u;P(!1,d),(u=t.onCancel)===null||u===void 0||u.call(void 0,d)},W=(d,u)=>{const{disabled:re=!1}=t;re||P(d,u)},z=X("popconfirm",i),V=p()(z,Z),[te]=k(z);return te(s.createElement(A.Z,Object.assign({},(0,y.Z)(w,["title"]),{trigger:L,placement:j,onOpenChange:W,open:F,ref:o,overlayClassName:V,content:s.createElement(h,Object.assign({okType:T,icon:M},t,{prefixCls:z,close:U,onConfirm:Q,onCancel:Y})),"data-popover-inject":!0}),K))});J._InternalPanelDoNotUseOrYouWillBeFired=n;var ne=J}}]);