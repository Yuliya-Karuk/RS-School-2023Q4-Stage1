# My TypeScript Journey: Earned Badges 🏆

## Badges Overview

Link to separate Compilation file [Typescript badges compilation](./TypeScript-Badges-Compilation.md)

Here is a collection of badges I earned from completing Microsoft Learn's TypeScript modules:

1. **Getting Started with TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/YuliyaKaruk-8969/YV3LFD9R?sharingId=495118D55351553B)
2. **Declare Variable Types in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/YuliyaKaruk-8969/FZU7MZUX?sharingId=495118D55351553B)
3. **Implement Interfaces in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/YuliyaKaruk-8969/HYGXQJD8?sharingId=495118D55351553B)
4. **Develop Typed Functions in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/YuliyaKaruk-8969/VKY4355M?sharingId=495118D55351553B)
5. **Declare and Instantiate Classes in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/YuliyaKaruk-8969/ZPFPS7V2?sharingId=495118D55351553B)
6. **Generics in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/YuliyaKaruk-8969/DGQGV39J?sharingId=495118D55351553B)
7. **Work with External Libraries in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/YuliyaKaruk-8969/24XKBXJV?sharingId=495118D55351553B)
8. **Organize Code with Namespaces in TypeScript**: [Badge](https://learn.microsoft.com/api/achievements/share/en-us/YuliyaKaruk-8969/UF5XVUL3?sharingId=495118D55351553B)

## Reflections

Link to separate Reflections file [Typescript modules reflections](./TypeScript-Modules-Reflections.md)

1. **Getting Started with TypeScript**.

  #### 📝 Key Concepts:
   - TypeScript is an open-source language that was developed by Microsoft.
   - TypeScript checks a program for errors before execution, and does so based on the kinds of values, making it a static type checker.
   - TypeScript has more coding features that you won't find in JavaScript: Interfaces, Namespaces, Generics, Abstract classes, Data modifiers, Optionals, Function overloading, Decorators, Type utils, readonly keyword.
   - By using compiler options, you can control how the JavaScript is generated from the source TypeScript. Here are a few of the most common options: noImplicitAny, noEmitOnError, target, the directory options.
   - tsconfig.json defines the TypeScript project settings, such as the compiler options and the files that should be included.

  #### 🖋️ Skills gained:
   - I've installed TypeScript.
   - I've generated tsconfig.json file.
   - I've learned how use compiler options with the tsc command.

  #### 👩‍💻 Summary
  From this module, I've learned what is typescript and what advantages does it give when using it. I installed TypeScript and set up a TypeScript project in Visual Studio Code with help of this topic.

2. **Declare Variable Types in TypeScript**.

  #### 📝 Key Concepts:
   - Types place static constraints on program entities, such as functions, variables, and properties, so that compilers and development tools can offer better verification and assistance during development.
   - Variables can be associated with types through explicit type annotations or through implicit type inference.
   - The any type represents any JavaScript value with no constraints. All other types are categorized as primitive types(boolean, number, bigint, string, void, null, undefined, enums), object types (class, interface, array, literals), or type parameters.
   - Union and Intersection types help you handle situations where a type is composed of two or more possible types. Literal types enable you to constrain the values assigned to a type to a narrow list of options.

  #### 🖋️ Skills gained:
   - I've implemented primitive types such as number, BigInt, string, enums.
   - I've learned how to use null, undefined and void types in the context of functions.
   - I've used any and unknown types when I needed to work with values that are unknown  at the time of developing code.
   - I've implemented Union and Intersection types which can compose or combine existing types instead of creating them from scratch.

  #### 👩‍💻 Summary
  I've learned how declare variables using primitive types, object types, about union/intersection/literal types. I understood the importance of using static types, because it provides better documentation, and allows TypeScript to validate that my code is working correctly.

3. **Implement Interfaces in TypeScript**.

  #### 📝 Key Concepts:
   - Interfaces are used to describe an object, naming and parameterizing the object's types, and to compose existing named object types into new ones.
   - Type aliases can act like interfaces, but the key distinction is that a type alias cannot be reopened to add new properties whereas an interface is always extendable.
   - Properties of the interface can be required, optional, or read only.
   - Interfaces can extend each other but there are some rules for it.

  #### 🖋️ Skills gained:
   - I've declared interfaces with different properties: required, optional, read only.
   - I've extended on interface with another with including some new properties.
   - I've used interface to describe array type that could be indexed into.

  #### 👩‍💻 Summary
  I've got that interfaces are a feature of TypeScript that allows us to define the structure of an object,the properties and methods that an object should have without implementation. I learned how declare, instantiate and extend an interface in TypeScript. I've understood that interfaces improve readability and reusability of code, and it helps to make refactoring easier.

4. **Develop Typed Functions in TypeScript**.

  #### 📝 Key Concepts:
   - TypeScript provides several different ways to define functions: function declaration, function expression, arrow functions.
   - The TypeScript compiler assumes, by default, that all parameters defined in a function are required.
   - In addition to required parameters, you can define functions with optional, default, and rest parameters, as well as deconstructed object parameters.

  #### 🖋️ Skills gained:
   - I've created functions with strongly typed parameters and return values.
   - I've implemented functions that have required, optional, and default parameters.
   - I've defined a function types using a type alias and an interface.

  #### 👩‍💻 Summary
  From this module, I've caught information about different methods of creating functions with TS, about possibility to define functions with optional, default, rest parameters, deconstructed object parameters. It will enhances my code quality and reduce bugs.

5. **Declare and Instantiate Classes in TypeScript**. I've learned about TypeScript-specific features like type annotations for class members, access modifiers, and the ability to specify required or optional parameters. This module helped me to understand the principles of OOP better and the possibilities of using them with TypeScript
6. **Generics in TypeScript**. From this unit, I've understood that generics are a TypeScript feature that allows us to pass in various types of data and create reusable code to handle different inputs. Generics offer us multiple benefits, such as type safety and error detection, code reusability and flexibility etc.
7. **Work with External Libraries in TypeScript**. This module introduced me to modules in TypeScript. I've learned that export/import statements makes a component in one module available to other modules. Modules usage helps us to better organize and structure our codebase.
8. **Organize Code with Namespaces in TypeScript**. This module explained me importance of namespaces which allow us to group variables, functions, interfaces, or classes; differences between modules and namespaces. I've learned how to organize TypeScript code using namespaces, what ways to compile multiple file namespaces are.