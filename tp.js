const request = require('request');
const axios = require('axios');

const API_KEY = '38f9264b8e345e5059d64b5e08c19663';
const CITY = 'Sousse';
const LANG = 'fr';
const UNITS = 'metric';


const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&lang=${LANG}&units=${UNITS}&appid=${API_KEY}`;

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    console.log("avec request");
    console.log('Description:', data.weather[0].description);
    console.log('Température:', data.main.temp);
    console.log('Humidité:', data.main.humidity);
  } else {
    console.log('Erreur:', error);
  }
});



axios.get(url)
  .then(response => {
    console.log("avec axios");
    const data = response.data;
    console.log('Description:', data.weather[0].description);
    console.log('Température:', data.main.temp);
    console.log('Humidité:', data.main.humidity);
  })
  .catch(error => console.error('Erreur:', error));
  
  

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("avec fetch"); 
    console.log('Description:', data.weather[0].description);
    console.log('Température:', data.main.temp);
    console.log('Humidité:', data.main.humidity);
  })
  .catch(error => console.error('Erreur:', error));