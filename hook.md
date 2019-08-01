# Hook 

## Hook简介

> Hook是react16.8的新增特性，可以在不编写class类的情况下使用state以及react的其他特性

## 📌 State Hook

  ```
    import React, { useState } from 'react';

    function Example() {
      // 声明一个叫 “count” 的 state 变量。
      const [count, setCount] = useState(0); // 使用useState来定义state [参数名字, 改变参数的方法]

      // 也可以多个声明state 【但是必须保证调用的顺序一样】

      const [tods, settods] = useState('this is count')

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }

  ```

## ⚡️ Effect Hook

> useEffect 给函数组件添加副作用，他和class组件中的componentDidMount、componentDidUpdate 和 componentWillUnmount具有相同的用途

### 实现componentDidMount 和 componentDidUpdate副作用函数

  ```
    useEffect(() => {
      // 使用浏览器的 API 更新页面标题
      document.title = `You clicked ${count} times`;
    });

  ```

### 实现componentWillUnmount

  ```
    useEffect(() => {
      // 使用浏览器的 API 更新页面标题
      document.title = `You clicked ${count} times`;
      return () => {
        // 清除副作用操作
      }
    });
  
  ```
