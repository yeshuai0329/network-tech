<template functional>
  <el-submenu :index="props.mode.id" :key="props.mode.id">
    <template slot="title">
      <i :class="props.mode.menuIcon"></i>
      <span>{{ props.mode.menuName}}</span>
    </template>
    <template v-for="menu in props.mode.children">
      <MenuTree
        v-if="menu.children && menu.children.length"
        :key="menu.id"
        :mode="menu"
        :click-handler="props.clickHandler"
      />

      <el-menu-item :index="menu.id" :key="menu.id" v-else @click="props.clickHandler(menu)">
        <i :class="menu.menuIcon"></i>
        <span slot="title">{{menu.menuName}}</span>
      </el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: "MenuTree",
  props: ["mode", "clickHandler"],
  mounted() {
    console.log("mode", this.mode);
  },
  methods: {
    clickHandler(menuInfo) {
      this.$router.push({
        name: menuInfo.pathName
      });
    }
  }
};
</script>

<style>
</style>