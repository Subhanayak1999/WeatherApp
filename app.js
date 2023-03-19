const userinput=document.getElementById("userinput")
const btn=document.getElementById("btn")
async function getweather(){
    const responce=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userinput.value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    const data=await responce.json()
    const head=document.getElementById("head")
    const skycondition=document.getElementById("skycondition")
    const tempr=document.getElementById("temp")
    const windspeed=document.getElementById("windspeed")
    head.innerText=`Weather of ${userinput.value}`
    skycondition.innerText=`Sky Condition: ${data.weather[0].description}`
    tempr.innerText=`Temperature: ${data.main.temp}`
    windspeed.innerText=`Wind Speed: ${data.wind.speed}`

}
btn.addEventListener("click",getweather)