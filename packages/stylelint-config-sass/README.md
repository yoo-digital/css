# YOO Stylelint Configuration for Sass Projects
[![npm version](https://badge.fury.io/js/%40yoo-digital%2Fstylelint-config-sass.svg)](https://badge.fury.io/js/%40yoo-digital%2Fstylelint-config-sass)

Contains the settings and rules used for Sass projects within YOO.
It is publicly available via the npm registry.

## Purpose
The exported `index.js` file contains all the Stylelint rules for Sass that are compatible with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).
See the guidelines for more information.

## Usage
In order to use the Stylelint configuration file in your project, you will have to install
its dependencies (including peer-dependencies). The following command should work
for both _npm_ and _yarn_. It will detect the proper client.

```text
npx install-peerdeps --dev @yoo-digital/stylelint-config-sass
```

**Be aware**: The _stylelint_ package is one of the peer-dependencies. The versions might collide in your project.
Always try to use the latest versions of _stylelint_ in your project.

After installing the packages, you can create a `.stylelintrc.js` file in the root of your project
and add the following lines:

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
You can use `yarn link` to link your work in progress into an actual project and test your changes.
Make sure you are in the directory of the package (_./packages/stylelint-config-sass_) before linking.
See the [official documentation](https://yarnpkg.com/lang/en/docs/cli/link/) of yarn for more information.
