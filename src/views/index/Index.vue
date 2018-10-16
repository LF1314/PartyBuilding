<template>
    <div class="index_wraper">
          <div class="inner">
               <div class="index_hader clearfix">
                     <div class="fl index_logo">
                           <img src="./img/logo.png" height="100%" alt="">
                     </div>
                   
                      <a href="/#/login" class="fr index_login">
                                登陆
                      </a>
                     
               </div>
               <div class="content_body">
                     <div class="banner_wraper" v-if="banners[0]">
                            <mu-carousel hide-controls>
                                <mu-carousel-item v-for="(ban , index) in banners" :key="index">
                                    <img :src="ban.imgUrl" @click="newdetail(ban.url)">
                                </mu-carousel-item>
                            </mu-carousel>
                     </div>
                     <div class="body_nav">
                          <div class="nar_scoll1">
                                <a class="nar_item" href="/#/neweyes">
                                     <img src="./img/icon_01@2x.png" alt="">  
                                      <div>信工新闻眼</div>              
                                </a>
                                <a href="/#/life" class="nar_item">
                                     <img src="./img/icon_04@2x.png" alt="">
                                     <div>掌上组织生活</div>    
                                </a>
                                <a class="nar_item">
                                   <img src="./img/icon_05@2x.png" alt=""> 
                                   <div>党员云互动</div> 
                                </a>
                          </div>
                           <div class="nar_scoll1">
                                <a class="nar_item" href="/#/through">
                                    <img src="./img/icon_03@2x.png" alt=""> 
                                    <div>党建一点通</div>                                     
                                </a>
                                <a class="nar_item" href="/#/identity">
                                   <img src="./img/icon_06@2x.png" alt="">  
                                   <div>党员亮身份</div>
                                </a>
                                <a class="nar_item">
                                  <img src="./img/icon_02@2x.png" alt="">  
                                  <div>党史上的今天</div>
                                </a>
                          </div>
                     </div>
                     <div class="body_img">
                           <img src="./img/banner01@2x.png" width="100%" alt="">
                     </div>
                     <div class="bottom_img_a">
                            <div class="img_a_item">
                            </div>
                            <div class="img_a_item">
                                  <a href="/#/learnanywhere"></a>
                                  <a href=""></a>
                            </div>
                            <div class="img_a_item">
                                 <a href=""></a>
                                 <a href="/#/activity"></a>
                            </div>
                     </div>
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
    name:'patyindex',
    components:{
       tabar:()=>import('../../components/tabar/tablebar')
    },
    data(){
        return{
            banners:[]
        }
    },
    created(){
        this.$axios.get('/baner').then(res=>{
            if(res.code == 200){
                // console.log(res.data[0].rows)
                this.banners = res.data[0].rows
            }
        })
    },
    methods:{
        newdetail(id){
         this.$router.push(`/newdeatil/${id}`)
         this.$store.commit('CHANGEHEADERMES','信工新闻眼')
        }
    }

}
    
</script>

<style scoped lang = 'scss'>
.inner{
    padding-bottom: 46px;
}
 .index_hader{
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 44px;
     width: 100%;
     z-index: 100;
     line-height: 34px;
     padding: 5px;
     box-sizing: border-box;
     background-color: #c50206;
     .index_logo{
        
           height: 34px;

     }
     .index_login{
        
        color: #fff;
        font-size: 17px;
        text-decoration: none;
        display: inline-block;
        height: 34px;  
        line-height: 34px;  
        box-sizing: border-box;  
        vertical-align: middle;
        margin-right: 5px;
     }
     
 }
 .banner_wraper{
     margin-top: 44px;
     .mu-carousel{
         height: 192px;
       /deep/.mu-carousel-indicators{
         display: none;
     }
     }
    
 }
 .body_nav{
     height: 198px;
     background-image: url('./img/bt_bg@2x.png');
     background-repeat: no-repeat;
     background-size: cover;
     .nar_scoll1{
         height:98px;  
         box-sizing: border-box;
         padding: 5px;
         display: flex;
         width: 100%;
         .nar_item{
             display: inline-block;
             flex: 1;
             box-sizing: border-box;
             padding-top: 10px;
             text-align: center;
             img{
                 width: 50px;
                 height: 50px;
             }
         }
     }
 }
 .body_img{
     img{
         vertical-align: middle;
     }
 }
 .bottom_img_a{
     display: table;
     height: 164px;
     width: 100%;
     background-image: url('./img/channelType@2x.png');
     background-size: 100%;
     background-repeat: no-repeat;
     .img_a_item{
         display: table-cell;
         a{
             height: 50%;
             display: block;
         }
     }

 }

</style>
