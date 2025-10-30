<template>
  <el-dialog
    :title="title"
    :visible="visible"
    center
    :show-close="false"
    width="40%"
  >
    <el-form ref="form" :model="form" label-width="160px">
      <el-form-item label="手机编号：" prop="phoneList">
        <YsInput
          v-model="form.phoneList"
          placeholder="请输入手机编号"
          clearable
          :hasUpload='true'
        />
      </el-form-item>
      <el-form-item label="来信号码：" prop="fromList">
        <YsInput
          v-model="form.fromList"
          placeholder="请输入来信号码"
          clearable
        />
      </el-form-item>
      <el-form-item label="关键字(包含)：" prop="smsContainList">
        <YsInput
          v-model="form.smsContainList"
          placeholder="请输入关键字(包含)"
          clearable
        />
      </el-form-item>
      <el-form-item label="关键字(排除)：" prop="smsNotContainList">
        <YsInput
          v-model="form.smsNotContainList"
          placeholder="请输入关键字(排除)"
          clearable
        />
      </el-form-item>
      <el-form-item label="规则状态：" prop="status">
        <el-switch
          v-model="form.status"
          active-text="启用"
          inactive-text="禁用"
          :active-value="'1'"
          :inactive-value="'0'"
        />
      </el-form-item>
       <el-form-item label="距当前时间：" prop="fromNowOnMap">
        <el-input-number v-model="form.fromNowOnMap" :min="0" :max="2400"   :precision="1" :controls="false"/>小时
      </el-form-item>
       <el-form-item label="备注信息：" prop="remark">
        <el-input
          type="textarea"
          v-model="form.remark"
          :autosize="{ minRows: 3, maxRows: 3 }"
        />
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" :loading="loading" @click="submitForm('form')"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import YsInput from '@/bms/views/Business/SMSDataRules/YsInput.vue'
import { addSmsDataRulesApi, editSmsDataRulesApi } from '@/bms/apis/SMS.js'
export default {
  name: 'SmsDataRulesDetail',
  props: ['visible', 'type', 'row', 'getTableData'],

  components: {
    YsInput
  },
  computed: {
    title () {
      return this.type === 'edit' ? '编辑短信数据规则' : '新增短信数据规则'
    }
  },
  data () {
    return {
      form: {
        id: '',
        fromList: [],
        phoneList: [],
        smsContainList: [],
        smsNotContainList: [],
        status: '1',
        remark: '',
        fromNowOnMap: 0,
        fromNowOn: 0
      },
      loading: false
    }
  },
  watch: {
    visible: {
      handler () {
        if (this.visible) {
          if (this.type === 'edit') {
            this.form = { ...this.form, ...this.row, fromNowOnMap: this.row.fromNowOn / (60 * 60 * 1000) }
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    submitForm (formName) {
      if (this.type === 'add') {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            addSmsDataRulesApi({
              ...this.form,
              fromNowOn: (1000 * 60 * 60) * this.form.fromNowOnMap || null
            })
              .then((res) => {
                if (res.data.code === 200) {
                  this.$message.success('添加成功!')
                } else {
                  this.$message.error('添加失败!')
                }
              })
              .finally(() => {
                this.loading = false
                this.cancel()
              })
              .catch(() => {})
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
      if (this.type === 'edit') {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true
            editSmsDataRulesApi({
              ...this.form,
              fromNowOn: (1000 * 60 * 60) * this.form.fromNowOnMap || null
            })
              .then((res) => {
                if (res.data.code === 200) {
                  this.$message.success('修改成功!')
                } else {
                  this.$message.error('修改失败!')
                }
              })
              .finally(() => {
                this.loading = false
                this.cancel()
              })
              .catch(() => {})
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    cancel () {
      this.$emit('update:visible', false)
      this.form = {
        id: '',
        fromList: [],
        phoneList: [],
        smsContainList: [],
        smsNotContainList: [],
        status: '1'
      }
      this.getTableData()
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
