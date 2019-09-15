
var homedata = {
    data_status:false,
    data:{},
};
var app = new Vue({
    el:'#content',
    data:homedata,
});


fetch('http://localhost:8000/goods/gethome/',{
    method:'GET',
    mode:"cors",
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
    }
}).then(response=>response.json()).then(data=>{
    if (homedata.data){
        homedata.data_status = true;
        homedata.data = data;
        console.log(data);
        var gallery = mui('.mui-slider');
        gallery.slider({
        interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
        });
    }else{
        alert('网络链接失败！');
    }
});
