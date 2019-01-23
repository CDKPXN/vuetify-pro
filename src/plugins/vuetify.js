// 加载vuetify的lib（通过vuetify-loader和vue-cli-plugin-vuetify）和styl（vuetify的样式采用stylus实现）
// 将vuetify加入vue并指定默认主题

import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import "../theme/default.styl";

Vue.use(Vuetify, {
  theme: {
    primary: "#ee44aa",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  customProperties: true,
  iconfont: "fa4"
});
