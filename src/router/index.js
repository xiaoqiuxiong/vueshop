import Vue from 'vue'
import Router from 'vue-router'

import Index_page from '@/pages/index'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'Index',
		component: Index_page
	}
	]
})
