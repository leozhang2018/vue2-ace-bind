var ace = require('brace');
require('brace/ext/searchbox')

const defaultOptions = {
    enableEmmet: true,
    showLineNumbers: true,
    showFoldWidgets: true,
    showGutter: false,
    displayIndentGuides: false,
    showPrintMargin: false
}

module.exports = {
    template: "<div :style=\"{height: height ? px(height) : '100%',width: width ? px(width) : '100%'}\"></div>",
    props: {
        value: {
            type: String,
            required: true
        },
        lang: {
            default: 'sh'
          },
        theme: {
            default: 'xcode'
        },
        height: true,
        width: true,
        options: {
            type: Object,
            default: () => defaultOptions
        }
    },
    data: function () {
        return {
            editor: null,
            contentSwap: ""
        }
    },
    methods: {
        px: function (n) {
            if (/^\d*$/.test(n)) {
                return n + "px";
            }
            return n;
        }
    },
    watch: {
        value: function (val) {
            if (this.contentSwap !== val)
                this.editor.setValue(val, 1);
        }
    },
    mounted: function () {
        var vm = this;
        var lang = this.lang;
        var theme = this.theme;
        var editor = vm.editor = ace.edit(this.$el);
        this.$emit('init', editor);

        editor.$blockScrolling = Infinity;
        editor.setOptions(this.options);
        editor.getSession().setMode('ace/mode/' + lang);
        editor.setTheme('ace/theme/' + theme);
        editor.setValue(this.value, 1);

        editor.on('change', function () {
            var content = editor.getValue();
            vm.$emit('input', content);
            vm.contentSwap = content;
        });
    },
    created() {
        require(`brace/theme/${this.theme}`)
        require(`brace/mode/${this.lang}`)
    }
}
