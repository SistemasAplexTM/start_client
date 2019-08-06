import Index from '@/views/errors/Index.vue'
import Unauthorized from '@/views/errors/401.vue'
import NotFound from '@/views/errors/404.vue'
import layouts from '@/layout'

export default {
  path: 'error',
  name: 'Error',
  component: Index,
  redirect: { path: '/unauthorized',name: 'Unauthorized' },
  children:[
    {
			path: '/unauthorized',
			name: 'Unauthorized',
			component: Unauthorized,
			meta: {
    nav: true,
				layout: layouts.contenOnly
			}
		},
    {
			path: '/*',
			name: 'not-found',
			component: NotFound,
			meta: {
    nav: true,
				layout: layouts.contenOnly
			}
		}
  ]
}
