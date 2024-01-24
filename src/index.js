function showTemperature(response) {
  let tempValueElement = document.querySelector("#temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  tempValueElement.innerHTML = `${temperature}`;

  let bodyElement = document.body;
  // Add the blur class to the body after a search
  bodyElement.classList.add("blur-background");

  // Update the temperature image based on the temperature
  let temperatureImageElement = document.querySelector("#temperature-image");
  updateTemperatureImage(temperatureImageElement, temperature);

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

function updateTemperatureImage(imageElement, temperature) {
  if (temperature < 10) {
    imageElement.querySelector("img").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/111/827/original/snow-day_%281%29.png?1706026047";
  } else if (temperature > 30) {
    imageElement.querySelector("img").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/111/914/original/R.png?1706076823";
  } else {
    imageElement.querySelector("img").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/111/826/original/clear-sky-day.png?1706026013";
  }
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  let apiKey = "117da7948a04330f7fb96d315918tcdo";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

// Add an event listener to the search form
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
