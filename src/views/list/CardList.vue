<template>
  <div class="about">
    <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
      <v-layout row wrap>
        <v-flex>
          <v-card
            id="card-border"
            flat
            tile
            style="height:150px ;text-align:center;padding-top:65px;border:#CFD8DC dashed 1px; "
            @mouseenter="enter"
            @mouseleave="leave"
          >
            <a>
              <v-icon style="margin-bottom:2px">fa-plus</v-icon>&nbsp;
              <span>新增产品</span>
            </a>
          </v-card>
        </v-flex>
        <v-flex v-for="n in 9" :key="n" xs4>
          <v-card flat tile >
            <v-img
              :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
              height="150px"
            ></v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  methods: {
    enter() {
      var dom = document.getElementById("card-border");
    //  dom.style.boxShadow = "1px 1px 5px #000";
      dom.classList.add("elevation-10");
    },
    leave() {
      var dom = document.getElementById("card-border");
    //  dom.style.boxShadow = "";
      dom.classList.remove("elevation-10");
    }
  },
  data: () => ({
    num: 4,
    size: "xl" //xs sm md lg xl
  })
};
</script>



