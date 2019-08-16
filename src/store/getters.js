const getters = {
  layout: state => state.app.layout,
	 navPos: state => state.app.layout.navPos,
	 toolbar: state => state.app.layout.toolbar,
	 footer: state => state.app.layout.footer,
	 boxed: state => state.app.layout.boxed,
	 roundedCorners: state => state.app.layout.roundedCorners,
	 viewAnimation: state => state.app.layout.viewAnimation,
	 isLogged: state => state.app.logged,
	 splashScreen: state => state.app.splashScreen,
	 rightMenu: state => state.app.rightMenu
}
export default getters
