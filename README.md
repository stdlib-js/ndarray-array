<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Multidimensional Arrays

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a multidimensional array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-array
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var array = require( '@stdlib/ndarray-array' );
```

<a name="main"></a>

#### array( \[buffer,] \[options] )

Returns a multidimensional array.

```javascript
// Create a 2x2 matrix:
var arr = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
// returns <ndarray>
```

To initialize multidimensional array data, provide a `buffer` argument, which may be a [generic array][@stdlib/array/generic], [typed array][@stdlib/array/typed], [Buffer][@stdlib/buffer/ctor], or [ndarray][@stdlib/ndarray/ctor].

<!-- eslint-disable object-curly-spacing, object-curly-newline -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var allocUnsafe = require( '@stdlib/buffer-alloc-unsafe' );

// Create an ndarray from a generic array linear data buffer:
var arr = array( [ 1.0, 2.0, 3.0, 4.0 ], { 'shape': [ 2, 2 ] } );
// returns <ndarray>

// Create an ndarray from a typed array linear data buffer:
arr = array( new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ), { 'shape': [ 2, 2 ] } );
// returns <ndarray>

// Create an ndarray as a view over a Buffer:
arr = array( allocUnsafe( 4 ), { 'shape': [ 2, 2 ] } );
// returns <ndarray>

// Create an ndarray from another ndarray:
arr = array( array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ) );
// returns <ndarray>
```

The function accepts the following `options`:

-   **buffer**: data source. If provided along with a `buffer` argument, the argument takes precedence.

-   **dtype**: underlying storage [data type][@stdlib/ndarray/dtypes]. If not specified and a data source is provided, the data type is inferred from the provided data source. If an input data source is not of the same type, this option specifies the data type to which to cast the input data. For non-[`ndarray`][@stdlib/ndarray/ctor] generic array data sources, the function casts generic array data elements to the default data type. In order to prevent this cast, the `dtype` option **must** be explicitly set to `'generic'`. Any time a cast is required, the `copy` option is set to `true`, as memory must be copied from the data source to an output data buffer. Default: `'float64'`.

-   **order**: specifies the memory layout of the data source as either row-major (C-style) or column-major (Fortran-style). The option may be one of the following values:

    -   `row-major`: the order of the returned array is row-major.
    -   `column-major`: the order of the returned array is column-major.
    -   `any`: if a data source is column-major and not row-major, the order of the returned array is column-major; otherwise, the order of the returned array is row-major.
    -   `same`: the order of the returned array matches the order of an input data source.

    Note that specifying an order which differs from the order of a provided data source does **not** entail a conversion from one memory layout to another. In short, this option is descriptive, not prescriptive. Default: `'row-major'`.

-   **shape**: array shape (dimensions). If a shape is not specified, the function attempts to infer a shape based on a provided data source. For example, if provided a nested array, the function resolves nested array dimensions. If provided a multidimensional array data source, the function uses the array's associated shape. For most use cases, such inference suffices. For the remaining use cases, specifying a shape is necessary. For example, provide a shape to create a multidimensional array view over a linear data buffer, ignoring any existing shape meta data associated with a provided data source.

-   **flatten**: `boolean` indicating whether to automatically flatten generic array data sources. If an array shape is not specified, the shape is inferred from the dimensions of nested arrays prior to flattening. If a use case requires partial flattening, partially flatten **prior** to invoking this function and set the option value to `false` to prevent further flattening during invocation. Default: `true`.

-   **copy**: `boolean` indicating whether to (shallow) copy source data to a new data buffer. The function does **not** perform a deep copy. To prevent undesired shared changes in state for generic arrays containing objects, perform a deep copy **prior** to invoking this function. Default: `false`.

-   **ndmin**: specifies the minimum number of dimensions. If an array shape has fewer dimensions than required by `ndmin`, the function **prepends** singleton dimensions to the array shape in order to satisfy the dimensions requirement. Default: `0`.

-   **casting**: specifies the casting rule used to determine acceptable casts. The option may be one of the following values:

    -   `none`: only allow casting between identical types.
    -   `equiv`: allow casting between identical and byte swapped types.
    -   `safe`: only allow "safe" casts.
    -   `mostly-safe`: allow "safe" casts and, for floating-point data types, downcasts.
    -   `same-kind`: allow "safe" casts and casts within the same kind (e.g., between signed integers or between floats).
    -   `unsafe`: allow casting between all types (including between integers and floats).

    Default: `'safe'`.

