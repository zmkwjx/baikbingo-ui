<template>
  <div class="page-home">
    <div class="search-wrap">
      <div
        class="search-input-wrap"
        :class="{ 'hide-cover': hide }"
        @click.stop="() => (hide = true)"
      >
        <div class="search-tab">
          <div class="search-tab-item active">组件</div>
        </div>
        <div class="search-input-wrap-cover">
          <span v-if="!hide" class="icon-tag">{{ desc }}</span>
        </div>
        <input v-model="search" type="text" class="search-input" />
      </div>
      <div class="swiper-wrapper">
        <a-carousel autoplay>
          <div v-for="item in news" :key="item.src" class="swiper-wrapper-item">
            <img :src="item.src" :alt="item.alt" @click="gotoNews(item)" />
          </div>
        </a-carousel>
      </div>
    </div>
    <div class="rec-cards wrap" :class="{ 'show-cards': loading }">
      <div v-for="plugin in plugins" :key="plugin.name" class="rec-card">
        <div class="rec-avatar"><SmileOutlined /></div>
        <div class="rec-title">{{ plugin.name }}</div>
        <div class="rec-content">
          <img
            src="https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { SmileOutlined } from "@ant-design/icons-vue";
import { ref, watch } from "vue";

// 缓存
const loading = ref(false);
setTimeout(() => (loading.value = true), 100);

// 遍历组件库
const plugins = ref([]);
const requirePlugins = import.meta.globEager("../../../plugin/**/index.vue")
Object.keys(requirePlugins).forEach((fileName) => {
  const name = fileName.replace(/plugin\//g, "").replace(/\/index.vue/g, "").replace(/\..\//g, "");
  plugins.value.push({
    name: name,
    path: `baikbingo-ui/plugin/${name}`
  })
})

// 隐藏描述
const desc = ref(`搜索组件 ${plugins.value.length}`);
const hide = ref(false);
document.getElementById("app").onclick = () => {
  hide.value = false;
};

// 输入内容
const search = ref(null);
watch(search,  (value) => {
  console.log(value);
})

// 广告
const news = ref([
  {
    src: "/resources/news/tengxunyun1.jpg",
    alt: "【腾讯云】推广者专属福利，新客户无门槛领取总价值高达2860元代金券，每种代金券限量500张，先到先得。",
    href: "https://cloud.tencent.com/act/cps/redirect?redirect=1040&cps_key=7ab0f85daa7e81d8a67b993f4ffe5094&from=console"
  },
  {
    src: "/resources/news/tengxunyun2.jpg",
    alt: "【腾讯云】云产品限时秒杀，爆款1核2G云服务器，首年74元",
    href: "https://cloud.tencent.com/act/cps/redirect?redirect=1077&cps_key=7ab0f85daa7e81d8a67b993f4ffe5094&from=console"
  }
]);
const gotoNews = (item) => {
  window.open(item.href, "_blank");
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
