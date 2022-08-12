import Vue from 'vue'
import App from './App.vue'
// Markdown 编辑插件

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
  config:{
    toc:{
      includeLevel: [1,2, 3, 4],
    }
  }
});
Vue.use(VMdPreview);












Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
