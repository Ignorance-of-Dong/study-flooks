# Hook 



**有状态的组件没有渲染，有渲染的组件没有状态。在现在回过头来看，这个原则会为我们后续向Hooks的迁移提供非常大的便利。**



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

### 实现componentWillUnmount 副作用函数

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


**实用之处**

  再实现重复的数据请求中使用

```
  function getData() {
    const [data, setdata] = useState(null)

    useEffect(() => {
      axios('/a/b').then(res => {
        setdata(res.data)
      })
    }, [])

    return data
  }

  // 在别的函数组件中直接调用即可获取到数据【当然加入第二参数是为了防止数据更新的时候再次触犯请求数据执行】【灵活 的写法有很多种】
  
```


##  注意事项

- 不可以在hooks中使用条件语句【会影响hooks的调用规则（顺序）】，会导致调用混乱，产生bug
- 如果我们想执行一个判断可以将其放在内部来使用

```
  useEffect(() => {
    // 将条件语句放置在hooks中
    if (val != '') {
      document.title = val
    }
  })

```

- 我们可以去自定义hooks，但我们自定义的hooks必须以use开头，这是一种约定，它可以识别我们是否遵循了规范，他是hooks的规范，不是react的

## 💕 useContent

**可以使用useContext进行跨组件传值**

```

  // 父组件
  import React, {useState} from 'react'
  export const myContent = React.createContext(null)
  function Content() {
    const [val, setval] = useState(myContent)
    return (
      <>
        <input val = {val} onChange((e) => {setval(e.target.value)})/>
        <myContent.Provider>
          <Ptemp></Ptemp>
        <myContent.Provider>
      </>
    )
  }
  export default Content

  // 子组件

  import React, {useContext} from 'react'
  import {myContent} from './home'
  function Ptemp() {
    const val = useContext(myContent)

    return (
      <>
        <p>{val}</p>
      </>
    )
  }
  
```

## 🍭 useReducer

**useReducer是useState的另一种替代，他接收(state, action) => newState, 并且返回了一个与当前state成对的dispatch方法

### 例1：最小的简单模式【计数器】

```
  reducer.ts
  
  export const initialState = 0
  const renducer = (state, action) => {
    switch(action) {
      case 'count':
        console.log(state)
        return state + 1
    }
  }

  export default renducer

  PgReducer.tsx

  import React, {useState, useReducer} from 'react'

  import renducer, {initialState} from '../../renducer/expamel'

  function testRenducer() {
    const [count, dispatch] = useReducer(renducer, initialState)
    return (
      <>
        <p>{count}</p>
        <p onClick={() => {dispatch('count')}}>+</p>
      </>
    )
  }

  export default testRenducer

```

## ⚽ useRef

**useRef返回一个可变的ref对象其.current属性被初始化为传入参数，返回的ref对象在组件的整个生命周期内保持不变**

- 常见的就是访问子组件
- 获取一些dom元素的参数

```
  import React, { useState, useRef, useEffect } from 'react'

  function PgRef() {
    const ulRef = useRef(null)
    useEffect(() => {
      console.log(ulRef.current.offsetHeight)
    })
    return (
      <>
        <p className='testP' ref={ulRef}></p>
      </>
    )
  }

  export default PgRef

```