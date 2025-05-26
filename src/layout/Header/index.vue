<template>
  <div class="Header">
    <div class="Header-logo">
      <img :src="logo" alt />
    </div>
    <div class="Header-Breadcrumb"></div>
    <div class="Header-UserInfo">
      <UserInfo />
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.jpg";
import UserInfo from "@/layout/Header/UserInfo/index.vue";
export default {
  components: {
    UserInfo
  },
  data() {
    return {
      logo: Logo
    };
  }
};
</script>

<style lang="scss" scoped>
.Header {
  width: 100%;
  height: 100%;
  display: flex;
  .Header-logo {
    width: 240px;
    height: 48px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
   .Header-Breadcrumb {
    width: 240px;
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