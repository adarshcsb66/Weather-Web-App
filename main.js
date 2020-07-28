const api={
    key:"c4ac908c9a7921b5042a98a61d39aefc",
    baseurl:"https://api.openweathermap.org/data/2.5/"
}

const searchbox=document.querySelector('.search-box');
searchbox.addEventListener('keypress',myFunc);

function myFunc(keyPressed)
{
    if(keyPressed.keyCode==13)
    {
        fillValues(searchbox.value);
        console.log(searchbox.value);
    }
}
function convToJSON(input)
{
    return input.json();
}

function fillValues (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(convToJSON).then(display);
  }

function display(weather)
{
    console.log(weather);
    const temp=document.querySelector('.temperature');
    temp.innerHTML=`${weather.main.temp}°C`;
    const place=document.querySelector('.city');
    place.innerHTML=`${weather.name},${weather.sys.country}`;
    const range=document.querySelector('.hi-low');
    range.innerHTML=`${weather.main.temp_min}°C-${weather.main.temp_max}°C`;
    const w=document.querySelector('.weather');
    w.innerHTML=weather.weather[0].description;
    const descr=weather.weather[0].main;
    if(descr=="Clear")
    {
        document.body.style.backgroundImage="url(clearSky.jpg)";
    }
    else if(descr=="Clouds")
    {
        document.body.style.backgroundImage="url(cloudy.jpg)";
    }
    else if(descr=="Haze")
    {
        document.body.style.backgroundImage="url(haze.jpg)";
    }
    else if(descr=="Mist")
    {
        document.body.style.backgroundImage="url(mist.jpg)";
    }
    else if(descr=="Rain")
    {
        document.body.style.backgroundImage="url(rain.jpg)";
    }
}