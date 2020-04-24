// ref: https://umijs.org/config/
const px2rem = require('postcss-px2rem-exclude');

export default {
  treeShaking: true,
  //   routes: [
  //     {
  //       path: '/',
  //       component: '../layouts/index',
  //       routes: [{ path: '/', component: '../pages/index' }],
  //     },
  //   ],
  // routes,
  ...require('./src/router.js'),
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'create',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  extraPostCSSPlugins: [px2rem({ remUnit: 75, exclude: /node_modules/i })],
  proxy: {
    '/api': {
      target: 'http://10.0.98.140:9012',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/api': '' },
    },
  },
};
