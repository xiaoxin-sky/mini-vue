import { h, ref } from "../../lib/mini-vue.esm.js";
import NextTicker from "../nextTicker/NextTicker.js";

export default {
  name: "APP",
  setup() {
    const count = ref(1);
    const age = ref(1);
    const loop = () => {
      while (count.value < 3) {
        count.value += 1;
        console.log("count", count.value);
      }
      while (age.value < 3) {
        age.value += 1;
        console.log("age", age.value);
      }
    };
    return { count, age, loop };
  },
  render() {
    return h("div", {}, [
      h(
        "button",
        {
          onClick: this.loop,
        },
        `当前 count：${this.count},age:${this.age}`
      ),
    ]);
  },
};
