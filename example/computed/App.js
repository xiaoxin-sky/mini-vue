// 在 render 中使用 proxy 调用 emit 函数
// 也可以直接使用 this
// 验证 proxy 的实现逻辑
import { h, ref, reactive, computed } from "../../lib/mini-vue.esm.js";
import Child from "./Child.js";

export default {
  name: "App",
  setup() {
    const msg = ref(1);
    let xd = 1;
    const computedMsg = computed(() => xd);
    const changeChildProps = () => {
      xd += 1;
    };

    return { msg, changeChildProps, computedMsg, xd };
  },

  render() {
    return h("div", {}, [
      h("div", {}, `你好computedMsg:${this.xd}`),
      h(
        "button",
        {
          onClick: this.changeChildProps,
        },
        "change child props"
      ),
      h(Child, {
        msg: this.msg,
      }),
    ]);
  },
};
