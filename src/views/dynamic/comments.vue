//回复发布的评论
<template>
    <div class="commen_wraper">
           <div class="comment_header">
                <Header></Header>
           </div>
           <div class="commen_danamic">
                <div class="dynamic_img">
                        <div class="img_messs">
                            <div class="touxiangs">
                                <img :src="dyna.header" width="100%" height="100%" alt="">
                            </div>
                            <div >
                                <p>{{dyna.username}}</p>
                                <div class="othermesssage">
                                    <img src="./img/时间.png" alt="">
                                    <span>{{dyna.currentTime}}</span>
                                    <img :src="timein" alt="">
                                    <span>公开</span>
                                </div>
                            </div>
                        </div>     
                </div>
                 <div class="dyanmaic_content">
                      <p> {{dyna.content}}</p>
                  </div>       
           </div>

           <div class="commonlist_wraper">
                 <div class="commlist_iner">
                      <ul>
                          <li class="commentlist" v-for="(com,index) in commlist" :key="index">
                               <div class="personmess">
                                     <div class="av_img">
                                        <img :src="com.header" alt="">
                                     </div>
                                     <div class="othermess">
                                           <p>{{com.usename}}</p>
                                           <p>{{com.timeFormat}}</p>
                                     </div>
                               </div>
                               <div class="com_contne">
                                  <p>{{com.comment}}</p>
                               </div>
                          </li>
                      </ul>
                 </div>
           </div>
           <div class="piglunb_input">
                 <input type="text" v-model="comment" placeholder="输入评论...">
                  <mu-button @click="addcomments" color="red" class="btn">
                    评论
                    <mu-icon right></mu-icon>
                    </mu-button>
           </div>
    </div>
</template>

<script>
import timein from './img/声音.png'
import funcs from '../../../until/function.js'

export default
{
    name:'comment',
    data(){
        return{
          danamicid:'',
          timein,
          dyna:{},
          commlist:[],
          comment:''
        }
    },

    components:{
        Header:()=>import ('../../components/comonheader/Header.vue')
    },
    methods:{
      //获取当前的状态
      getnadymic(){
          this.$axios.get('/dynamic/lon',{id:this.danamicid}).then(res=>{
            //   console.log(res)
              this.dyna = res.data
              console.log(this.commlist)
          })
      },
      //获取当前动态的评论
      getcomments(){
          this.$axios.get('/comments/findcom',{id:this.danamicid}).then(res=>{
              if(res.code == 200){
                  this.commlist = res.data
              }
          })
      }
      ,
      //添加评论
      addcomments(){
         let obj = {}
         let user = this.$store.state.userinfo
         let data = +new Date()
         obj.timeFormat = funcs.changedate(data)
         obj.header = user.avurl
         obj.useId = user.idcard
         obj.usename = user.username
         obj.dynamicid = this.danamicid
         obj.comment = this.comment
        //  console.log(obj)
         this.$axios.post('/comments/addcom',obj).then(res=>{
            //  console.log(res)
             if(res.code ==200)
             {
                 this.getcomments()
             }
         })
      }
    },
    created(){
     this.danamicid = this.$route.params.id
    //  console.log(this.danamicid)
     this.getnadymic()
     this.getcomments()
    }
}
    
</script>


<style scoped lang ='scss'>
// 评论列表
.commentlist{
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: #fff;
    .personmess{
        display: flex;
        width: 100%;
        .av_img{
            height: 50px;
            width: 50px;
            margin-right: 10px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                vertical-align: middle;

            }
        }
        .othermess{
            height: 50px;
            line-height: 25px;
            p{
                font-size: 15px;
                color: #777;
            }
        }

    }
    .com_contne{
        width: 100%;
        margin-top: 10px;
        font-size: 16px;
        color: #888;
    }
}
.piglunb_input{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1%;
    input{
        outline: none;
        height: 40px;
        border: 1px solid #c50206;
        border-radius: 6px;
        width: 74%;
        padding-left:2%;
        font-size: 16px;
    }
    .btn{
        width: 20%;
    }
}
.commen_wraper{
    position: absolute;
    top:0;
    bottom: 0;
    width: 100%;
    background-color: #f2f2f2;
}
.commen_danamic{
    margin: 56px 10px 10px 10px;;
    padding: 10px;
    
    background-color: #fff;

}
 .dynamic_img{
         display: flex;
         width: 100%;
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
</style>



















