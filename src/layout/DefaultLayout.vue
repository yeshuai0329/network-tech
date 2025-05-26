<template>
  <div class="DefaultLayout">
    <div class="DefaultLayout-header">
      <Header/>
    </div>
    <div class="DefaultLayout-container">
      <div class="DefaultLayout-container-aside">
        <Aside />
      </div>
      <div class="DefaultLayout-container-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "@/layout/Aside/index.vue";
import Header from '@/layout/Header/index.vue'
export default {
  name: "DefaultLayout",
  components: { Aside, Header },
};
</script>


<style lang="scss" scoped>
.DefaultLayout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .DefaultLayout-header {
    width: 100%;
    height: 48px;
    flex-shrink: 0;
    overflow: hidden;
  }

  .DefaultLayout-container {
    width: 100%;
    flex: 1;
    display: flex;
    overflow: hidden;
    .DefaultLayout-container-aside {
      width: 240px;
      height: 100%;
      flex-shrink: 0;
      overflow-y: scroll;
      background-color: rgb(0, 21, 41);
    }
    .DefaultLayout-container-aside::-webkit-scrollbar {
      display: none; /* 隐藏滚动条 */
    }

    .DefaultLayout-container-aside {
      -ms-overflow-style: none; /* IE 和 Edge */
      scrollbar-width: none; /* Firefox */
    }
    .DefaultLayout-container-main {
      background: plum;
      flex: 1;
      height: 100%;
    }
  }
}
</style>
