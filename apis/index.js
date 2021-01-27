let $axios;

export const init = (axiosInstance) => {
  $axios = axiosInstance;
}

export const Auth = {
  login: (payload) => {
    return $axios.post('/auth/login');
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
