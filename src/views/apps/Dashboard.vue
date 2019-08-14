<template>
	<vue-scroll class="page-dashboard">

		{{ $t('message.hello') }}

	</vue-scroll>
</template>

<script>
// import { get } from '@/api/routes'
// import layouts from '@/layout'

export default {
  name: 'Dashboard',
  data () {
    return {}
  },
  computed: {},
  methods: {
		// Metodos para rutas desde la BD
		// 	addroute() {
		// 	let me = this
		// 	get().then(({data}) => {
		// 		for (var i = 0; i < data.length; i++) {
		// 			data[i].component = me.view(data[i].component)
		// 			data[i].meta = JSON.parse(data[i].meta)
		// 		  data[i].meta.layout = layouts[data[i].meta.layout]
		// 		}
		// 		me.$router.addRoutes(data)
		// 		me.$router.push(data[0])
		// 	}).catch(error => error)
		// },
		// go(){
		// 	this.$router.push('/test')
		// },
		// view(name) {
		//  	return function (resolve) {
		//  		require (['@/views/pages/' + name + '.vue' ], resolve);
		// 	}
		// }
	},
  mounted () {},
  beforeDestroy () {},
  components: {}
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables';

</style>

<style lang="scss">
.page-dashboard {}

@media (max-width: 768px) {
	.page-dashboard {
		.vb-content {
			padding: 0 5px !important;
			margin: -5px;
			width: calc(100% + 10px) !important;
		}
	}
}
</style>
