import * as apis from '@/apis';

export default function ({ $axios }, inject) {
  $axios.setBaseURL('https://private-anon-33cd806b0b-interview10.apiary-mock.com');


  // handle request
  $axios.onRequest((config) => {
    if (process.browser) {
      const token = localStorage.getItem('token');

      config.headers.Authorization = token ? `Bearer ${token}` : '';
    }

    return config;
  });
  $axios.onRequestError((error) => {
    console.log(error); // for debug
    return Promise.reject(new Error('error'));
  });


  // handle response
  $axios.onResponse((response) => {
    if (response.status !== 200) {
      return Promise.reject(new Error('error'));
    }

    return response.data;
  });
  $axios.onResponseError((error) => {
    console.log(error); // for debug
    return Promise.reject(new Error('error'));
  });


  apis.init($axios);
  inject('apis', apis);
}
