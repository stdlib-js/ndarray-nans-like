"use strict";var T=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(i){throw e=0,i}}};var c=T(function(B,b){"use strict";var N=require("@stdlib/ndarray-base-assert-is-complex-floating-point-data-type"),E=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,O=require("@stdlib/assert-is-ndarray-like"),j=require("@stdlib/assert-is-plain-object"),D=require("@stdlib/assert-is-nonnegative-integer-array").primitives,P=require("@stdlib/assert-is-empty-collection"),t=require("@stdlib/assert-has-own-property"),k=require("@stdlib/array-base-assert-contains").factory,C=require("@stdlib/ndarray-base-shape2strides"),V=require("@stdlib/ndarray-base-buffer"),_=require("@stdlib/ndarray-base-numel"),A=require("@stdlib/ndarray-base-fill"),g=require("@stdlib/ndarray-dtype"),y=require("@stdlib/ndarray-shape"),q=require("@stdlib/ndarray-order"),F=require("@stdlib/ndarray-ctor"),I=require("@stdlib/ndarray-dtypes"),h=require("@stdlib/array-base-join"),L=require("@stdlib/constants-complex128-nan"),s=require("@stdlib/string-format"),f=I("floating_point_and_generic"),w=k(f);function S(a){var e,i,n,m,o,u,v,l,p,r,d;if(!O(a))throw new TypeError(s("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",a));if(v=!1,o={},arguments.length>1){if(e=arguments[1],!j(e))throw new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",e));if(t(e,"dtype")){if(i=e.dtype,!w(i))throw new TypeError(s('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"dtype",h(f,'", "'),i));v=!0}else i=g(a);if(t(e,"shape")){if(r=e.shape,E(r))r=[r];else if(!D(r)&&!P(r))throw new TypeError(s("invalid option. `%s` option must be a nonnegative integer or an array of nonnegative integers. Option: `%s`.","shape",r))}else r=y(a);t(e,"order")?n=e.order:n=q(a),t(e,"mode")&&(o.mode=e.mode),t(e,"submode")&&(o.submode=e.submode),t(e,"readonly")&&(o.readonly=e.readonly)}else i=g(a),r=y(a),n=q(a);if(!v&&!w(i))throw new TypeError(s('invalid argument. First argument must have one of the following data types: "%s". Value: `%s`.',h(f,'", "'),i));return m=r.length,m>0?(u=_(r),p=C(r,n)):(u=1,p=[0]),l=new F(i,V(i,u),r,p,0,n,o),N(i)?d=L:d=NaN,A(l,d),l}b.exports=S});var Y=c();module.exports=Y;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
