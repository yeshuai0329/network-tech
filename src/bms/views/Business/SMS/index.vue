<template>
  <div class="main">
    <el-form :model="formInline" @keyup.enter.native="searchForm">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-form-item>
            <el-input
              v-model="formInline.phone"
              placeholder="手机编号"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item>
            <el-input
              v-model="formInline.from"
              placeholder="来信号码"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" @click="searchForm">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-table :data="tableData" border v-loading="loading">
      <el-table-column
        fixed
        type="index"
        :index="tableIndex"
        align="center"
        label="序号"
        width="60"
      ></el-table-column>
      <el-table-column
        fixed
        prop="phone"
        label="手机编号"
        align="center"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="from"
        label="来信号码"
        align="center"
        width="200"
      ></el-table-column>
      <el-table-column
        prop="sms"
        label="短信内容"
        align="center"
        min-width="120"
      ></el-table-column>
      <el-table-column
        prop="time"
        label="接收时间"
        align="center"
        width="200"
      ></el-table-column>
    </el-table>

    <div style="margin-top: 20px; text-align: center">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageInfo.pageNum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getSMSApi } from '@/bms/apis/SMS.js'
export default {
  name: 'SMS',

  data () {
    return {
      formInline: {
        phone: '',
        from: ''
      },
      tableData: [],
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      loading: false
    }
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    tableIndex (index) {
      return (this.pageInfo.pageNum - 1) * this.pageInfo.pageSize + 1 + index
    },
    getTableData () {
      this.loading = true
      getSMSApi({
        ...this.formInline,
        ...this.pageInfo
      })
        .then((res) => {
          if (res.data.code === 200) {
            this.pageInfo.total = Number(res.data.data.total || 0)
            this.tableData = res.data.data.records
            console.log('res.data.code', res)
          } else {
            this.$message.error('登录失败!')
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false
        })
    },
    searchForm () {
      this.getTableData()
    },
    handleSizeChange (val) {
      this.pageInfo.pageSize = val
      this.getTableData()
    },
    handleCurrentChange (val) {
      this.pageInfo.pageNum = val
      this.getTableData()
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
</style>
