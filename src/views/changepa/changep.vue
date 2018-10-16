
//修改个人密码
<template>
    <div class="userinfo_wraper">
        <div class="uerinfo_innner">
                 <div class="info_header">
                     <Header :mess ='mess'></Header>
                 </div>
                 <div class="changpass_eraper">
                     <mu-text-field v-model="oldpass" label="旧密码" 
                     type="password">
                     </mu-text-field>
                       <mu-text-field v-model="newpass" label="新密码" 
                     type="password">
                     </mu-text-field>
                       <mu-text-field 
                       v-model="checkpas" 
                       label="确认密码" 
                     type="password">
                     </mu-text-field>
                   
                 </div>
                   <mu-button 
                   color="secondary" 
                   v-loading="loading1" 
                   data-mu-loading-size="24" 
                   @click="changepass">提交</mu-button>
        </div>

    </div>
</template>
<script>
    export default
    {
        name:'changepass',
        data(){
            return{
              mess:'修改密码'  ,
              newpass:'',
              checkpas:'',
              oldpass:'',
              loading1:false


            }
        },
         components:{
              Header:()=>import ('../../components/comonheader/Header.vue')
        },
        methods:{
            changepass(){
                this.loading1 = true
                 let idcard = this.$store.state.userinfo.idcard
                 let  newpass = this.newpass
                  if(this.newpass  != this.checkpas){
                     this.$alert('两次输入的密码不一样')
                     this.loading1 = false
                 }
                 else if(this.oldpass){
                     this.$axios.post('/admin/changpas',{idcard , newpass}).then(res=>{
                         if(res.code == 200)
                         {
                           setTimeout(()=>{
                                  this.$router.push('/mypaty')
                                  this.loading1 = false
                           },500)
                         }
                     })
                 }else{
                     this.$alert('旧密码不可以为空')
                 }
               
            }
        }
    }
</script>

<style scoped lang = 'scss'>

.changpass_eraper{
    margin-top:2.4rem;
    text-align: center;
    font-size: 16px;
    padding-bottom: 40px;
}
.subbtn{

    width: 5rem;
    margin: 0 auto;
    height: 44px;
    box-sizing: border-box;
}
.uerinfo_innner{
    text-align: center;
}

</style>























