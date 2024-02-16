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

### 1. **Getting Started with TypeScript**.

  #### 📝 Key Concepts:
   - TypeScript is an open-source language that was developed by Microsoft.
   - TypeScript checks a program for errors before execution, and does so based on the kinds of values, making it a static type checker.
   - TypeScript has more coding features that you won't find in JavaScript: Interfaces, Namespaces, Generics, Abstract classes, Data modifiers, Optionals, Function overloading, Decorators, Type utils, readonly keyword.
   - By using compiler options, you can control how the JavaScript is generated from the source TypeScript. Here are a few of the most common options: noImplicitAny, noEmitOnError, target, the directory options.
   - tsconfig.json defines the TypeScript project settings, such as the compiler options and the files that should be included.

  #### 🖋️ Skills gained:
   - installation TypeScript.
   - generation tsconfig.json file.
   - usage compiler options with the tsc command.

  #### 👩‍💻 Summary
  From this module, I've learned what is typescript and what advantages does it give when using it. I installed TypeScript and set up a TypeScript project in Visual Studio Code with help of this topic.

### 2. **Declare Variable Types in TypeScript**.

  #### 📝 Key Concepts:
   - Types place static constraints on program entities, such as functions, variables, and properties, so that compilers and development tools can offer better verification and assistance during development.
   - Variables can be associated with types through explicit type annotations or through implicit type inference.
   - The any type represents any JavaScript value with no constraints. All other types are categorized as primitive types(boolean, number, bigint, string, void, null, undefined, enums), object types (class, interface, array, literals), or type parameters.
   - Union and Intersection types help you handle situations where a type is composed of two or more possible types. Literal types enable you to constrain the values assigned to a type to a narrow list of options.

  #### 🖋️ Skills gained:
   - implementation primitive types such as number, BigInt, string, enums.
   - usage null, undefined and void types in the context of functions.
   - usage any and unknown types when I needed to work with values that are unknown  at the time of developing code.
   - implementation Union and Intersection types which can compose or combine existing types instead of creating them from scratch.

  #### 👩‍💻 Summary
  I've learned how declare variables using primitive types, object types, about union/intersection/literal types. I understood the importance of using static types, because it provides better documentation, and allows TypeScript to validate that my code is working correctly.

### 3. **Implement Interfaces in TypeScript**.

  #### 📝 Key Concepts:
   - Interfaces are used to describe an object, naming and parameterizing the object's types, and to compose existing named object types into new ones.
   - Type aliases can act like interfaces, but the key distinction is that a type alias cannot be reopened to add new properties whereas an interface is always extendable.
   - Properties of the interface can be required, optional, or read only.
   - Interfaces can extend each other but there are some rules for it.

  #### 🖋️ Skills gained:
   - declaration interfaces with different properties: required, optional, read only.
   - extending on interface with another with including some new properties.
   - usage interface to describe array type that could be indexed into.

  #### 👩‍💻 Summary
  I've got that interfaces are a feature of TypeScript that allows us to define the structure of an object,the properties and methods that an object should have without implementation. I learned how declare, instantiate and extend an interface in TypeScript. I've understood that interfaces improve readability and reusability of code, and it helps to make refactoring easier.

### 4. **Develop Typed Functions in TypeScript**.

  #### 📝 Key Concepts:
   - TypeScript provides several different ways to define functions: function declaration, function expression, arrow functions.
   - The TypeScript compiler assumes, by default, that all parameters defined in a function are required.
   - In addition to required parameters, you can define functions with optional, default, and rest parameters, as well as deconstructed object parameters.

  #### 🖋️ Skills gained:
   - creation functions with strongly typed parameters and return values.
   - implementation functions that have required, optional, and default parameters.
   - defining a function types using a type alias and an interface.

  #### 👩‍💻 Summary
  From this module, I've caught information about different methods of creating functions with TS, about possibility to define functions with optional, default, rest parameters, deconstructed object parameters. It will enhances my code quality and reduce bugs.

