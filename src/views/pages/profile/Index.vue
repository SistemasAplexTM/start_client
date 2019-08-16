<template lang="html">
	<transition name="fade" mode="out-in">
		<skeleton-loading v-if="loading" key="skeleton">
			<row :gutter="{top: '10px', bottom: '10px'}">
				<column :span="3" :gutter="10">
					<circle-skeleton></circle-skeleton>
				</column>
				<column :span="21" :gutter="10">
					<square-skeleton :count="2" :boxProperties="{bottom: '15px',width: '300px',height: '15px'}">
					</square-skeleton>
				</column>
			</row>
			<row v-for="i in 5" :key="i" :gutter="{top: '10px', bottom: '10px'}">
				<column :span="1" :gutter="10">
					<circle-skeleton></circle-skeleton>
				</column>
				<column :span="23" :gutter="10">
					<square-skeleton :count="1" :boxProperties="{bottom: '5px',width: '300px',height: '10px'}">
					</square-skeleton>
					<square-skeleton :count="1" :boxProperties="{bottom: '15px',width: '300px',height: '80px'}">
					</square-skeleton>
				</column>
			</row>
		</skeleton-loading>
		<vue-scroll v-else key="content">
			<el-row>
				<el-col :span="6">
					<div>
						<el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
							<img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
						</el-avatar>
					</div>
				</el-col>
				<el-col :span="18">
					<h2 class="mb-0 mt-10 pb-0">{{ user.name }}</h2>
					<p class="mt-0">
						<el-tag v-for="rol in user.roles" :key="rol.id" size="small" effect="plain" type="success">
							{{ rol.name }}
						</el-tag>
					</p>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="$t('activity')" name="first">
              <log/>
            </el-tab-pane>
            <el-tab-pane :label="$t('information')" name="second">
              <info :user="user"/>
            </el-tab-pane>
          </el-tabs>
				</el-col>
			</el-row>
		</vue-scroll>
	</transition>
</template>

<script>
import { getUser } from '@/utils/auth'
import Log from './Log.vue'
import Info from './Info.vue'

export default {
	data() {
    return {
			loading: true,
			user: null,
      activeName: 'first'
    };
  },
  components: { Log, Info },
	mounted(){
		let me = this
		me.user =  getUser()
		setTimeout(function () {
			me.loading = false
		}, 300);
	},
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
}
</script>
