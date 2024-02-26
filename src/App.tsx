import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createCallChain } from "typescript";

// Lesson 2

// 2.1

// class Book {
//   //   title: string;
//   //   author: string;
//   //   ratings: number[] = [];
//   public title: string;
//   public author: string;
//   public ratings: number[] = [];

//   constructor(title: string, author: string) {
//     this.title = title;
//     this.author = author;
//     // this.ratings = []; // замість цього вище прописали ratings: numbers [] = []; замість ratings: [];
//   }

//   //   addRating(rating: number): void {
//   //     if (rating >= 1 && rating <= 5) {
//   //       this.ratings.push(rating);
//   //       console.log(`Rating ${rating} added for ${this.title}`);
//   //     } else {
//   //       console.log(`Invalid rating. Please provide a rating between 1 and 5.`);
//   //     }
//   //   }

//   public addRating = (rating: number): void => {
//     if (rating >= 1 && rating <= 5) {
//       this.ratings.push(rating);
//       console.log(`Rating ${rating} added for ${this.title}`);
//     } else {
//       console.log(`Invalid rating. Please provide a rating between 1 and 5.`);
//     }
//   };

//   public getAverageRating(): number {
//     if (this.ratings.length === 0) {
//       return 0;
//     }

//     const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);

//     return sum / this.ratings.length;
//   }

//   public displayInfo(): void {
//     console.log(`Title ${this.title}, Author: ${this.author}`);
//   }
// }

// // Приклад використання  класу Book
// const book1 = new Book("Th Cather in the Rye", "J.D. Salinger");
// const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

// book1.addRating(4);
// book1.addRating(5);
// book2.addRating(3);

// console.log(`Average rating for ${book1.title}: ${book1.getAverageRating()}`);
// console.log(`Average rating for ${book2.title}: ${book2.getAverageRating()}`);

// book1.displayInfo(); // Виведе: Title: The Cather in the Rye, Author: J.D. Salinger
// book1.displayInfo(); // Виведе: Title: To Kill a Mockingbird, Author: Harper Lee

// 2.2

// 2.2.1
// class Person {
//   private firstName: string;
//   private lastName: string;
//   public age: number;

//   constructor(firstName: string, lastName: string, age: number) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   // Публічний метод для отримання повного імені
//   public getFullName = (): string => {
//     return `${this.firstName} ${this.lastName}`;
//   };

//   // Приватни йметод ддля перевірки, чи особа може голосувати
//   private canVote(): boolean {
//     return this.age >= 18;
//   }

//   // Публічний метод для перевірки, чи мое особа голосувати

//   checkVotingEligibility(): void {
//     if (this.canVote()) {
//       console.log(`${this.getFullName()} is eligible to vote.`);
//     } else {
//       console.log(`${this.getFullName()} is not eligible to vote.`);
//     }
//   }
// }

// 2.2.2
// class User {
//   protected canAuth = (): boolean => true;
// }

// class Person extends User {
//   private firstName: string;
//   private lastName: string;
//   public age: number;

//   constructor(firstName: string, lastName: string, age: number) {
//     super();
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   // Публічний метод для отримання повного імені
//   public getFullName = (): string => {
//     return `${this.firstName} ${this.lastName}`;
//   };

//   // Приватни йметод ддля перевірки, чи особа може голосувати
//   private canVote = (): boolean => this.age >= 18;

//   // Публічний метод для перевірки, чи мое особа голосувати

//   checkVotingEligibility(): void {
//     this.canAuth();

//     if (this.canVote()) {
//       console.log(`${this.getFullName()} is eligible to vote.`);
//     } else {
//       console.log(`${this.getFullName()} is not eligible to vote.`);
//     }
//   }
// }

// // Приклад використання класу Person
// const person1 = new Person("Ton", "Redl", 25);
// const person2 = new Person("Garry", "Potter", 17);

// console.log(person1.getFullName()); // Виведе: "Ton Redl"
// console.log(person2.getFullName()); // Виведе: "Garry Potter"

// person1.checkVotingEligibility(); // Виведе: "Ton Redl" is eligible to vote
// person2.checkVotingEligibility(); // Виведе: "Garry Potter" is not eligible to vote

// // Спроба звернутися до приватних властивостей ззовні класу призведе до помилки
// // console.log(person1.firstName); // Помилка: Property 'firstName' is private and only accessible within class 'Person'.

// 2.3
// class Animal {
//   protected name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   // Публічний метод для виведення звуку тварини
//   public makeSound = (sound: string): void => {
//     console.log(`${this.name} makes a ${sound} sound.`);
//   };
// }

// class Dog extends Animal {
//   private breed: string;

//   constructor(name: string, breed: string) {
//     super(name);
//     this.breed = breed;
//   }

