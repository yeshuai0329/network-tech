<template>
  <div class="main">
    <el-form :model="formInline" ref="formInline" @keyup.enter.native="searchForm">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-form-item>
            <el-input v-model="formInline.code" placeholder="请输入短信数据规则编号" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="searchForm">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- 按钮 -->
    <div class="main-topBtn">
      <el-button type="primary" icon="el-icon-plus" @click="AddSmsDataRules" plain size="small">新增</el-button>
    </div>

    <el-table class="main-table" style="width: 100%" :data="tableData" border>
      <el-table-column fixed prop="code" label="短信数据规则编号" width="200"></el-table-column>
      <el-table-column prop="phoneList" label="手机编号" min-width="300">
        <template slot-scope="scope">
          <el-tag
            style="margin-right:10px"
            v-for="(item,index) in scope.row.phoneList"
            :key="index"
            effect="plain"
            type="info"
          >{{ item }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="fromList" label="来信号码" min-width="300">
        <template slot-scope="scope">
          <el-tag
            style="margin-right:10px"
            v-for="(item,index) in scope.row.fromList"
            :key="index"
            effect="plain"
            type="info"
          >{{ item }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="smsContainList" label="关键字（包含）" min-width="300">
        <template slot-scope="scope">
          <el-tag
            style="margin-right:10px"
            v-for="(item,index) in scope.row.smsContainList"
            :key="index"
            effect="plain"
            type="info"
          >{{ item }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="smsNotContainList" label="关键字（排除）" min-width="300">
        <template slot-scope="scope">
          <el-tag
            style="margin-right:10px"
            v-for="(item,index) in scope.row.smsNotContainList"
            :key="index"
            effect="plain"
            type="info"
          >{{ item }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="status" label="规则状态" width="200">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.status === 1">启用</el-tag>
          <el-tag type="danger" v-if="scope.row.status === 0">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="center" label="操作" min-width="300">
        <template slot-scope="scope">
          <el-button size="small" @click="editSmsDataRules(scope.row)">编辑</el-button>
          <el-button type="primary" size="small" @click="copyLink(scope.row.code)">预览</el-button>
          <el-button v-if="scope.row.status === 0" type="success" size="small">启用</el-button>
          <el-button v-if="scope.row.status === 1" type="warning" size="small">禁用</el-button>
          <el-button type="danger" size="small" @click="delSmsDataRules(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
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

    <SmsDataRulesDetail
      :visible.sync="visibleSmsDataRule"
      :type="SmsDataRulesDetailType"
      :row="row"
      :getTableData="getTableData"
    />
  </div>
</template>

<script>
import { getSmsDataRulesApi, delSmsDataRulesApi } from "@/bms/apis/SMS.js";
import SmsDataRulesDetail from "@/bms/views/Business/SMSDataRules/SmsDataRulesDetail.vue";
export default {
  name: "SMSDataRules",
  components: {
    SmsDataRulesDetail
  },
  data() {
    return {
      formInline: {
        code: ""
      },
      tableData: [],
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      visibleSmsDataRule: false,
      SmsDataRulesDetailType: "add",
      row: {}
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      getSmsDataRulesApi({
        ...this.formInline,
        ...this.pageInfo
      })
        .then(res => {
          if (res.data.code === 200) {
            this.pageInfo.pageNum = Number(res.data.data.pageNum || 1);
            this.pageInfo.pageSize = Number(res.data.data.pageSize || 10);
            this.pageInfo.total = Number(res.data.data.total || 0);
            this.tableData = res.data.data.records;
          } else {
            this.$message.error("内部服务异常!");
          }
        })
        .catch(() => {});
    },
    AddSmsDataRules() {
      this.SmsDataRulesDetailType = "add";
      this.visibleSmsDataRule = true;
      this.row = {}
    },
    editSmsDataRules(row) {
      this.SmsDataRulesDetailType = "edit";
      this.visibleSmsDataRule = true;
      this.row = row;
    },
    delSmsDataRules(id) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        delSmsDataRulesApi({
          id: id
        })
          .then(res => {
            if (res.data.code === 200) {
              this.$message.success("删除成功!");
            } else {
              this.$message.error("删除失败!");
            }
          })
          .finally(() => {
            this.getTableData();
          });
      });
    },
    copyLink(code) {
      this.$copyText(`${location.origin}/pubs/sms?code=${code}`).then(
        e => {
          window.open(`${location.origin}/pubs/sms?code=${code}`,"_blank")
          this.$message.success("复制成功！");
        },
        e => {
          this.$message.error("复制失败！");
        }
      );
    },
    searchForm() {
      this.getTableData();
    },
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      this.pageInfo.pageSize = val;
      this.getTableData();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pageInfo.pageNum = val;
      this.getTableData();
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
</style>
