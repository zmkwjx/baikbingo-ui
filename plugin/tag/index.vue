<template>
  <div class="bkui-tag bkui-tag-blue ivu-tag-dot">
    <span class="bkui-tag-dot-inner" />
    <span class="bkui-tag-text">
      <slot />
    </span>
  </div>
</template>

<script lang="jsx">
import { defineComponent } from "vue";
export default defineComponent({
  name: "b-tag"
});
</script>
<style lang="scss">
.bkui-tag {
  display: inline-block;
  height: 22px;
  line-height: 22px;
  margin: 2px 4px 2px 0;
  padding: 0 8px;
  border: 1px solid #e3e8ee;
  border-radius: 3px;
  background: #f7f7f7;
  font-size: 12px;
  opacity: 1;
  overflow: hidden;
  cursor: pointer;
  color: #657180;
  .bkui-tag-dot-inner {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 8px;
    border-radius: 50%;
    background: #e3e8ee;
    position: relative;
    top: 1px;
  }
}
.ivu-tag-dot {
  height: 32px;
  line-height: 32px;
  border: 1px solid #e3e8ee !important;
  color: #657180 !important;
  background: #fff !important;
  padding: 0 12px;
}
.bkui-tag-blue {
  .bkui-tag-dot-inner {
    background: #39f;
  }
}
</style>
