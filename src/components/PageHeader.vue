<template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <!-- 页面标题 -->
    <div class="page-header-left">
      <h3 class="pr-3">{{ title }}</h3>
    </div>
    <!-- 面包屑组件 -->
    <v-breadcrumbs divider="-" :items="breadcrumbs"> </v-breadcrumbs>
    <v-spacer></v-spacer>
    <!-- 刷新按钮 -->
    <div class="page-header-right">
      <v-btn icon>
        <v-icon class="text--secondary">refresh</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
import menu from "@/api/menu";
export default {
  data() {
    return {
      title: ""
    };
  },
  computed: {
    breadcrumbs: function() {
      let breadcrumbs = [];
      menu.forEach(item => {
        if (item.items) {
          let child = item.items.find(i => {
            return i.component === this.$route.name;
          });
          if (child) {
            breadcrumbs.push({
              text: item.title
            });
            breadcrumbs.push({
              text: child.title
            });
            // eslint-disable-next-line
            this.title = child.title;
          }
        } else {
          if (item.name === this.$route.name) {
            // eslint-disable-next-line
            this.title = item.title;
          }
        }
      });
      return breadcrumbs;
    }
  }
};
</script>
