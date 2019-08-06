<template>
	<div class="login-page flex">
		<div class="box grow scrollable align-vertical side-box box-left">
			<div class="align-vertical-middle wrapper text-center">
				<img class="image-logo" src="@/assets/images/logo.png" alt="logo-left"/>
				<h1 class="h-big">AplexTM</h1>
				<p class="p-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.</p>
			</div>
		</div>
		<div class="box grow scrollable align-vertical side-box box-right">
			<div class="align-vertical-middle wrapper">

				<form class="form-box" @submit.prevent="Login">
					<h1 class="text-center">Bienvenido</h1>
					<p class="mb-40 text-center">Inicia sesión</p>

					<float-label class="styled">
						<input type="username" name="username" placeholder="Correo" v-model="email">
					</float-label>
					<float-label class="styled">
						<input type="password" name="password" placeholder="Contraseña" v-model="password">
					</float-label>

					<div class="flex text-center center pt-30 pb-10">
						<el-button :loading="loading" plain size="small" native-type="submit" class="login-btn pulse animated themed">
							Entrar
						</el-button>
					</div>

				</form>
			</div>

		</div>

	</div>
</template>

<script>
import { login } from '@/api/login'
import { setToken, setUser } from '@/utils/auth'

export default {
  name: 'Login2',
  data () {
    return {
					email: 'admin@admin.com',
					password: 'admin123',
					loading: false,
					error: false,
					errorMsg: '',
    }
  },
		methods: {
			Login() {
				this.loading = true
				this.$router.push({ path: '/' })
				// login(this.email, this.password, false).then(({data}) => {
				// 	if (data.code === 200) {
				// 		setToken(data.access_token)
				// 		setUser(data.user)
				// 		this.$store.commit('setLogin')
				// 		let user = JSON.parse(data.user)
				//
				// 		for (var i = 0; i < user.roles.length; i++) {
				// 			if (user.roles[i].redirect_to) {
				// 				this.$router.push({ path: '/' + user.roles[i].redirect_to })
				// 			}else{
				// 				this.$router.push({ path: '/404'})
				// 			}
	   //   }
				// 	}else {
				// 		this.error = true
				// 		this.errorMsg = 'Credenciales invalidas'
				// 	}
				// 	this.loading = false
	   // }).catch(response => {
				// 	 this.error = true
				// 		this.loading = false
				// 	 // this.errorMsg = error.errors
	   //    console.log(response, 'asdf');
	   // })
			}
		}
}
</script>

<style lang="scss">
@import '../../assets/scss/_variables';

.login-page {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 0 !important;

	.side-box {
		.wrapper {
			width: 100%;
			box-sizing: border-box;
			padding: 20px;
		}
	}

	.box-left {
		background-image: url('../../assets/images/login2.jpg');
		background-size: cover;
		background-position: 50% 50%;

		.wrapper {
			.image-logo {
				width: 90%;
				max-width: 100px;
				margin-top: 20px;
			}

		}
	}
	.box-right {
		background: white;
		color: var(--background-color);
	}

	.form-box {
		width: 100%;
		max-width: 340px;
		padding: 30px;
		box-sizing: border-box;
		margin: 20px auto;
		//background: transparent;

		a {
			font-size: 14px;
			color: var(--color-accent);
			text-decoration: none;
			font-weight: 500;
		}

		.image-logo {
			width: 80px;
			margin: 0px auto;
			margin-bottom: 70px;
			display: block;
		}

		.login-btn {
			background: rgba(var(--color-accent-rgb), .2);
			color: var( --text-color);
			border-color: var(--text-color);
			border-width: 2px;
			font-weight: bold;
			border-radius: 0;

			&:hover {
				background: rgba(var(--color-accent-rgb), 1);
				border-color: var(--text-color);
				color: var( --text-color);
			}
		}
	}
}

@media (max-width: 1200px) {
.login-page {
	.box-left {
		.wrapper {
			.h-big {
				font-size: 50px;
			}
		}
	}
}
}
@media (max-width: 900px) {
.login-page {
	.box-left {
		.wrapper {
			.h-big {
				font-size: 30px;
			}
		}
	}
}
}
@media (max-width: 768px) {
.login-page {
	display: block;
	overflow: auto;

	.side-box {
		display: block;
	}
}
}
</style>
