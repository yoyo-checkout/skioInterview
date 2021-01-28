import { Course } from '@/apis';

const state = () => {
  return {
    courses: [],
    meta: {},
  };
};

const actions = {
  async getCourses({ commit, state }) {
    try {
      const res = await Course.fetchCourses({ meta: state.meta });

      if (res) {
        commit('SET_COURSES', res.data);
        commit('SET_META', res.meta);
      }
    } catch (error) {
      alert('系統繁忙中，請稍後再試');
    }
  },
};

const mutations = {
  SET_COURSES(state, list) {
    state.courses = [
      ...state.courses,
      ...list,
    ];
  },
  SET_META(state, meta) {
    state.meta = meta;
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
