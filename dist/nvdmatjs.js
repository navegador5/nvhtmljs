!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.NVDMATJS=t():n.NVDMATJS=t()}(this,function(){return function(n){var t={};function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(i,r,function(t){return n[t]}.bind(null,r));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}([function(n,t){function e(n){return n.length-1}function i(n){return n[e(n)]}function r(n,t){return n===t||n!=n&&t!=t}function l(n){return Array.isArray(n)||n instanceof Array}function u(n){return"[object Date]"===toString.call(n)}function d(n){return"[object RegExp]"===toString.call(n)}function s(n){return n&&n.window===n}function o(n){return n&&n.$evalAsync&&n.$watch}function c(n){return"function"==typeof n}function f(n){return void 0!==n}function a(){return Object.create(null)}n.exports={deepcopyJSON:function(n){return JSON.parse(JSON.stringify(n))},amax:function(n,t){let e=t.map(n=>n.a);return Math.max(...e)},amin:function(n,t){let e=t.map(n=>n.a);return Math.min(...e)},afindi:function(n,t,e){return e.findIndex(e=>e[n]===t)},afindv:function(n,t,e){return e.find(e=>e[n]===t)},getlsti:e,getlstv:i,getlsta:function(n,t){return i(t)[n]},getLstSlice:function(n,t){return t.slice(t.length-n)},setlst:function(n,t){return t[t.length-1]=n,t},secdel:function(n,t,e){let i=t-n+1;return e.splice(n,i),e},insert:function(n,t,e){return e.splice(n,0,t),e},insertl:function(n,t,e){return e.splice(n,0,...t),e},norecurEq:function(n,t){for(let e=0;e<n.length;e++){if(!1===(n[k]===t[k]))return!1}return!0},simpleCompare:r,isArray:l,isDate:u,isRegExp:d,isWindow:s,isScope:o,isFunction:c,isDefined:f,createMap:a,equals:function n(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!=t&&e!=e)return!0;var i,p,_,b=typeof t;if(b===typeof e&&"object"===b){if(!l(t)){if(u(t))return!!u(e)&&r(t.getTime(),e.getTime());if(d(t))return!!d(e)&&t.toString()===e.toString();if(o(t)||o(e)||s(t)||s(e)||l(e)||u(e)||d(e))return!1;for(p in _=a(),t)if("$"!==p.charAt(0)&&!c(t[p])){if(!n(t[p],e[p]))return!1;_[p]=!0}for(p in e)if(!(p in _)&&"$"!==p.charAt(0)&&f(e[p])&&!c(e[p]))return!1;return!0}if(!l(e))return!1;if((i=t.length)===e.length){for(p=0;p<i;p++)if(!n(t[p],e[p]))return!1;return!0}}return!1}}},function(n,t,e){const i=e(0);function r(n){return null===n._pid}function l(n){return null===n._lsibid}function u(n){return null===n._rsibid}function d(n){return null===n._fstchid}function s(n){return null!==n._fstchid&&void 0!==n._fstchid}function o(n){return null!==n._rsibid&&void 0!==n._rsibid}function c(n,t){return null===n?null:i.afindv("_id",n,t)}function f(n){return i.amax("_id",n)}function a(n){let t={_fstchid:void 0,_lsibid:void 0,_rsibid:void 0,_id:n.currid,_pid:void 0,_depth:0};return n.currid=n.currid+1,t}function p(n){return n._fstchid=null,n}function _(n,t){return c(n._lsibid,t)}function b(n,t){return c(n._rsibid,t)}function h(n,t){let e=[];for(;null!==n&&null!==(n=_(n,t));)e.push(n);return e.reverse(),e}function g(n,t){let e=[];for(;null!==n&&null!==(n=b(n,t));)e.push(n);return e}function y(n,t){let e=h(n,t);return 0===e.length?n:e[0]}function x(n,t){let e=g(n,t),r=0===e.length?n:i.getlstv(e);return r=void 0===r?null:r}function A(n,t){let e=h(n,t),i=g(n,t);return Array.prototype.concat(e,[n],i)}function v(n,t){return c(n._fstchid,t)}function m(n,t,e){if(d(t))return null;{let i=0,r=v(t,e),l=b(r,e);for(;i<n&&null!==l;)l=b(r=l,e),i+=1;return r=i<n?null:r}}function L(n,t){let e=[];if(d(n));else{let i=v(n,t);e.push(i),e=e.concat(g(i,t))}return e}function S(n,t){let e=L(n,t),r=i.getlstv(e);return r=void 0===r?null:r}function F(n,t){return c(y(n,t)._pid,t)}function R(n,t){let e=[],i=F(n,t);for(;null!==i;)e.push(i),i=F(i,t);return e}function w(n,t){let e=R(n,t);return Array.prototype.concat([n],e)}function P(n,t,e){let i=F(t,e),r=0;for(;null!==i&&r<n;)i=F(i,e),r+=1;return i}function O(n,t){let e=o(n);for(;!e&&null!==(n=F(n,t));)e=o(n);return n}function N(n,t){let e=0,i=F(n,t);for(;null!==i;)i=F(i,t),e+=1;return e}function I(n,t){let e=O(n,t);if(null===e)return null;return b(e,t)}function E(n,t){let e=n,i=S(e,t);for(;null!==i;)i=S(e=i,t);return e}function D(n,t){let e,i=v(n,t);return e=null===i?I(n,t):i}function M(n,t,e){let r=R(t,e);return i.afindi("_id",n._id,r)>=0}function j(n,t,e){let r=w(t,e);return i.afindi("_id",n._id,r)>=0}function T(n,t){let e=[],i=n;for(;null!==n&&j(i,n,t);)e.push(n),n=D(n,t);return e}function C(n,t){let e=n-t[0]._depth;return t=t.map(n=>(n._depth=n._depth+e,n))}function B(n){return n._pid=void 0,n}function G(n){return n._lsibid=null,n}function J(n){let t,e;return i.isArray(n)?e=(t=n)[0]:(t=[n],e=n),[t,e]}function U(n,t,e){return r(n)?(console.log("rnd  can NOT addRsib"),t):t=u(n)?function(n,t,e){let[r,l]=J(e);r=C(n._depth,r),l._lsibid=n._id,n._rsibid=l._id,l=B(l);let u=E(n,t),d=i.afindi("_id",u._id,t);return t=i.insertl(d+1,r,t)}(n,t,e):function(n,t,e){let[r,l]=J(e);r=C(n._depth,r);let u=b(n,t);u._lsibid=l._id,l._rsibid=u._id,n._rsibid=l._id,l._lsibid=n._id,l=B(l);let d=E(n,t),s=i.afindi("_id",d._id,t);return t=i.insertl(s+1,r,t)}(n,t,e)}function k(n){return n._lsibid=null,n._rsibid=null,n._pid=null,n}function q(n){let t=n[0]._depth;return n=n.map(n=>(n._depth=n._depth-t,n))}function $(n,t){let e=T(n,t),r=i.afindi("_id",e[0]._id,t);return[r,r+e.length-1]}function H(n,t){let e,r=v(n,t);if(null!==r){let[l,u]=$(r,t);e=t.slice(l,u+1);let d=b(r,t);null===d?n=p(n):(n._fstchid=d._id,d._pid=n._id,d=G(d)),e=q(e),r=k(r),t=i.secdel(l,u,t)}else e=[];return[t,e]}function V(n,t){let e=F(y(n,t),t);return null===e?[[],t]:H(e,t)}function W(n,t){let e,r=b(n,t);if(null===r)e=[];else{let[l,u]=$(r,t);e=t.slice(l,u+1);let d=b(r,t);null===d?n._rsibid=null:(n._rsibid=d._id,d._lsibid=n._id),e=q(e),r=k(r),t=i.secdel(l,u,t)}return[t,e]}function z(n,t){let e;if(r(n))e=[[],t];else if(l(n)){e=H(F(n,t),t)}else{e=W(_(n,t),t)}return e}n.exports={isRoot:r,isFstch:function(n){return null===n._lsibid&&null!==n._pid},isFstsib:l,isFstchButNotLstch:function(n){return null!==n._rsibid&&void 0!==n._rsibid&&null===n._lsibid&&null!==n._pid},isFstsibButNotLstsib:function(n){return null!==n._rsibid&&void 0!==n._rsibid&&null===n._lsibid},isLstch:function(n){return null===n._rsibid&&null!==n._pid},isLstsib:u,isLstchButNotFstch:function(n){return null===n._rsibid&&null!==n._lsibid&&void 0!==n._lsibid&&null!==n._pid},isLstsibButNotFstsib:function(n){return null===n._rsibid&&null!==n._lsibid&&void 0!==n._lsibid},isFstchAndLstch:function(n){return null===n._lsibid&&null===n._rsibid&&null!==n._pid},isFstsibAndLstsib:function(n){return null===n._lsibid&&null===n._rsibid},isMidch:function(n){return null!==n._lsibid&&void 0!==n._lsibid&&null!==n._rsibid&&void 0!==n._rsibid&&null!==n._pid},isMidsib:function(n){return null!==n._lsibid&&void 0!==n._lsibid&&null!==n._rsibid&&void 0!==n._rsibid},isLeaf:d,isNonLeaf:s,isUndefined:function(n){return void 0===n._fstchid},havingLsib:function(n){return null!==n._lsibid&&void 0!==n._lsibid},havingRsib:o,idgetnd:c,eq:function(n,t){for(let e in n){if(!1===(n[e]===t[e]))return!1}return!0},sdfselGetMaxId:f,subsdfselResetId:function(n,t,e){let i=f(t)+1;for(let t=0;t<n.length;t++)n[t]._id=i,i+=1;return e.currid=i,[n,t,e]},newIdPool:function(n){let t={currid:0};return void 0===n||(t.currid=f(n)+1),t},newNode:a,newRoot:function(n){let t=a(n);return t._lsibid=null,t._rsibid=null,t._pid=null,t._depth=0,t},newFstsib:function(n){let t=a(n);return t._lsibid=null,t},newMidsib:function(n){return a(n)},newLstsib:function(n){let t=a(n);return t._rsibid=null,t},leafize:p,newLeafFstsib:function(n){let t=a(n);return t._lsibid=null,t._fstchid=null,t},newLeafMidsib:function(n){let t=a(n);return t._fstchid=null,t},newLeafLstsib:function(n){let t=a(n);return t._rsibid=null,t._fstchid=null,t},newLeafLonelySib:function(n){let t=a(n);return t._lsibid=null,t._rsibid=null,t._fstchid=null,t},getLsib:_,getRsib:b,getPrecedingSibs:h,getFollowingSibs:g,getFstsib:y,getLstsib:x,getAllSibs:A,getSib:function(n,t,e){return A(t,e)[n]},getFstch:v,getChild:m,getChildren:L,getLstch:S,getParent:F,getAllAnces:R,getAllAncesIncludingSelf:w,getAnces:P,getAncesIncludingSelf:function(n,t,e){return 0===n?t:P(n-1,t,e)},getFstAncesHavingRsibIncludingSelf:O,calcDepth:N,getDepth:function(n,t){return void 0===n._depth?N(n,t):n._depth},getSibseq:function(n,t){return h(n,t).length},getBreadth:function(n,t){let e=h(F(n,t),t).map(n=>L(n,t)),i=Array.prototype.concat(...e),r=h(n,t);return i.length+r.length},getRsibOfFstAncesHavingRsibIncludingSelf:I,getRdmost:E,sdfsNext:D,sdfsPrev:function(n,t){let e,i=_(n,t);return e=null===i?F(n,t):E(i,t)},isAncesOf:M,isDesOf:function(n,t,e){return M(t,n,e)},isAncesOfIncludingSelf:j,isDesOfIncludingSelf:function(n,t,e){return j(t,n,e)},getAllDesesIncludingSelf:T,getAllDeses:function(n,t){let e=T(n,t);return e.shift(),e},getFlatWidth:function(n,t){return T(n,t).filter(d).length},getFlatOffset:function(n,t){let e=t.findIndex(t=>t._id===n._id),i=t.slice(0,e);return(i=i.filter(d)).length},addLsib:function(n,t,e){return r(n)?console.log("rnd  can NOT addLsib"):t=l(n)?function(n,t,e){let[r,l]=J(e);r=C(n._depth,r);let u=F(n,t);u._fstchid=l._id,l._pid=u._id,n._pid=void 0,l._lsibid=null,l._rsibid=n._id,n._lsibid=l._id;let d=i.afindi("_id",n._id,t);return t=i.insertl(d,r,t)}(n,t,e):function(n,t,e){let[r,l]=J(e);r=C(n._depth,r);let u=_(n,t);u._rsibid=l._id,l._lsibid=u._id,n._lsibid=l._id,l._rsibid=n._id,l=B(l);let d=i.afindi("_id",n._id,t);return t=i.insertl(d,r,t)}(n,t,e),t},addRsib:U,addFstch:function(n,t,e){let[r,l]=J(e);if(r=C(n._depth+1,r),s(n))return console.log("nonleaf  can NOT addFstch"),t;n._fstchid=l._id,l._pid=n._id,l=G(l);let u=i.afindi("_id",n._id,t);return t=i.insertl(u+1,r,t)},addLstch:function(n,t,e){return U(S(n,t),t,e)},getDesFstiAndLsti:$,rmFstch:H,rmFstsib:V,rmRsib:W,rmLstsib:function(n,t){let e=_(x(n,t),t);return null===e?V(n,t):W(e,t)},rmLsib:function(n,t){let e,r=_(n,t);if(null===r)e=[];else{let[l,u]=$(r,t);e=t.slice(l,u+1);let d=_(r,t);if(null===d){n._lsibid=null,n._pid=r._pid,F(n,t)._fstchid=r._id}else n._lsibid=d._id,d._rsibid=n._id;e=q(e),r=k(r),t=i.secdel(l,u,t)}return[t,e]},rmSelf:z,rmChild:function(n,t,e){let i=m(n,t,e);return null===i?[e,[]]:z(i,e)}}},function(n,t,e){const i=e(1),r=e(3),l=e(4),u=e(0);n.exports={ndfunc:i,ding:r,conns:l,cmmn:u}},function(n,t,e){const i=e(1),r=e(0),l=i.newIdPool();function u(){let n=i.newRoot(l);return n.text="root",n.expanded=!0,n.display=!1,n.type="root",n}function d(n){let t=i.newLeafLonelySib(l);return t.text=n,t.expanded=!0,t.display=!0,t.type="index",t}function s(){let n=i.newLeafLstsib(l);return n.text="+",n.display=!0,n.type="plus",n}function o(n,t){return i.getRsib(n,t)}function c(n,t,e){i.isFstch(n);let r=d(e);return t=i.addRsib(n,t,r),pairPlusnd=s(),t=i.addRsib(r,t,pairPlusnd),childPlusnd=s(),[t=i.addFstch(r,t,childPlusnd),pairPlusnd,childPlusnd]}function f(n,t,e){let r=[t,null,null];if(i.isRoot(n))console.log("can NOT add more-than-one root!");else{r=c(o(n,t),t,e)}return r}function a(n,t,e){let r=i.getFstch(n,t);return rslt=c(r,t,e),rslt}function p(n,t,e){return"plus"===n.type?c(n,t,e):f(n,t,e)}function _(n,t,e){return"plus"===n.type?(console.log("can NOT add child to plusnd!"),[t,null,null]):a(n,t,e)}function b(n,t){return r.afindv("text",n,t)}function h(n,t){let e=o(n,t),r=i.rmSelf(n,t);return t=r[0],t=(r=i.rmSelf(e,t))[0]}function g(n){return n.forEach(n=>{"plus"===n.type&&(n.display=!0)}),n}function y(n){return n.forEach(n=>{"plus"===n.type&&(n.display=!1)}),n}function x(n,t,e){n.expanded=!1,n.display=!0;let r=i.getAllDeses(n,t);return r=r.map(n=>(n.expanded=!1,n.display=!1,n)),t}function A(n,t,e){n.expanded=!0,n.display=!0;let r=i.getAllDeses(n,t);return r=r.map(n=>("edit"===e&&"index"===n.type?(n.expanded=!0,n.display=!0):"edit"===e&&"plus"===n.type?n.display=!0:"disp"===e&&"index"===n.type?(n.expanded=!0,n.display=!0):n.display=!1,n)),t}function v(n,t,e){return n.expanded=!0,n.display=!0,i.getChildren(n,t).forEach(n=>{"edit"===e&&"index"===n.type?(n.expanded=!0,n.display=!0):"edit"===e&&"plus"===n.type?n.display=!0:"disp"===e&&"index"===n.type?(n.expanded=!0,n.display=!0):n.display=!1}),t}n.exports={IDPOOL:l,newRoot:u,newNode:d,newPlusNode:s,initSdfsel:function(){let n=u(),t=s(),e=[n];return[e=i.addFstch(n,e,t),t]},getPairPlusnd:o,getPairIndexNd:function(n,t){return i.getLsib(n,t)},plusndAddRsib:c,indexndAddRsib:f,indexndAddFstch:a,ndAddRsib:p,ndAddFstch:_,getAllPlusnd:function(n){return n.filter(n=>"plus"===n.type)},getAllIndexNd:function(n){return n.filter(n=>"index"===n.type)},textGetNd:b,textGetSdfsi:function(n,t){return r.afindi("text",n,t)},textAddRsib:function(n,t,e){return p(b(n,t),t,e)},textAddFstch:function(n,t,e){return _(b(n,t),t,e)},ndRmSelf:h,txtRmself:function(n,t){return h(b(n,t),t)},enableEdit:g,disableEdit:y,ndUnexpandAll:x,txtUnexpandAll:function(n,t,e){return x(b(n,t),t)},ndExpandAll:A,txtExpandAll:function(n,t,e){return A(b(n,t),t,e)},ndExpand:v,txtExpand:function(n,t,e){return v(b(n,t),t,e)},rootUnexpandAll:function(n,t){let e=i.getChildren(n[0],n);return e.forEach(t=>{x(t,n)}),"disp"===t?y(e):g(e),n},rootExpandAll:function(n,t){let e=i.getChildren(n[0],n);return e.forEach(e=>{A(e,n,t)}),"disp"===t?y(e):g(e),n},disp:function(n){n.forEach(n=>{n.display&&console.log("    ".repeat(n._depth-1)+n.text)})}}},function(n,t,e){const i=e(1),r=e(0),l={t:"├── ",v:"│   ",l:"└── ",ws:"    "};function u(n){let t=i.newRoot(n);return t.tag="root",t.expanded=!0,t.display=!1,t.checked=!1,t._conns=[],t.conns=[],t}function d(n,t){let e=i.newLeafLonelySib(t);return e.tag=n,e.expanded=!0,e.display=!0,e.checked=!1,e._conns=[],e.conns=[],e}function s(n){let t;return t="t"===n?"v":"v"===n?"v":"ws"}function o(n,t){let e,r;if(i.isRoot(n))e=[];else{let l=i.getParent(n,t);e=l._conns.slice(0,l._conns.length).map(s),(r=i.isLstch(n))?e.push("l"):e.push("t")}return n._conns=e,!1===t[0].display?n.conns=e.slice(1):n.conns=e,n}function c(n,t){let e=i.getLsib(n,t);return e._conns=r.setlst("t",e._conns),e.conns=e._conns.slice(1),n=o(n,t)}n.exports={disp:function(n){n.forEach(n=>{n.display&&console.log(function(n){let t=n.conns.map(n=>l[n]).join("");return t+=n.tag}(n))})},newRoot:u,initSdfsel:function(n){return[[u(n=void 0===n?i.newIdPool():n)],n]},ndAndTagAddLsib:function(n,t,e,r){let l=d(e,r);return function(n,t){n=o(n,t)}(l,t=i.addLsib(n,t,l)),t},ndAndTagAddRsib:function(n,t,e,r){let l=d(e,r);return function(n,t){n=i.isFstsib(n)?o(n,t):c(n,t)}(l,t=i.addRsib(n,t,l)),t},ndAndTagAddLstch:function(n,t,e,r){let l=d(e,r);return i.isLeaf(n)||i.isRoot(n)?o(l,t=i.addFstch(n,t,l)):c(l,t=i.addLstch(n,t,l)),t},ndRmSelf:function(n,t){return function(n,t){if(i.isLstsibButNotFstsib(n)){let e=i.getLsib(n,t);e._conns=r.setlst("l",e._conns),e.conns=e._conns.slice(1)}}(n,t),i.rmSelf(n,t)[0]},ndUnexpandAll:function(n,t){n.expanded=!1;let e=i.getAllDeses(n,t);return e=e.map(n=>(n.display=!1,n)),t},ndExpand:function n(t,e){return t.expanded=!0,i.getChildren(t,e).forEach(t=>{t.display=!0,t.expanded&&(e=n(t,e))}),e},newIdPool:i.newIdPool,sdfselGetMaxId:i.sdfselGetMaxId}}])});
//# sourceMappingURL=nvdmatjs.js.map