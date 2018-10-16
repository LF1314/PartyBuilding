//通知早知道页面

<template>
    <div class="noticeheader">
       <div class="noticeinner">
                <Header :mess='mess'></Header>  
                <div class="body_notice" >
                     <ul>
                         <li class="body_notice_item" v-for="(notice ,index) in newlist" :key="index">
                              <div class="img_wraper">
                                  <img src="./img/iconfont_gonggaotongzhi.png" height="100%" alt="">
                              </div>
                              <div>
                                   <div class="notice_title">
                                         {{notice.newl.title}}
                                   </div>
                                   <p class="notice_time">
                                       {{notice.newl.currentTime}}
                                   </p>
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
   name:'notice',
   data(){
       return{
             newlist:[],
             mess:'通知早知道'
       }
   },
      components:{
       Header:()=>import('../../components/comonheader/Header.vue'),
       tabar:()=>import('../../components/tabar/tablebar')
    },
    created(){
        this.$store.commit('CHANGEHEADERMES','通知早知道')
        this.$axios.get('/newrows',{type:2,pn:1,size:10}).then(res=>{
            // console.log(res)
            if(res.code == 200)
            {
             this.newlist = res.data
            //  console.log(this.newlist)
            }
            
        })
    }
}  
</script>

<style scoped lang = 'scss'>

.body_notice{
    margin-top: 44px;
 .body_notice_item{
     display: table;
     width: 100%;
     height: 2rem;
     box-shadow: 0 2px 2px rgba($color: #000000, $alpha: .2);
     margin-top: 10px;
     padding-bottom: 10px;
     .img_wraper{
         display: table-cell;
         height: 1.2rem;
         width: 1.2rem;
         vertical-align: middle;
         padding: 10px;;
     }
     .notice_title{
         padding: 10px;
         display: table-cell;
         vertical-align: middle;
         height: 1.6rem;;
         font-size: 16px;
         line-height: 20px;
         
     }
     .notice_time{
         padding-left: 10px;
         font-size: 12px;
         font-weight: 400;
         color: #666;
     }
     
 }
}
</style>
