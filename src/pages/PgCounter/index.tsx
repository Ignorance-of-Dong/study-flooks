import React from "react";
import { setModel, useModel } from "flooks";
import model from "./model";

setModel("counter", model); // 不要使用 setmodel() 多次初始化同一个 model，如果有一个 "common" model 在多个地方使用，建议在一个上层组件中进行初始化，比如 App.jsx。

function Counter() {
  const { count, increment, decrement, incrementAsync } = useModel("counter");
  const { name } = useModel("home"); // Use other models

  return (
    <>
      <h1>Counter</h1>
      <p>
        home.name: <code>{name}</code>
      </p>
      <p>
        count: <code>{count}</code>
      </p>
      <footer>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementAsync}>
          + async{incrementAsync.loading && "..."} {/**对于异步可以通过.loading来支持加载动画。配合组件使用 */}
        </button>
      </footer>
    </>
  );
}

export default Counter;
