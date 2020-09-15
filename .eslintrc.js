/* eslint-disable prettier/prettier */
            /** This file is generated, do not modify it directly */
            module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "prettier",
    "unicorn",
    "import",
    "react-hooks",
    "@typescript-eslint",
    "@gelatofm"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    },
    "entry-points": {
      "custom": {
        "lodash": 1,
        "@atlaskit/icon": [
          "glyph/*",
          "glyph/editor/*",
          "glyph/emoji/*"
        ],
        "@material-ui/icons": 1,
        "@apollo/client": 3,
        "next": 1,
        "date-fns": "*",
        "react-dom": "*"
      },
      "excluded": [
        "@material-ui/core",
        "@material-ui/lab",
        "@material-ui/core",
        "@material-ui/lab"
      ]
    }
  },
  "rules": {
    "no-undef": "off",
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          {
            "name": "react",
            "importNames": [
              "*"
            ],
            "message": "Please import React from 'react' instead."
          }
        ]
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false
      }
    ],
    "unicorn/filename-case": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "{@atlaskit,@atlassian}/**",
            "group": "external",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": [
          "builtin"
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/no-extraneous-dependencies": "error",
    "import/prefer-default-export": "off",
    "max-params": [
      "error",
      {
        "maximum": 2
      }
    ],
    "import/extensions": [
      "error",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-filename-extension": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-wrap-multilines": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-curly-newline": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/default-props-match-prop-types": "off",
    "react/require-default-props": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@gelatofm/prefer-tsx-over-ts": "error"
  }
}
