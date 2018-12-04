# safe-es6-templates

## Description

Minimalistic templating library for ES6 templates that contain only interpolations (no expressions). It only supports interpolations because expressions are unsafe when templates come from an untrusted source.

## Goals

The reasons I made this library:

- no use of `eval()` or `new Function(string)`
- using RegExp replace method
- only supports interpolations (no expressions)
- new templates can be rendered at runtime
- no need to compile to a function (lodash can do it)
- safe when templates come from untrusted source

## Usage

```
const { template } = require('safe-es6-template');

const result = template('Hello ${first} ${last}!', {
    first: 'John',
    last: 'Doe'
});

console.log(result) // Prints Hello John Doe!
```

# API

```
String template(String template, Object context = {})
```
