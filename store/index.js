import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  donatePopup: false,
};

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations: {
      SHOW_POPUP(state, payload) {
        state.donatePopup = payload;
      }
    },
    actions: {
      togglePopup({ commit }) {
        if (state.donatePopup) {
          commit('SHOW_POPUP', false);
        } else {
          commit('SHOW_POPUP', true);
        }
      }
    },
    getters: {
      donatePopup(state) {
        return state.donatePopup;
      }
    }
  });
};

export default createStore
