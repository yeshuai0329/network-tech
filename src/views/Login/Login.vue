<template>
  <div class="Login">
    <div class="Login-content">
      <h1 class="Login-content-title">梦腾网络科技</h1>
      <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"  class="Login-content-form">
        <el-form-item  prop="account">
          <el-input placeholder="请输入账号" v-model="ruleForm.account" />
        </el-form-item>
        <el-form-item  prop="password">
          <el-input placeholder="请输入密码" type="password" v-model="ruleForm.password" />
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" class="Login-content-submitBtn" type="primary" @click="submitForm('ruleForm')">登 陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { loginApi } from '@/apis/login.js'
  export default {
    data() {
      return {
        ruleForm: {
          account: '',
          password: '',
        },
        loading: false,
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true;
            // loginApi(this.ruleForm).then((res) => {
            //   console.log('res',res)
            //   this.loading = false;
            // }).catch(() => {
            //   this.loading = false;
            // })
            localStorage.setItem('token','1111111111111')
            setTimeout(() => {
              this.$router.push({
                name:"DefaultLayout"
              })
              this.loading = false;
            }, 1000);
          }
        });
      },
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