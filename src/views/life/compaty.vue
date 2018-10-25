<template>
    <div class="compaty_wraper">
          <div class="compaty_inner">
                <Header :mess='mess'></Header>
          </div>
    </div>
</template>

<script>
export default
{
    name:'compaty',
    data(){
        return{
            mess:'参评党员'
        }
    },
    components:{
        Header: ()=> import ('../../components/comonheader/Header.vue')
    }
}
    
</script>

<style scoped lang='scss'>

</style>



















