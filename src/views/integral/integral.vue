<template>
    <div class="userinfo_wraper">
        <div class="uerinfo_innner">
                 <div class="info_header">
                     <Header :mess ='mess'></Header>
                 </div>
                 <div class="ji_header_img">
                       <img src="./img/jifen.png" alt="">
                       <div class="jietaotals">
                             {{$store.state.userinfo.totalscore}}
                       </div>
                 </div>
                 <div class="intergal_detail">
                       <div>
                           <img class="lxjiimg" src="./img/lxjf.png" alt="">
                           <span>积分明细</span>
                       </div>
                       <div>
                           <img  class="imgright" src="./img/right.png" alt="">
                       </div>
                 </div>
                 <div class="jfules">
                      <p>积分规则</p>
                      <img  class="wenhao" src="./img/wenhao.png" alt="">
                 </div>
                 <div class="allrules_wraper">
                      <div class="allrul_item">
                          <p>登陆app</p>
                          <p>5</p>
                      </div>
                      <div class="allrul_item">
                          <p>完善个人信息</p>
                          <p>2</p>
                      </div>
                      <div class="allrul_item">
                          <p>查看积分</p>
                          <p>1</p>
                      </div>
                      <div class="allrul_item">
                          <p>按时缴纳党费</p>
                          <p>10</p>
                      </div>
                      <div class="allrul_item">
                          <p>查看通知</p>
                          <p>2</p>
                      </div>
                      <div class="allrul_item">
                          <p>了解学院工作动态</p>
                          <p>5</p>
                      </div>
                      <div class="allrul_item">
                          <p>主动学习相关文件</p>
                          <p>10</p>
                      </div>
                       <div class="allrul_item">
                          <p>提交个人总结</p>
                          <p>2</p>
                      </div>
                       <div class="allrul_item">
                          <p>积极参加互动</p>
                          <p>5</p>
                      </div>
                      <div class="allrul_item">
                          <p>学习党建知识</p>
                          <p>5</p>
                      </div>
                      <div class="allrul_item">
                          <p>学习党史</p>
                          <p>10</p>
                      </div>
                      <div class="allrul_item">
                          <p>创先争优事迹</p>
                          <p>10</p>
                      </div>
                    <div class="allrul_item">
                          <p>制度化，常态化建设</p>
                          <p>5</p>
                      </div>
                 </div>
        </div>

    </div>
</template>
<script>
    export default
    {
        name:'interg',
        data(){
            return{
              mess:'个人量化积分'  
            }
        },
         components:{
              Header:()=>import ('../../components/comonheader/Header.vue')
        }
    }
</script>

<style scoped lang = 'scss'>
.userinfo_wraper{
    background-color: #f2f2f2;
}

.ji_header_img{
    margin-top: 44px;
    position: relative;
    img{
        vertical-align: middle;
    }
    .jietaotals{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3(-50%,-50%);
        color: #fff;
        font-size: 16px;
        text-align: center;
    }
}
.intergal_detail{
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
    padding: 10px;
    height: 60px;;
    background-color: #fff;
    .lxjiimg{
        height: 40px;
        line-height: 40px;
        width: 40px;
        vertical-align: middle;
        margin-right: 10px;
      
    }
    .imgright{
        vertical-align: middle;
        margin-top: 6px;
    }
}
.jfules{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    .wenhao{
        height: 20px;
        width: 20px;
    }
}
.allrul_item{
    display: flex;
    background-color: #fff;
    border-bottom: 2px solid rgba(0, 0, 0, .2);
    justify-content: space-between;
    height: 36px;
    padding: 5px;
    font-size: 14px;

  

}
.allrul_item p:nth-last-child(){
    color: red;
}
.allrul_item p:nth-of-type(1){
    color:  rgb(153, 153, 153);
}

</style>
