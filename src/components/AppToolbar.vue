<template>
  <!-- v-toolbar同样作为整体布局的一部分(app)，固定大小(fix)，使用暗黑主题 -->
  <v-toolbar color="primary" fixed dark app>
    <!-- 左侧的按钮，handleDrawerToggle触发导航开/关事件 -->
    <v-toolbar-title>
      <v-toolbar-side-icon
        right
        @click.stop="handleDrawerToggle"
      ></v-toolbar-side-icon>
    </v-toolbar-title>

    <!-- 搜索框 -->
    <v-text-field
      flat
      solo-inverted
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    >
    </v-text-field>

    <!-- spacer是一个填充组件，就是将搜索框与右边的按钮中间留出距离 -->
    <v-spacer></v-spacer>
    <!-- 右侧的按钮 -->
    <v-toolbar-items>
      <v-btn flat href="mailto:wangqiangshen@gmail.com">
        Hire Me
      </v-btn>
    </v-toolbar-items>
    <v-btn icon href="https://github.com/tookit/vue-material-admin">
      <v-icon>fa fa-github</v-icon>
    </v-btn>
    <v-btn icon @click="handleFullScreen()">
      <v-icon>fullscreen</v-icon>
    </v-btn>
    <!-- 通知按钮，这是一个menu组件
      offset-y：在y轴上偏移菜单，与上/下方向一起工作
      origin：设置过渡原点
      nudge-bottom：向底部微调内容
      transition：设置组件过渡效果，可以是内置的过渡配置或者是您自己的配置的其中一个。 -->
    <v-menu
      offset-y
      left
      origin="center center"
      class="elelvation-1"
      :nudge-bottom="14"
      transition="scale-transition"
    >
      <v-btn icon flat slot="activator">
        <v-badge color="red" overlap>
          <span slot="badge">3</span>
          <v-icon medium>notifications</v-icon>
        </v-badge>
      </v-btn>
      <!-- 通知列表组件，自行封装的 -->
      <notification-list></notification-list>
    </v-menu>
    <!-- 用户菜单按钮 -->
    <v-menu
      offset-y
      left
      origin="center center"
      :nudge-bottom="10"
      transition="scale-transition"
    >
      <v-btn icon large flat slot="activator">
        <v-avatar size="30px">
          <img src="/static/avatar/man_4.jpg" alt="Michael Wang" />
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile
          v-for="(item, index) in items"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          @click="item.click"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          rel="noopener"
          :key="index"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
import NotificationList from "@/components/widgets/list/NotificationList";
import Util from "@/util";
export default {
  name: "app-toolbar",
  components: {
    NotificationList
  },
  data: () => ({
    //用户菜单的项
    items: [
      {
        icon: "account_circle",
        href: "#",
        title: "Profile",
        click: e => {
          window.console.log(e);
        }
      },
      {
        icon: "settings",
        href: "#",
        title: "Settings",
        click: e => {
          window.console.log(e);
        }
      },
      {
        icon: "fullscreen_exit",
        href: "#",
        title: "Logout",
        click: e => {
          window.getApp.$emit("APP_LOGOUT");
          window.console.log(e);
        }
      }
    ]
  }),
  // 改变主题色
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    }
  },

  methods: {
    // 控制导航开/关
    handleDrawerToggle() {
      window.getApp.$emit("APP_DRAWER_TOGGLED");
    },
    // 控制全屏
    handleFullScreen() {
      Util.toggleFullScreen();
    }
  }
};
</script>
