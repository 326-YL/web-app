const myapikey='a023094a3acbc088dc5a55efe73c2e6d'
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
(()=>{
 navigator.geolocation.getCurrentPosition(onSuccess,onError)
 function onSuccess(position){
    console.log('find')
     const {
        latitude,
        longitude
     }=position.coords;
     url='https://api.openweathermap.org/data/2.5/weather?units=metric&'
    value=`lat=${latitude}&lon=${longitude}`
    getWeatherData(value,url)
 }
 function onError(position){
 }
})();
async function getWeatherData(value,url){
    const response=await fetch(url+value+`&appid=${myapikey}`)
    let data=await response.json();
    console.log(data)
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    let weatherIcon=document.querySelector(".weather-icon");
    const icon=data.weather[0].icon;
    weatherIcon.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
    console.log(data.weather[0].icon)
}
searchBtn.addEventListener("click",()=>{
    console.log('clicked')
    getWeatherData(searchBox.value,apiUrl);
})

