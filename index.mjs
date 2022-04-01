// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2order@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-data-type@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-order@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-casting-mode@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-dtype@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-shape@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-flatten-array@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-ctors@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-alloc-unsafe@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";var O=v,k=w;var z=function(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&k(e.length)&&e.length>=0&&e.length<O},V={casting:"safe",copy:!1,dtype:"float64",flatten:!0,mode:"throw",ndmin:0,order:"row-major",readonly:!1},A=x,B=E;var D=function(e,t,r){var s,n,i;if(s=A(r),"generic"===r)for(n=[],i=0;i<t;i++)n.push(e[i]);else if("binary"===r)for(n=B(t),i=0;i<t;i++)n[i]=e[i];else for(n=new s(t),i=0;i<t;i++)n[i]=e[i];return n},M=x,N=E;var P=function(e,t){return"generic"===t?function(e){var t,r,s;for(t=e.length,r=[],s=0;s<t;s++)r.push(e.get(s));return r}(e):"binary"===t?function(e){var t,r,s;for(t=e.length,r=N(t),s=0;s<t;s++)r[s]=e.get(s);return r}(e):function(e,t){var r,s,n;for(s=new(M(t))(r=e.length),n=0;n<r;n++)s[n]=e.get(n);return s}(e,t)};var R=function(e,t,r){var s,n;for(s=[],n=0;n<r-e;n++)s.push(1);for(n=0;n<e;n++)s.push(t[n]);return s},C=T;var F=function(e,t,r,s){var n,i,o,a,d;if(d=e-(i=r.length),n=[],"row-major"===s){for(o=C(r[0])*t[d],a=0;a<d;a++)n.push(o);for(a=0;a<i;a++)n.push(r[a])}else{for(a=0;a<d;a++)n.push(1);for(a=0;a<i;a++)n.push(r[a])}return n},q=e,G=t,H=r.isPrimitive,I=s,J=n.isPrimitive,K=i,L=o,Q=a,S=d,U=m,W=l,X=p,Y=f,Z=h,$=c,_=g,ee=j,te=b,re=u,se=y,ne=z,ie=V,oe=D,ae=P,de=R,me=F;var le=function(){var e,t,r,s,n,i,o,a,d,m,l,p,f;if(1===arguments.length)if(ne(arguments[0]))r=arguments[0],e={};else{if(!G(e=arguments[0]))throw new TypeError(se("invalid argument. Must provide either a valid data source, options argument, or both. Value: `%s`.",e));if(q(e,"buffer")&&(r=e.buffer,!ne(r)))throw new TypeError(se("invalid option. `%s` option must be an array-like object, typed-array-like, a Buffer, or an ndarray. Option: `%s`.","buffer",r))}else{if(!ne(r=arguments[0]))throw new TypeError(se("invalid option. Data source must be an array-like object, typed-array-like, a Buffer, or an ndarray. Value: `%s`.",r));if(!G(e=arguments[1]))throw new TypeError(se("invalid argument. Options argument must be an object. Value: `%s`.",e))}if(r&&(K(r)?(o=r.dtype,f=!0):(o=ee(r),f=!1)),m={},l={},q(e,"casting")){if(l.casting=e.casting,!Z(l.casting))throw new TypeError(se("invalid option. `%s` option must be a recognized casting mode. Option: `%s`.","casting",l.casting))}else l.casting=ie.casting;if(q(e,"flatten")){if(l.flatten=e.flatten,!H(l.flatten))throw new TypeError(se("invalid option. `%s` option must be a boolean. Option: `%s`.","flatten",l.flatten))}else l.flatten=ie.flatten;if(q(e,"ndmin")){if(l.ndmin=e.ndmin,!J(l.ndmin))throw new TypeError(se("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","ndmin",l.ndmin))}else l.ndmin=ie.ndmin;if(q(e,"dtype")){if(i=e.dtype,!X(i))throw new TypeError(se("invalid option. `%s` option must be a recognized data type. Option: `%s`.","dtype",i));if(o&&!$(o,i,l.casting))throw new Error(se("invalid option. Data type cast is not allowed. Casting mode: `%s`. From: `%s`. To: `%s`.",l.casting,o,i))}else i=o&&(f||"generic"!==o)?o:ie.dtype;if(q(e,"order")){if("any"===(n=e.order)||"same"===n)f?"any"===n?n=3===S(r.strides)?ie.order:r.order:"same"===n&&(n=r.order):n=ie.order;else if(!Y(n))throw new TypeError(se("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",n))}else n=ie.order;if(q(e,"mode")?m.mode=e.mode:m.mode=ie.mode,q(e,"submode")?m.submode=e.submode:m.submode=[m.mode],q(e,"readonly")?m.readonly=e.readonly:m.readonly=ie.readonly,q(e,"copy")){if(l.copy=e.copy,!H(l.copy))throw new TypeError(se("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",l.copy))}else l.copy=ie.copy;if(q(e,"shape")){if(a=e.shape,!ne(a))throw new TypeError(se("invalid option. `%s` option must be an array-like object containing nonnegative integers. Option: `%s`.","shape",a));d=a.length,p=U(a)}else{if(!r)throw new Error("invalid arguments. Must provide either a data source, array shape, or both.");f?(a=r.shape,d=r.ndims,p=r.length):l.flatten&&I(r)?(d=(a=te(r)).length,p=U(a)):(d=1,a=[p=r.length])}if(d<l.ndmin&&(a=de(d,a,l.ndmin),d=l.ndmin),f){if(r.length!==p)throw new RangeError("invalid arguments. Array shape is incompatible with provided data source. Number of data source elements does not match array shape.");o!==i||l.copy?r=ae(r,i):(t=r.strides,s=r.offset,r=r.data,t.length<d&&(t=me(d,a,t,n)))}else if(r){if("generic"===o&&l.flatten&&(r=re(r)),r.length!==p)throw new RangeError("invalid arguments. Array shape is incompatible with provided data source. Number of data source elements does not match array shape.");(o!==i||l.copy)&&(r=oe(r,p,i))}else r=_(i,p);return void 0===t&&(t=L(a,n),s=Q(a,t)),new W(i,r,a,t,s,n,m)},pe=le;export{pe as default};
//# sourceMappingURL=index.mjs.map
