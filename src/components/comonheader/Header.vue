<template>
      <div :class="changeheader()">
                <div class="login_back" >
                     <span @click='backlastpage'>&lt;</span>
                </div>
                 <span class="login_test">{{mess ? mess : message}}</span>
       </div>
</template>

<script>
    export default
    {
        name:'Header',
        props:{
            mess:{
                type:String
            }
        },
        computed:{
            message(){
               return  this.$route.meta
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
                
              },
              changeheader(){
                  if(this.mess =='通知早知道')
                  {
                      return 'common header2';
                  }
                  else{
                    return 'common header'
                  }
              }
        },
        watch:{
         
        }
    }
</script>

<style lang="scss" scoped> 
.common{
  height: 44px;
    line-height: 44px;
    background-color: #c50206;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    .login_test{
        font-size: 18px;
        color: #fff;
    }
}
.header{
    .login_back{
        font-size: 17px;
        color: #fff;
        margin-left: 10px;
        position: absolute;
        left: 0;;
        top:0;
    }
}
.header2{
    .login_back{
        display: none;

    }

}
</style>
