### 5. **Declare and Instantiate Classes in TypeScript**.

  #### 📝 Key Concepts:
   - In TypeScript, classes are yet another way to define the shape of an object, in addition to describing object types with interfaces and functions.
   - The class can be reused to create any number of new objects, each with their own characteristics.
   - In TypeScript, the visibility of class members can controlled by adding the public, private, or protected keyword before the member name.
   - Properties can be made readonly by using the readonly modifier. Readonly properties may only be set when initialized at their declaration or in the constructor.
   - There is another type of property called a static property. Static properties and methods are shared by all instances of a class.
   - Classes can also be extended. Typescript provides method overriding . It means writing the new definition of the method in the inherited class by keeping the method name, parameters, and return type the same.
   - A TypeScript interfaces can be applied to a class by adding the 'implements' keyword after the class name followed by the interface name. TypeScript will check and ensure that the object actually implements all the properties and methods defined inside the interface.

  #### 🖋️ Skills gained:
   - implementation of a class with properties, a constructor, accessors, and methods.
   - class instantiation using the new keyword and pass parameters to it.
   - setting the access modifier to properties and functions in class.
   - defining static properties in class.
   - implementation the interface in class.

  #### 👩‍💻 Summary
  I've learned about TypeScript-specific features like type annotations for class members, access modifiers, and the ability to specify required or optional parameters. This module helped me to understand the principles of OOP better and the possibilities of using them with TypeScript

### 6. **Generics in TypeScript**.

  #### 📝 Key Concepts:
   - Generics define one or more type variables to identify the type or types that you will pass to the component, enclosed in angle brackets (< >).
   - Generics allow creating 'type variables' which can be used to create classes, interfaces, functions & type aliases that don't need to explicitly define the types that they use.
   - Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

  #### 🖋️ Skills gained:
   - declaration a generic interface, a generic interface as a function type, generic interface as a class type.
   - declaration a generic class without an interface.

  #### 👩‍💻 Summary
  From this unit, I've understood that generics are a TypeScript feature that allows us to pass in various types of data and create reusable code to handle different inputs. Generics offer us multiple benefits, such as type safety and error detection, code reusability and flexibility etc.

### 7. **Work with External Libraries in TypeScript**.

  #### 📝 Key Concepts:
   - Modules provide a way to organize and categorize your code, enabling you to group related code together. Also module doesn't pollute the global scope.
   - We can export any declaration (such as a variable, function, class, type alias, or interface) from one module with export statement to another file witt import statement.
   - The import statement can take several forms depending on your objectives: import of a single export from a module, renamed import with the as keyword, import the entire module into a single variable.
   - In TypeScript, you gain access to external libraries by using the import statement. After importing a library and its type definition, you can use it in your code and gain the benefits of Intellisense and type checking.

  #### 🖋️ Skills gained:
   - export a module component.
   - usage of different import forms.
   - module compilation in one result files and separate files.

  #### 👩‍💻 Summary
  This module introduced me to modules in TypeScript. I've learned that export/import statements makes a component in one module available to other modules. Modules usage helps us to better organize and structure our codebase.

### 8. **Organize Code with Namespaces in TypeScript**.

  #### 📝 Key Concepts:
   - Namespaces are a TypeScript-specific way to organize and categorize your code. Namespaces allow you to group variables, functions, interfaces, or classes related in one namespace.
   - Namespaces can also nest within namespaces, providing even more options for organizing your code. But, if nested namespaces become more complex, it's possible to create an alias to shorten and simplify your code with using the import keyword.
   - While namespaces are easy to use for simple implementations and do not depend on a module loader, modules offer some additional benefits that namespaces do not.

  #### 🖋️ Skills gained:
   - organization code by using multi-file namespaces.
   - per-file compilation and single file compilation of namespaces.

  #### 👩‍💻 Summary
  This module explained me importance and advantages of namespaces; differences between modules and namespaces. I've learned how to organize TypeScript code using namespaces, what ways to compile multiple file namespaces are.