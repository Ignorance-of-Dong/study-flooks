import React from "react";
import { setModel, useModel } from "flooks";
import model from "./model";

setModel("home", model); // 接收一个名称字符串和一个 model 对象，初始化 model。
// model 对象需包含一个 state 对象和一个 actions 函数。

function Home() {
  const { name, incrementCount } = useModel("home");
  const { count } = useModel("counter"); // Use other models

  return (
    <>
      <h1>Home</h1>
      <p>
        Hello <code>{name}</code>
      </p>
      <p>
        counter.count: <code>{count}</code>
      </p>
      <footer>
        <button onClick={incrementCount}>+ counter.count</button>
      </footer>
    </>
  );
}

export default Home;
