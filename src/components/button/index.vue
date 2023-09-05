<!-- eslint-disable no-unused-vars -->
<template>
  <!-- l-button-primary is-button is-round -->
  <button
    @click="change"
    class="l-button"
    :disabled="disabled || loading"
    :style="[minwidthCss]"
    :class="[theme, isborder, isround, isSize, isblack]"
  >
    <span>
      <i v-if="loading || load" class="iconfont icon-prefix icon-loading"></i>
      <i v-if="isprefix" class="iconfont icon-prefix" :class="[isprefix]"></i>
      <slot></slot>
      <i v-if="issuffix" class="iconfont icon-suffix" :class="[issuffix]"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: "LButton",
  props: {
    type: {
      type: String,
      default: "",
    },
    border: Boolean, //默认是false
    round: Boolean, //默认是false
    disabled: Boolean, //禁用
    black: Boolean, // 块级
    loading: Boolean,
    beforeChange: Function,
    size: {
      type: String,
      default: "",
    },
    minwidth: {
      //宽度
      type: String,
      default: "",
    },
    prefix: {
      //前置图标
      type: String,
      default: "",
    },
    suffix: {
      // 后置图标
      type: String,
      default: "",
    },
  },
  data() {
    return {
      load: false,
    };
  },
  computed: {
    theme() {
      return this.type ? `l-button-${this.type}` : "";
      //console.log(this.type)
    },
    isborder() {
      return this.border ? `is-button` : "";
    },

    minwidthCss() {
      if (!this.minwidth) {
        return " ";
      } else {
        return { "min-width": this.minwidth };
      }

      // return  this.border ? `is-button`: ''
    },
    isround() {
      return this.round ? `is-round` : "";
    },
    isdisabled() {
      return this.disabled ? `l-button[disabled]` : "";
    },
    isSize() {
      return this.size ? `l-button-${this.size}` : "";
    },
    isprefix() {
      return this.prefix ? `icon-${this.prefix}` : "";
    },
    issuffix() {
      return this.suffix ? `icon-${this.suffix}` : "";
    },
    isblack() {
      return this.black ? "l-button-block" : "";
    },
  },
  methods: {
    //事件回调
    change() {
      //第二种方法触发回调函数，父组件传递一个函数过了判断是否是函数类型，如果是就执行父组件resolve()方法
      if (typeof this.beforeChange == "function") {
        this.load = true;
        // eslint-disable-next-line no-unused-vars
        this.beforeChange().then((response) => {
            this.load = false;
          }).catch(() => {
            this.load = false;
          });
      }
      // 第一种直接调用父组件的方法
      this.$emit("click");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./button.scss";
</style>
