<template>
      <div class="header clearfix">
                <div class="login_back fl" >
                     <span @click='backlastpage'>&lt;</span>
                </div>
                 <span class="login_test">{{message}}</span>
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
               return  this.mess
            }
        },
        methods:{
                 backlastpage(){
                  console.log('...')
                  this.$router.push('/')
              }
        }
    }
</script>

<style lang="scss" scoped> 
.header{
    height: 44px;
    line-height: 44px;
    background-color: #c50206;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    .login_back{
        font-size: 17px;
        color: #fff;
        margin-left: 10px;
    }
    .login_test{
        font-size: 18px;
        color: #fff;
    }

}
</style>
















