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

- 函数组件会有特殊的处理方式
- 在render阶段，再将函数Fiber内容的实例化的时候去处理全局中的Hooks对象的指向
- 最终userState是调用内部函数mountState去设置state的stringif
- 在mountState会对传入的参数如果是函数会对其先执行，得出返回值在继续运行
- 在mountState中会创建一个闭包事件，将当前的Hooks所在的Fiber节点以及Hooks队列对象作为参数绑定在函数，并返回0

## ⚡️ Effect Hook

> useEffect 给函数组件添加副作用，他和class组件中的componentDidMount、componentDidUpdate 和 componentWillUnmount具有相同的用途

### 实现componentDidMount 副作用函数

  ```
    useEffect(() => {
      // 使用浏览器的 API 更新页面标题
      document.title = `You clicked ${count} times`;
    });

  ```

### 实现componentDidUpdate 副作用函数

  ```
    useEffect(() => {
      // 使用浏览器的 API 更新页面标题
      document.title = `You clicked ${count} times`;
    }, [count]); // 只在count发生改变的情况下调用

  ```

### 实现componentWillUnmount 副作用函数+

  ```
    useEffect(() => {
      // 使用浏览器的 API 更新页面标题
      document.title = `You clicked ${count} times`;
      return () => {
        // 清除副作用操作
      }
    });
  
  ```
- userEffect的执行时机都发生在每次渲染之后，无论首次渲染还是更新渲染
- userEffect只有在函数组件中执行，不能再非函数组件中执行
- userEffect可以在函数组件中执行多次，是按调用顺序执行的
- userEffect传入的函数，return是在组件卸载的时候执行的
- userEffect的执行，是由他的第二参数来控制的，而且第二的参数必须是一个数组，react会对数组中的每一项与上次的数组进行比较，如果不同，则才会去执行函数
- userEffect采用的是异步的方案执行，类似于js中的setTimeout，将userEffect进行异步执行