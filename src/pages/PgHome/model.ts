// model 对象需包含一个 state 对象和一个 actions 函数。
export default {
  state: {
    name: "flooks"
  },
  // actions 的参数中包含两个函数，model() 和 setState()。
  actions: ({ model }) => ({
    incrementCount() {
      const { increment } = model("counter"); // 返回与 useModel() 相同，但当获取自身 model 时，name 可以忽略。
      // 即 model() 获取自身 model，model('other') 获取其它 model。
      increment();
    }
  })
};
