import Vue from 'vue'
import Router from 'vue-router'
import Index from '@views/index/Index'
import store from '../vuex/index'
import letternews from '@views/letternews/letternews'
Vue.use(Router)


  const router =  new Router({
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
     meta:'通知早知道',
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
    meta:'掌上组织生活',
    component:()=>import ("@views/life/life")
   },
   //新闻详情页面
   {
     path:'/newdeatil/:id',
     name:"newdetail",
     component:()=>import ('@views/newlook/newlook')
   },
  // 随时随地拍页面
   {
     path:'/shoot',
     name:'shoot',
     meta:'随时随地拍',
     component:()=>import ('@views/shoot/shoot')
   },
   //信工新闻眼
   {
     path:'/neweyes',
     name:"neweyes",
     meta:'信工新闻眼',
     component:letternews
   },
   {
    path:'/through',
    name:"through",
    meta:'党建一点通',
    component:letternews
  },
  {
    path:'/identity',
    name:"identity",
    meta:'党员亮身份',
    component:letternews
  }
  ,
  {
    path:'/activity',
    name:"activity",
    meta:'特色活动',
    component:letternews

  }
  ,{
    path:'/learnanywhere',
    name:"learnanywhere",
    meta:'随时随地学',
    component:letternews
  },
  {
    path:'/stupolit',
    name:"stupolit",
    meta:'政治学习',
    component:letternews

  },
  //寻找组织
  {
    path:'/lookgro',
    name:'lookgro',
    meta:'流动组员找组织',
    component:()=>import ('@views/findorg/findorg')
  },
  //有关登陆的个人信息
  {
    path:'/info',
    name:'info',
    meta:'个人信息',
    component:()=>import('@views/personinfo/info')
  }
  ,
  {
    path:'/integr',
    name:'integr',
    meta:'量化积分',
    component:()=>import('@views/integral/integral')
  },
  {
    path:'/changepas',
    name:'changepas',
    meta:'修改密码',
    component:()=>import('@views/changepa/changep')

  },
  {
    path:'/dynam',
    name:'dynam',
    meta:'党员云互动',
    component:()=>import('@views/dynamic/dynamic')
  }
  ,
  {
    path:'/dynamdetail/:id',
    name:'dynamdetail',
    meta:'党员云互动',
    component:()=>import('@views/dynamic/comments')
  }
  ,
  {
    path:'/lifechore',
    name:'lifechore',
    meta:'掌上组织生活',
    component:()=>import('@views/life/lifechore')
  },
  {
    path:'/personsum',
    name:'personsum',
    meta:'个人总结',
    component:()=>import ("@views/life/personsum")
  },
  {
    path:'/review',
    name:'review',
    meta:'民主评议',
    component:()=>import ("@views/life/review")
  },
  {
    path:'/compaty/:id',
    name:'compaty',
    meta:'参评党员',
    component:()=>import('@views/life/compaty')
  }


  ]
});
 router.beforeEach((to,from,next)=>{
  //  console.log(from)
   if(from.name){
    store.commit('CHANGEHHISTORY',from.name)
   }
   let arr =['info','integr','changepas','dynam','lifechore']
   if(!store.state.userinfo){
      arr.forEach(item=>{
        if(item == to.name){
          router.push('/login')
        }
      })
   }
 

 next()
 })
export default router