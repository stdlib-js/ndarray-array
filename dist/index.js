"use strict";var g=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var T=g(function(Ie,O){
var R=require('@stdlib/constants-float64-pinf/dist'),U=require('@stdlib/math-base-assert-is-integer/dist');function G(e){return typeof e=="object"&&e!==null&&typeof e.length=="number"&&U(e.length)&&e.length>=0&&e.length<R}O.exports=G
});var E=g(function(Me,x){
var m=require('@stdlib/ndarray-defaults/dist');function _(){return{casting:m.get("casting"),copy:!1,dtype:m.get("dtypes.default"),flatten:!0,mode:m.get("index_mode"),ndmin:0,order:m.get("order"),readonly:!1}}x.exports=_
});var k=g(function(Re,j){
var H=require('@stdlib/ndarray-base-buffer-ctors/dist'),J=require('@stdlib/buffer-alloc-unsafe/dist');function K(e,a,r){var o,i,n;if(o=H(r),r==="generic")for(i=[],n=0;n<a;n++)i.push(e[n]);else if(r==="binary")for(i=J(a),n=0;n<a;n++)i[n]=e[n];else for(i=new o(a),n=0;n<a;n++)i[n]=e[n];return i}j.exports=K
});var S=g(function(Ue,D){
var Q=require('@stdlib/array-base-arraylike2object/dist'),W=require('@stdlib/complex-base-cast-return/dist'),X=require('@stdlib/complex-ctors/dist'),Y=require('@stdlib/ndarray-base-buffer-ctors/dist'),Z=require('@stdlib/buffer-alloc-unsafe/dist'),$=require('@stdlib/ndarray-base-ctor/dist'),ee=require('@stdlib/ndarray-dtype/dist'),re=require('@stdlib/ndarray-shape/dist'),ie=require('@stdlib/ndarray-strides/dist'),te=require('@stdlib/ndarray-offset/dist'),ae=require('@stdlib/ndarray-order/dist'),ne=require('@stdlib/ndarray-data-buffer/dist');function oe(e){var a,r,o;for(a=e.length,r=[],o=0;o<a;o++)r.push(e.iget(o));return r}function se(e){var a,r,o;for(a=e.length,r=Z(a),o=0;o<a;o++)r[o]=e.iget(o);return r}function ue(e,a){var r,o,i,n,f,t,u;if(r=Y(a),o=e.length,i=new r(o),t=Q(i),t.accessorProtocol)for(n=t.accessors[1],f=W(v,1,X(a)),u=0;u<o;u++)n(i,u,f(u));else for(u=0;u<o;u++)i[u]=e.iget(u);return i;function v(s){return e.iget(s)}}function fe(e,a){var r;return r=new $(ee(e),ne(e),re(e),ie(e),te(e),ae(e)),a==="generic"?oe(r):a==="binary"?se(r):ue(r,a)}D.exports=fe
});var A=g(function(Ge,B){
function pe(e,a,r){var o,i;for(o=[],i=0;i<r-e;i++)o.push(1);for(i=0;i<e;i++)o.push(a[i]);return o}B.exports=pe
});var N=g(function(_e,C){
var ve=require('@stdlib/math-base-special-abs/dist');function le(e,a,r,o){var i,n,f,t,u;if(n=r.length,u=e-n,i=[],o==="row-major"){for(f=ve(r[0])*a[u],t=0;t<u;t++)i.push(f);for(t=0;t<n;t++)i.push(r[t])}else{for(t=0;t<u;t++)i.push(1);for(t=0;t<n;t++)i.push(r[t])}return i}C.exports=le
});var M=g(function(He,I){
var l=require('@stdlib/assert-has-own-property/dist'),P=require('@stdlib/assert-is-plain-object/dist'),V=require('@stdlib/assert-is-boolean/dist').isPrimitive,de=require('@stdlib/assert-is-array/dist'),ce=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,ge=require('@stdlib/assert-is-ndarray-like/dist'),ye=require('@stdlib/ndarray-base-shape2strides/dist'),me=require('@stdlib/ndarray-base-strides2offset/dist'),he=require('@stdlib/ndarray-base-strides2order/dist'),h=require('@stdlib/ndarray-base-numel/dist'),qe=require('@stdlib/ndarray-ctor/dist'),we=require('@stdlib/ndarray-base-assert-is-data-type/dist'),be=require('@stdlib/ndarray-base-assert-is-order/dist'),Oe=require('@stdlib/ndarray-base-assert-is-casting-mode/dist'),Te=require('@stdlib/ndarray-base-assert-is-allowed-data-type-cast/dist'),xe=require('@stdlib/ndarray-base-buffer/dist'),Ee=require('@stdlib/ndarray-base-buffer-dtype/dist'),je=require('@stdlib/ndarray-dtype/dist'),ke=require('@stdlib/ndarray-shape/dist'),L=require('@stdlib/ndarray-strides/dist'),De=require('@stdlib/ndarray-offset/dist'),z=require('@stdlib/ndarray-order/dist'),Se=require('@stdlib/ndarray-data-buffer/dist'),F=require('@stdlib/array-shape/dist'),Be=require('@stdlib/array-base-flatten/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),q=T(),Ae=E(),Ce=k(),Ne=S(),Pe=A(),Ve=N(),d=Ae();function Le(){var e,a,r,o,i,n,f,t,u,v,s,w,c,b,y;if(arguments.length===1)if(q(arguments[0]))r=arguments[0],e={};else{if(e=arguments[0],!P(e))throw new TypeError(p('0hT56',e));if(l(e,"buffer")&&(r=e.buffer,!q(r)))throw new TypeError(p('0hT57',"buffer",r))}else{if(r=arguments[0],!q(r))throw new TypeError(p('0hT58',r));if(e=arguments[1],!P(e))throw new TypeError(p('0hT2V',e))}if(r&&(ge(r)?(f=je(r),y=!0):(f=Ee(r),y=!1)),v={},s={},l(e,"casting")){if(s.casting=e.casting,!Oe(s.casting))throw new TypeError(p('0hT59',"casting",s.casting))}else s.casting=d.casting;if(l(e,"flatten")){if(s.flatten=e.flatten,!V(s.flatten))throw new TypeError(p('0hT2o',"flatten",s.flatten))}else s.flatten=d.flatten;if(l(e,"ndmin")){if(s.ndmin=e.ndmin,!ce(s.ndmin))throw new TypeError(p('0hT2t',"ndmin",s.ndmin))}else s.ndmin=d.ndmin;if(l(e,"dtype")){if(n=e.dtype,!we(n))throw new TypeError(p('0hTBf',"dtype",n));if(f&&!Te(f,n,s.casting))throw new Error(p('0hT5B',s.casting,f,n))}else f?!y&&f==="generic"?n=d.dtype:n=f:n=d.dtype;if(l(e,"order")){if(i=e.order,i==="any"||i==="same")y?i==="any"?(b=he(L(r)),b===3?i=d.order:i=z(r)):i==="same"&&(i=z(r)):i=d.order;else if(!be(i))throw new TypeError(p('0hT5C',"order",i))}else i=d.order;if(l(e,"mode")?v.mode=e.mode:v.mode=d.mode,l(e,"submode")?v.submode=e.submode:v.submode=[v.mode],l(e,"readonly")?v.readonly=e.readonly:v.readonly=d.readonly,l(e,"copy")){if(s.copy=e.copy,!V(s.copy))throw new TypeError(p('0hT2o',"copy",s.copy))}else s.copy=d.copy;if(l(e,"shape")){if(t=e.shape,!q(t))throw new TypeError(p('0hT5D',"shape",t));u=t.length,c=h(t)}else if(r)y?(t=ke(r),u=t.length,c=h(t)):s.flatten&&de(r)?(t=F(r),w=t,u=t.length,c=h(t)):(u=1,c=r.length,t=[c]);else throw new Error(p('0hT0X'));if(u<s.ndmin&&(t=Pe(u,t,s.ndmin),u=s.ndmin),y){if(h(r.shape)!==c)throw new RangeError(p('0hT0Y'));f!==n||s.copy?r=Ne(r,n):(a=L(r),o=De(r),r=Se(r),a.length<u&&(a=Ve(u,t,a,i)))}else if(r){if(f==="generic"&&s.flatten&&(r=Be(r,w||F(r),!1)),r.length!==c)throw new RangeError(p('0hT0Y'));(f!==n||s.copy)&&(r=Ce(r,c,n))}else r=xe(n,c);return a===void 0&&(a=ye(t,i),o=me(t,a)),new qe(n,r,t,a,o,i,v)}I.exports=Le
});var ze=M();module.exports=ze;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map