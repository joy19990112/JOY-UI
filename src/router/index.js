import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from './Modules'

Vue.use(Router)

let rootRouter = [{
  path: '/',
  redirect: "/HomePage"
}]

const router = new Router({
  mode: 'hash',
  routes: rootRouter.concat(RouterConfig)
})

export default router
