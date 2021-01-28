import { Auth } from '@/apis';

const state = () => {
  return {
  };
};

const actions = {
  async doLogin({ commit }, payload) {
    try {
      const res = await Auth.login(payload);

      if (res) {
        if (process.browser) {
          window.localStorage.setItem('token', res.access_token);
          window.location.href = '/account';
        }
      }
    } catch (error) {
      alert('系統繁忙中，請稍後再試');
    }
  },
};

const mutations = {
};

const getters = {
};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};
