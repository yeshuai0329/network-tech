<template>
  <div class="YsInput">
    <div class="YsInput-input">
      <el-input  v-model="val" class="YsInput-input-content" :placeholder="placeholder" :clearable="clearable"/>
      <el-button class="YsInput-input-btn" type="primary" @click="add">添 加</el-button>
    </div>
    <div class="YsInput-showList">
      <el-tag style="margin-right:10px" v-for="(item,index) in valList" :key="index" closable @close="close(index)" effect="plain" type='info'>{{ item  }}</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'placeholder', 'clearable'],
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      val: '',
      valList: []
    }
  },
  watch: {
    value: {
      handler () {
        console.log('this.value', this.value)
        this.valList = this.value
      },
      immediate: true
    }
  },
  methods: {
    add () {
      if (this.val) {
        this.valList.push(this.val)
        this.val = ''
        this.$emit('update:change', this.valList)
      } else {
        this.$message.warning(this.placeholder)
      }
    },
    close (index) {
      this.valList.splice(index, 1)
      this.$emit('update:change', this.valList)
    }
  }
}
</script>

<style lang="scss" scoped>
.YsInput {
  .YsInput-input {
    display: flex;
    .YsInput-input-btn {
      flex-shrink: 0;
      margin-left: 10px;
    }
  }
}
</style>
