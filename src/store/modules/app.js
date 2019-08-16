import { getUser } from '@/utils/auth'

const app = {
  state: {
    layout: {
      navPos: 'left', // top, bottom, left, right, false
      toolbar: 'top', // top, bottom, false
      footer: true, // above, below, false
      boxed: false, // true, false
      roundedCorners: false, // true, false
      viewAnimation: 'fade-top' // fade-left, fade-right, fade-top, fade-top-in-out, fade-bottom, fade-bottom-in-out, fade, false
    },
    splashScreen: true,
    logged: getUser(),
    rightMenu: {
      active: false,
      component: null,
      title: null,
      icon: null
    }
  },
  mutations: {
    setLayout (state, payload) {
      if (payload && payload.navPos !== undefined) { state.layout.navPos = payload.navPos }
      if (payload && payload.toolbar !== undefined) { state.layout.toolbar = payload.toolbar }
      if (payload && payload.footer !== undefined) { state.layout.footer = payload.footer }
      if (payload && payload.boxed !== undefined) { state.layout.boxed = payload.boxed }
      if (payload && payload.roundedCorners !== undefined) { state.layout.roundedCorners = payload.roundedCorners }
      if (payload && payload.viewAnimation !== undefined) { state.layout.viewAnimation = payload.viewAnimation }
    },
    setLogin (state, payload) {
      state.logged = true
    },
    setLogout (state, payload) {
      state.layout.navPos = null
      state.layout.toolbar = null
      state.logged = false
    },
    setSplashScreen (state, payload) {
      state.splashScreen = payload
    },
    openRightMenu (state, payload) {
      state.rightMenu = payload
    },
    closeRightMenu (state, payload) {
      state.rightMenu = {
        active: false,
        component: null,
        title: null,
        icon: null
      }
    }
  },
  actions: {

  }
}

export default app
