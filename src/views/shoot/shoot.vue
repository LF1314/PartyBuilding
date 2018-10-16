<template>
    <div class="shoot_wraper">
        <div class="shoot_header">
            <Header :mess='mess'></Header>
        </div>
    </div>
</template>

<script>
    export default
    {
        name:'shoot',
        data(){
            return{
                mess:'随时随地拍'
            }
        }, 
        components:{
              Header:()=>import ('../../components/comonheader/Header.vue')
        }
    }
</script>
<style>


</style>
