
//公用组件
<template>
    <div class="letter_news_wraper">
          <div class="leter_newsheader">
                <Header></Header>
          </div>
          <div class="newslist">
                    <mu-container ref="container" class="demo-loadmore-content" >
                        <mu-load-more  :loading="loading" @load="load" :loaded-all='ladall'>
                           <template>
                             <ul>
                                 <li class="newitem" v-for="(news ,index) in newlit" :key="index" @click="jumptonewdetail(news.newid)">
                                       <div class="newing">
                                             <img :src="news.newl.pic" alt="" width="100%">
                                       </div>
                                       <div class="newmessage">
                                              <h3>{{news.newl.title}}</h3>
                                              <div class="clearfix timss">
                                                   <div class="newcreatetiem fl">
                                                       <p>{{news.newl.currentTime}}</p>
                                                   </div>
                                                   <div class="newlooknum fr">
                                                            <img src="./img/12-eye.png" height="10" width="15" alt="">
                                                             {{news.newl.count}}
                                                   </div>
                                              </div>
                                       </div>
                                 </li>
                             </ul>
                                <div class="loadalll" v-if="ladall">
                                        <p>数据加载完了还想干嘛！</p>
                                </div>
                               <mu-divider />
                           </template>
                        </mu-load-more>
                   </mu-container>
          </div>
       
    </div>
</template>

<script>
    export default
    {
        name:'latternews',
        data(){
            return{
                ladall:false,
                refreshing: false,
                loading: false,
                newlit:[],
                pn:1,
                size:10,
                type:0
            }
       
        },
        components:{
            Header:()=>import ('../../components/comonheader/Header.vue')
        },
        methods:{
            //  跳转到新闻详情页面
            jumptonewdetail(id){
                this.$router.push(`/newdeatil/${id}`)
             
            }

            ,
            getnews(){
                this.$axios.get('/newrows',{pn:this.pn,type:this.type,size:this.size}).then(res=>{
                   this.newlit = res.data
                })
            },
           load(){
                    this.loading = true;
                    let arr = this.newlit
                    this.pn +=1;
                    // console.log(this.pn)
                    this.$axios.get('/newrows',{pn:this.pn,type:this.type,size:this.size}).then(res=>{
                        //    console.log(res)                 
                           if(res.data.length ==0){
                                this.ladall = true
                             }
                            else{
                                  let newarr = [...arr ,...res.data]
                                  this.newlit = newarr
                                  this.loading = false;
                                //   console.log(this.ladall)
                            }
                            })
                
                 },
                 //根据路由判断需要加载那些新闻
                 aboutrouter(){
                     let name = this.$route.name
                     switch(name){
                         case 'newseyes'://信工新闻眼
                         this.type= 0
                       
                         break;
                         case 'through'://党建一点通
                         this.type = 3
                          
                         break;
                         case 'identity'://党员亮身份
                         this.type = 5
                      
                         break;
                         case 'activity'://特色活动
                         this.type = 1
                         
                         break;
                         case 'learnanywhere'://随时随地学
                         this.type = 6; 
                          
                         case 'stupolit':
                         this.type = 8;//政治学习 
                    
                         default:
                         break;
                     }
                 }
        },

        created(){
            this.aboutrouter()
            this.$store.commit('CHANGEHEADERMES',this.$route.meta)
            this.getnews()      
        },
        
    }
</script>


<style scoped lang='scss'>
.loadalll{
    padding: 20px;
    font-size: 16px;
    color: #333;
    text-align: center;
    width: 100%;
}
.newslist{
    position: absolute;
    z-index:-1;
    margin-top: 44px;
    width: 100%;
    .container{
        padding: 0;
    }
}
.newitem{
    height: 2rem;
    display: table;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    .newing{
        display: table-cell;
        height: 1.6rem;
        width: 1.6rem;
        vertical-align: middle;
    }
    .newmessage{
        padding-left: 20px;
        font-size: 16px;
        display: table-cell;
   
        .timss{
            margin-top: 20px;
               font-size: 10px;
               line-height: 10px;
              .newlooknum{
            height: .2rem;
   
            img{
            
                width: 15px;
                margin-right: 5px;
               
            }
        }
        }
       
    }

}
</style>
