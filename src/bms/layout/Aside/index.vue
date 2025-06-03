<template>
  <div class="Aside">
    <!-- <div class="Aside-logo">
      <img :src="logo" alt />
    </div> -->
    <div class="Aside-Menu">
      <el-menu
        default-active="2"
        background-color="rgb(0, 21, 41)"
        text-color="#FFF"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <template v-for="menuInfo in allMenu">
          <MenuTree
            v-if="menuInfo.children && menuInfo.children.length"
            :key="menuInfo.id"
            :mode="menuInfo"
            :click-handler="clickHandler"
          />

          <el-menu-item
            :index="`${menuInfo.id}`"
            :key="menuInfo.id"
            v-else
            @click="clickHandler(menuInfo)"
          >
            <i :class="menuInfo.menuIcon"></i>
            <span slot="title">{{ menuInfo.menuName }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import MenuTree from '@/bms/layout/Aside/MenuTree.vue'
import Logo from '@/assets/images/logo.jpg'
import { mapState } from 'vuex'
import { allMenu } from '@/bms/constant'
export default {
  components: {
    MenuTree
  },
  data () {
    return {
      allMenu: allMenu,
      logo: Logo
    }
  },
  computed: {
    ...mapState('menu', ['isCollapse'])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    clickHandler (menuInfo) {
      console.log('menuInfo', menuInfo)
      this.$router.push({
        name: menuInfo.pathName
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Aside {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .Aside-logo {
    width: 100%;
    height: 48px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .Aside-Menu {
    width: 100%;
    flex: 1;
    overflow-y: scroll;

    .Aside-Menu::-webkit-scrollbar {
      display: none; /* 隐藏滚动条 */
    }

    .Aside-Menu {
      -ms-overflow-style: none; /* IE 和 Edge */
      scrollbar-width: none; /* Firefox */
    }

    .el-menu {
      border: 0px !important;
      ::v-deep .el-menu-item:hover {
        background: #052f58 !important;
      }
      ::v-deep .el-submenu__title:hover {
        background: #052f58 !important;
      }
      .is-active {
        background: #052f58 !important;
      }
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 600px;
    }
  }
}
</style>
