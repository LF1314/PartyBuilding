//我的党建页面
<template>
    <div class="mypaty">
           <div class="mypaty_inner">
                   <div class="mypaty_header">
                       <span>我的党建</span>  
                   </div>
                   <div class="botton_line"></div>
                   <div class="banner_top">
                       <div class="touxiang">
                               <img src="./img/头像@2x.png" height='100%' alt=""> 
                       </div>
                       <div class="nologin">
                           <a href="/#/login">您还没有登陆，请登录先</a>
                       </div>
                           
                   </div>
                   <div class="person_mes">
                         <ul>
                             <li class="mes_item clearfix">
                                   <div class=" fl">
                                       <img class="img1" src="./img/个人信息@2x.png" alt="">
                                       <span>个人信息</span>
                                   </div>
                                   <div class="fr">
                                         <img src="./img/形状-7-拷贝-5.png" alt="">          
                                   </div>
                             </li>
                            <li class="mes_item clearfix">
                                   <div class=" fl">
                                       <img class="img1" src="./img/量化积分icon@2x.png" alt="">
                                       <span>个人量化积分</span>
                                   </div>
                                   <div class="fr">
                                         <img  src="./img/形状-7-拷贝-5.png" alt="">          
                                   </div>
                             </li>
                             <li class="mes_item clearfix">
                                   <div class=" fl">
                                       <img class="img1" src="./img/修改密码icon@2x.png" alt="">
                                       <span>修改密码</span>
                                   </div>
                                   <div class="fr">
                                         <img src="./img/形状-7-拷贝-5.png" alt="">          
                                   </div>
                             </li>
                         </ul>
                   </div>
                   <div class="footer">
                        <tabar></tabar>
                   </div>
           </div>
    </div>
</template>
<script>
    export default
    {
        name:'mypaty',
         components:{
       tabar:()=>import('../../components/tabar/tablebar')
    }
    }
</script>

<style scoped lang = 'scss'>
.mypaty_header{
height: 44px;
line-height: 44px;
background-color: #c50206;
font-size: 17px;
color: #fff;
position: fixed;
text-align: center;;
right: 0;
top:0;
left:0;

}
.botton_line{
  height: 1px;
  margin-top: 44px;
  background-color: rgba($color: #fff, $alpha: .1);
}
.banner_top{
    height: 3.15rem;
    background-color: #c50206;

}
.touxiang{
    width: 72px;
    height:102px;
    padding-top: 30px;
    margin: 0 auto;
    text-align: center;;
  
}
.nologin{
   
    text-align: center;
    a{
        color: #fff;
        font-size: 10px;
    }

}
.mes_item{
    padding: 10px;
    height: 56px;
    border-bottom: 2px solid #f2f2f2;
    .img1{
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
    img{
        vertical-align: middle;
    }
}
</style>
