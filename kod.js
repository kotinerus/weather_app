$(document).ready(function(){
  $("#box").hide();
 $("#tempe").click(function(){
  $("#box").show(500);
})
  $("#tempe").dblclick(function(){
    $("#box").hide(500);
})

})
function wyszukanie(){
    x=document.getElementById('miasto').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+x+'&appid=ff83ff9006e5d926d532943cb8e55bb1&units=metric')
    .then(res => res.json())
    .then((out) => {
      console.log(out.main.temp);
      console.log(out.weather);
      console.log(out);
      
    const names = out.weather.map(p => p.main);
    const icon = out.weather.map(p => p.icon);
    document.querySelector("#description").innerText =names  ;
    document.querySelector("#tempe").innerText =out.main.temp +" [Click me!]";
    document.querySelector("#press").innerText =out.main.pressure;
    document.querySelector("#humidity").innerText =out.main.humidity;
    document.getElementById("obrazek").src = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
    document.querySelector("#mintemp").innerText =out.main.temp_min
    document.querySelector("#maxtemp").innerText =out.main.temp_max
    document.querySelector("#feeltemp").innerText =out.main.feels_like
  })
  .catch(err => {
    alert("Nie ma takiego miasta!")
    throw err
    
  });
}