<template>
  <div class="home">
  <Lform :itemData="form_item" :field="form_field" :button="form_button" :beforeSubmit="submitForm"></Lform>
  </div>
</template>

<script>
// @ is an alias to /src

import Lform from '@/components/form/index.vue'
import { phone} from '@/utils/validator.js'
export default {
  name: 'HomeView',
  components: {
    // Lbutton,
    // Ltable,
    //Tree
    Lform
  },
  data(){
    return{
      form_item: [
        {
          type: 'input',
          label: '用户名',
          placeholder: '请输入用户名',
          prop: 'username',
          required: true,
          massage: '请输入用户名',
           rules:[
           { message: '请输入用户名', trigger: 'blur' },
           { min: 3, max: 5, message: '请输入长度在 3 到 5 个字符', trigger: 'blur' }
           ]
        },
        {
          type: 'input',
          label: '手机号',
          placeholder: '请输入用手机号',
          prop: 'phone',
          required: true,
          massage: '请输入用手机号',
          validate: phone,
          // validator: (rule, value, callback) => {
          //   let rulePhon = /^1[3|4|5|7|8][0-9]\d{8}$/
          //     if (value == rulePhon) {
          //       callback()
          //     } else {
          //       callback(new Error('请输入正确的手机号'))
          //     }
          //   },
           rules:[
           { message: '请输入用户名', trigger: 'blur' },
           { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
           ]
        },
        // {
        //   type:  'select',
        //   label: '活动名称',
        //   prop: 'activity',
        //   placeholder: '请选择活动',
        //   required: true,
        //   massage: '请选择活动',
        //   rules:[
        //   { message: '请选择活动', trigger: 'change' }
        //   ]
        // }
      ],
      // 传给form的数据
     form_field:{
       username:'',
       activity:''
     },
    // 传统验证方法
    //  form_rules:{
    //   username: [ 
    //         { required: true, message: '请输入用户名', trigger: 'blur' },
    //         { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    //       ],
    //       activity: [
    //       { required: true, message: '请选择活动', trigger: 'change' }
    //       ]
    //  }
    form_button: [
      {label:'提交', key: 'submit',type: 'primary'},
      {label:'下一步', key: 'cancel',type: 'primary',callback: () => this.next()},
      {label:'重置', key: 'resetForm',type: 'primary'}
    //   submit: {
    //     type: 'primary',
    //     loading: false,
    //     nativeType: 'submit',
    //     value: '提交'
    // 
    ]
    }
  },
  methods:{
    next(){
     console.log("下一步")
    },
    submitForm(){
      return new Promise((resolve, reject) => {
        setTimeout(() =>{
          resolve()
        },2000)
        // this.$axios.post('/api/test/test',{
        //   username:this.form_field.username,
        //   activity:this.form_field.activity
        // }).then(res=>{
        //   resolve(res)
        // }).catch(err=>{
        //   reject(err)
        // })
      })
    }
  }
}
</script>
