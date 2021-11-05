<script lang="jsx">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "b-tag",
  setup() {
    let name1 = ref("测试用组件");
    return () => <div class="tset">{name1.value}</div>;
  }
});
</script>
<style lang="scss">
.b-tag {
  font-size: 30px;
  color: #000;
  &-dd {
    color: #000;
  }
}
</style>
