# Sassquatch
[![npm version](https://badge.fury.io/js/%40yoo-digital%2Fsassquatch.svg)](https://badge.fury.io/js/%40yoo-digital%2Fsassquatch)

Contains reusable style definitions, mixins, functions and variables for Sass projects.
The SCSS syntax is followed.

## Purpose
The goal of this package is to maintain a set of style definitions, mixins, utilities, functions and variables
that can be reused in projects where Sass is used. Having a central repository resp. library
helps us not only to ship code faster, but also ensures that code changes can be shared easier throughout
the different projects.

The setup is compatible with our [coding guidelines](https://yooapps.jira.com/wiki/spaces/FD/pages/1239187573/Coding+Guidelines).
See the guidelines for more information.

## Usage
In order to use the library, you will have to install
its dependencies (peer-dependencies). The following command should work
for both _npm_ and _yarn_. It will detect the proper client.

```text
npx install-peerdeps --dev @yoo-digital/sassquatch
```

After installing the package, you can import any of the files the way you want into your project's scss files.

```scss
@import "~@yoo-digital/sassquatch/scss/abstracts/variables";
@import "~@yoo-digital/sassquatch/scss/abstracts/mixins";
@import "~@yoo-digital/sassquatch/scss/abstracts/functions";
...
```

Global definitions that affect the entire style of your page or application can be imported by using
the main.scss file. We try to keep the global styles to a bare minimum.
You can use it in the following way:

```scss
// Your project's main.scss file
@import "abstracts/variables";
@import "~@yoo-digital/sassquatch/scss/main";
```

You can override all the defined variables of this library with your project specific variables.
You will have to import your set of variables before importing scss files from this project.
As you can see above, this can also be done with the global definitions.
Here's an example of a proper override in a component's SCSS file:

```scss
// ComponentX/ComponentX.scss
@import "abstracts/variables";
@import "~@yoo-digital/sassquatch/scss/abstracts/variables";
@import "~@yoo-digital/sassquatch/scss/abstracts/mixins";
@import "~@yoo-digital/sassquatch/scss/abstracts/functions";

// Now you can use the customized variables, mixins and functions inside your component
```

We strongly suggest to add your _styles_ directory as an _includePath_ into your
Sass compiler configuration, so you can easily access your project's SCSS files.
[Here](https://github.com/webpack-contrib/sass-loader#object) is an example of it using webpack.

Your IDE or editor might experience issues resolving the _absolute_ paths correctly.
In JetBrains products (Webstorm, IntelliJ, etc.) you can do that by marking the directory as a resource directory.
See [this](https://www.jetbrains.com/help/webstorm/configuring-project-structure.html) link for more information.

## Development
Before creating a pull request or publishing changes, make sure you tested your changes.
You can use `yarn link` to link your work in progress into an actual project and test your changes.
Make sure you are in the directory of the package (_./packages/sassquatch_) before linking.
See the [official documentation](https://yarnpkg.com/lang/en/docs/cli/link/) of yarn for more information.
