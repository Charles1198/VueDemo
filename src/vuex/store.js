import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    radioValue: null,
    inputValue: null
  },
  mutations: {
    SET_RadioValue(state, radioValue) {
      state.radioValue = radioValue;
    },
    SET_InputValue(state, inputValue) {
      state.inputValue = inputValue;
    }
  }
})
export default store
