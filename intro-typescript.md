# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06 alternative-to-enum.ts
Literal types are simpler and lighter than enums. They are the modern, preferred approach in TypeScript when you only need a fixed set of string values. Using a `type` alias avoids repeating the union type everywhere.

## 07-custom-type-role.ts
Type aliases (`type`) are just blueprints — they do not create variables. You still need `let` or `const` to create an actual variable. Types are erased after compilation and do not exist at runtime.

## 08-functions.ts
 TypeScript can type every part of a function — parameters, return values, and even callbacks. `void` means no return value, while `never` means the function never completes normally (throws or loops forever).

## 09-special-types.ts
 `null` and `undefined` are different in TypeScript. Use `null` when you intentionally want to say "no value", and `undefined` for values that haven't been set yet.

 ## 10-form.html
 connection between the typescript and html allowing to add script

 ## 10-form.html and 10-type-narrowing.ts
 TypeScript is careful with DOM elements because they might not exist at runtime. Always handle `null` — either with a guard check, type casting, or optional chaining. Avoid non-null assertion (`!`) unless you are 100% sure the element exists.

## 11-optional.ts
 Use `??` when you want to allow empty strings and `0` as valid values. Use `||` when any falsy value should trigger the fallback. Optional parameters (`?`) and optional properties (`?`) mean the value can be `undefined` — but never use `?` on the value side of an object literal, only in the type definition.
