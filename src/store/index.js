import { createStore } from 'vuex'
import axios from 'axios';
const bStoreURL = 'https://bookstore-2x0t.onrender.com/';

export default createStore({
  state: {
    users : null,
    user : null,
    products : null,
    product : null,
    showSpinner : true,
    message : null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setSpinner(state, value) {
      state.spinner = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async  login(context, payload) {
      const res = await axios.post(`${bStoreURL}login`, payload);
      const {result, err} = await res.data;
      if (result) {
        context.commit('setUser', result);
      }else{
        context.commit('setMessage', err);
      }
    },
    
  },
  modules: {
  }
});
