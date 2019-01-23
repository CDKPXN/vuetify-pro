<template>
  <!-- mini-variant:凝结导航抽屉宽度，也接受.sync修饰符。这样，抽屉在点击时会重新打开
  mini-variant.sync:导航可以收起来
  app:指定组件作为应用程序布局的一部分，用于动态调整内容的大小 -->
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    fixed
    :dark="$vuetify.dark"
    app
    v-model="drawer"
    width="260"
  >
    <!-- 工具栏组件可以与导航抽屉一起很好地工作，用于隐藏链接并呈现激活器以在移动设备上打开侧边栏。 -->
    <v-toolbar color="primary darken-1" dark>
      <img
        v-bind:src="computeLogo"
        height="36"
        alt="Vue Material Admin Template"
      />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>

    <!-- vue-perfect-scrollbar:是一个自定义的滚动条插件
    意思是，当nav过长时，会有滚动条出现（这跟浏览器自带的滚动条不一样） -->
    <vue-perfect-scrollbar
      class="drawer-menu--scroll"
      :settings="scrollSettings"
    >
      <!-- v-list:用于显示信息，它可以包含一个头像、内容、操作、列表组标题等等。列表也可以包含子元素并在侧边栏（sidebar）使用。
      dense:减小列表块的最大宽度
      expand:将只有在明确关闭后才会折叠起来 -->
      <v-list expand>
        <!-- 这里通过加载menu（api/menu.js）中的项初始化菜单项
        对整个列表进行遍历 -->
        <template v-for="(item, i) in menus">
          <!--如果存在子菜单-->
          <v-list-group
            v-if="item.items"
            :key="item.name"
            :group="item.group"
            :prepend-icon="item.icon"
            no-action="no-action"
          >
            <v-list-tile slot="activator" ripple="ripple">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <template v-for="(subItem, i) in item.items">
              <!--加载子菜单的项-->
              <!-- 如果还有下一级的子菜单（范例中不存在了） -->
              <v-list-group
                v-if="subItem.items"
                :key="subItem.name"
                :group="subItem.group"
                sub-group="sub-group"
              >
                <v-list-tile slot="activator" ripple="ripple">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile
                  v-for="(grand, i) in subItem.children"
                  :key="i"
                  :to="genChildTarget(item, grand)"
                  :href="grand.href"
                  ripple="ripple"
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ grand.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
              <!--如果没有下级子菜单，则处理当前就好了-->
              <v-list-tile
                v-else
                :key="i"
                :to="genChildTarget(item, subItem)"
                :href="subItem.href"
                :disabled="subItem.disabled"
                :target="subItem.target"
                ripple="ripple"
              >
                <v-list-tile-content>
                  <v-list-tile-title
                    ><span>{{ subItem.title }}</span></v-list-tile-title
                  >
                </v-list-tile-content>
                <v-list-tile-action v-if="subItem.action">
                  <v-icon :class="[subItem.actionClass || 'success--text']">{{
                    subItem.action
                  }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list-group>
          <!-- 通过header属性来分隔列表的各个部分（subheader组件） -->
          <v-subheader v-else-if="item.header" :key="i">{{
            item.header
          }}</v-subheader>
          <!-- 华丽丽的分隔线 -->
          <v-divider v-else-if="item.divider" :key="i"></v-divider>
          <!--如果是只有一级的菜单-->
          <!-- 如果href属性不存在，那么跳转到name指定的页面 -->
          <v-list-tile
            v-else
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="item.name"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="item.subAction">
              <v-icon class="success--text">{{ item.subAction }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import menu from "@/api/menu";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "app-drawer",
  components: {
    VuePerfectScrollbar
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    mini: false,
    drawer: true,
    menus: menu,
    scrollSettings: {
      maxScrollbarLength: 160
    }
  }),
  computed: {
    computeGroupActive() {
      return true;
    },
    computeLogo() {
      return "/static/m.png";
    },

    sideToolbarColor() {
      return this.$vuetify.options.extra.sideNav;
    }
  },
  // 侦听APP_DRAWER_TOGGLED事件，来决定打开/收起导航
  // 这个事件会在顶部横条AppToolbar中通过按钮触发
  created() {
    window.getApp.$on("APP_DRAWER_TOGGLED", () => {
      this.drawer = !this.drawer;
    });
  },

  // 子菜单将去向何方
  methods: {
    genChildTarget(item, subItem) {
      if (subItem.href) return;
      if (subItem.component) {
        return {
          name: subItem.component
        };
      }
      return { name: `${item.group}/${subItem.name}` };
    }
  }
};
</script>

<style lang="stylus">
// @import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl';

#appDrawer
  overflow: hidden
  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto
</style>
