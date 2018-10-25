<template>
    <div class="dynamic_wraper">
           <div class="dynamic_header">
                <Header></Header>
          </div>
          <div class="bodyload">
                  <mu-load-more
                   @refresh="gettendata" 
                  :refreshing="refreshing" 
                  :loading="loading"
                  :loaded-all ='ladall'
                   @load="loadmordata">
                    <mu-list>
                        <template>
                             <ul>
                               <li class="dynamic_item" v-for="(dyna , index) in dynamiclist" :key = 'index'>
                                    <div class="dynamic_img">
                                          <div class="img_messs">
                                                <div class="touxiangs">
                                                    <img :src="dyna.userId.avurl" width="100%" height="100%" alt="">
                                                </div>
                                                <div >
                                                    <p>{{dyna.userId.userName}}</p>
                                                    <div class="othermesssage">
                                                        <img src="./img/时间.png" alt="">
                                                        <span v-if='dyna.currentTime'>{{dyna.currentTime}}</span>
                                                        <img src="./img/声音.png" alt="">
                                                        <span>公开</span>
                                                    </div>
                                                </div>
                                          </div>
                                          <div class="danyuanhudong">
                                                 <span>党员云互动</span>
                                          </div>
                                    </div>
                                    <div class="dyanmaic_content">
                                          <p>
                                              {{dyna.content}}
                                          </p>
                                    </div>
                                    <div class="ddyanmic_ans">
                                        <!-- <img src="./img/" alt=""> -->
                                        <span @click="jumptodetail(dyna._id)">回复</span>
                                    </div>
                               </li>
                             </ul>
                             <div class="haveloadall" v-show="ladall">
                               <span>-------已经到底了-----</span>
                             </div>
                        <mu-divider/>
                        </template>
                    </mu-list>
                 </mu-load-more>
          </div>
          <div class="fabu_dynamic" @click="fshowfabu">
                <img src="./img/发布btn.png" alt="">
          </div>
          
          <div  class="fabu_texarea" :class="showfabu ? 'height4rem' : 'height0rem'">
               <div class="text_area">
                    <textarea v-model="content" class="textaread"  name="" id="" cols="" rows="5"></textarea>
               </div>
               <div class="fabu_btn">
                      <mu-button color="warning" @click="addarticle">发布</mu-button>
                       <mu-button color="info" @click="fshowfabu">取消</mu-button>
               </div>
          </div>
          <div class="gabumenghceng" v-show="showfabu" @click="fshowfabu">
          </div>
    </div>
</template>
<script>
import funcs from '../../../until/function.js'
export default
{
    name:'dynamic',
    data(){
        return{
             refreshing: false,
             loading: false,
             pn:1,
             ladall:false,
             showfabu:false,
             dynamiclist:[],
             content:''
        }
    }, 
    components:{
        Header:()=>import ('../../components/comonheader/Header.vue')
    },
    methods:{
         jumptodetail(id){
           this.$router.push(`/dynamdetail/${id}`)
         },
        //发布动态
        addarticle(){
            let data = +new Date()
            let obj ={}
            obj.content = this.content
            obj.currentTime = funcs.changedate(data)
            obj.userId = this.$store.state.userinfo._id
            console.log(obj)
            this.$axios.post('/inter/add',obj).then(res=>{
                this.fshowfabu()
                this.gettendata()
                this.content = ''
            })
        },
        //是否显示发布区域
        fshowfabu(){
           this.showfabu = !this.showfabu
        },
        getdata(){
             this.refreshing = true
             this.$axios.get('/inter',{pn:this.pn}).then(res=>{
                if(res.data.length <= 10){
                    this.dynamiclist = res.data
                    this.ladall = true;
                    this.refreshing =false    
                }
            else{
                    this.dynamiclist = res.data
                 this.refreshing = false
            }
            })
        }
        ,
        gettendata(){
              this.getdata();   
        },
        loadmordata(){
            this.loading = true;
            this.pn +=1
            this.$axios.get('/dynamic',{pn:this.pn}).then(res=>{
                if(res.data.length){
                     this.ladall = true
                }else{
                    this.dynamiclist = [...this.dynamiclist,...res.data].reverse()
                    this.loading = false
                }
            })
        }

    }
    ,
    created(){ 
        this.gettendata()
    }
}
    
</script>

<style scoped lang ='scss'>
.dynamic_wraper{

    .bodyload{
         margin-top: 44px;
         background-color: #f2f2f2;
         position: absolute;
         z-index: -1;
         width: 100%; 
     }
}
.dynamic_header{
    z-index: 1000;
}
/* 发布文本区域 */
.gabumenghceng{
    position:fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 999;
    background-color: rgba($color: #000000, $alpha: .5)
}
.text_area{
    .textaread{
        width: 100%;
        outline: none;
        border: none;
    }
}
.height4rem{
   transform: translateY(0);
}
.height0rem{
     transform: translateY(100%);
}
.fabu_texarea{
    position: fixed;
    z-index: 1000;
    bottom: 0;
    left: 0;
    height: 4rem;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    overflow: hidden;
    transition: all .4s linear;
    width: 100%;
    .fabu_btn{
      display: flex;
      width: 100%;
      margin-top: 10px;
      font-size: 16px;
      justify-content: space-between;
    }
}
  .haveloadall{
      text-align: center;
      color: #999;
      font-size: 20px;
      padding: 20px;


  }
  

     .dynamic_item{  
        margin-top: 10px;
        padding: 20px;
        background-color: #fff;
     }
     .dynamic_img{
         display: flex;
         justify-content: space-between;
         .img_messs{
             display: flex;
             .touxiangs{
                 height: 40px;
                 width: 40px;
                 border-radius: 50%;
                 overflow: hidden;
                 margin-right: 10px;
                
             }
             .othermesssage{
                 margin-top: 10px;
                 img{
                     height: 13px;
                     width: 13px;

                 }
             }

         }
         .danyuanhudong{
          
                 height: 25px;
                 width: 66px;
                 border: 2px solid #c50206;
                 color: #c50206;
                 text-align: center;
                 line-height: 23px;
                 border-radius: 10px;
                 font-size: 10px;
                 font-weight: 400;
             
         }
     }
     .dyanmaic_content{
         margin-top: 20px;
         font-size: 16px;
         color: #666;
     }
     .ddyanmic_ans{
         text-align: right;
         color: #777;
         z-index: 1000;
     }

     .fabu_dynamic{
         position: fixed;
         bottom: 40px;
         right: 20px;;
         img{
             height: 60px;
             width: 60px;
         }
     }
</style>
