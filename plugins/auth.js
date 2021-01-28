export default ({ app, store }) => {
  if (process.browser) {
    const token = window.localStorage.getItem('token');
    const expires = new Date(window.localStorage.getItem('expires'));
    const now = new Date();

    app.router.beforeEach((to, from, next) => {
      const whiteList = [
        'index',
        'courses',
      ];

      if (token && expires.getTime() > now.getTime()) {
        if (to.name === 'index') {
          next({ name: 'account' });
        } else {
          window.localStorage.setItem('expires', new Date(now.setDate(now.getDate() + 7)));
          next();
        }
      } else {
        window.localStorage.setItem('token', '');
        window.localStorage.setItem('expires', '');

        if (whiteList.includes(to.name)) {
          next();
        } else {
          next({ name: 'index' });
        }
      }
    });
  }
}
