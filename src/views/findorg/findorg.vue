//寻找组织页面

<template>
    <div class="lookgroup_eraper">
        <div class="lookgroup_header">
              <Header></Header>
        </div>
         <div class="look_inner">
             <div id="mapwraper">

             </div>
         </div>
    </div>
</template>
<script>
    export default
    {
        name:'lookgroup',
        methods:{
            initmap(){
                var map = new BMap.Map("mapwraper");    
                map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    
                map.addControl(new BMap.NavigationControl(
                    {
                        anchor:BMAP_ANCHOR_TOP_LEFT,
                        //显示定位
                        enableGeolocation: true                 
                }));
                 var geolocationControl = new BMap.GeolocationControl();
                geolocationControl.addEventListener("locationSuccess", function(e){
                    // 定位成功事件
                    var address = '';
                    address += e.addressComponent.province;
                    address += e.addressComponent.city;
                    address += e.addressComponent.district;
                    address += e.addressComponent.street;
                    address += e.addressComponent.streetNumber;
                });
                map.addControl(geolocationControl)
            }
        },
        components:{
       Header:()=>import ('../../components/comonheader/Header')
        }
        ,
        created(){
            this.$nextTick(()=>{
                this.initmap()
            })
        }

    }
</script>


<style scoped lang = 'scss'>
   #mapwraper{
       width:100%;
       position: absolute;
       top: 44px;;
       bottom: 0;
       left: 0;

   }   
</style>
