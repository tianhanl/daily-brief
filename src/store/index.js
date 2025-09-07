import { createStore } from 'vuex';
import mutations from './mutations';

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

export default createStore({
  state,
  mutations
});
