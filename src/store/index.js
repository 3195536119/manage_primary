import { createStore } from 'vuex'

export default createStore({
  state: {
    tabBars: []
  },
  getters: {
  },
  mutations: {
    addTabBar(context, bar) {
      if (context.tabBars.indexOf(bar) == -1) {
        context.tabBars.push(bar)
      }
    },
    removeTabBar(context, bar) {
      context.tabBars = context.tabBars.filter(tab => {
        return tab != bar
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
