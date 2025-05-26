<template>
  <el-dropdown placement='bottom'>
    <span class="UserInfo">
      <i class="el-icon-user-solid"></i>
      <p class="UserInfo-name">管理员</p>
      <i class="el-icon-caret-bottom"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>退出登陆</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown {
  height: 100%;
  .UserInfo {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .UserInfo-name {
      margin: 0 10px;
    }

    .el-icon-user-solid:before {
      content: "\e7a5";
      color: #096dd9;
      margin-left: 30px;
    }
    .el-icon-caret-bottom {
      margin-right: 30px;
    }
  }
}
.el-dropdown:hover {
  background: rgba(221,221,221,0.2);
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;
}
</style>
