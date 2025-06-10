





let btns = document.querySelector(".btn");
let searchbox = document.querySelector("#city");


async function checkWeather(city){
 

    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${5653a0648b98f11431c3e8a1a89b6140}&units=metric`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".humid").innerHTML = Math.round(data.main.humidity);
    document.querySelector(".press").innerHTML = Math.round(data.main.pressure);

}

btns.addEventListener('click',()=>{
    checkWeather(searchbox.value);
})








