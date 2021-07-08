import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    journal: true,
    upravl: true,
    dispetch: false,
    administ: true
  },
  getters: {},
  mutations: {},
  actions: {},
});