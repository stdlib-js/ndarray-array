// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2order@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-data-type@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-order@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-casting-mode@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-allowed-data-type-cast@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-dtype@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-shape@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-flatten-array@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer-ctors@esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-alloc-unsafe@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function T(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&w(e.length)&&e.length>=0&&e.length<v}var R="safe",P=!1,Y="float64",k=!0,K="throw",M=0,N="row-major",O=!1;function Q(e,r,s){var t,n,i;if(t=x(s),"generic"===s)for(n=[],i=0;i<r;i++)n.push(e[i]);else if("binary"===s)for(n=L(r),i=0;i<r;i++)n[i]=e[i];else for(n=new t(r),i=0;i<r;i++)n[i]=e[i];return n}function X(e,r){return"generic"===r?function(e){var r,s,t;for(r=e.length,s=[],t=0;t<r;t++)s.push(e.get(t));return s}(e):"binary"===r?function(e){var r,s,t;for(r=e.length,s=L(r),t=0;t<r;t++)s[t]=e.get(t);return s}(e):function(e,r){var s,t,n;for(t=new(x(r))(s=e.length),n=0;n<s;n++)t[n]=e.get(n);return t}(e,r)}function q(e,r,s){var t,n;for(t=[],n=0;n<s-e;n++)t.push(1);for(n=0;n<e;n++)t.push(r[n]);return t}function z(e,r,s,t){var n,i,d,o,m;if(m=e-(i=s.length),n=[],"row-major"===t){for(d=E(s[0])*r[m],o=0;o<m;o++)n.push(d);for(o=0;o<i;o++)n.push(s[o])}else{for(o=0;o<m;o++)n.push(1);for(o=0;o<i;o++)n.push(s[o])}return n}function A(){var v,w,x,L,E,A,B,C,D,F,G,H,I;if(1===arguments.length)if(T(arguments[0]))x=arguments[0],v={};else{if(!r(v=arguments[0]))throw new TypeError(u("0Le5K",v));if(e(v,"buffer")&&!T(x=v.buffer))throw new TypeError(u("0Le5L","buffer",x))}else{if(!T(x=arguments[0]))throw new TypeError(u("0Le5M",x));if(!r(v=arguments[1]))throw new TypeError(u("0Le2h",v))}if(x&&(i(x)?(B=x.dtype,I=!0):(B=g(x),I=!1)),F={},G={},e(v,"casting")){if(G.casting=v.casting,!p(G.casting))throw new TypeError(u("0Le5N","casting",G.casting))}else G.casting=R;if(e(v,"flatten")){if(G.flatten=v.flatten,!s(G.flatten))throw new TypeError(u("0Le30","flatten",G.flatten))}else G.flatten=k;if(e(v,"ndmin")){if(G.ndmin=v.ndmin,!n(G.ndmin))throw new TypeError(u("0Le35","ndmin",G.ndmin))}else G.ndmin=M;if(e(v,"dtype")){if(A=v.dtype,!l(A))throw new TypeError(u("0Le5O","dtype",A));if(B&&!j(B,A,G.casting))throw new Error(u("0Le5P",G.casting,B,A))}else A=B&&(I||"generic"!==B)?B:Y;if(e(v,"order")){if("any"===(E=v.order)||"same"===E)I?"any"===E?E=3===m(x.strides)?N:x.order:"same"===E&&(E=x.order):E=N;else if(!h(E))throw new TypeError(u("0Le5Q","order",E))}else E=N;if(e(v,"mode")?F.mode=v.mode:F.mode=K,e(v,"submode")?F.submode=v.submode:F.submode=[F.mode],e(v,"readonly")?F.readonly=v.readonly:F.readonly=O,e(v,"copy")){if(G.copy=v.copy,!s(G.copy))throw new TypeError(u("0Le30","copy",G.copy))}else G.copy=P;if(e(v,"shape")){if(!T(C=v.shape))throw new TypeError(u("0Le5R","shape",C));D=C.length,H=a(C)}else{if(!x)throw new Error(u("0Le0X"));I?(C=x.shape,D=x.ndims,H=x.length):G.flatten&&t(x)?(D=(C=b(x)).length,H=a(C)):(D=1,C=[H=x.length])}if(D<G.ndmin&&(C=q(D,C,G.ndmin),D=G.ndmin),I){if(x.length!==H)throw new RangeError(u("0Le0Y"));B!==A||G.copy?x=X(x,A):(w=x.strides,L=x.offset,x=x.data,w.length<D&&(w=z(D,C,w,E)))}else if(x){if("generic"===B&&G.flatten&&(x=y(x)),x.length!==H)throw new RangeError(u("0Le0Y"));(B!==A||G.copy)&&(x=Q(x,H,A))}else x=c(A,H);return void 0===w&&(w=d(C,E),L=o(C,w)),new f(A,x,C,w,L,E,F)}export{A as default};
//# sourceMappingURL=index.mjs.map
