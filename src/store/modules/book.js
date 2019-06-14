const books = {
    state: {
      text: 1
    },
    mutations: {
      'SET_TEXT': (state, newText)=>{
        state.text = newText;
      }
    },
    actions: {
      setText: ({ commit, state }, newText)=>{
        return commit('SET_TEXT', newText)
      }
    }
  }
export default books;