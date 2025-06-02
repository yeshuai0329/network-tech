<template>
  <div class="Header">
    <div class="Header-toggleBtn">
      <i :class="isCollapse? 'el-icon-s-fold': 'el-icon-s-unfold'" @click="toggleBtn"></i>
    </div>
    <div class="Header-Breadcrumb"></div>
    <div class="Header-UserInfo">
      <UserInfo />
    </div>
  </div>
</template>

<script>
import UserInfo from '@/bms/layout/Header/UserInfo/index.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    UserInfo
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('menu', ['isCollapse'])
  },
  methods: {
    ...mapActions('menu', ['isCollapseAct']),
    toggleBtn () {
      this.isCollapseAct(!this.isCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
.Header {
  width: 100%;
  height: 100%;
  display: flex;
  box-shadow: 1px 1px 4px #f0f1f2;

  .Header-toggleBtn {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-icon-s-fold,.el-icon-s-unfold {
      font-size: 24px;
    }

  }

  .Header-toggleBtn:hover {
    cursor: pointer;
  }

  .Header-Breadcrumb {
    height: 48px;
    flex: 1;
  }

  .Header-UserInfo {
    width: 240px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
