import { Course } from '@/apis';

const state = () => {
  return {
    courses: [],
    meta: {},
  };
};

const actions = {
  async getCourses({ commit }, payload) {
    try {
      const res = await Course.fetchCourses(payload);

      if (res) {
        commit('SET_COURSES', res.data);
      }
    } catch (error) {
      alert('系統繁忙中，請稍後再試');
    }
  },
};

const mutations = {
  SET_COURSES(state, list) {
    state.courses = list;
  },
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
