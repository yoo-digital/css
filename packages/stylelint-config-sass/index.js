module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'at-rule-disallowed-list': [
      'extend',
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules:
          [
            'at-root',
            'content',
            'each',
            'else',
            'error',
            'for',
            'function',
            'include',
            'if',
            'mixin',
            'return',
            'warn',
          ],
      },
    ],
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'color-hex-length': 'long',
    'comment-empty-line-before': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': {
      '/^border/': 'none',
    },
    'function-url-quotes': 'always',
    'font-weight-notation': 'numeric',
    'font-family-name-quotes': 'always-where-recommended',
    'max-nesting-depth': 3,
    // Configuration options:
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
    'order/order': [
      [
        {
          type: 'at-rule',
          name: 'include',
        },
        'custom-properties',
        'dollar-variables',
        'declarations',
        'at-rules',
        'rules',
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'up-to|at-least',
        },
      ],
      {
        unspecified: 'ignore',
        disableFix: true,
      },
    ],
    'selector-attribute-quotes': 'always',
    'selector-max-compound-selectors': 4,
    'selector-max-id': 0,
    'selector-max-specificity': '0,4,1',
    'selector-max-type': [
      1,
      {
        ignoreTypes: [
          '/fieldset/',
        ],
      },
    ],
    'selector-max-universal': 0,
    'selector-no-qualifying-type': true,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'global',

          // For webpack support:
          // https://til.hashrocket.com/posts/sxbrscjuqu-share-scss-variables-with-javascript
          'export',
        ],
      },
    ],
    'string-quotes': 'double',
    'scss/double-slash-comment-inline': [
      'never',
      {
        ignore: [
          'stylelint-commands',
        ],
      },
    ],
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/double-slash-comment-whitespace-inside': [
      'always',
      {
        severity: 'warning',
      },
    ],
    'scss/selector-no-redundant-nesting-selector': true,
  },
};
