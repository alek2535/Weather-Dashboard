const apiKey = '&units=imperial&APPID=c167a217ff93e0a818f3ac4d35414965';
const currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q='
const fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?q=';
// const userInput = document.getElementById('user-input')
// let userInputValue = userInput.value
const submitBtn = document.getElementById('submit');

//Fetch API
function fetchAPI(url) {
    return fetch(url)
                // .then(checkStatus)
                .then(response => console.log(response.json()))
                .catch(error => console.log(error))
}


//Check Status
// function checkStatus(response) {
//     if (response.ok) {
//         return Promise.all.resolve(response);
//     } else {
//         return Promise.reject(new Error(response.statusText));
//     }
// }

submitBtn.addEventListener('click', function() {
    event.preventDefault();
    const userInput = document.getElementById('user-input');
    let userInputValue = userInput.value;

    fetchAPI(fiveDay + userInputValue + apiKey);
})