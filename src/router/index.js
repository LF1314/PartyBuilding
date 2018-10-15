import Vue from 'vue'
import Router from 'vue-router'
import Index from '@views/index/Index'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/test',
      component:()=>import ('@views/test/test')
    }
    ,
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/index',
    },
    // 跳转到首页
   {
     path:'/index',
     name:'index',
     component:Index
   },
   //跳转到 通知早知道页面
   {
     path:'/notice',
     name:'notice',
     component:()=>import("@views/notice/notice")
   },
   //跳转到我的党建页面
   {
    path:'/mypaty',
    name:'mypaty',
    component:()=>import("@views/mypaty/mypaty")
   },
   {
     path:'/login',
     name:'login',
     component:()=>import("@views/login/login")
   },
   //掌上组织生活
   {
    path:'/life',
    name:'life',
    component:()=>import ("@views/life/life")
   },
   //新闻详情页面
   {
     path:'/newdeatil/:id',
     name:"newdetail",
     component:()=>import ('@views/newlook/newlook')
   }

  ]
})
