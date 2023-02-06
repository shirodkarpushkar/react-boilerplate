# Theming

We followed the [Ant Design Customize Themes Documentation][1] to allows us to customize the theme default colors in the library, the configuration was created in this project with two files:

* [main-variables.less][2]: This file contains the customized values for the default [Ant Design Less Variables][3] which can be changed to modify the default stylings for components.
* [main.less][4]: This file contains specific modifications for component's default styles that go beyond just editing colors and values. **(Explained below)**

**Note:** The theme files are loaded in the first line of the [index.less](../src/index.less) file and for now this is the only configuration needed to make our theme work.

## Customize Specific Component Styles

### Globally

**Note:** The following explanation applies if you want to have the same style applied globally per component.

If you only need to modify colors or values for properties you can take a look at the [Ant Design Less Variables File][5] for reference of the variables names and create or edit the value of the variable in the [main-variables.less][2] file.

But if you are willing to add or remove specific css rules/properties then you need the follow approach:

* Identify which is the component you are willing to customize. (Ex. **Drawer**)
* Make sure you import the component style into the [main.less][4] as a [less reference import][6]

```
@import (reference) 'antd/lib/drawer/style/drawer.less';
```

* Import the root selector of the previous file into the theme file and make your customization

```
.@{drawer-prefix-cls} {
  /// here make all your customization
}
```

**Note:** The prefix classname selector for the component won't work if you don't import the reference properly.

### Single Components

Just create a Component.module.less and reference it in your component.

[1]: https://ant.design/docs/react/customize-theme
[2]: ../src/themes/main-variables.less
[3]: https://ant.design/docs/react/customize-theme#Ant-Design-Less-variables
[4]: ../src/themes/main.less
[5]: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
[6]: https://css-tricks.com/reference-imports-in-less-are-kinda-cool
