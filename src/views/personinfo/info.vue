<template>
    <div class="userinfo_wraper">
        <div class="uerinfo_innner">
                 <div class="info_header">
                     <Header :mess ='mess'></Header>
                     <div class="changebtn">
                          <button class="btn" v-if="ischange" @click="cahngmessage">编辑</button>
                          <button class="btn" v-else  @click="savemessge">保存</button>
                     </div>
                 </div>

                 <div class="bodymessage" >
                       <div class="inputitem_wrper">
                            <span>头像</span>
                             <div class="av_img">
                                    <label  for="avuer" @change="upimg">
                                         <div class="labelimg">
                                               <img  :src="userinfo.avurl" alt="">
                                         </div>
                                         <input :disabled ='ischange' type="file" id="avuer" class="av_file">
                                    </label>
                             </div>
                       </div>
                        <div class="inputitem_wrper">
                            <span>用户名</span>
                            <input type="text" :disabled ='ischange' v-model="userinfo.username">
                       </div>
                        <div class="inputitem_wrper">
                            <span>姓名</span>
                            <input type="text" :disabled ='ischange'  v-model="userinfo.leaderson">
                       </div>
                        <div class="inputitem_wrper">
                            <span>身份证号</span>
                             <input type="text" v-model="userinfo.idcard">
                       </div>
                        <div class="inputitem_wrper">
                            <span>家庭住址</span>
                             <input type="text" :disabled ='ischange'  v-model="userinfo.hometown">
                       </div>
                        <div class="inputitem_wrper">
                            <span>民族</span>
                             <input type="text" :disabled ='ischange' v-model="userinfo.nation">
                       </div>
                        <div class="inputitem_wrper">
                            <span>微信号</span>
                             <input type="text" :disabled ='ischange'  v-model="userinfo.wxnum">
                       </div>
                       <div class="inputitem_wrper">
                            <span>扣扣号</span>
                             <input type="text" v-model="userinfo.qqNum">
                       </div>
                       <div class="inputitem_wrper">
                            <span>性别</span>
                            <div class="changesexwraper">
                                 <span v-if="ischange">{{userinfo.sex ? '男':'女'}}</span>
                                 <div v-else class="sexchange">
                                    <label for="man" >男</label>
                                    <input class="sexinput" type="radio" value=1 id="man" v-model="userinfo.sex">
                                    <label for="women">女</label>
                                    <input class="sexinput" type="radio" value=0 id="women" v-model="userinfo.sex">
                                 </div>
                            </div>
                       </div>
                        <div class="inputitem_wrper">
                            <span>姓名</span>
                            <input type="text" :disabled ='ischange'  v-model="userinfo.branchName">
                       </div>
                        <div class="inputitem_wrper">
                            <span>职业</span>
                            <input type="text" :disabled ='ischange'  v-model="userinfo.jobrank">
                       </div>
                       <div class="inputitem_wrper">
                            <span>薪资水平</span>
                             <input type="text" :disabled ='ischange'  v-model="userinfo.salery">
                       </div>
                       <div  class="inputitem_wrper">
                           <span>当前身份</span>
                           <div class="selectwraper">
                                <input type="text" v-if="ischange" v-model="userinfo.partyIdentity" disabled>
                                <mu-select v-else color='#f2f2f2'
                                 v-model="userinfo.partyIdentity" 
                                 underline-color='#f2f2f2'

                                 full-width>
                                    <template slot="selection" slot-scope="scope">
                                    <mu-chip :selected="scope.selected" color="teal">
                                        {{scope.label}}
                                    </mu-chip>
                                    </template>
                                    <mu-option v-for="(iden,index) in Identy" :key="index" :label="iden" :value="iden"></mu-option>
                                </mu-select>
                           </div>
                            
                       </div>           
                 </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
    export default
    {
        name:'infod',
        data(){
            return{
              userinfo:{} ,
              ischange:true,
              token:'',
              Identy:[
                  '预备党员',
                  '党员',
                  '积极分子',
                  '小白'
              ]
            }
        },
         components:{
              Header:()=>import ('../../components/comonheader/Header.vue')
        }
        ,
        computed:{
             mess(){
                 if(this.ischange){
                     return '个人信息'
                 }else{
                     return '修改个人信息'
                 }
             }
        }
        ,
        created(){
            this.userinfo =  this.$store.state.userinfo 
            //获取图片上传token
            this.gettoekn()
        },
        methods:{
            cahngmessage(){
                this.ischange = false
            },
            savemessge(){
                this.ischange = true
                console.log(this.userinfo)
                this.$axios.put('/admin/change',this.userinfo).then(res=>{
                    if(res.code == 200){
                        this.userinfo =res.data;
                        this.$store.commit('CHANGEUSERINFO',res.data)
                    }else{
                        this.userinfo = this.$store.state.userinfo
                        this.$info('修改信息失败！')
                    }
                })
            },
          gettoekn() {
           axios.get("http://upload.yaojunrong.com/getToken").then(res => {
        this.token = res.data.data;
      });
    },
      //上传imgimg
             upimg(e){
                 console.log(e)
                 let file = e.target.files[0]
                 let formdata = new FormData()
                 formdata.append('file',file)
                 formdata.append('token',this.token)
                 axios.post('https://upload-z1.qiniup.com',formdata).then(res=>{
                     this.userinfo.avurl = res.data.url
                 })

             }
        }
    }
</script>

<style scoped lang = 'scss'>

   .changebtn {
       position: fixed;
       top: 0;
       right: 20px;
       height: 44px;
       line-height: 44px;
       .btn{
           background-color: #c50206;
           outline: none;
           color: #fff;
           font-size: 16px;
           border: none;
       }

    }
 .changesexwraper{
        margin-right: 10px;
    }
.sexchange{
    .sexinput{
        display: inline-block;
        width: 50px;

    }
}
.selectwraper{
    height: 40px;
    width:2rem;
    .mu-input{
        margin-bottom: 0;
    }
}


.bodymessage{
    background-color: #f2f2f2;
    margin-top: 44px;
    width: 100%;
    input{
        border: none;
        outline: none;
    }
    .inputitem_wrper{
      height:50 px;
      line-height: 50px;
      font-size: 16px;
      color: #666;
      padding: 5px;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      width: 100%;

      input{
          background-color: #f2f2f2;
          font-size: 16px;
          color: #666;
          width: 2rem;
          text-align: center;
          
      }
     
    }


    
}
//用户头像处理
.av_file{
    display: none;

}
.av_img{
    height:40px;
    width: 40px;
    margin-right: 10px;
    .labelimg{
         height:40px;
         width: 40px;
    }
   img{
    height:40px;
    width: 40px;
    vertical-align: middle;
    
   }
}

</style>
