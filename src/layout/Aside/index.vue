<template>
  <el-menu
    default-active="2"
    background-color="rgb(0, 21, 41)"
    text-color="#FFF"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="menuInfo in rightMenu">
      <MenuTree
        v-if="menuInfo.children && menuInfo.children.length"
        :key="menuInfo.id"
        :mode="menuInfo"
        :click-handler="clickHandler"
      />

      <el-menu-item :index="menuInfo.id" :key="menuInfo.id" v-else @click="clickHandler(menuInfo)">
        <i :class="menuInfo.menuIcon"></i>
        <span slot="title">{{menuInfo.menuName}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import MenuTree from "@/layout/Aside/MenuTree.vue";
export default {
  components: {
    MenuTree
  },
  data() {
    return {
      rightMenu: [
        {
          id: '1',
          pathName: "Home",
          menuName: "首页",
          menuIcon: "el-icon-s-home"
        },
        {
          id: '2',
          pathName: "Business",
          menuName: "业务管理",
          menuIcon: "el-icon-s-platform",
          children: [
            {
              id: '3',
              pathName: "SMS",
              menuName: "短信管理",
              menuIcon: "el-icon-chat-line-round"
            }
          ]
        },
        {
          id: '4',
          pathName: "Config",
          menuName: "系统设置",
          menuIcon: "el-icon-s-tools",
          children: [
            {
              id: '5',
              pathName: "Account",
              menuName: "账号管理",
              menuIcon: "el-icon-user-solid"
            },
            {
              id: '6',
              pathName: "UserRoles",
              menuName: "角色管理",
              menuIcon: "el-icon-user"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickHandler(menuInfo){
      console.log('menuInfo',menuInfo)
      this.$router.push({
        name:menuInfo.pathName
      })
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>