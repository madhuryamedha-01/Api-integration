async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '40a7d4503a10dc35b03c62bba297b647'; // your key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('City not found');
    const data = await res.json();
    console.log(data); // helpful for debugging

    const html = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <h3>${data.main.temp}°C</h3>
      <p>${data.weather[0].main}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon" />
    `;
    document.getElementById('weatherInfo').innerHTML = html;
  } catch (error) {
    console.error(error);
    document.getElementById('weatherInfo').innerHTML =
      `<p style="color: #ffdddd;">${error.message}</p>`;
  }
}
