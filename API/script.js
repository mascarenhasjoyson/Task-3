function weatherInfo(lat,lon) {
    var key = '4811bc1584cb50aa5404c4fa4f2618af';
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + lon + '&appid=' + key)  
    .then(function(resp) { return resp.json() })
    .then(function(data) {
      console.log(data);
    })
}
var lat=18.5204;
var lon=73.8567;
weatherInfo(lat, lon);