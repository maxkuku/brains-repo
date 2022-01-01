//import { response } from 'express'
import Vue from 'vue'
import Vuex from 'vuex'

// const API_URL = process.env.BACKEND_URL
// env запущен но видимо BACKEND_URL не срабатывает
const API_URL = `http://localhost:8080`



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showCase: [],
    cart: [],
    filterString: ''
  },
  getters: {
    // функции - получить данные из state
    getShowCase (state) {
      if(state.filterString.length == 0) {
        return [...state.showCase]
      }
      const reg = new RegExp(state.filterString, 'gi');
      return state.showCase.filter((good) => reg.test(good.title))
    },
    getCart (state) {
      return [...state.cart]
    },
    getSearchString(state){
      return state.filterString
    }
  },
  mutations: {
    //  методы для изменения state
    setFilter(state,payload){
      state.filterString = payload
    },
    addShowCase(state,payload){
      state.showCase = [...payload]
    },
    addToCart(state,good){
      state.cart.push(good)
    },
    removeFromCart(state,id){
      state.cart.findIndex((idx) => id == good.id)
      if(idx !== -1){
        state.cart = [...state.cart.slice(0,idx),...state.cart.slice(idx + 1)]
      }
    }
  },
  actions: {
    // раздел для асинхронного кода
    // напр отправка кода на сервер
    // загрузка товаров
    fetchShowCase({commit}){ // на вход объект из которого можно вызвать мутации
      fetch(`${API_URL}/catalog`)
      .then((response) => response.json())
      .then((data) => { // data записать в state
        commit(`addShowCase`, data)
      })
    },
    fetchCart({commit}){ // на вход объект из которого можно вызвать мутации
      fetch(`${API_URL}/cart`)
      .then((response) => response.json())
      .then((data) => { // data записать в state
        for(let good of data){
          commit(`addToCart`, good)
        }
      })
    },

    // 
    addToCart({commit}, good){
      return fetch(`${API_URL}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(good)
      })
      .then((response) => {
        if(response.status == 200){
          commit(`addToCart`, good)
        }
      })
      .catch()
    },
    removeFromCart({commit}, id){
      return fetch(`${API_URL}/cart/${id}`, {
        method: 'DELETE',
      })
      .then((response) => {
        if(response.status == 200){
          commit(`removeFromCart`, id)
        }
      })
    }
  },
  modules: {
  }
})