-   **mode**: specifies how to handle indices which exceed array dimensions.

    -   `throw`: specifies that an [`ndarray`][@stdlib/ndarray/ctor] instance should throw an error when an index exceeds array dimensions.
    -   `normalize`: specifies that an [`ndarray`][@stdlib/ndarray/ctor] instance should normalize negative indices and throw an error when an index exceeds array dimensions.
    -   `wrap`: specifies that an [`ndarray`][@stdlib/ndarray/ctor] instance should wrap around an index exceeding array dimensions using modulo arithmetic.
    -   `clamp`: specifies that an [`ndarray`][@stdlib/ndarray/ctor] instance should set an index exceeding array dimensions to either `0` (minimum index) or the maximum index.

    Default: `'throw'`.

-   **submode**: a mode array which specifies for each dimension how to handle subscripts which exceed array dimensions. If provided fewer modes than dimensions, the function recycles modes using modulo arithmetic. Default: `[ options.mode ]`.

-   **readonly**: `boolean` indicating whether an [`ndarray`][@stdlib/ndarray/ctor] instance should be **read-only**. Default: `false`.

By default, an [`ndarray`][@stdlib/ndarray/ctor] instance **throws** when provided an index which exceeds array dimensions. To support alternative indexing behavior, set the `mode` option, which will affect all public methods for getting and setting array elements.

```javascript
var opts = {
    'mode': 'clamp'
};

var arr = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], opts );
// returns <ndarray>

// Attempt to access an out-of-bounds linear index (clamped):
var v = arr.iget( 10 );
// returns 4.0
```

By default, the `mode` option is applied to subscripts which exceed array dimensions. To specify behavior for each dimension, set the `submode` option.

```javascript
var opts = {
    'submode': [ 'wrap', 'clamp' ]
};

var arr = array( [ [[1.0, 2.0], [3.0, 4.0]], [[5.0, 6.0], [7.0, 8.0]] ], opts );
// returns <ndarray>

// Attempt to access out-of-bounds subscripts:
var v = arr.get( -2, 10, -1 ); // linear index: 3
// returns 4.0
```

By default, the function automatically flattens [generic array][@stdlib/array/generic] data sources. To prevent flattening, set the `flatten` option to `false`.

```javascript
var opts = {
    'flatten': false,
    'dtype': 'generic'
};

// Create a generic array which will serve as our ndarray data source:
var buf = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];

// Create a 2-element vector:
var arr = array( buf, opts );
// returns <ndarray>

// Retrieve the first vector element:
var v = arr.get( 0 );
// returns [ 1.0, 2.0 ]

var bool = ( v === buf[ 0 ] );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   The number of elements in a data source `buffer` **must** agree with a specified array `shape` (i.e., the function assumes a single-segment contiguous [`ndarray`][@stdlib/ndarray/ctor]). To create arbitrary multidimensional views over linear data buffers, use a [lower-level constructor][@stdlib/ndarray/ctor].
-   The function supports arbitrary casting between data types. Note, however, that casting from a larger data type to a smaller data type (e.g., `int32` to `int8`) and between signed and unsigned types of the same size should be considered **unsafe**. 

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray-array' );

// Create a 4-dimensional array containing single-precision floating-point numbers:
var arr = array({
    'dtype': 'float32',
    'shape': [ 3, 3, 3, 3 ]
});

// Retrieve an array value:
var v = arr.get( 1, 2, 1, 2 );
// returns 0.0

// Set an array value:
arr.set( 1, 2, 1, 2, 10.0 );

// Retrieve the array value:
v = arr.get( 1, 2, 1, 2 );
// returns 10.0

// Serialize the array as a string:
var str = arr.toString();
// returns "ndarray( 'float32', new Float32Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ), [ 3, 3, 3, 3 ], [ 27, 9, 3, 1 ], 0, 'row-major' )"

// Serialize the array as JSON:
str = JSON.stringify( arr.toJSON() );
// e.g., returns '{"type":"ndarray","dtype":"float32","flags":{},"order":"row-major","shape":[3,3,3,3],"strides":[27,9,3,1],"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}'
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-array

[test-image]: https://github.com/stdlib-js/ndarray-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-array/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-array/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-array/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-array/main/LICENSE

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

[@stdlib/array/generic]: https://github.com/stdlib-js/array-generic

[@stdlib/array/typed]: https://github.com/stdlib-js/array-typed

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor

<!-- <related-links> -->

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

<!-- </related-links> -->

</section>

<!-- /.links -->
