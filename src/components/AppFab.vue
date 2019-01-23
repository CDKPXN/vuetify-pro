<template>
  <!-- fab-transition简单说是一个动效组件，其功能是：
  当滚动条拖到下方时，显示这个按钮，并有一个缩放的效果 -->
  <v-fab-transition>
    <v-btn
      fab="fab"
      small
      dark="dark"
      fixed="fixed"
      bottom="bottom"
      right="right"
      color="red"
      v-show="fab"
      @click="toTop"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: "app-fab",

  data: () => ({
    fab: false
  }),

  methods: {
    onScroll() {
      if (typeof window === "undefined") return;

      const top = window.pageYOffset || document.documentElement.offsetTop || 0;

      this.fab = top > 300;
    },
    // 按钮的功能就是回到页面顶部
    toTop() {
      this.$router.push({ hash: "" });
      this.$vuetify.goTo(0);
    }
  }
};
</script>
