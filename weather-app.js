let weather={
    "apiKey": "your key",
    fetchWeather: function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey
        ).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description}= data.weather[0];
        const {temp, humidity} = data.main;
        const {speed}= data.wind;
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?" + name + "')";
        document.querySelector('.city').textContent= name;
        document.querySelector('.temp h1').textContent= temp + " *C";
        document.querySelector('.temp img').src= "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.temp span').textContent= description;
        document.querySelector('.hu').textContent= humidity + "%";
        document.querySelector('.wi').textContent= speed + " km/h";
    },
    searchCity: function(){
        weather.fetchWeather(document.querySelector('.searchbar').value);
    }
}
document.querySelector('.searchbutton').addEventListener('click', function(){
    weather.searchCity();
});
document.querySelector('.searchbar').addEventListener('keyup', function(e){
    if(e.key == 'Enter')
        weather.searchCity();
});
weather.fetchWeather("Delhi");
