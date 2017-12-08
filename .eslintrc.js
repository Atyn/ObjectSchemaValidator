
const warn = 'warn'
const off = 'off'
const tab = 'tab'
const error = 'error'
const always = 'always'
const never = 'never'

indent = [
  warn, tab,
   {
     FunctionExpression: {
       parameters: 1,
     },
     FunctionDeclaration: {
       parameters: 1,
     },
     CallExpression: {
       arguments: 1,
     },
     MemberExpression: 1,
     SwitchCase: 1,
   }
]

module.exports = {
    // parser: 'babel-eslint',
    plugins: [],
    globals: {},
    env: {
      browser: true,
      es6: true,
      node: true,
      worker: true,
    },
    extends: [
      'eslint:recommended'
    ],
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: "module"
    },
    rules: {
      //'prefer-stateless-function' : warn,'
      'complexity': [warn, 6],
      'no-console': off,
      'no-unused-vars': off,
      'indent': indent,
      'space-before-blocks': warn,
      'no-const-assign': error,

      // No bloated code
      'no-alert': warn,
      'quotes': [warn, 'single'],
      'semi': [warn, 'never'],
      'no-global-assign': warn,
      'no-global-assign': warn,

      // Code quality
      'prefer-const': warn,
      'no-empty': warn,
      'no-shadow': warn,
      'no-invalid-this': warn,
      'consistent-return': warn,
      'func-names': [warn, always],
      'func-style': [warn, 'declaration', { allowArrowFunctions: true }],
      'vars-on-top': warn,
      'global-require': warn,
      'init-declarations': [warn, always],
      'no-use-before-define': [warn, { functions: false }],
      //'one-var': [warn, always],

       // Looking good
      'yoda': warn,
      'no-multi-spaces': warn,
      'no-multiple-empty-lines': [warn, {max: 1}],
      'comma-spacing': warn,
      'object-curly-spacing': [warn, 'always'],
      'space-infix-ops': warn,
      'brace-style': warn,
      'comma-dangle': [warn, 'always-multiline'],
      'space-in-parens': warn,
      'key-spacing': [warn, { align: 'value' }],
      'keyword-spacing': warn,
      'no-extra-semi': warn,
      'no-multi-spaces': warn,
      'no-irregular-whitespace': warn,
      'spaced-comment': warn,
      'func-call-spacing': [error, never],

       // es6 stuff
      'arrow-spacing': warn,
      'no-var': warn,
      'prefer-rest-params': warn,

    }
}
