<template>
  <div class="about">
    <v-widget :title="title">
      <span slot="widget-header-action">
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn @click="test" flat>slot</v-btn>
        </v-toolbar-items>
      </span>
      <div slot="widget-content">{{content}}</div>
    </v-widget>
    <p></p>
    <v-divider></v-divider>
    <v-layout>
      <v-flex lg3 >
          <account-center></account-center>
      </v-flex>
    </v-layout>
    <input v-model="message" placeholder="edit me">
  </div>
</template>
<script>
import VWidget from "@/components/VWidget";
import AccountCenter from "./AccountCenter";


export default {
  methods:{
    test(){
      alert("我是插槽")
    }
  }
  ,
  components: {
    VWidget: VWidget,
    AccountCenter:AccountCenter
  },
  data: () => {
    return {
      title: "VWidget",
      content: "卡片内容"
    };
  }
};
</script>
<style>
  .outline{
    border:red 1px dashed;
  }
</style>