//   // Публічний метод для виведення породи собаки
//   public displayBreed(): void {
//     console.log(`${this.name} makes a ${this.breed} sound.`);
//   }

//   // Публічний метод для виведення породи собаки
//   public bark(): void {
//     this.makeSound("bark");
//   }
// }

// const dog1 = new Dog("Buddy", "Golden Retriver");

// dog1.displayBreed();
// dog1.bark();

// 2.4
// class Circle {
//   readonly radius: number = 10;

//   constructor(radius: number) {
//     this.radius = radius;
//   }

//   // Публічний метод для обчислення площі круга
//   calculateArea(): number {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const circle1 = new Circle(5);
// console.log(
//   `Circle 1 -Rdius: ${circle1.radius}, Area: ${circle1.calculateArea()}`
//   // Виведе: Circle 1 -Radius: 5, Area: 78.53981633974483
// );

// // Спроба змінити значення readonly властивості "radius" призведе др помилки
// // circle1.radius = 10; // Помилка:  Cannot assign to 'radius' because it is a read-only property

// 2.5
// const product: {
//   readonly name: string;
//   readonly price: number;
//   description: string;
//   manufacture: string;
//   inStock: boolean;
// } = {
//   name: "Laptop",
//   price: 999.99,
//   description: "A high-perfomance laptop with the latest featires.",
//   manufacture: "TechCo",
//   inStock: true,
// };

// console.log(product);

// 2.6
// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email?: string; // Оптимізаця властивостей
// }

// // Створення об1єкта, як ий відповідає інтерфейсу Person
// const person1: Person = {
//   firstName: "Tom",
//   lastName: "Redl",
//   age: 30,
//   email: "snake111@test",
// };

// const person2: Person = {
//   firstName: "Garry",
//   lastName: "Potter",
//   age: 17,
//   //   email: "kwidichfor1@test",
// };

// // Функція для вивелення нформації про особу
// function dispkayPersinInfo(person: Person): void {
//   console.log(`Name:${person.firstName} ${person.lastName}`);
//   console.log(`Age:${person.age}`);
//   if (person.email) {
//     console.log(`Email:${person.email}`);
//   }
// }

// 2.7

// Оголошення інтерфейсу для співробітників
// interface Person {
//   firstName: string;
//   lastName: string;
// }

// interface Employee {
//   //   firstName: string;
//   //   lastName: string;
//   role: string;
//   getSalary: () => number;
// }

// class User {}

// // Клас, що представляє менеджера
// class Manager extends User implements Employee, Person {
//   firstName: string;
//   lastName: string;
//   role: string;
//   salary: number;

//   constructor(firstName: string, lastName: string) {
//     super(); // якщо є class User {} та extends User
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.role = "Manager";
//     this.salary = 5000; // Початкова зарплата для менеджера}
//   }

//   getSalary(): number {
//     return this.salary;
//   }
// }

// // Клас, що представляє розробника
// class Developer implements Employee {
//   firstName: string;
//   lastName: string;
//   role: string;
//   salary: number;

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.role = "Developeer";
//     this.salary = 5000; // Початкова зарплата для менеджера}
//   }

//   getSalary(): number {
//     return this.salary;
//   }
// }

// // Викорситання класів
// const manager = new Manager("Tom", "Redl");
// const developer = new Developer("Garry", "Potter");

// console.log(`${manager.firstName} ${manager.lastName} - ${manager.role}`);
// console.log(`${developer.firstName} ${developer.lastName} - ${developer.role}`);

// 2.8
// enum COLOR {
//   RED = "red",
//   GREEN = "green",
//   BLUE = "blue",
// }

// console.log(COLOR);

// // Функція, яка приймає значення з enum Color і виводить повідомлення
// function displayColor(color: COLOR): void {
//   if (color === COLOR.RED) {
//     console.log("The selected color is Red.");
//   } else if (color === COLOR.GREEN) {
//     console.log("The selected color is Green.");
//   } else if (color === COLOR.BLUE) {
//     console.log("The selected color is Blue.");
//   } else {
//     console.log("Invalid color.");
//   }
// }

// // Використання enum та функції
// const selectedColor: COLOR = COLOR.BLUE;
// displayColor(selectedColor);

// 2.9
// Оголошення кортежу для представлення інформації про книгу
let book: [string, number, boolean];

book = ["The CatCHer in the Rye", 1951, true];

// Доступ до елементів кортежу
const title: string = book[0];
const year: number = book[1];
const isAvailable: boolean = book[2];

console.log(`Title:${title}`);
console.log(`Year:${year}`);
console.log(`Is Available: ${isAvailable}`);

console.log(book);

// book[2] = "Test";
// book[3] = "Test2";
// delete book[2];

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello world</header>
    </div>
  );
}

export default App;
