import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Lesson 1

// 1.2

// function getSpace2(
//   name: string,
//   callback: (value: string, test: number) => string
// ): string {
//   return callback(name);
// }

function App() {
  // 1.1
  //   let age: number = 25; // number

  //   let height: number = 1.75; // number

  //   let name: string = "Tom"; // string
  //   const message: string = "Hello, world"; // string

  //   name = String(height + age);

  //=====

  // 1.2

  //   const getSpace = (num: number): string => `${num * 4}px`;

  // 1.3

  //   let value: string | null | number = "Hello world";

  //   value = null;

  //   value = 10;

  //===

  //   let value: any = "";

  //   value = 10;
  //   value = null;
  //   value = "Hello World";z

  // 1.4

  //   let value: unknown = "";
  //   let test = "Hello";

  //   if (typeof value === "string") {
  //     value = test;
  //   }

  //   //   alert(value);

  // 1.5

  //   const handleChange = (value: number): void => {
  //     // setState(value);
  //   };

  // 1.6

  //   let data: object = {};

  //   let person: { name: string; age: number | null; isStudent?: boolean } = {
  //     name: "Tom",
  //     age: null,
  //   };

  // 1.7

  //   let numbers: Array<number> = [1, 2, 3, 4, 5];
  //   let names: Array<string> = ["Tom", "Garry", "Potter"];
  //   let mixed: Array<number | string> = [1, "hello", 3, "world"];
  //   let nested: Array<Array<number>> = [[1, 2], [3, 4, 5], [6]];

  //==

  let numbers: number[] = [1, 2, 3, 4, 5];
  let names: string[] = ["Tom", "Garry", "Potter"];
  let mixed: (number | string)[] = [1, "hello", 3, "world"];
  let nested: number[][] = [[1, 2], [3, 4, 5], [6]];

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          {name} {message}
        </p>
        <p>
          {age} {height}
        </p> */}

        {/* 1.2 */}
        {/* <p>{getSpace(4)}</p> */}

        {/* 1.3 */}
        {/* <p>{value}</p> */}

        {/* 1.4 */}
        {/* <p>{String(value)}</p> */}

        {/* 1.5 */}
        {/* <p>Hello World</p> */}

        {/* 1.6 */}
        {/* <p>{person.name}</p> */}

        {/* 1.7 */}
        <p>{numbers}</p>
        <p>{names}</p>
        <p>{mixed}</p>
        <p>{nested}</p>
      </header>
    </div>
  );
}

export default App;
