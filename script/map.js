const selectElement = document.querySelector('select');
let myMap;
var pos = {lat:49.997282139421635, lng:36.23274806001703};
    var pos2 = {lat:49.95164541573098, lng:36.350773054254766};
function initMap() {
        document.getElementById("map").style.height = "500px";
        const coords = pos;
        myMap = new google.maps.Map(document.getElementById("map"), {
        center:coords,
        zoom: 17,
    });
    tmp=new google.maps.Marker({ 
        position: pos2, 
        map: myMap, 
    });
    tmp2=new google.maps.Marker({ 
        position: pos, 
        map: myMap, 
    });
    document.getElementById('Work_Time').innerHTML="10:00 - 20:00 Каждый день!";

        document.getElementById('Adress').innerHTML="Ул. Сумская, 19";

        document.getElementById('Phone').innerHTML="+38(099)-617-14-32";

        document.getElementById('Rate').innerHTML="4.4";

        document.getElementById('Website').innerHTML="https://www.devicemarket.com.ua";
}

selectElement.addEventListener('change', (event) => {
    if (selectElement.value==1)
    {
        myMap = new google.maps.Map(document.getElementById("map"), {
            center:pos,
            zoom: 17,
        });
        tmp=new google.maps.Marker({ 
            position: pos2, 
            map: myMap, 
        });
        tmp2=new google.maps.Marker({ 
            position: pos, 
            map: myMap, 
        });
        document.getElementById('Work_Time').innerHTML="10:00 - 20:00 Каждый день!";

        document.getElementById('Adress').innerHTML="Ул. Сумская, 19";

        document.getElementById('Phone').innerHTML="+38(099)-617-14-32";

        document.getElementById('Rate').innerHTML="4.4";

        document.getElementById('Website').innerHTML="https://www.devicemarket.com.ua";
    }
    else
    {
        myMap = new google.maps.Map(document.getElementById("map"), {
            center:pos2,
            zoom: 17,
        });
        tmp=new google.maps.Marker({ 
            position: pos2, 
            map: myMap, 
        });
        tmp2=new google.maps.Marker({ 
            position: pos, 
            map: myMap, 
        });
        document.getElementById('Work_Time').innerHTML="12:00 - 20:00 Каждый день!";

        document.getElementById('Adress').innerHTML="Ул. Академика Филиппова, 49";

        document.getElementById('Phone').innerHTML="+38(066)-656-75-56";

        document.getElementById('Rate').innerHTML="4.1";

        document.getElementById('Website').innerHTML="https://www.devicemarket.com.ua";
    }
});




