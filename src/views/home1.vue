<template>
    <div class="home">
     <Lbutton minwidth="200px" block prefix="03sousuo" >默认按钮</Lbutton>
     <Lbutton type="primary" prefix="c-lock2">默认按钮</Lbutton>
     <Lbutton type="primary" suffix="03sousuo" border round disabled>蓝色按钮</Lbutton>
     <Lbutton type="success"  >成功按钮</Lbutton>
     <Lbutton type="success" size="mini" prefix="c-lock2">成功按钮</Lbutton>
     <Lbutton type="wranin"  :before-change="asyncFunction"> 警告</Lbutton>
     <Lbutton  :loading="flag"  @click="handlerChange" type="primary"  >块级作用域</Lbutton>
     <div style="margin-top: 20px;"> 
       <Ltable :checkbox="true" :column="column" :column1="column1" index url="/api/name" :tableData="tableData"></Ltable>
     </div>
     <!-- <div style="margin-top: 20px;width: 320px;"> 
       <Tree ref="treeComponentRef"  @child-click="getTreeData"></Tree>
     </div> -->
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import Lbutton from '@/components/button/index.vue'
  import Ltable from '@/components/table/index.vue'
  import Tree from '@/components/org-tree/index.vue'
  export default {
    name: 'HomeView',
    components: {
      Lbutton,
      Ltable,
      //Tree
    },
    data(){
      return{
       flag: false,
       treeData: '',
       column: [
        {
          type:'function',
          label: '日期',
          prop: 'date', 
           width: 200,
           callback: (data)=>{
            return `<a href=http://www.baidu.com>${data.name}</a>`
           } 
        },
        {label: '名称',prop: 'name' },
        {label: '地址',prop: 'address'},
        {label: '性别',prop: 'sex'},
       ],
       tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
      }
    },
    methods:{
      getTreeData(value){
        console.log("测试数据打印",value)
        //这个方法用于获取子组件里面的数据
        //console.log("获取子组件的数据打印",this.$refs.treeComponentRef.data)
      },
      // 传给子组件的方法
      asyncFunction(){
        return new Promise((resolve, reject)=>{
          setTimeout(() => {
          resolve()
          alert('子组件调用父组件方法')
          console.log('33333')
          //this.flag = false
        }, 3000);
         
        })
      },
      handlerChange(){
        this.flag = true
        setTimeout(() => {
          alert('子组件调用父组件方法')
          console.log('33333')
          this.flag = false
        }, 3000);
      }
    }
  }
  </script>
  