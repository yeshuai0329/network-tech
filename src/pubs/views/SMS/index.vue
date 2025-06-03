<template>
  <div class="main">
    <el-table :data="tableData" border style="width:100%">
      <el-table-column fixed prop="phone" label="手机编号" width="300"></el-table-column>
      <el-table-column prop="from" label="来信号码" width="300"></el-table-column>
      <el-table-column prop="sms" label="短信内容" min-width="300"></el-table-column>
      <el-table-column prop="time" label="接收时间" width="300"></el-table-column>
    </el-table>

    <div style="margin-top: 20px; text-align: center;">
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
import { getSmsListByRole } from "@/pubs/apis/SMS.js";
export default {
  name: "SMS",

  data() {
    return {
      tableData: [],
      code: "",
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      }
    };
  },
  mounted() {
    this.code = this.$route.query.code || null;
    if (this.code) {
      this.getTableData();
    }
  },
  methods: {
    getTableData() {
      getSmsListByRole({
        roleCode: this.code,
        ...this.pageInfo
      }).then(res => {
        if (res.data.code === 200) {
          this.pageInfo.pageNum = Number(res.data.data.pageNum || 1);
          this.pageInfo.pageSize = Number(res.data.data.pageSize || 10);
          this.pageInfo.total = Number(res.data.data.total || 0);
          this.tableData = res.data.data.records;
        }
      });
    },

    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      this.pageInfo.pageNum = val;
      this.getTableData();
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  text-align: center;
  .main {
    width:90%;
    padding: 40px 100px;
    height: 100%;
  }
}
</style>
