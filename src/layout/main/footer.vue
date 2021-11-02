<template>
  <div class="footer">
    <div class="wrap clearfix">
      <div class="foot-left">
        <div class="foot-logo">
          <img width="106" src="/logo.svg" alt="iconfont Logo" />
        </div>
        <div class="foot-content">
          阿里妈妈MUX倾力打造的矢量图标管理、交流平台。
          <br />
          设计师将图标上传到 iconfont
          平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。
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
          <li v-for="i in 10" :key="i">
            <a href="//thx.github.io/" target="_blank">阿里巴巴 UED 官网</a>
          </li>
        </ul>
        <div class="share-logos">
          <a>as</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.footer {
  background: rgba(6, 6, 11, 0.2);
  position: relative;
  font-size: 12px;
  .wrap {
    position: relative;
  }
  .share-logos {
    margin-top: 19px;
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
