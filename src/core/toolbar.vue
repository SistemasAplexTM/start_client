<template>
	<div class="toolbar flex align-center justify-space-between">
		<div class="box-left box grow flex">
			<button @click="toggleSidebar" v-if="menuBurger !== 'right'" class="toggle-sidebar card-base card-shadow--small">
				<i class="fal fa-bars"></i>
			</button>

			<img class="logo-mini" src="@/assets/images/logo.png" alt="logo"/>

			<!-- Buscador global disponible -->
			<!-- <search class="hidden-xs-only"></search> -->

		</div>
		<div class="box-right flex align-center pl-10">
			<el-dropdown trigger="click" @command="onCommandLang">
				<span class="el-dropdown-link">
					<i class="flag-icon" :class="{['flag-icon-'+lang]:true}"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="us"><i class="flag-icon flag-icon-us mr-15"></i>{{	$t('languages.english') }}</el-dropdown-item>
					<el-dropdown-item command="es"><i class="flag-icon flag-icon-es mr-15"></i>{{ $t('languages.spanish') }}</el-dropdown-item>
					<!-- <el-dropdown-item command="/multi-language"><i class="fal fa-language mr-15"></i>Read the docs</el-dropdown-item> -->
				</el-dropdown-menu>
			</el-dropdown>
			<button class="fullscreen-button" @click="toggleFullscreen">
				<i class="fal fa-arrows-alt" v-if="!fullscreen"></i>
				<i class="fal fa-compress-arrows-alt" v-if="fullscreen"></i>
			</button>
			<el-popover ref="popover" placement="bottom" :width="popoverWidth" trigger="click">
				<notification-box></notification-box>
			</el-popover>
			<el-badge :is-dot="true" class="notification-icon-badge">
				<el-button v-popover:popover icon="fal fa-bell" class="notification-icon"></el-button>
			</el-badge>
			<span class="username"><router-link to="/profile">Administrador</router-link></span>
			<el-dropdown trigger="click" @command="onCommand">
				<span class="el-dropdown-link">
					<img src="../assets/images/avatar.jpg" class="avatar" alt="avatar">
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="profile"><i class="fal fa-user mr-10"></i> {{ $t('profile') }}</el-dropdown-item>
					<el-dropdown-item command="/logout" divided><i class="fal fa-sign-out mr-10"></i> {{ $t('logout') }}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>

			<button @click="toggleSidebar" v-if="menuBurger === 'right'" class="toggle-sidebar toggle-sidebar__right card-base card-shadow--small">
				<i class="fal fa-bars"></i>
			</button>
		</div>
	</div>
</template>

<script>
import NotificationBox from '@/components/NotificationBox'
import Search from '@/components/Search'

export default {
  name: 'Toolbar',
  props: ['menuBurger'],
  data () {
    return {
      popoverWidth: 300,
      fullscreen: false,
      lang: 'es'
    }
  },
  methods: {
    onCommandLang (lang) {
      if (lang.charAt(0) === '/') {
				this.onCommand(lang)
			} else {
				this.$i18n.locale = lang
				this.lang = lang
			}
    },
    onCommand (path) {
			if (path == 'profile') {
				this.$store.commit('openRightMenu', {active: true, component: path, title: this.$t('profile'), icon: 'user'})
				return false
			}
      this.$router.push(path)
    },
    toggleSidebar () {
      this.$emit('toggle-sidebar')
    },
    resizePopoverWidth () {
      if (window.innerWidth <= 768) {
        this.popoverWidth = 250
      } else {
        this.popoverWidth = 300
      }
    },
    toggleFullscreen () {
      this.$fullscreen.toggle(document.querySelector('body'), {
        wrap: false,
        callback: () => { this.fullscreen = this.$fullscreen.getState() }
      })
    }
  },
  components: {
    NotificationBox,
    Search
  },
  mounted () {
    this.fullscreen = this.$fullscreen.getState()
    this.resizePopoverWidth()
    window.addEventListener('resize', this.resizePopoverWidth)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizePopoverWidth)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables';
@import '../assets/scss/_mixins';

.toolbar {
	width: 100%;
	height: 100%;
	padding: 0 20px;
	box-sizing: border-box;

	.username {
		margin-left: 20px;
		font-weight: bold;
		@include text-bordered-shadow();

		a {
			color: $text-color;
			text-decoration: none;

			&:hover {
				color: $text-color-accent;
			}
		}
	}

	.avatar {
		border-radius: 50%;
		width: 35px;
		height: 35px;
		border: 1px solid #FFF;
		margin-left: 20px;
		box-sizing: border-box;
		display: block;
		cursor: pointer;
		box-shadow: 0 2px 5px 0 rgba(49,49,93,.1), 0 1px 2px 0 rgba(0,0,0,.08);
		transition: box-shadow .5s;

		&:hover {
			box-shadow: 0px 3px 10px 0 rgba(49, 49, 93, 0.08), 0px 2px 7px 0 rgba(0, 0, 0, 0.08);
		}
	}

	.notification-icon {
		font-size: 20px;
		outline: none;
		padding: 0;
		background: transparent;
		border: none;
		margin-left: 20px;
		//color: #aab7c5;
		color: transparentize($text-color, 0.7);
		@include text-bordered-shadow();

		&:hover {
			color: $text-color-accent;
		}
	}

	.toggle-sidebar {
		border: 1px solid transparent;
		height: 32px;
		min-height: 32px;
		line-height: 32px;
		width: 32px;
		min-width: 32px;
		max-width: 32px;
		box-sizing: border-box;
		text-align: center;
		margin: 0;
		outline: none;
		margin-right: 5px;
		font-size: 24px;
		padding: 0;
		cursor: pointer;
		display: inline-block;
		color: $text-color;
		background: white;
		display: none;
		opacity: 0;
		transition: all .5s;

		&__right {
			margin-right: 0px;
			margin-left: 5px;
		}

		&:hover, &:focus, &:active {
			color: $text-color-accent;
			border-color: $text-color-accent;
		}
	}

	.fullscreen-button {
		font-size: 24px;
		cursor: pointer;
		outline: none;
		padding: 0;
		background: transparent;
		border: none;
		margin-left: 20px;
		//color: #aab7c5;
		color: transparentize($text-color, 0.7);
		@include text-bordered-shadow();

		&:hover {
			color: $text-color-accent;
		}
	}

	.logo-mini {
		width: 32px;
		height: 32px;
		display: none;
	}

	.el-dropdown {
		.flag-icon {
			box-shadow: 0 2px 5px 0 rgba(49,49,93,.1), 0 1px 2px 0 rgba(0,0,0,.08);
			cursor: pointer;
			border: 1px solid lighten($background-color, 20%);
			background-color: lighten($background-color, 20%);
		}
	}
}

@media (max-width: 650px) {
	.toolbar {
		.username {
			display: none;
		}
	}
}

@media (max-width: 768px) {
	.toolbar {
		padding: 0 10px;

		.toggle-sidebar {
			display: block;
			opacity: 1;
		}

		.fullscreen-button {
			display: none;
		}

		.logo-mini {
			display: inherit;
		}
	}
}
</style>
