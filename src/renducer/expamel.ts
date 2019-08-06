export const initialState = 0
const renducer = (state, action) => {
  switch(action) {
    case 'count':
      console.log(state)
      return state + 1
  }
}

export default renducer