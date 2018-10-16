<template>
    <div class="login_wraper">
         <div class="login_inner">
                  <div class="login_header clearfix">
                         <div class="login_back fl" >
                            <span @click='backlastpage'>&lt;</span>
                         </div>
                        <span class="login_test">登录</span>
                  </div>
                  <div class="login_content">
                         <div class="login_logo">
                               <img src="./img/logo.png" alt="">
                         </div>
                         <div class="login_form">
                                <form  :model="formdata">
                                    <input type="text" placeholder="输入身份证号" v-model="formdata.idcard">
                                    <input type="password" placeholder="输入密码" v-model="formdata.pass">
                                    <button class="login_btn" type="button" @click="sublogin">登陆</button>
                                </form>
                         </div>
                  </div>
         </div>
    </div>
</template>
<script>
      export default
      {
          name:'login',
          data(){
              return{
                  formdata:{
                      idcard:'',
                      pass:""
                  }
              }
          },
          methods:{
              backlastpage(){
                if(this.$store.state.historypath){
                       this.$router.push(`/${this.$store.state.historypath}`)
                        this.$store.commit('CHANGEHHISTORY','')
                  }
                 else{
                     this.$router.push('/')
                 }
              }
              ,
              sublogin(){
                  if(this.formdata.idcard && this.formdata.pass){
                      this.$axios.post('/admin/login',this.formdata).then(res=>{
                          if(res.code == 200){
                              this.$store.commit('CHANGEUSERINFO',res.data)
                              setTimeout(()=>{
                                  this.$router.push('/mypaty')
                              },500)
                          }else{
                              console.log(res)
                          }
                      }).catch(err=>{
                          console.log(err)
                      })
                  }else{
                     this.$alert('输入框内容不可以为空')
                  }
              }
          },
          created(){
            //   console.log(this.$route)
          }
      }
</script>

<style scoped lang = 'scss'>
.login_content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #c50206;
}
.login_header{
    height: 44px;
    line-height: 44px;
    background-color: #c50206;
    text-align: center;
    .login_test{
        font-size: 18px;
        color: #fff;
    }

}

.login_back{
    color: #fff;
    font-weight: normal;
    font-size: 17px;
    margin-left: 10px;
}
.login_logo{
    padding: 30px;
    background-color: #c50206;
    text-align: center;;
    img{
        height: 48px;;
    
    }
}
.login_form{
    padding: 0 30px 0 30px;
    input{
        border: 1px solid #ff0;
        color: #fff;
        height: 44px;
        display: block;
        margin: 15px auto;
        width: 100%;
        background: #c50206;
        border-radius: 6px;
        font-size: 16px;
        padding: 5px;

    }
    .login_btn{
        width: 100%;
        background-color: #e3574f;
        font-size: 15px;
        color: #fff;
        text-align: center;
        height: 44px;
        display: block;
        line-height: 44px;
        border:1px solid #e3574f;
        border-radius: 5px;
    }
}
</style>
