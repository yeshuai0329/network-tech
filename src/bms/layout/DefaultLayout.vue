<template>
  <div class="DefaultLayout">
    <template v-if="$route.meta.empty">
      <router-view></router-view>
    </template>
    <template v-else>
      <div class="DefaultLayout-Aside">
        <Aside />
      </div>
      <div class="DefaultLayout-right">
        <div class="DefaultLayout-Header">
          <Header />
        </div>
        <div class="DefaultLayout-main">
          <router-view></router-view>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Aside from "@/bms/layout/Aside/index.vue";
import Header from "@/bms/layout/Header/index.vue";
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

  .DefaultLayout-Aside {
    flex-shrink: 0;
    height: 100%;
    overflow: hidden;
    background: #001529;
  }

  .DefaultLayout-right {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .DefaultLayout-header {
      width: 100%;
      height: 48px;
      flex-shrink: 0;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
    }

    .DefaultLayout-main {
      flex: 1;
      overflow-y: scroll;
      padding: 40px 30px;
      box-sizing: border-box;
    }

    .DefaultLayout-main::-webkit-scrollbar {
      display: none;
      /* 隐藏滚动条 */
    }

    .DefaultLayout-main {
      -ms-overflow-style: none;
      /* IE 和 Edge */
      scrollbar-width: none;
      /* Firefox */
    }
  }
}
</style>
