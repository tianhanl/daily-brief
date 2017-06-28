import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  domain: './',
  userConfig: {
    username: null,
    avatarSrc: null,
    uid: null,
    userLocation: null,
    userLanguage: null,
    newsList: null
  }
};

export default new Vuex.Store({
  state,
  mutations
});