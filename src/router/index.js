import { removeToken, removeUser, getToken, getUser } from '@/utils/auth'
import Vue from 'vue'
import Router from 'vue-router'

// apps
import Dashboard from '@/views/apps/Dashboard.vue'

// pages
import Profile from '@/views/pages/profile/Index.vue'
import Login from '@/views/authentication/Login.vue'
import ForgotPassword from '@/views/authentication/ForgotPassword.vue'

// modules routes
import errors from './modules/errors'

import layouts from '@/layout'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes:
  [
		{
			path: '/',
      redirect: { path: '/home' }
		},
		{
			path: '/home',
			name: 'Inicio',
			component: Dashboard,
			meta: {
				lang: 'menu.home',
				nav: true,
				auth: true,
				icon: 'home',
				roles: ['admin', 'guest'],
				layout: layouts.navLeft
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				auth: false,
				layout: layouts.contenOnly
			}
		},
		{
			path: '/logout',
			beforeEnter (to, from, next) {
				removeToken()
				removeUser()
				next({path:'/login'})
			}
		},
		errors
	]
})

const l = {
	contenOnly(){
		store.commit('setLayout', layouts.contenOnly)
	},
	navLeft(){
		store.commit('setLayout', layouts.navLeft)
	},
	set(layout){
		store.commit('setLayout', layout)
	}
}

router.beforeEach((to, from, next) => {
	if(to && to.meta && to.meta.layout)
		l.set(to.meta.layout)

  if (to.meta.auth) {
    const authUser = getUser()
    if (!authUser) {
      next({ name: 'login' })
    } else {
			if (!to.meta.roles) {
				next()
				return false
			}
			let enter = false
      if (authUser.roles) {
        for (var i = 0; i < authUser.roles.length; i++) {
          if (to.meta.roles.includes(authUser.roles[i].short_name)) {
            enter = true
          }
        }
      }
			if (!enter)
				next({ name: 'Unauthorized' })

			next()
    }
  } else {
    if (to.name === 'login' && store.state.app.logged)
			next({ path: from.path })

		next()
  }
})

router.afterEach((to, from) => {
	setTimeout(()=>{
		store.commit('setSplashScreen', false)
	}, 500)
})

export default router
