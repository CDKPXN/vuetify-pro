<template>
  <div class="about">
    <v-container>
    <v-card>
      <v-card-text>
        <div class="layout ma-0 align-center" :class="computeCardLayout">
          <v-avatar :size="computeAvatarSize" color="primary">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="name">
          </v-avatar>
          <div class="flex" :class="computeTextAlgin">
            <div class="subheading">Serati Ma</div>
            <span class="caption">海纳百川，有容乃大</span>
          </div>
        </div>
        <p></p>
        <div>
          <v-layout row wrap align-center justify-space-around>
            <v-flex xs1>
              <v-icon size="15">business_center</v-icon>
            </v-flex>
            <v-flex xs9 align-center>
              <span>交互专家</span>
            </v-flex>
          </v-layout>

          <v-layout row wrap align-center justify-space-around>
            <v-flex xs1>
              <v-icon size="15">business</v-icon>
            </v-flex>
            <v-flex xs9>
              <span>蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</span>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-center justify-space-around>
            <v-flex xs1>
              <v-icon size="16">place</v-icon>
            </v-flex>
            <v-flex xs9>
              <span>浙江省杭州市</span>
            </v-flex>
          </v-layout>
        </div>
      </v-card-text>
    </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      enableHeader: true
    };
  },
  components: {},
  computed: {
    computeCardLayout() {
      return this.mini ? "row" : "column";
    },
    computeTextAlgin() {
      return this.mini ? "text-sm-right" : "text-sm-center";
    },
    computeAvatarSize() {
      return this.mini ? "48" : "96";
    },
    showAvatar() {
      return this.avatar !== null && this.avatar.src;
    },

    showBottomNav() {
      return this.mini === false && this.bottomNav;
    },

    showTopNav() {
      return this.mini === false && this.topNav;
    }
  }
};
</script>
<style lang="stylus" scoped>
.caption {
  font-weight: 400;
}

.subheading {
  font-weight: 600;
}
</style>