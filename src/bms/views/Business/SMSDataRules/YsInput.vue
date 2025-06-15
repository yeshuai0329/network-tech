<template>
  <div class="YsInput">
    <div class="YsInput-input">
      <el-input
        v-model="val"
        class="YsInput-input-content"
        :placeholder="placeholder"
        :clearable="clearable"
      />
      <el-button class="YsInput-input-btn" type="primary" @click="add"
        >添 加</el-button
      >
      <div class="YsInput-input-upload">
        <input
          type="file"
          ref="fileInput"
          accept=".txt"
          @change="handleFileSelect"
          :multiple="false"
        />
        <el-button
          v-if="hasUpload"
          class="YsInput-input-btn"
          @click="uploadHandler"
          >上传</el-button
        >
      </div>
    </div>
    <div class="YsInput-showList"  v-if="valList.length">
      <el-tag
        style="margin-right: 10px"
        v-for="(item, index) in valList"
        :key="index"
        closable
        @close="close(index)"
        effect="plain"
        type="info"
        >{{ item }}</el-tag
      >
    </div>
    <div v-if="valList.length" class="YsInput-count">{{ valList.length }} 个</div>
  </div>
</template>

<script>
export default {
  props: ['value', 'placeholder', 'clearable', 'hasUpload'],
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
        this.valList = this.value
      },
      immediate: true
    }
  },
  methods: {
    uploadHandler () {
      this.$refs.fileInput.click()
    },
    handleFileSelect (event) {
      const file = event.target.files[0]
      if (!file) return
      this.readAsText(file)
    },

    uniqueArray (arr) {
      return [...new Set(arr)]
    },
    readAsText (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const result = e.target.result
          .split('\r\n')
          .map((item) => item.trim())
          .filter((item) => item)
        this.uniqueArray(result).forEach((item) => {
          if (!this.valList.includes(item)) {
            this.valList.push(item)
          }
        })
        this.$message.success('导入成功，数据已去重！')
      }

      reader.onerror = () => {
        this.error = '文件读取失败，请尝试其他文件'
      }

      reader.readAsText(file)
    },
    add () {
      if (!this.val) {
        this.$message.warning(this.placeholder)
      } else if (this.valList.includes(this.val)) {
        this.$message.warning('添加的数据已存在')
      } else {
        this.valList.push(this.val)
        this.val = ''
        this.$emit('change', this.valList)
      }
    },
    close (index) {
      if (this.valList.length === index + 1 && index) {
        this.$confirm(
          '是否全部清空，确定按钮清空所有数据！取消按钮删除当前一条数据！',
          '提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(
          () => {
            this.valList = []
            this.$emit('change', this.valList)
          },
          () => {
            this.valList.splice(index, 1)
            this.$emit('change', this.valList)
          }
        )
      } else {
        this.valList.splice(index, 1)
        this.$emit('change', this.valList)
      }
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
    .YsInput-input-upload {
      height: 100%;
      display: inline-block;
      input[type="file"] {
        display: none;
      }
    }
  }
  .YsInput-showList {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
  }
  .YsInput-count {
    width: 100%;
    height: 48px;
    text-align: right;
    padding: 0 10px;
    line-height: 48px;
  }
}
</style>
