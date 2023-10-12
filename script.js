navigator.geolocation.getCurrentPosition((position) => {
    const p = position.coords;
    const lat = p.latitude;
    const lng = p.longitude;
    console.log(lat, lng)

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?"
    const apiKey = "23d8c898e2f9738a51ab8c068dd9760d"
    async function checkWeather() {
        const response = await fetch(apiUrl + `lat=${lat}&lon=${lng}` + `&appid=${apiKey}` + "&units=metric ");
        var data = await response.json();

        console.log(data);
        document.querySelector(".location").innerHTML = (data.name);
        document.querySelector(".tempNum").innerHTML = Math.round(parseInt(data.main.temp));
        document.querySelector(".feels p2").innerHTML = Math.round(parseInt(data.main.feels_like));
        document.querySelector(".wind p").innerHTML = data.weather[0].main;
      
        if (data.weather[0].icon === "01d") {
            document.querySelector(".top img").src = "/img/01d.png" 
             document.querySelector(".bg").style.backgroundImage = 'url(/img/sun.jpg)'
    
        }
        if (data.weather[0].icon === "02d" || data.weather[0].icon === "03d") {
            document.querySelector(".top img").src = "/img/02d.png"
            document.querySelector(".bg").style.backgroundImage = 'url(/img/suncloud.jpg)'
        }
        if (data.weather[0].icon === "04d") {
            document.querySelector(".top img").src = "/img/04d.png"
        }
        if (data.weather[0].icon === "10d" || data.weather[0].icon === "09d") {
            document.querySelector(".top img").src = "/img/10d.png"
            document.querySelector(".bg").style.backgroundImage = 'url(/img/rain.jpg)'
        }
        if (data.weather[0].icon === "11d") {
            document.querySelector(".top img").src = "/img/11d.png"
            document.querySelector(".bg").style.backgroundImage = 'url(/img/thunder.jpg)'
        }
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const d = new Date();
        let day = weekday[d.getDay()];
        document.querySelector(".day").innerHTML = day

    }
    checkWeather();
})