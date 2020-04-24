module.exports = {
  routes: [
    {
      path: '/',
      component: '../layouts/index.js',
      routes: [
        {
          path: '/',
          component: './index.js',
        },

        {
          path: '/about',
          component: './about/index.js',
        },
      ],
    },
  ],
};
