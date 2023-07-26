var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((d1)=>api(d1));

function api(d1){    
    
  for(var i=0; i<d1.length; i++){
      
    let lat=d1[i].latlng[0];
    let lon=d1[i].latlng[1];
    
        var div = document.createElement("div");div.setAttribute("class","rw");
        
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-header"><h2>${d1[i].name}</h2></div>
        <img src="${d1[i].flag}" class="card-img-top" alt="...">
        
        <div class="card-body">
        
          <h6 class="card-title" style="text-align: center">Region: ${d1[i].region}</h6>
          <h6 class="card-title" style="text-align: center">Capital: ${d1[i].capital}</h6>
          <h6 class="card-title" style="text-align: center">Country Code: ${d1[i].alpha3Code}</h6>
          <h6 class="card-title" style="text-align: center">Latitude: ${d1[i].latlng[0]}</h6>
          <h6 class="card-title" style="text-align: center">Longitude: ${d1[i].latlng[1]}</h6>
          <button type="button" style="text-align: center" class="btn btn-primary" onclick=" foo(${lat},${lon})">Weather</button>
        </div>         
      </div>`   
        document.body.append(div);
  }    
}

function foo(a,b){
  var wt= fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=2b16c5e629a727011ce0e14ddaefe357`);
  wt.then((e)=>e.json()).then((e1)=>{ console.log(e1)
    
    alert(` Weather Data
    Temperature: ${e1.main.temp}
    Lat: ${e1.coord.lat}
    Long: ${e1.coord.lon}
    Pressure: ${e1.main.pressure}
    wind: ${e1.wind.speed}
    Humidity: ${e1.main.humidity}
    sea level: ${e1.main.sea_level}
    cloud: ${e1.clouds.all}
    country code: ${e1.sys.country}
    Sunrise: ${e1.sys.sunrise}
    Sunset: ${e1.sys.sunset}
    Sky: ${e1.weather[0].description}`)
   
  });
}