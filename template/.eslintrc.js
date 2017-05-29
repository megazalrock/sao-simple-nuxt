// http://eslint.org/docs/user-guide/configuring
const resolve = require('path').resolve;

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  plugins: [
    'html',
    'import'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
              'static': resolve(__dirname, 'static'), // use in template with <img src="~static/nuxt.png" />
              '~static': resolve(__dirname, 'static'),
              'assets': resolve(__dirname, 'assets'), // use in template with <img src="~static/nuxt.png" />
              '~assets': resolve(__dirname, 'assets'),
              '~plugins': resolve(__dirname, 'plugins'),
              'plugins': resolve(__dirname, 'plugins'),
              '~store': resolve(__dirname, '.nuxt/store'),
              '~router': resolve(__dirname, '.nuxt/router'),
              '~pages': resolve(__dirname, 'pages'),
              '~components': resolve(__dirname, 'components'),
              'components': resolve(__dirname, 'components')
            }
          }
        }
      }
    }
  },
  // add your custom rules here
  'rules': {
    'no-underscore-dangle': ['off'],
    'spaced-comment': 'warn',
    'curly': ['error', 'all'],
    'no-plusplus': ['error', {'allowForLoopAfterthoughts': true}],
    'func-names': ['off'],
    'guard-for-in': ['warn'],
    'arrow-parens': ['warn', "as-needed"],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'functions': 'never'
    }],
    //'no-comma-dangle': ['warn'],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'never'],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'max-len': ['error', 150, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }]
  }
}
