# YOO Stylelint Configuration for Sass Projects
[![npm version](https://badge.fury.io/js/%40yoo-digital%2Fstylelint-config-sass.svg)](https://badge.fury.io/js/%40yoo-digital%2Fstylelint-config-sass)

Contains the settings and rules used for Sass/SCSS projects within YOO.
It is publicly available via the npm registry.

❗ Should be used in combination with our [Prettier config](https://github.com/yoo-digital/prettier).

## Purpose
The exported `index.js` file contains all the Stylelint rules for Sass that are compatible with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).
See the guidelines for more information.

## Usage
**Be aware**: The _stylelint_ package is listed as a peer dependency. The versions might collide in your project. Always try to use the latest versions of _stylelint_ in your project. Please check the changelog to see which _stylelint_ version this package is compatible with.

After installing the packages, you can create a `.stylelintrc.js` file in the root of your project and add the following lines:

```javascript
module.exports = {
  extends: '@yoo-digital/stylelint-config-sass',
};
```

You can apply your own set of rules on top of that, but do not turn off any of the rules,
except it is an obstacle and making your life harder. Check the chapter below, for a complete set of rules
that can be applied.




## Development
Before creating a pull request or publishing changes, make sure you tested your changes.

This project is a monorepo and uses _lerna_. See Lerna's [official website](https://lerna.js.org/) for more info.
