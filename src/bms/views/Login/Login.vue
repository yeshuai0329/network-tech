<template>
  <div class="Login">
    <div class="Login-content">
      <h1 class="Login-content-title">梦腾网络科技</h1>
      <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"  class="Login-content-form" @keyup.enter.native="submitForm('ruleForm')">
        <el-form-item  prop="username">
          <el-input  placeholder="请输入账号" v-model="ruleForm.username"
          @input="ruleForm.username=ruleForm.username.replace(/[^0-9]/g,'')"
          maxlength="11"
          />
        </el-form-item>
        <el-form-item  prop="password">
          <el-input placeholder="请输入密码" type="password" v-model="ruleForm.password" show-password/>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" class="Login-content-submitBtn" type="primary" @click="submitForm('ruleForm')">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginApi } from '@/bms/apis/login.js'

export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      loading: false,
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          loginApi(this.ruleForm).then((res) => {
            if (res.data.code === 200) {
              localStorage.setItem('token', res.data.data.token)
              this.$router.push({
                name: 'Home'
              })
              this.$message.success('登录成功!')
            } else {
              this.$message.error('登录失败!')
            }
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .Login {
    background: url('../../assets/images/loginBg.jpg');
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Login-content {
      width: 375px;
      background: #FFF;
      border-radius: 10px;
      box-shadow: rgba(23, 25, 29, .2) 0px 16px 16px -16px, rgb(23 25 29/3%) 0px 14px 20px 0px, rgb(23 25 29/4%) 0px 0px 0px 1px;
      ;
      overflow: hidden;
      box-sizing: border-box;
      padding: 40px 30px;

      .Login-content-title {
        text-align: center;
        font-weight: 900;
        font-size: 28px;
        margin-bottom: 40px;
      }

      .Login-content-form{
        .Login-content-submitBtn{
          width: 100%;
        }
      }

    }
  }
</style>
