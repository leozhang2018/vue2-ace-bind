# vue2-ace-bind

A Vue2 component for binding the [ace editor][1]

## Install

### NPM

```bash
npm install vue2-ace-bind --save-dev
```

### YARN

```bash
yarn add vue2-ace-bind -D
```

## How to use

### Import the component firstly

```javascript
import aceEditor from "vue2-ace-bind";
```

### Then import the language mode and theme which you want to use

```javascript
import javascript from "brace/mode/javascript"
import sh from "brace/mode/sh"
```

```javascript
import xcode from "brace/theme/xcode"
import terminal from "brace/theme/terminal"
```

The default config mode is bash and theme is terminal

Ace-editor's mode and theme list is here:

- [Mode][2]
- [Theme][3]

Register the `component`.

```javascript
components: {
  editor
}

```

### Use the component in `template`

```javascript
<editor :content="variable"></editor>
```

The content is required,other props have the following defaults:

```javascript
lang: sh
theme: terminal
height: 100%
width: 100%
options: {}
```

if you want to configure the ace-editor,just define options in data.

```javascript
<editor :content="variable" :options="options" ></editor>
```

```javascript
option: {
    showLineNumbers: false,
    showFoldWidgets: true,
    showGutter: false,
    displayIndentGuides: false,
    showPrintMargin: false
    ....
}

```

The official doc is here: [Configuring ACE][4].

  [1]: https://ace.c9.io/
  [2]: https://github.com/ajaxorg/ace/tree/master/lib/ace/mode
  [3]: https://github.com/ajaxorg/ace/tree/master/lib/ace/theme
  [4]: https://github.com/ajaxorg/ace/wiki/Configuring-Ace