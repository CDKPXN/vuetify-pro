<template>
  <div id="appRoot">
    <template v-if="!$route.meta.public">
      <v-app id="inspire" class="app">
        <!-- 左导航条 -->
        <app-drawer class="app--drawer"></app-drawer>
        <!-- 顶部横条 -->
        <app-toolbar class="app--toolbar"></app-toolbar>

        <v-content>
          <!-- 页面的头，包括bread和一个刷新按钮 -->
          <page-header v-if="$route.meta.breadcrumb"></page-header>
          <!-- 页面的正文按照路由来 -->
          <div class="page-wrapper">
            <router-view></router-view>
          </div>
          <!-- 页脚 -->
          <v-footer height="auto" class="white pa-3 app--footer">
            <span class="caption"
              >isocked.com Design &copy; {{ new Date().getFullYear() }}</span
            >
            <v-spacer></v-spacer>
            <span class="caption mr-1"> Make With Love </span>
            <v-icon color="pink" small>favorite</v-icon>
          </v-footer>
        </v-content>

        <!-- 返回顶部按钮 -->
        <app-fab></app-fab>

        <!-- 右侧主题设置按钮 -->
        <v-btn
          small
          fab
          dark
          falt
          fixed
          top="top"
          right="right"
          class="setting-fab"
          color="red"
          @click="openThemeSettings"
        >
          <v-icon>settings</v-icon>
        </v-btn>

        <!-- temporary:临时抽屉位于其应用之上，并使用稀松布（叠加）来使背景变暗
        right:将抽屉放置在右侧
        hide-overlay:隐藏叠加层的显示
        fixed:给元素设置固定定位
        v-model rightDrawer:绑定一个bool值用于控制是否显示 -->

        <!-- 这里有个封装上的差异，对于左导航条，nav是整个封装在组件内部的，而对于右侧，nav在组件外部
        其原因就是需要通过按钮来控制该组件的显示/隐藏 -->
        <v-navigation-drawer
          class="setting-drawer"
          temporary
          right
          v-model="rightDrawer"
          hide-overlay
          fixed
        >
          <theme-settings></theme-settings>
        </v-navigation-drawer>
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view :key="$route.fullpath"></router-view>
        </keep-alive>
      </transition>
    </template>

    <!-- snackbar类似于notification，用于快速向用户弹出简易信息
    bottom:将组件向底部对齐
    right:将组件向右边对齐 -->
    <v-snackbar
      :timeout="3000"
      bottom
      right
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import AppDrawer from "@/components/AppDrawer"; // 左侧导航条
import AppToolbar from "@/components/AppToolbar"; // 顶部横条
import AppFab from "@/components/AppFab"; // 快速返回顶部按钮
import PageHeader from "@/components/PageHeader"; // 页面的头，包括bread和一个刷新按钮
import ThemeSettings from "@/components/ThemeSettings"; // 主题设置弹窗（右侧）
import AppEvents from "./event"; // 事件，当app被创建时，执行下文created方法，将监控的事件加入app
export default {
  components: {
    AppDrawer,
    AppToolbar,
    AppFab,
    PageHeader,
    ThemeSettings
  },
  data: () => ({
    expanded: true,
    rightDrawer: false,

    snackbar: {
      show: false,
      text: "",
      color: ""
    }
  }),

  computed: {},

  created() {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  },
  methods: {
    // 点击按钮，弹出右侧的设置窗口
    openThemeSettings() {
      this.$vuetify.goTo(0);
      this.rightDrawer = !this.rightDrawer;
    }
  }
};
</script>

<style lang="stylus" scoped>
.setting-fab
  top:50%!important;
  right:0;
  border-radius:0
.page-wrapper
  min-height:calc(100vh - 64px - 50px - 81px );
</style>
