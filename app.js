
function weatherApp(){

    //openWeather api key
    const appKey = '4222b0d433add9a858a4494e195d3258';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Yerevan&units=metric&appid=${ appKey }`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(json => {

           /*  if(json.code === 404){
                weatherBox.style.display = 'none';
            }
        */
            const weatherBox = document.querySelector('.weatherBox');
            const temperature = document.querySelector('.temperature');
            const description = document.querySelector('.description');
            const humidity = document.querySelector('.humidity');
            const wind = document.querySelector('.wind');
            const image = document.querySelector('.image');

            switch(json.weather[0].main){
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'images/clouds.png';
                    break;
                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `humidity - ${json.main.humidity}%`;
            wind.innerHTML = `wind - ${parseInt(json.wind.speed)} km/h`;

            

        })
    

}





weatherApp();