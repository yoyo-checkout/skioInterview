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
  getCourses: (payload) => {
    return $axios.get('/courses');
  },
}

export const Member = {
  getUser: () => {
    return $axios.get('/me');
  },
}
