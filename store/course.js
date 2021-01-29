import { Course } from '@/apis';

const state = () => {
  return {
    courses: [],
    meta: {
      current_page: 1,
    },
  };
};

const actions = {
  async getCourses({ commit, state }) {
    try {
      const res = await Course.fetchCourses({ meta: state.meta });

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
    state.courses = [
      ...state.courses,
      ...list,
    ];
  },
  SET_META(state) {
    state.meta.current_page = state.meta.current_page + 1;
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
