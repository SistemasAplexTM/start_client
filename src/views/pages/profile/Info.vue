<template lang="html">
  <div class="">
    <el-row>
      <el-col :span="24">
        <el-form ref="form" :model="form" label-width="120px" size="medium" label-position="top">
          <el-form-item :label="$t('user.name')">
            <el-input v-model="form.name">
               <i slot="prefix" class="fal fa-user ml-5"></i>
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('user.email')">
            <el-input v-model="form.email">
              <i slot="prefix" class="fal fa-envelope ml-5"></i>
            </el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row class="footer bg-white" :gutter="12">
      <transition name="fade">
        <el-alert v-if="response.type" :title="response.msg"
        :type="response.type" show-icon @close="responseClear">
        </el-alert>
      </transition>
      <el-divider style="margin-top: 0px"></el-divider>
      <el-col :span="12">
        <el-button class="w-100" plain type="success" :loading="loading" @click="onSubmit">
          <i class="fal fa-sync-alt mr-5"></i>
          {{ $t('global.update') }}
        </el-button>
      </el-col>
      <el-col :span="12">
        <el-button class="w-100" plain type="default">
          <i class="fal fa-times-circle mr-5"></i>
          {{ $t('global.cancel') }}
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { update } from '@/api/profile'
  import { setUser, getToken } from '@/utils/auth'

  export default {
    data () {
      return {
        loading: false,
        response: {
          msg: '',
          type: null
        },
        form: this.user
      };
    },
    props: ["user"],
    methods: {
      onSubmit () {
        this.loading = true
        update(this.form).then(({data}) => {
          setUser(data.user)
          this.response.msg = this.$t('success.update')
          this.response.type = 'success'
          this.loading = false
        }).catch(error => {
          this.response.msg = this.$t('errors.update')
          this.response.type = 'error'
          this.loading = false
        })
      },
      responseClear () {
        this.response = {
          msg: '',
          type: null
        }
      }
    }
  };
</script>

<style lang="css" scoped>
.footer {
  position: fixed;
  width: 23%;
  text-align: center;
  bottom: 15px;
}
</style>
