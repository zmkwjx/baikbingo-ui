<template>
  <header>
    <div class="site-nav wrap">
      <div class="logo">
        <a href="/">
          <img src="/logo.svg" alt="iconfont Logo" />
        </a>
      </div>
      <nav>
        <ul class="clearfix">
          <li
            v-for="item in menus"
            :key="item.path"
            class="nav-item"
            :class="{ current: item.path === current }"
            @click="onJump(item)"
          >
            <a class="nav-item-link">
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="quick-menu">
        <ul>
          <li><CodepenCircleOutlined /></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup>
import { CodepenCircleOutlined } from "@ant-design/icons-vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();

const menus = ref(
  router.options.routes[0].children.map((item) => {
    return {
      name: item.meta.title,
      path: item.path
    };
  })
);

const current = ref(route.path);
// 监听路由
onBeforeRouteUpdate((to) => {
  current.value = to.path;
});

const onJump = (item) => {
  router.push(item.path);
};
</script>

<style lang="scss">
header {
  position: relative;
  z-index: 999;
  background-color: #090723;
  .site-nav {
    display: flex;
    height: 55px;
    line-height: 55px;
    margin: 0 auto;
    .logo {
      width: 125px;
      float: left;
      height: 55px;
      text-align: center;
      font-size: 24px;
      margin-right: 40px;
      a {
        color: #868598;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          border: 0 none;
          width: auto\9;
          height: auto;
          max-width: 100%;
          vertical-align: top;
        }
      }
    }
    .clearfix {
      *zoom: 1;
    }
    nav {
      float: left;
      .nav-item {
        float: left;
        padding: 0 8px;
        font-size: 14px;
        position: relative;
        a {
          color: #ffffff80;
        }
        &-link {
          display: block;
          height: 47px;
          padding: 0 8px;
          outline: 0;
          text-decoration: none;
          text-underline-position: under;
          padding: 0 8px;
        }
      }
      .current,
      .nav-item:hover {
        a {
          color: #fff;
        }
      }
    }
    .quick-menu > ul {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .quick-menu {
      color: #fff;
      margin-left: auto;
      height: 55px;
      li {
        margin: 0 13px;
        position: relative;
        &::marker {
          display: none;
          color: blue;
          font-size: 1.2em;
        }
        span {
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          text-align: center;
          display: inline-block;
          position: relative;
          top: 4px;
          font-size: 24px;
        }
      }
    }
  }
}
</style>
