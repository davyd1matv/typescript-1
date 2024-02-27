import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createCallChain } from "typescript";

// Lesson 4

// // 4.1
// // const test = <div>Test</div>;
// // за звичай пишеться так, адже тип проставляєтсья автоматично, але за потреби можна записати так:
// const test: JSX.Element = <div>Test</div>;

// 4.2

// !!!
// Редагуємо!!!
// function App() {
//   return (
//     <div className="App">
//       {/* 4.1 */}
//       {/* <header className="App-header">{test}</header> */}

//       <header className="App-header">Hello World</header>
//     </div>
//   );
// }

type AppProps = {
  test: JSX.Element;
  children: React.ReactNode;
};

const App: React.FC<AppProps> = ({ test, children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>{test}</p>
        {children}
      </header>
    </div>
  );
};

export default App;
