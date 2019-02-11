<template>
  <v-container>
    <v-card>
      <v-toolbar card color="white">
        <v-text-field
          flat
          solo
          prepend-icon="search"
          placeholder="Type something"
          v-model="search"
          hide-details
          class="hidden-sm-and-down"
        ></v-text-field>
        <!-- <v-btn icon>
        <v-icon>filter_list</v-icon>
        </v-btn>-->
      </v-toolbar>

      <v-divider></v-divider>
      <v-card-text>
        <v-list two-line>
          <v-btn flat small style="width:100%;border:#CFD8DC dashed 1px" @click="plus">
            <v-icon>fa-plus</v-icon>&nbsp;
            添加
          </v-btn>
          <template v-for="(item,index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{item.header}}</v-subheader>
            <v-divider v-else-if="item.divider" :key="index"></v-divider>
            <v-list-tile avatar v-else :key="item.title" @click="handlerClick(item)">
              <v-layout justify-space-between>
                <v-flex>
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>
                </v-flex>
                <v-flex lg6 px-2>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-flex>
                <v-flex lg1>
                  <v-list-tile-content>
                    <v-list-tile-title>{{pop1}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{name}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-flex>
                <v-flex lg2>
                  <v-list-tile-content>
                    <v-list-tile-title>{{pop2}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{startTime}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-flex>

                <v-flex lg3 align-self-center>
                  <div class="layout row align-center">
                    <v-progress-linear v-model="value"></v-progress-linear>
                    <span class="pl-1">{{value}}%</span>
                  </div>
                </v-flex>
                <v-flex></v-flex>
                <!-- <v-flex lg1 align-self-center>
                <div class="layout column align-end">
                  <v-list-tile-action class="caption">
                    <div style="display:inline">
                      <a>编辑</a>&nbsp;
                      <span style="border-right:#ECEFF1 solid 2px"></span>

                      
                      &nbsp;
                      <v-menu offset-y>
                        <a slot="activator">更多</a>

                        <v-list>
                          <v-list-tile
                            v-for="(item, index) in menus"
                            :key="index"
                            @click="menu(item)"
                          >
                            <v-list-tile-title>{{ item }}</v-list-tile-title>
                          </v-list-tile>
                        </v-list>
                      </v-menu>
                    </div>
                  </v-list-tile-action>
                </div>
                </v-flex>-->
              </v-layout>
            </v-list-tile>
          </template>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    search: "",
    pop1: "Owner",
    pop2: "开始时间",
    name: "付小小",
    startTime: "2019-01-27 13:42",
    value: 50,
    menus: ["编辑", "更多"],
    items: [
      {
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        title: "Brunch this weekend?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood ?"
      },
      { divider: true, inset: true },
      {
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },
      { divider: true, inset: true },
      {
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        title: "Oui oui",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      },
      { divider: true, inset: true },
      {
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        title: "Dash",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      }
    ]
  }),
  methods: {
    handlerClick(items) {
      alert("标题:" + items.title);
    },
    plus() {
      alert("这里弹添加的模态框");
    }
  }
};
</script>
<style scoped>
.outline {
  border: red solid 1px;
}
.center {
  text-align: center;
}
</style>

