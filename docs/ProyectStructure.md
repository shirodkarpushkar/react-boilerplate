# Project Structure

This document will allow you to understand a little more the project structure and the different conventions used in it.

## Folder Structure in Project

All the code will be stored at the **src** folder following the approach below:

```

frontend
├─ src
│  ├─ assets
│  │  └─ images
│  │     ├─ logo.svg
│  ├─ components
│  │  ├─ App
│  │  └─ index.ts
│  ├─ config
│  │  └─ menuData.tsx
│  ├─ contexts
│  │  ├─ AuthenticationProvider
│  │  └─ index.ts
│  ├─ hooks
│  ├─ layouts
│  │  ├─ BlankLayout
│  │  ├─ GeneralLayout
│  │  └─ index.ts
│  ├─ pages
│  │  ├─ Dashboard
│  │  └─ index.tsx
│  ├─ themes
│  │  ├─ main-variables.less
│  │  └─ main.less

```
### Assets Folder

The static files needed in the application, multimedia (images, videos, music, etc), plain js, json files and so on.

### Components Folder

Components that can be re-used across the whole application.

### Config

Contains the configurations needed by the project or different libraries, please put here anything related to configuration, that way will make easier to find and edit specific configurations when needed (using different environments).

### Contexts

These are components using the [React Context API][1] for sharing application global state and behaviour.

### Hooks

These are functions using the [React Hooks API][2] and allows us to share logic or behaviour among different components in the application.

### Layouts

As the name implies, we won't repeat the same UI structure over and over again, instead we use layouts which will be wrappers of the Pages in the application (see below).

### Pages

Pages will be a component which will have a direct relationship to a route in the application see the following examples so you can have a better idea:

```
routes: ['/dashboard/analysis', '/dashboard/statistics']

// has to be mapped in the Pages folder structure as follows

frontend
├─ src
│  ├─ pages
│  │  ├─ Dashboard
│  │  │  ├─ Analysis.tsx
│  │  │  ├─ Statistics.tsx
│  │  │  └─ index.ts

```

As you can see there is almost a 1 to 1 relationship between the url and the folder structure which makes easier to find routes when exploring the code.

Note: Inside every page folder, you can have subfolders related to the [Folder Structure per Component](#folder-structure-per-component).

## Folder Structure per Component

Let's try to keep every component as modular as possible so it will make the refactorings and code reading easier to follow, please see the next example:

```

frontend
├─ src
│  ├─ layouts
│  │  ├─ GeneralLayout
│  │  │  ├─ __tests__
│  │  │  │  ├─ GeneralLayout.Test.tsx
│  │  │  ├─ GeneralLayout.tsx
│  │  │  ├─ components
│  │  │  │  ├─ Footer.tsx
│  │  │  │  ├─ HeaderDropdown
│  │  │  │  │  ├─ HeaderDropdown.module.less
│  │  │  │  │  ├─ HeaderDropdown.tsx
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ RightContent
│  │  │  │  │  ├─ AvatarDropdown.tsx
│  │  │  │  │  ├─ RightContent.tsx
│  │  │  │  │  ├─ index.module.less
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ typings.ts
│  │  │  │  └─ index.ts
│  │  │  ├─ index.ts
│  │  │  └─ typings.ts

```

Things to notice:

1. The **"GeneralLayout"** folder name is in PascalCase because we are talking about React Components and that is the standard for naming components.
2. The **"tests"** will contain all the unit tests needed by the component or its subcomponents, it follows the namig convention by [jest][3] to search unit tests.
3. The general layout has a subfolder called **"components"** which are components that won't be reused across the application but only in this layout.
4. The dynamic preprocesor style sheet language we are going to use is [LESS][4] which is the same as the [ant design library][5] is using.
* The name of the less file must contain the name of the component which is styling, or be called **index.module.less** if it's being applied to multiple components.
* ***.module.less** extension is important because we are gonna be using [css-modules][6] to avoid conflicts with css classnames being the same among multiple components.
5. index.ts files are for simplifying the export / import procedures of some components in the application. please read [this][7] or [this][8] to have a better idea.
6. And last but not least since we are using [typescript][9] and we don't want to bloat the components code with more "runtime useless" code we are gonna have the typescript definitions into separate files called **"typings.ts"**.

[1]: https://reactjs.org/docs/context.html
[2]: https://reactjs.org/docs/hooks-intro.html
[3]: https://jestjs.io/
[4]: https://lesscss.org/
[5]: https://ant.design/
[6]: https://github.com/css-modules/css-modules
[7]: https://www.reddit.com/r/typescript/comments/qgyqt6/es6_modules_is_writing_indexts_files_for/
[8]: https://stackoverflow.com/a/64192707
[9]: https://www.typescriptlang.org