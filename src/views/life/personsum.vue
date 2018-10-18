//个人总结页面
<template>
<div class="personsum_wraper">
      <div class="person_inner">
             <div class="person_header">
                  <Header></Header>
             </div>
             <!-- 图片上传的外部包裹层 -->
             <div class="upload_img_wraper">
                  <div class="uplads">  
                          <component  :is="comm"  @getimges='getimgess'></component>
                          <component  :is="comm2"  @getimges='getimgess'></component>
                          <component  :is="comm3"  @getimges='getimgess'></component>
                 </div>  
             </div>
             <div class="summary_content">
                   <textarea placeholder="请输入个人总结..." class="textarea" v-model="summary" rows="5"></textarea>
             </div>
             <div class="btn_wraper">
                   <mu-button color='error' class="tijoaitem" @click="getsenhe">
                       提交审核
                   </mu-button>
             </div>
      </div>
</div>
    
</template>
<script>
import Vue from 'vue'
import upload from '../../components/uploadimg/upload'

    export default
    {
        name:'personsummary',
        data(){
            return{
                comm:'upload',
                comm2:'',
                comm3:'',
                summary:'',
                piclist:[]
            }
        },
        components:{
            Header:()=>import('../../components/comonheader/Header.vue'),
            upload,
            upload2:upload
   
        },
        methods:{
            getimgess(val)
            {
                this.piclist.push(val)
                console.log(this.piclist)
                this.adduploader()
            },
            //挂载更过的dom
          adduploader(){
              if(this.piclist.length == 3){
                //   console.log(this.piclist)
                  this.$alert('上传图片已经达到上限')
              }else if(this.piclist.length == 1)
              {
                  this.comm2 = 'upload'
              }
              else{
                 this.comm3 = 'upload'
              }
          },
          //提交审核
         getsenhe(){
             let summary = this.summary
             let commentId = this.$store.state.userinfo._id
              this.$axios.post('/summary/addsum',{
            piclist:this.piclist,
            summary,
            commentId
            }).then(res=>{
                console.log(res)
                if(res.code == 200)
                {
                    this.$alert('个人总结提交成功！')
                }
            })
         }

        }
    }
</script>
 
<style scoped lang = 'scss'>
.upload_img_wraper{
    margin-top: 50px;
    padding: 10px;
}

.summary_content{
    padding: 10px;
    background-color: #f2f2f2;
}
.textarea{
    outline: none;
    width: 100%;
    font-size: 18px;
    color: #999;
    background-color: #fff;
    border: none;
    padding: 4px;
    border-radius: 3px;
}
.btn_wraper{
    position: fixed;
    bottom: 1rem;
    width: 100%;
    left: 0px;
    box-sizing: border-box;
    padding: 10px;
    .tijoaitem{
        width: 100%;
        height: 44px;
        font-size: 16px;
        
        ;
    }
}
.uplads{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>
