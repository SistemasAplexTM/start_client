<template lang="html">
  <div class="">
      <div v-if="typeof errors === 'object'">
        <el-alert
          v-if="show"
          v-for="item in errors"
          @close="$emit('close')"
          :title="item[0]"
          class="mt-20"
          type="error"
          show-icon>
        </el-alert>
      </div>
      <div v-else>
      <el-alert
        v-if="show"
        @close="$emit('close')"
        :title="errors"
        class="mt-20"
        type="error"
        show-icon>
      </el-alert>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['errors', 'show']
}
</script>

<style lang="css" scoped>
</style>
