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
      SHOW_POPUP(state) {
        state.donatePopup = true;
      },
      HIDE_POPUP(state) {
        state.donatePopup = false;
      }
    },
    actions: {
      togglePopup({ commit }) {
        if (state.donatePopup) {
          commit('HIDE_POPUP');
        } else {
          commit('SHOW_POPUP');
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
