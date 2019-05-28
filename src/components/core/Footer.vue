<template>
  <v-footer id="core-footer" absolute height="82">
    <div class="footer-items">
      <span v-for="link in links" :key="link.name">
        <a :href="link.Link" class="tertiary--text footer-links">{{
          link.name
        }}</a>
      </span>
    </div>
    <v-spacer />
    <span class="font-weight-light copyright">
      &copy;
      {{ new Date().getFullYear() }}
      昆朋新能体验技术部出品
      <v-icon color="tertiary" size="17">mdi-heart</v-icon>
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: "Home", Link: "/dashboard" },
      { name: "Baidu", Link: "https://www.baidu.com" },
      {
        name: "About Us",
        Link:
          "https://zhaopin.baidu.com/m/company?page=registration&query=c43cd04d75e9c03bec5e3e5eea8b3ad0"
      }
    ]
  })
};
</script>

<style>
#core-footer {
  z-index: 0;
}
.footer-links {
  margin: 0 5px;
}
</style>
