
const apiKey = '62ac20c1f5622b53789f4e8e766ede00'
const displayWeather = () =>{
    const searchText = document.getElementById('search-input').value;
    document.getElementById('search-input').value = ''
    document.getElementById('error-display').innerText = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText }&appid=${apiKey}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then ( data => getDisplay(data))
    .catch(error => displayError('your search is not matching'))
}
const getDisplay = data => {
    document.getElementById('icon').setAttribute('src' ,`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('clouds').innerText =data.weather[0].main;
}
// const getDisplay = data =>{
//     const Display = document.getElementById('get-display')
//     Display.innerHTML = ''
//         const addDiv = document.createElement('div');
//         addDiv.className = ` class="weather-status text-white text-center" `
//         addDiv.innerHTML = `
//         <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)' alt="">
//             <h1 id="name"> ${data.name}</h1>
//             <h3><span>${data.main.temp}</span>&deg;C</h3>
//             <h1 id="clouds" class="lead">${data.weather[0].main}</h1>
//         `
//         Display.appendChild(addDiv)
   
// }
const displayError = error =>{
   document.getElementById('error-display').innerText = error;
  
}