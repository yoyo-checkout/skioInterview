let $axios;

export const init = (axiosInstance) => {
  $axios = axiosInstance;
}

export const Auth = {
  login: (payload) => {
    const { account, password } = payload.form;

    return $axios.post('/auth/login', {
      account,
      password,
    });
  },
}

export const Course = {
  fetchCourses: (payload) => {
    const page = payload.meta.current_page ? payload.meta.current_page : 1;

    return $axios.get('/courses', {
      params: {
        page,
      },
    });
  },
}

export const Member = {
  fetchUser: () => {
    return $axios.get('/me');
  },
}
