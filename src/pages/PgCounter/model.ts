export default {
  state: {
    count: 0
  },
  actions: ({ model, setState }) => ({
    increment() {
      const { count } = model(); // Get own model
      setState({ count: count + 1 }); // Update own state
    },
    decrement() {
      const { count } = model();
      setState({ count: count - 1 }); // 用于更新自身 model 的 state，传入 payload 对象，无法更新其它 model。
      // 可以通过别的module来获取本来module的action的方法来改变
    },
    async incrementAsync() {
      const { increment } = model();
      await new Promise(resolve => setTimeout(resolve, 1000));
      increment();
    }
  })
};
