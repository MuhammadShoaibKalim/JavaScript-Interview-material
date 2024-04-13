# JavaScript Interview Preparation

Welcome to the JavaScript interview preparation repository! Here you'll find a curated collection of essential JavaScript concepts, along with common interview questions and their explanations.

## Try It Online

You can try out the JavaScript code snippets provided in this README.md file directly in your browser using the online compiler below.

[![Open in CodePen](https://img.shields.io/badge/Open_in-CodePen-000000?style=for-the-badge&logo=codepen)](https://codepen.io/pen?template=)

## Table of Contents

1. [Introduction to JavaScript](#introduction-to-javascript)
2. [Common JavaScript Interview Questions](#common-javascript-interview-questions)

## Introduction to JavaScript

JavaScript is a scripting language commonly used to create interactive web pages. It works alongside HTML and CSS to provide dynamic functionality and enhanced user experience.

## Common JavaScript Interview Questions

1. **Difference between == and ===**
   - `==` is used for value equality, while `===` is used for both value and type equality.
   - `==` performs type coercion, converting the types of operands to match, while `===` requires both operands to have the same type without coercion.
   - **Example:**
     ```javascript
     console.log(1 == '1'); // true
     console.log(1 === '1'); // false
     ```

2. **Primitive and non-primitive data types**
   - **Primitive data types**: These are immutable data types and include string, number, boolean, null, undefined, and symbol.
   - **Non-primitive data types**: Also known as reference types, these include objects and arrays. They are mutable and stored by reference.
   - **Example:**
     ```javascript
     let primitive = 'Hello';
     let nonPrimitive = [1, 2, 3];
     ```

3. **Use of ‘this’ keyword**
   - `this` refers to the object it belongs to.
   - Its value is determined by how a function is called.
   - **Example:**
     ```javascript
     const obj = {
       name: 'John',
       greet: function() {
         console.log('Hello, ' + this.name);
       }
     };
     obj.greet(); // Hello, John
     ```

4. **Difference between Regular JavaScript functions and arrow functions**
   - Regular functions:
     - Have their own `this` binding.
     - Cannot be used as constructors with `new`.
   - Arrow functions:
     - Lexically bind `this` to the surrounding execution context.
     - Cannot be bound with `new` or used as constructors.
   - **Example:**
     ```javascript
     const regularFunc = function() {
       console.log(this);
     };

     const arrowFunc = () => {
       console.log(this);
     };

     regularFunc(); // Logs the global object
     arrowFunc(); // Logs the lexical `this`
     ```

5. **Closures**
   - A closure is a function that retains access to variables from its lexical scope even after the scope has exited.
   - It allows functions to maintain access to variables from outer scopes in which they were defined.
   - **Example:**
     ```javascript
     function outerFunction() {
       let outerVar = 'I am outer';

       function innerFunction() {
         console.log(outerVar);
       }

       return innerFunction;
     }

     const closureFunc = outerFunction();
     closureFunc(); // Logs 'I am outer'
     ```

6. **Hoisting**
   - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
   - This allows variables to be used before they are declared.
   - **Example:**
     ```javascript
     console.log(x); // undefined
     var x = 5;
     ```

7. **Promises**
   - Promises are objects representing the eventual completion or failure of an asynchronous operation.
   - They provide a cleaner alternative to callback-based asynchronous code.
   - Promises have three states: pending, fulfilled, or rejected.
   - **Example:**
     ```javascript
     const promise = new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve('Promise resolved');
       }, 2000);
     });

     promise.then((result) => {
       console.log(result); // Logs 'Promise resolved' after 2 seconds
     });
     ```

8. **Difference between let, var, and const**
   - `var`: Function-scoped variable declaration, hoisted to the top of its function or global scope.
   - `let`: Block-scoped variable declaration, not hoisted, can be reassigned.
   - `const`: Block-scoped variable declaration, not hoisted, cannot be reassigned (but its properties can be modified for objects and arrays).
   - **Example:**
     ```javascript
     var a = 10;
     let b = 20;
     const c = 30;

     function example() {
       console.log(a, b, c);
     }

     example(); // Logs 10 20 30
     ```

9. **Destructuring**
   - Destructuring is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.
   - It offers a concise way to extract multiple values from data stored in objects and arrays.
   - **Example:**
     ```javascript
     const person = { name: 'John', age: 30 };
     const { name, age } = person;
     console.log(name, age); // Logs 'John 30'
     ```

10. **Prototype Chain**
    - The prototype chain is a mechanism in JavaScript where objects inherit properties and methods from their prototype object.
    - It allows objects to delegate behavior to their prototype, enabling inheritance in JavaScript.
    - **Example:**
      ```javascript
      function Animal(name) {
        this.name = name;
      }

      Animal.prototype.sayName = function() {
        console.log('My name is ' + this.name);
      };

      const dog = new Animal('Buddy');
      dog.sayName(); // Logs 'My name is Buddy'
      ```

11. **Asynchronous**
    - Asynchronous programming allows multiple tasks to be executed concurrently without blocking the main thread.
    - It is essential for handling time-consuming operations like network requests, file I/O, and user input/output.
    - **Example:**
      ```javascript
      setTimeout(() => {
        console.log('Async operation');
      }, 2000);
      ```

12. **New features in ES6**
    - ES6 introduced several new features such as arrow functions, template literals, destructuring, default parameters, rest parameters, spread syntax, classes, and more.
    - **Example:**
      ```javascript
      const greeting = (name) => {
        return `Hello, ${name}!`;
      };

      console.log(greeting('World')); // Logs 'Hello, World!'
      ```

13. **Event bubbling and capturing**
    - Event bubbling is a phenomenon in which an event triggered on a nested element propagates up through its ancestors.
    - Event capturing is the opposite, where the event starts from the outermost element and propagates downwards to the target element.
    - **Example:**
      ```html
      <div id="outer">
        <div id="inner">Click me!</div>
      </div>
      ```
      ```javascript
      document.getElementById('outer').addEventListener('click', () => {
        console.log('Outer div clicked');
      }, true);

      document.getElementById('inner').addEventListener('click', () => {
        console.log('Inner div clicked');
      }, true);
      ```

14. **Null vs Undefined**
    - `null` represents the intentional absence of any value and is a primitive value.
    - `undefined` indicates that a variable has been declared but has not been assigned a value, or a property does not exist.
    - **Example:**
      ```javascript
      let x;
      console.log(x); // Logs undefined

      const y = null;
      console.log(y); // Logs null
      ```

15. **Function expression vs function declaration**
    - Function declaration: Function declarations are hoisted and can be invoked before they're declared in the code.
    - Function expression: Function expressions are not hoisted and cannot be invoked before their declaration.
    - **Example:**
      ```javascript
      functionDeclaration(); // Logs 'Function declaration'

      const functionExpression = function() {
        console.log('Function expression');
      };

      functionDeclaration(); // Logs 'Function declaration'
      ```
16. **Call, apply, bind**
    - `call()` and `apply()`: These methods are used to invoke a function with a specified `this` value and arguments.
    - `bind()`: This method creates a new function with a specified `this` value and, optionally, a set of initial arguments.
    - **Example:**
      ```javascript
      const person = {
        name: 'John',
        greet: function(message) {
          console.log(message + ', ' + this.name);
        }
      };

      const newPerson = { name: 'Alice' };

      person.greet.call(newPerson, 'Hello'); // Logs 'Hello, Alice'
      ```

17. **ES6 arrow function vs normal function**
    - Arrow functions are more concise and lexically bind `this` to the surrounding context.
    - Normal functions have their own `this` context and can be used as constructors with `new`.
    - **Example:**
      ```javascript
      const multiply = (x, y) => x * y;
      console.log(multiply(2, 3)); // Logs 6

      function Product(name, price) {
        this.name = name;
        this.price = price;
      }

      const apple = new Product('Apple', 1);
      console.log(apple); // Logs { name: 'Apple', price: 1 }
      ```

      

