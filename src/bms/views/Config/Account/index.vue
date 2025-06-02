<template>
  <div class="main">
    <!-- 查询条件 -->
    <el-form :model="formInline" class="main-form">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-form-item>
            <el-input
              v-model="formInline.account"
              placeholder="请输入用户账号"
            />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="onSubmit">
              查询
            </el-button>
            <el-button icon="el-icon-refresh" @click="onSubmit">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- 按钮 -->
    <div class="main-topBtn">
      <el-button type="primary" icon="el-icon-plus" @click="onSubmit" plain size="small">新增</el-button>
    </div>

    <!-- 表格数据 -->
    <el-table :data="tableData" border size="small">
      <el-table-column align="center" label="序号" width="100" />
      <el-table-column align="center" prop="account" label="账号" width="250" />
      <el-table-column align="center" prop="status" label="状态" width="120">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.status === 1">启用</el-tag>
          <el-tag type="danger" v-if="scope.row.status === 0">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="createTime"
        label="创建时间"
        width="200"
      />
      <el-table-column align="center" label="操作" min-width="200">
        <template slot-scope="scope">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button size="small">分配角色</el-button>
          <el-button v-if="scope.row.status === 0" type="success" size="small"
            >启用</el-button
          >
          <el-button v-if="scope.row.status === 1" type="warning" size="small"
            >禁用</el-button
          >
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px; text-align: center">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="20"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      currentPage: 1,
      tableData: [
        {
          account: 15526190820,
          status: 0,
          createTime: '2016-05-02'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleClick (row) {
      console.log(row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .main-topBtn {
    margin: 10px 0px;
  }
}
</style>
