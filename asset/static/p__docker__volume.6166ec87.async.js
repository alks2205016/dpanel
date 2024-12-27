"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9002],{80821:function(K,S,e){e.d(S,{Z:function(){return J}});var E=e(5574),d=e.n(E),p=e(24963),c=e(86738),C=e(14726),O=e(83062),T=e(67294),A=e(85893);function J(u){var Y=(0,T.useState)(!1),U=d()(Y,2),N=U[0],R=U[1],w=(0,T.useContext)(p.Z),B=w.lang,Q=w.notice,b=w.message,W=function(){R(!0),u.action().then(function(L){if(R(!1),typeof u.onSuccess=="function"&&u.onSuccess(L),u.messageSuccess){var h="";typeof u.messageSuccess=="function"?h=u.messageSuccess(L):h=u.messageSuccess,h=B("notification.".concat(h))+B("notification.title.success"),u.asynced?b.info(h):b.success(h)}}).catch(function(L){R(!1),typeof u.onError=="function"&&u.onError(L)})};return u.confirm?(0,A.jsx)(c.Z,{style:{width:500},title:u.confirmTitle?u.confirmTitle:B("notification.title.tip"),description:u.confirm,onConfirm:W,okText:"Yes",cancelText:"No",children:(0,A.jsx)(C.ZP,{disabled:u.disabled,icon:u.icon,loading:N,danger:u.danger,type:u.type,children:u.children})}):(0,A.jsx)(O.Z,{title:u.tips,children:(0,A.jsx)(C.ZP,{disabled:u.disabled,icon:u.icon,loading:N,onClick:W,danger:u.danger,type:u.type,children:u.children})})}},78451:function(K,S,e){e.d(S,{Z:function(){return p}});var E=e(67294),d=e(85893);function p(c){return(0,d.jsx)("span",{style:{width:c.width?c.width:"auto",wordBreak:"break-word"},children:c.content})}},24963:function(K,S,e){var E=e(67294),d=(0,E.createContext)({});S.Z=d},86783:function(K,S,e){e.r(S),e.d(S,{default:function(){return Oe}});var E=e(15009),d=e.n(E),p=e(99289),c=e.n(p),C=e(5574),O=e.n(C),T=e(80821),A=e(78451),J=e(24963),u=e(54006);function Y(s){return U.apply(this,arguments)}function U(){return U=c()(d()().mark(function s(m){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("/api/app/volume/get-list",{method:"POST",data:m}));case 1:case"end":return a.stop()}},s)})),U.apply(this,arguments)}function N(s){return R.apply(this,arguments)}function R(){return R=c()(d()().mark(function s(m){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("/api/app/volume/create",{method:"POST",data:m}));case 1:case"end":return a.stop()}},s)})),R.apply(this,arguments)}function w(s){return B.apply(this,arguments)}function B(){return B=c()(d()().mark(function s(m){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,u.request)("/api/app/volume/prune",{method:"POST",data:m});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},s)})),B.apply(this,arguments)}function Q(s){return b.apply(this,arguments)}function b(){return b=c()(d()().mark(function s(m){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,u.request)("/api/app/volume/delete",{method:"POST",data:m});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},s)})),b.apply(this,arguments)}function W(s){return z.apply(this,arguments)}function z(){return z=c()(d()().mark(function s(m){return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.request)("/api/app/volume/get-detail",{method:"POST",data:m}));case 1:case"end":return a.stop()}},s)})),z.apply(this,arguments)}var L=e(184),h=e(5966),ee=e(62370),ne=e(86615),te=e(97462),re=e(17186),ae=e(24739),ue=e(14726),X=e(34041),g=e(67294),n=e(85893),le=(0,g.forwardRef)(function(s,m){var j=(0,g.useState)(!1),a=O()(j,2),$=a[0],V=a[1],x=(0,g.useRef)(),f=(0,g.useContext)(J.Z),o=f.message,t=f.notice;return(0,g.useImperativeHandle)(m,function(){return{}}),(0,n.jsxs)(L.a,{name:"create",title:"\u6DFB\u52A0\u5B58\u50A8\u5377",open:$,onOpenChange:function(r){V(r)},formRef:x,trigger:(0,n.jsx)(ue.ZP,{type:"primary",children:"\u521B\u5EFA\u5B58\u50A8\u5377"}),onFinish:function(){var l=c()(d()().mark(function r(i){var Z,y,v,P,D,I;return d()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return P=[],i.otherOptions&&i.otherOptions.map(function(_){P.push(_.name+`
`+_.value)}),M.next=4,N({name:i.name,driver:"local",type:i.type,nfsUrl:(Z=i.nfsUrl)!==null&&Z!==void 0?Z:"",nfsMountPoint:(y=i.nfsMountPoint)!==null&&y!==void 0?y:"",nfsOptions:(v=i.nfsOptions)!==null&&v!==void 0?v:"",tmpfsOptions:i.tmpfsOptions,otherOptions:P});case 4:if(D=M.sent,!(D&&D.data&&D.data.info.Name!="")){M.next=10;break}return o.success("\u6DFB\u52A0\u5B58\u50A8\u5377\u6210\u529F"),s.onFinish&&s.onFinish(),(I=x.current)===null||I===void 0||I.resetFields(),M.abrupt("return",!0);case 10:case"end":return M.stop()}},r)}));return function(r){return l.apply(this,arguments)}}(),children:[(0,n.jsx)(h.Z,{label:"\u540D\u79F0",name:"name",placeholder:"\u6307\u5B9A\u552F\u4E00\u5B58\u50A8\u5377\u540D\u79F0"}),(0,n.jsx)(ee.Z,{label:"\u7C7B\u578B",name:"driver",children:(0,n.jsx)(X.Z,{defaultValue:"local",children:(0,n.jsx)(X.Z.Option,{value:"local",children:"local"})})}),(0,n.jsx)(ne.Z.Group,{name:"type",label:"\u5B58\u50A8\u7C7B\u578B",valueEnum:{default:"\u9ED8\u8BA4",tmpfs:"tmpfs",nfs:"Nfs",nfs4:"Nfs4",other:"\u81EA\u5B9A\u4E49"},initialValue:"default"}),(0,n.jsx)(te.Z,{name:["type"],children:function(r){var i=r.type;if(i=="other")return(0,n.jsx)(re.u,{name:"otherOptions",creatorButtonProps:{creatorButtonText:"\u5B58\u50A8"},copyIconProps:!1,min:0,children:(0,n.jsxs)(ae.UW,{children:[(0,n.jsx)(h.Z,{name:"name",label:"\u540D\u79F0",placeholder:"\u4F8B\u5982:mountpoint"}),(0,n.jsx)(h.Z,{name:"value",label:"\u503C",placeholder:"\u4F8B\u5982:/etc/path"})]})});if(i=="nfs"||i=="nfs4")return[(0,n.jsx)(h.Z,{label:"\u5730\u5740",name:"nfsUrl",required:!0,rules:[{required:!0}],placeholder:"\u914D\u7F6ENfs\u670D\u52A1\u5730\u5740,\u4F8B\u5982 my.nfs.com \u6216\u662F 172.16.1.13 "},"nfsUrl"),(0,n.jsx)(h.Z,{label:"\u6302\u8F7D\u70B9",name:"nfsMountPoint",required:!0,rules:[{required:!0}],placeholder:"\u4F8B\u5982, /export/share, :/export/share, /share or :/share"},"nfsMountPoint"),(0,n.jsx)(h.Z,{label:"\u914D\u7F6E",name:"nfsOptions",initialValue:"rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14"},"nfsOptions")];if(i=="tmpfs")return[(0,n.jsx)(h.Z,{label:"\u914D\u7F6E",name:"tmpfsOptions",initialValue:"size=100m,uid=1000"},"tmpfsOptions")]}})]})}),se=le,k=e(38345),ie=e(45360),oe=e(85576),F=e(26412),de=e(63490),G=e(66309),ce=(0,g.forwardRef)(function(s,m){var j;(0,g.useImperativeHandle)(m,function(){return{showDetail:function(P){Z.open({type:"loading",content:"\u6B63\u5728\u83B7\u53D6\u5B58\u50A8\u5377\u8BE6\u60C5",duration:0});var D=W({name:P}).then(function(I){l(I.data),x(!0)}).finally(function(){Z.destroy()})}}});var a=(0,g.useState)(!1),$=O()(a,2),V=$[0],x=$[1],f=(0,g.useState)(),o=O()(f,2),t=o[0],l=o[1],r=ie.ZP.useMessage(),i=O()(r,2),Z=i[0],y=i[1];return(0,n.jsxs)(n.Fragment,{children:[y,(0,n.jsxs)(oe.Z,{width:800,open:V,footer:!1,onCancel:function(){return x(!1)},children:[(0,n.jsx)(k.Z,{title:"\u5B58\u50A8\u8BE6\u60C5",ghost:!0,children:(0,n.jsxs)(F.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:[(0,n.jsx)(F.Z.Item,{label:"\u540D\u79F0",children:t==null?void 0:t.info.Name}),(0,n.jsx)(F.Z.Item,{label:"\u521B\u5EFA\u65F6\u95F4",children:new Date((j=t==null?void 0:t.info.CreatedAt)!==null&&j!==void 0?j:"").toLocaleString()}),(0,n.jsx)(F.Z.Item,{label:"\u6302\u8F7D\u70B9",children:t==null?void 0:t.info.Mountpoint}),(0,n.jsx)(F.Z.Item,{label:"\u7C7B\u578B",children:t==null?void 0:t.info.Driver}),(t==null?void 0:t.info.Labels)&&(0,n.jsx)(F.Z.Item,{label:"Lables",children:(0,n.jsx)(F.Z,{labelStyle:{width:"150px"},column:1,bordered:!0,children:(t==null?void 0:t.info.Labels)&&Object.keys(t==null?void 0:t.info.Labels).map(function(v){return(0,n.jsx)(F.Z.Item,{label:v,children:t.info.Labels[v]})})})})]})}),(0,n.jsx)(k.Z,{title:"\u4F7F\u7528\u5BB9\u5668",ghost:!0,children:(0,n.jsx)(de.Z,{rowKey:"Id",columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"Name",render:function(P,D,I){return(0,n.jsx)(u.Link,{target:"_blank",to:"/app/detail/edit/".concat(D.Id),children:D.Name})}},{title:"\u5BB9\u5668\u5185\u8DEF\u5F84",dataIndex:"Mount"},{title:"\u6743\u9650",render:function(P,D,I){return D.RW?(0,n.jsx)(G.Z,{children:"\u8BFB\u5199"}):(0,n.jsx)(G.Z,{children:"\u53EA\u8BFB"})}}],dataSource:t==null?void 0:t.inUseContainer,pagination:!1})})]})]})}),fe=ce,me=e(67255),ve=e(29158),he=e(43425),xe=e(90078),pe=e(10641),H=e(42075),ge=e(96074),q=e(25593),je=e(83062),ye=e(84567);function Oe(){var s=(0,g.useRef)(),m=(0,g.useRef)(),j=(0,g.useState)({deleteAll:!1}),a=O()(j,2),$=a[0],V=a[1];return(0,n.jsxs)(xe._z,{header:{extra:[(0,n.jsx)(se,{onFinish:function(){var f,o;!((f=s.current)===null||f===void 0)&&f.reloadAndRest&&((o=s.current)===null||o===void 0||o.reloadAndRest())}},"create")]},children:[(0,n.jsx)(fe,{ref:m}),(0,n.jsx)(pe.Z,{scroll:{x:"max-content"},rowKey:"Name",pagination:(0,me.O)(),columns:[{title:"\u540D\u79F0",dataIndex:"Name",width:300,render:function(f,o,t,l,r){return(0,n.jsx)(A.Z,{content:o.Name})}},{title:"\u6240\u5C5E\u5BB9\u5668",ellipsis:!0,search:!1,render:function(f,o,t,l,r){return o.InUse?(0,n.jsx)(H.Z,{direction:"vertical",children:o.InUse.map(function(i){return(0,n.jsx)(u.Link,{to:"/app/detail/edit/"+i.md5,children:(0,n.jsx)(G.Z,{color:"cyan",icon:(0,n.jsx)(ve.Z,{}),children:i.name})})})}):(0,n.jsx)(G.Z,{children:"\u672A\u4F7F\u7528"})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,search:!1,dataIndex:"Driver"},{title:"\u6302\u8F7D\u70B9",search:!1,width:250,dataIndex:"Mountpoint",render:function(f,o,t,l,r){return(0,n.jsx)(A.Z,{content:o.Mountpoint})}},{title:"\u521B\u5EFA\u65F6\u95F4",ellipsis:!0,width:200,search:!1,dataIndex:"CreatedAt",render:function(f,o,t,l,r){return new Date(o.CreatedAt).toLocaleString()}},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(f,o,t,l,r){return(0,n.jsx)(H.Z,{split:(0,n.jsx)(ge.Z,{type:"vertical"}),children:(0,n.jsx)(q.Z.Link,{onClick:function(){var Z;(Z=m.current)===null||Z===void 0||Z.showDetail(o.Name)},children:(0,n.jsx)(je.Z,{title:"\u7BA1\u7406",children:(0,n.jsx)(he.Z,{})})})})}}],request:function(){var x=c()(d()().mark(function f(o,t,l){var r,i;return d()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Y({name:o.name});case 2:return r=y.sent,i=[],r.data.inUse?i=r.data.list.map(function(v){return r.data.inUse&&r.data.inUse[v.Name]?v.InUse=r.data.inUse[v.Name]:v.InUse=void 0,v}):i=r.data.list,y.abrupt("return",{data:i,success:!0,total:r.data.list.length});case 6:case"end":return y.stop()}},f)}));return function(f,o,t){return x.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:s,tableAlertOptionRender:function(f){var o=f.selectedRowKeys;return(0,n.jsxs)(H.Z,{size:16,children:[(0,n.jsx)(T.Z,{danger:!0,type:"primary",action:function(){return Q({name:o})},onSuccess:function(){var l,r;return!((l=s.current)===null||l===void 0)&&l.reloadAndRest&&((r=s.current)===null||r===void 0||r.reloadAndRest()),!0},onError:function(){var l,r;return!((l=s.current)===null||l===void 0)&&l.reset&&((r=s.current)===null||r===void 0||r.reset()),!0},messageSuccess:"delete",children:"\u6279\u91CF\u5220\u9664"}),(0,n.jsx)(T.Z,{action:function(){var l;return w({deleteAll:(l=$.deleteAll)!==null&&l!==void 0?l:!1})},onSuccess:function(){var l,r;return!((l=s.current)===null||l===void 0)&&l.reloadAndRest&&((r=s.current)===null||r===void 0||r.reloadAndRest()),!0},onError:function(){var l,r;return!((l=s.current)===null||l===void 0)&&l.reset&&((r=s.current)===null||r===void 0||r.reset()),!0},messageSuccess:"clear",confirm:(0,n.jsxs)(H.Z,{style:{width:280},direction:"vertical",children:[(0,n.jsx)(q.Z.Text,{children:"\u662F\u5426\u6E05\u7406\u672A\u4F7F\u7528\u7684\u533F\u540D\u5B58\u50A8\uFF1F"}),(0,n.jsx)(ye.Z,{name:"deleteAll",onChange:function(l){return V({deleteAll:l.target.checked})},children:"\u662F\u5426\u6E05\u7406\u975E\u533F\u540D\u5377\uFF1F"})]}),children:"\u6E05\u7406\u672A\u4F7F\u7528\u5B58\u50A8"})]})}})]})}},67255:function(K,S,e){e.d(S,{O:function(){return E},j:function(){return d}});function E(){var p,c=parseInt((p=localStorage.getItem("dpanel-pagesize"))!==null&&p!==void 0?p:"0");return{showSizeChanger:!0,defaultPageSize:c!=null?c:20}}function d(p){var c="dpanel-table-column-".concat(p),C={};if(localStorage.getItem(c)){var O;C=JSON.parse((O=localStorage.getItem(c))!==null&&O!==void 0?O:"{}")}return{defaultValue:C,onChange:function(A){localStorage.setItem("dpanel-table-column-".concat(p),JSON.stringify(A))}}}}}]);
