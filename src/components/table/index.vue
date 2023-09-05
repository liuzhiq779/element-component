<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column v-if="index" type="index" width="40"></el-table-column>
    <el-table-column
      v-if="checkbox"
      type="selection"
      width="40"
    ></el-table-column>
    <template v-for="item in column">
      <el-table-column
        v-if="item.type === 'function'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <div v-html="item.callback && item.callback(scope.row)"></div>
        </template>
      </el-table-column>
    </template>
      <el-table-column
        
        v-for="item in column"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
    <template slot-scope="scope">

    </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "LButton",
  props: {
    column: {
      type: Array,
      default: () => [],
    },
    checkbox: {
      type: Boolean,
      default: true,
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    url:{
      type:String,
      default:'',
      require: true
    },
    index: Boolean,
   
  },
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 生命周期，创建完成时（可以访问当前this实例）
  created() {},
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期：创建之前
  beforeMount() {
    
  }, //生命周期：挂载之前
  beforeUpdate() {}, //生命周期：更新之前
  updated() {}, //生命周期：更新之后
  beforeDestroy() {}, //生命周期：销毁之前
  destroyed() {}, //生命周期：销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发执行
  // 方法集合
  methods: {
    getTableList(){
      this.$axios({
      url: "",
      methos: "post",
    }).then((Response) => {
      console.log(Response);
    });
    }
  },
};
</script>
<style scoped>
</style>