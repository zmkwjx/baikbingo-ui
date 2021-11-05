<template>
  <div class="footer">
    <div class="wrap clearfix">
      <div class="foot-left">
        <div class="foot-logo">
          <img width="106" src="/logo.svg" alt="iconfont Logo" />
        </div>
        <div class="foot-content">
          BaikBingo-UI倾力打造的服务于企业的开源UI组件库
        </div>
        <div class="foot-copy-right">
          <p>©BaikBingo UI, powered by zmkjwx.</p>
          <p>
            转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源，商业媒体及纸媒请先联系：zmkwjx@126.com
          </p>
          <p>
            <a
              href="https://beian.miit.gov.cn/"
              rel="noopener noreferrer"
              target="_blank"
            >
              鄂ICP备19019552号-1
            </a>
          </p>
        </div>
      </div>
      <div class="foot-right">
        <div class="links-title">友情链接</div>
        <ul class="links clearfix">
          <li v-for="item in links" :key="item.href">
            <a :href="item.href" target="_blank">{{ item.name }}</a>
          </li>
        </ul>
        <div class="share-logos">
          <a class="iconfont" href="mailto:zmkjwx@126.com" target="_blank">
            <MailOutlined />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { MailOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
const links = ref([
  {
    name: "Github",
    href: "https://github.com"
  },
  {
    name: "Gitee",
    href: "https://gitee.com/"
  },
  {
    name: "Ant Design Vue",
    href: "https://next.antdv.com/components/overview-cn/"
  },
  {
    name: "Rollup",
    href: "https://rollupjs.org/"
  },
  {
    name: "Vite",
    href: "https://cn.vitejs.dev/"
  }
]);
</script>
<style lang="scss">
.footer {
  background: rgba(6, 6, 11);
  position: relative;
  font-size: 12px;
  .wrap {
    position: relative;
  }
  .share-logos {
    margin-top: 19px;
    .iconfont {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      margin-right: 15px;
      text-align: center;
      line-height: 42px;
      color: rgba(255, 255, 255, 0.3);
      display: inline-block;
      font-size: 26px;
      text-indent: -1px;
    }
    a {
      color: #60606d;
    }
    a:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .links-title {
    font-size: 18px;
  }
  .links {
    margin-top: 27px;
    a {
      color: #60606d;
    }
    a:hover {
      color: rgba(255, 255, 255, 0.7);
    }
    li {
      float: left;
      padding: 0 2px;
      margin-bottom: 5px;
      margin-right: 15px;
    }
  }
  .foot-left {
    width: 656px;
    height: 100%;
    margin-top: 45px;
    overflow: hidden;
    font-size: 12px;
    line-height: 18px;
  }
  .foot-content {
    margin-top: 25px;
  }
  .foot-copy-right {
    margin-top: 27px;
    p {
      margin-top: 2 px;
    }
    a {
      margin-right: 0.5em;
      color: #60606d;
    }
    a:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .foot-logo {
    display: block;
    img {
      border: 0 none;
      width: auto\9;
      height: auto;
      max-width: 100%;
      vertical-align: top;
    }
  }
  .foot-right {
    width: 380px;
    position: absolute;
    right: 0;
    top: 45px;
  }
}
</style>
