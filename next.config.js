const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './styles/antd.less',
  reactStrictMode: true,
  env: {
    strapiServer: 'www.alpsmart.asia:1337',
  },
});
