<template>
  <el-dialog :title="title" :visible="visible" center :show-close="false" width="40%">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="form.roleName" placeholder="请输入角色名称" />
      </el-form-item>
      <el-form-item label="权限字符" prop="permissionStr">
        <el-input
          v-model="form.permissionStr"
          placeholder="请输入权限字符"
          :disabled="type === 'edit'"
        />
      </el-form-item>
      <el-form-item label="角色状态" prop="status">
        <el-switch
          v-model="form.status"
          active-text="启用"
          inactive-text="禁用"
          :active-value="1"
          :inactive-value="0"
        />
      </el-form-item>
      <el-form-item label="菜单权限" prop="permissionMenu">
        <el-checkbox v-model="isExpend" @change="isExpendChange" label="展开/折叠"/>
        <el-checkbox v-model="isCheckedAll" @change="isCheckedAllChange" label="全选/全不选"></el-checkbox>
        <el-tree
          class="tree-border"
          :data="allMenu"
          show-checkbox
          node-key="id"
          :props="defaultProps"
          ref='treeNode'
          @check-change='checkChange'
        >
        </el-tree>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="submitForm('form')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { allMenu } from '@/constant'
export default {
  name: 'AddOrEditRoles',
  props: ['visible', 'type', 'row'],
  computed: {
    title () {
      return this.type === 'edit' ? '编辑角色' : '新增角色'
    }
  },
  data () {
    return {
      form: {
        id: '',
        roleName: '',
        permissionStr: '',
        status: 1,
        permissionMenu: []
      },
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur'
          }
        ],
        permissionStr: [
          { required: true, message: '请输入权限字符', trigger: 'blur' },
          {
            min: 4,
            max: 100,
            message: '长度在 4 到 100 个字符',
            trigger: 'blur'
          }
        ]
      },
      isExpend: false,
      isCheckedAll: false,
      allMenu: allMenu,
      defaultProps: {
        children: 'children',
        label: 'menuName'
      }
    }
  },
  watch: {
    visible: {
      handler () {
        if (this.visible) {
          if (this.type === 'add') {
            console.log('add')
          }
          if (this.type === 'edit') {
            console.log('edit')
            this.form = this.row
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('this.form', this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancel () {
      this.$emit('update:visible', false)
    },
    checkChange () {
      this.form.permissionMenu = [...this.$refs.treeNode.getCheckedKeys(), ...this.$refs.treeNode.getHalfCheckedKeys()]
    },
    isCheckedAllChange () {
      if (this.isCheckedAll) {
        // 全选
        this.$refs.treeNode.setCheckedNodes(this.allMenu)
      } else {
        // 取消选中
        this.$refs.treeNode.setCheckedKeys([])
      }
    },
    isExpendChange () {
      this.changeTreeNodeStatus(this.$refs.treeNode.store.root)
    },
    // 改变节点的状态
    changeTreeNodeStatus () {
      for (let i = 0; i < this.$refs.treeNode.store._getAllNodes().length; i++) {
        this.$refs.treeNode.store._getAllNodes()[i].expanded = this.isExpend
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-border {
  margin-top: 5px;
  border: 1px solid #e5e6e7;
  background: #fff none;
  border-radius: 4px;
}
</style>
