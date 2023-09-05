<template>
  <el-form ref="ruleForm" :rules="rules"  :model="field" label-width="80px">
    <template v-for="item in form_item">
      <el-form-item 
        v-if="item.type === 'input'" 
        :key="item.id" :label="item.label" 
        :prop="item.prop"
        :rules="item.rules"
        >
        <el-input v-model="field[item.prop]"></el-input>
      </el-form-item>
      <el-form-item 
         v-if="item.type === 'select'" 
         :key="item.id"
         :label="item.label"
         :rules="item.rules"
         :prop="item.prop">
        <el-select v-model="form.region" placeholder="请选择活动区域"></el-select>
      </el-form-item>
      <el-form-item v-if="item.type === 'date'" :key="item.id" :label="item.label" :prop="item.prop">
      </el-form-item>
      <el-form-item v-if="item.type === 'textarea'" :key="item.id" :label="item.label" :prop="item.prop">
      </el-form-item>
    </template>
    <el-form-item>
    <el-button :loading="item.loading" :type="item.type"  v-for="item in button" :key="item.key" @click="handleButton(item)">{{ item.label  }}</el-button>
  </el-form-item>
  </el-form>
</template>

<script>
import rules from './rules.js'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Lform",
  //import引入组件才能使用
  components: {},
  props: {
    itemData: {
      type: Array,
      default: () => [],
    },
    field: {
      type: Object,
      default: () => { },
    },
    rules: {
      type: Object,
      default: () => { },
    },
    button: {
      type: Array,
      default: ()=>[]
    },
    beforeSubmit:{
      type: Function,
      default: ()=>{}
    } 
  },
  data() {
    return {
      form_item: '',
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 生命周期，创建完成时（可以访问当前this实例）
  created() { },
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted() { },
  beforeCreate() { }, //生命周期：创建之前
  beforeMount() {
    this.form_item = rules(this.itemData)
   }, //生命周期：挂载之前
  beforeUpdate() { }, //生命周期：更新之前
  updated() { }, //生命周期：更新之后
  beforeDestroy() { }, //生命周期：销毁之前
  destroyed() { }, //生命周期：销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发执行
  // 方法集合
  methods: {
    handleButton(data){
       if(data.key == 'submit') { 
        this.onSubmit(data)
        return false
      }
       if(data.key == 'cancel') { 
        this.onCancel(data)
      }
      //  if(data.key == 'resetForm') { 
      //   this.onReset()
      // }
       data.callback && data.callback(data)
    },
    // onSubmit(data) {
    //   this.$refs.ruleForm.validate((valid) => {
    //       if (valid) {
    //         this.$set(data, 'loading', true)
    //         alert('submit!');
    //       } else {
    //         //data.loading = false
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    // },
    onSubmit(data) {
    this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$set(data, 'loading', true)
           if(typeof this.beforeSubmit === 'function'){
            //this.$set(data, 'loading', false)
            this.beforeSubmit().then(Response =>{
              this.$set(data, 'loading', false)
            }).catch(() =>{
              this.$set(data, 'loading', false)
            })
           }
        } else {
          //data.loading = false
          console.log('error submit!!');
          return false;
        }
      });
  },
    onCancel(){
      alert("取消")
    },
    onReset(){
      this.$refs.ruleForm.resetFields();
      // alert("重置")
    },
  },
};
</script>
<style scoped></style>