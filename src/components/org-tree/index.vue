<template>
  <div>
    <el-tree
     class="tree-line"
      :data="data"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      @check="currentChecked"
      highlight-current
      :props="defaultProps"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button type="text" size="mini" @click="() => append(node, data)">
            <i class="el-icon-plus"></i>
          </el-button>
          <el-button type="text" size="mini" @click="() => updated(node, data)">   
            <i class="el-icon-edit"></i>
          </el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">
            <i class="el-icon-delete"></i>
          </el-button>
        </span>
      </span>
    </el-tree>

    <el-dialog :title="title" :visible.sync="dialogVisible" width="46%">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  //import引入组件才能使用
  components: {},
  props: {
    treeData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      title: '',
      ruleForm: {},
      dialogVisible: false,
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      rules: {
        pass: [
          {
            required: true,
            message: "请选择业务部门",
            trigger: "blur",
          },
        ],
        checkPass: [
          {
            required: true,
            message: "请选择业务部门",
            trigger: "blur",
          },
        ],
        age: [{ 
          required: true, 
          message: "请选择业务部门",
          trigger: "blur" 
        }],
      },
    };
  },
  // 计算属性
  computed: {},
  // 监听data中的数据变化
  watch: {},
  // 方法集合
  // 生命周期，创建完成时（可以访问当前this实例）
  created() {},
  // 生命周期：挂载完成时（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期：创建之前
  beforeMount() {}, //生命周期：挂载之前
  beforeUpdate() {}, //生命周期：更新之前
  updated() {}, //生命周期：更新之后
  beforeDestroy() {}, //生命周期：销毁之前
  destroyed() {}, //生命周期：销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发执行
  methods: {
    append(node, data) {
      console.log("node数据",node)
      console.log("data数据",data)
      this.title='数据添加'
      this.dialogVisible = true;
    },
    updated(){
      this.title='数据修改'
      this.dialogVisible = true;
    },
    currentChecked(nodeObj, SelectedObj) {
      this.parentValue = SelectedObj.checkedNodes;
      console.log("选择框的数据1", SelectedObj.checkedNodes[0].id);
      //this.paramList.deptIds = SelectedObj.checkedKeys.toString()
       console.log("000000",SelectedObj.checkedNodes[0])
       console.log("111111",this.$refs.tree.getCheckedNodes())
      this.generalFormdeclareDept = SelectedObj.checkedNodes[0];
      this.generalFormworkUnit = SelectedObj.checkedNodes[0].name;
      this.$emit("child-click", this.parentValue);
      console.log("选择框的数据2", this.$refs.tree.setCheckedNodes); // 这是选中的节点的key数组
    },
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes());
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: "二级 2-1",
        },
        {
          id: 9,
          label: "三级 1-1-1",
        },
      ]);
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },
  },
};
</script>
<style lang="scss">
    .tree-line {
        .el-tree-node {
            position: relative;
            padding-left: 12px; // 缩进量
        }
        .el-tree-node__children {
            padding-left: 12px; // 缩进量
        }

        // 竖线
        .el-tree-node::before {
            content: '';
            height: 100%;
            width: 1px;
            position: absolute;
            left: -3px;
            top: -26px;
            border-width: 1px;
            border-left: 1px dashed #52627c;
        }
        // 当前层最后一个节点的竖线高度固定
        .el-tree-node:last-child::before {
            height: 38px; // 可以自己调节到合适数值
        }

        // 横线
        .el-tree-node::after {
            content: '';
            width: 24px;
            height: 20px;
            position: absolute;
            left: -3px;
            top: 12px;
            border-width: 1px;
            border-top: 1px dashed #52627c;
        }

        // 去掉最顶层的虚线，放最下面样式才不会被上面的覆盖了
        & > .el-tree-node::after {
            border-top: none;
        }
        & > .el-tree-node::before {
            border-left: none;
        }

        // 展开关闭的icon
        .el-tree-node__expand-icon {
            font-size: 16px;
            // 叶子节点（无子节点）
            &.is-leaf {
                color: transparent;
                // display: none; // 也可以去掉
            }
        }
    }
    .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
