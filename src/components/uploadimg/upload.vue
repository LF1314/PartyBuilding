<template>
    <div class="upload_wraper">
         <label  class="inputimg" @change="uploadimg">
              <img v-if="!imgurl"  :src="noloadimg" class="laodimg" alt="">
              <img v-else :src="imgurl" width="100%" alt="">
             <input :disabled ='disable' type="file"  class="inputitem">
         </label>
         <div class="picmessage">
              <mu-text-field 
              v-model="picName" 
              placeholder="picName..."
             :disabled ='disable'
              ></mu-text-field>
               <mu-text-field 
               v-model="picDesc" 
               placeholder="picDesc...."
               :disabled ='disable'
               ></mu-text-field>
         </div>
         <div class="querenbtn" >
               <mu-button v-show="!disable" @click="canimgmes">确认图片信息</mu-button>
         </div>
    </div>
</template>
<script>
import axios from 'axios'
import noloadimg from './加号.png'
    export default
    {
        name:'upload',
        data(){
            return{
                noloadimg,
                imgurl:'',
                picName:'',
                picDesc:'',
                token:'',
                disable:false
            }
        },
        methods:{
            //获取token
              gettoekn() {
             axios.get("http://upload.yaojunrong.com/getToken").then(res => {
             this.token = res.data.data;
           });
                },
            //上传图片
            uploadimg(e){
               let file = e.target.files[0]
               let formdata = new FormData()
               formdata.append('file',file)
               formdata.append('token',this.token)
                   axios.post('https://upload-z1.qiniup.com',formdata).then(res=>{
                     this.imgurl = res.data.url
                    this.$emit('getimg',this.imgurl)
                 })
            },
            canimgmes(){
                let obj = {}
                obj.picName = this.picName
                obj.picDesc = this.picDesc
                obj.picUrl  =  this.imgurl
                this.disable = true;
                this.$emit('getimges' ,obj)
               

            }

        },
        created()
        {
            this.gettoekn()
            this.disable = false;
        }
    }
</script>

<style scoped lang = 'scss'>
.picmessage{
    width: 4rem;
}
.upload_wraper{
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;;
}
.inputimg{
    flex: 0 0 2rem;
    height: 2rem;
    width: 2rem;
    margin-right: 10px;
    text-align: center;
    display: block;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    .laodimg{
        width: 1rem;
        height: 1rem;
        display: block;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
 .inputitem{
   display: none;
 }
</style>
