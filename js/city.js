var homedata = {
    data_status: false,
    data: {},
    area: {}
};
var app = new Vue({
    el: '#content',
    data: homedata,
    methods: {
        area_city: function (id) {
            fetch('http://localhost:8000/city/area/?one_id=' + id, {
                method: 'GET',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                }
            }).then(response => response.json()).then(data => {
                if (homedata.data) {
                    homedata.area = data;
                    console.log(data)
                    $('#myModal').modal('show')
                } else {
                    alert('网络链接失败！');
                }
            });
        },
        set_city: function (city_id) {
            console.log(city_id);
            fetch('http://localhost:8000/city/set_city/', {
                method: 'POST',
                mode: "cors",
                body: JSON.stringify({"area_id": city_id}),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                }
            }).then(response => response.json()).then(data => {
                console.log(data.status);
                if (data.status === 200) {
                    open('index.html', target = '_self')
                    // alert('123')
                } else {
                    alert('地区选择失败！');
                }
            });

        }
    }
});


fetch('http://localhost:8000/city/get_city/', {
    method: 'GET',
    mode: "cors",
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    }
}).then(response => response.json()).then(data => {
    if (homedata.data) {
        homedata.data_status = true;
        homedata.data = data;
        console.log(data)

    } else {
        alert('网络链接失败！');
    }
});
// function area_city(id) {
//     fetch('http://localhost:8000/city/get_city/?one_id='+id,{
//         method:'GET',
//         mode:"cors",
//         headers:{
//             'Content-Type': 'application/json;charset=utf-8',
//         }
//     }).then(response=>response.json()).then(data=>{
//         if (homedata.data){
//             homedata.area = data;
//             console.log(data)
//             alert(data)
//         }else{
//             alert('网络链接失败！');
//         }
//     });
// }

