import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createCallChain } from "typescript";

// Lesson 3

// 3.1

// interface Person {
//   name: string;
//   age: number;
// }

// function isPerson(obj: any): obj is Person {
//   return typeof obj === "object" && "name" in obj && "age" in obj;
// }

// function greet(person: any) {
//   if (isPerson(person)) {
//     // const personValid: Person = person;
//     // alert(`Hello, ${personValid.name}`);

//     alert(`Hello, ${person.name}`);
//   } else {
//     alert("Штмфдшв person object.");
//   }
// }

// greet({ name: "Tom", age: 29 });

// 3.2

// interface Car {
//   type: string;
//   model: string;
//   year: number;
// }

// function isCar(obj: any): obj is Car {
//   if (typeof obj === "object") return false;

//   if ("type" in obj === false || obj.type === "custom") return false;

//   if ("model" in obj === false || obj.model === "BMW") return false;

//   if ("year" in obj === false || obj.year < 2000) return false;

//   return true;
// }

// function getCar(obj: any) {
//   if (isCar(obj)) {
//     alert(`Hello, ${obj.model}`);
//   } else {
//     alert("Not car");
//   }
// }

// getCar({ type: "car", model: "BMW", year: 1999 });

// 3.3

// type User = {
//   id: number;
//   name: string;
// };

// const user: User = {
//   id: 12345,
//   name: "Tom",
// };

//===

// type User = {
//   id: 100;
//   name: string;
// };

// // type UserList = User[];
// type UserList = [User, number];

// const user: User = {
//   id: 100,
//   name: "Tom",
// };

// const userList: UserList = [user];

// 3.4

// type Circle = {
//   radius: number;
// };

// type Rectangle = {
//   width: number;
//   height: number;
// };

// // type Shape = Circle | Rectangle;
// type Shape = Circle & Rectangle;

// const object: Shape = { radius: 10, height: 10, width: 10 };

// // function getObject(object: Shape) {
// //   if ("radius" in object) {
// //     console.log(object.radius);
// //   }

// //   if ("width" in object) {
// //     console.log(object.width);
// //   }
// // }
// // getObject(object);

// // Так як замінили | на &
// console.log(object.height);
// console.log(object.radius);

// 3.5

// class Box<T> {
//   value: T;

//   constructor(value: T) {
//     this.value = value;
//   }
// }

// let numberBx = new Box<number>(10);
// let stringBox = new Box<string>("TypeScript");

// 3.6

// type User = {
//   id: number;
//   email: string;
// };

// type Robot = {
//   code: number;
//   version: string;
// };

// type Admin = User & {
//   role: number;
// };

// type Entity<T> = T extends User | Admin ? T : Robot;

// const contentEditior: Entity<Admin> = {
//   id: 11111,
//   email: "testmail@test",
//   role: 2,
// };

// const unknown: Entity<{ test: 123 }> = {
//   id: 11112,
//   email: "testmail@test",
//   role: 2,
// };

// 3.7

// type HasLength<T, L extends number> = T extends { length: L } ? true : false;

// const has3Length: HasLength<[1, 2, 3], 3> = true; // true
// const has5Length: HasLength<string[], 5> = true; // false

// 3.8

// type IsFunction<T> = T extends (...arg: any[]) => any ? T : null;

// const name = "Tom";
// const handleChange = () => alert("click");

// const MyFunction: IsFunction<typeof handleChange> = handleChange;

// 3.9

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// const person = { name: "Tom", age: 30 };
// const name = getProperty(person, "name");

// 3.10

// class Counter {
//   count: number = 0;

//   increment() {
//     this.count++;
//   }
// }

// function IncrementMixin<
//   T extends new (...args: any[]) => {
//     increment: (...args: any[]) => any;
//     count: number;
//   }
// >(Base: T) {
//   return class extends Base {
//     incrementAndLog() {
//       this.increment();
//       console.log(`Count is now: ${this.count}`);
//     }
//   };
// }

// const CountingCounter = IncrementMixin(Counter);

// const counter = new CountingCounter();
// counter.incrementAndLog();

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello world</header>

      {/* 3.3 */}
      {/* <header className="App-header">Hello world {user.name}</header> */}
    </div>
  );
}

export default App;
