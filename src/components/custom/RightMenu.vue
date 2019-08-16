<template lang="html">
  <el-drawer
  style="overflow: auto !important;"
    title=""
    size="25%"
    :visible="rightMenu.active"
    @close="$store.commit('closeRightMenu')"
    direction="rtl"
    >
    <span slot="title"> <i :class="'fal fa-' + rightMenu.icon"></i> {{ rightMenu.title }}</span>
    <el-row class="ml-20 mr-20 scrollable only-y">
        <el-col :span="24">
          <keep-alive>
            <transition name="fade" mode="out-in">
              <component v-bind:is="rightMenu.component"></component>
            </transition>
          </keep-alive>
        </el-col>
    </el-row>
  </el-drawer>
</template>

<script>
import Profile from '@/views/pages/profile/Index.vue'
import Dashboard from '@/views/apps/Dashboard.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'RightMenu',
  props: ['title'],
  components: { Profile, Dashboard },
  computed: { ...mapGetters(['rightMenu']) },
  data () {
    return {
      component: 'profile'
    }
  }

}
</script>

<style lang="css">
  .el-drawer {
    overflow: auto !important;
  }
</style>
