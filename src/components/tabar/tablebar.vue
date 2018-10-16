//底部导航栏
<template>
    <div class="tablebar_wraper">
       <div class="tabler_inner">
             <router-link to="/index"  class="tabar_item">
                   <i class="i1 icom" :class="chageclass()=='ii1' ? 'ii1' :'' "></i>
                首页
             </router-link>
               <router-link to="/notice" class="tabar_item">
                     <i class="i2 icom"  :class="chageclass()  =='ii2' ? 'ii2' :''"></i>
                通知早知道
             </router-link>
               <router-link to="/mypaty" class="tabar_item">
                     <i class="i3 icom" :class="chageclass() =='ii3' ? 'ii3' :''"></i>
                我的党建
             </router-link>

       </div>
    </div>
</template>

<script>
    export default
    {
        name:'tabar',
        methods:{
             chageclass(){
                 let name = this.$route.name
                 switch(name){
                     case 'index':
                     return 'ii1';
                     case 'notice':
                     return 'ii2';
                     case 'mypaty':
                     return 'ii3';
                     default:
                     break;
                 }
             }
        }

    }
</script>
<style scoped lang = 'scss'>
.tablebar_wraper{
  background-image: url('./img/底部bg.png');
  .tabler_inner{
   height: 46px;
    line-height: 23px;
    display: flex;
    width: 100%;
    .tabar_item{
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
    .router-link-active{
          border-top: 2px solid #ca282b;
          color:#ca282b;
    }

    }
}
.icom{
    display: block;
    height: 15px;
    width: 15px;
    background-size: 100%;
    margin: 5px auto;
}
.i1{
    background-image: url('./img/党_grey.png')
}
.i2{
    background-image: url('./img/消息_grey.png')
}
.i3{
    background-image: url('./img/会员_grey.png')
}
.ii1{
    background-image: url('./img/党_red.png')
}
.ii2{
    background-image: url('./img/消息_red.png')
}
.ii3{
    background-image: url('./img/会员_red.png')
}
</style>
