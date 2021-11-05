<template>
  <div class="root" :class="{ home: isHome }">
    <canvas v-if="isHome" ref="canvas" class="index-canvas" />
    <div class="wrapper">
      <MenuNav />
      <div class="main">
        <router-view />
      </div>
      <Footer />
      <a-back-top />
    </div>
  </div>
</template>
<script setup>
import MenuNav from "./menu-nav.vue";
import Footer from "./footer.vue";
import { ref, watch } from "vue";
import { canvasDom } from "@/components/starcanvas/setup.js";
const canvas = ref(null);
watch(canvas, (value) => {
  canvasDom.value = value;
});

// 监听路由
import { useRoute, onBeforeRouteUpdate } from "vue-router";
const route = useRoute();
const isHome = ref(route.path === "/");
onBeforeRouteUpdate((to) => {
  isHome.value = to.path === "/";
});
</script>
<style lang="scss">
.home {
  header {
    background-color: unset !important;
  }
  .footer {
    background: rgba(6, 6, 11, 0.2);
  }
}
.root {
  .index-canvas {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background-color: rgb(9, 7, 35);
  }
  .wrapper {
    .main {
      min-height: 700px;
      overflow: hidden;
      position: relative;
    }
    .ant-back-top {
      bottom: 40%;
      right: 16%;
      &-icon {
        line-height: 50px;
        color: rgb(9, 7, 35);
        font-size: 28px;
      }
      &-content:hover {
        background-color: #b5b5b5;
      }
      &-content {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: rgba(204, 204, 204, 0.5);
      }
    }
  }
}
</style>
