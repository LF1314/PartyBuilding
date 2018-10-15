//底部导航栏
<template>
    <div class="tablebar_wraper">
       <div class="tabler_inner">
            <a href="/#/index" class="tabar_item">
                <i class="i1 icom"></i>
                首页
            </a>
            <a href="/#/notice" class="tabar_item">
                  <i class="i2 icom"></i>
                通知早知道
             </a>
            <a href="/#/mypaty" class="tabar_item">
                <i class="i3 icom"></i>
                我的党建
             </a>

       </div>
    </div>
</template>

<script>
    export default
    {
        name:'tabar',

    }
</script>
<style scoped lang = 'scss'>
.tablebar_wraper{
  background-image: url('./img/底部bg.png');
  .tabler_inner{
   height: 46px;
    line-height: 46px;
    display: flex;
    width: 100%;
    .tabar_item{
      flex: 1;
        text-align: center;
        font-size: 12px;
    }
    a:active{
        color: red;
    }
    }
}
.icom{
    display: block;
    height: 15px;
    width: 15px;
    background-size: 100%;
    margin: 0 auto;
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
</style>
