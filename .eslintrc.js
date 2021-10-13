module.exports = {
  //是否开启eslint校验
  root: true,
  // 环境定义了预定义的全局变量
  'env': {
    'browser': true,
    'es6': true
  },
  // 继承别的规则配置文件
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    // "plugin:@typescript-eslint/recommended",
    // "airbnb"
  ],
  // 指定解析器
  'parser': '@typescript-eslint/parser',
  // parser: "babel-eslint"

  // JavaScript 语言选项
  'parserOptions': {
    //想使用的额外的语言特性:
    'ecmaFeatures': {
      'jsx': true
    },
    // ECMAScript 版本
    'ecmaVersion': 6,
    //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    'sourceType': 'module'
  },
  // 定义全局变量
  'globals':{
    'document': true,
    'localStorage': true,
    'window': true,
    'module': true,      // 样例：如果此处注释掉，上边的module则会标红
    'test': true,
    'expect': true,
    'API':true,
    'require':true
  },
  // 插件
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  //规定校验规则
  'rules': {
    'eslint-disable': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': 'off',
    'react/prop-types': 0,   // 进行参数的验证
    'semi': [
      'error',
      'never'
    ],
    'generator-star-spacing': [
      2,
      {
        'before': true,
        'after': true
      }
    ],
  }
}
