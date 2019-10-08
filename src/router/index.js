import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: () => import('../pages' + file)
  }
}

export default new Router({
  routes: [
    route("/login", '/Login', "Login"),
    {
      path: '/',
      component: () => import('../pages/Layout'),
      redirect: "/index/dashboard",
      children: [
        route("/index/dashboard", "/Dashboard", "Dashboard"),
        //第一个参数：路由路径， 第二个参数：对应的组件位置
        route("/item/category", "/item/Category", "Category"),
        route("/item/brand", "/item/Brand", "Brand"),
        route("/item/list", "/item/Goods", "Goods"),
        route("/item/specification", "/item/Specification", "Specification"),
        route("/user/statistics", "/user/Statistics", "Statistics"),
        route("/trade/promotion", "/trade/Promotion", "Promotion"),
      ]
    }
  ]
})
