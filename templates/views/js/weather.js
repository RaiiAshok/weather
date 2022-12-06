var latitude = document.querySelector("#latitude");
var longitude = document.querySelector("#longitude");
var formSubmit = document.querySelector("#formSubmit");
var messageOne = document.querySelector("#messageOne");
var messageTwo = document.querySelector("#messageTwo");

// var url = "http://api.weatherstack.com/current?access_key=a2dfb1b6f8ee305fef919f8d2d16aa1f&query=27.9881, 86.9250";
var url = "http://api.weatherstack.com/current?access_key=a2dfb1b6f8ee305fef919f8d2d16aa1f&query=" + latitude.value + "," + longitude.value;
console.log(27.9881, 86.9250);
messageOne.textContent = 'loading...';
messageTwo.value = ''

formSubmit.addEventListener("click", function submitData(e) {
    e.preventDefault();


    // request({ url: url, json: true }, (error, response) => {
    fetch(url).then((response) => {
        response.json().then((data) => {

            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = "Location: " + data.location.name;
                messageTwo.textContent = "Temperature: " + data.current.temperature;
            }
        })
    });

    // messageOne.textContent = latitude.value;
    // messageTwo.textContent = longitude.value;

});