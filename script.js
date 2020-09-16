const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// UNSPLASH API
const count = 10;
const apiKey = '4DVV1N03R9y736qXG9fVSyI9GeNF8PY4wcwzSktM51g';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from api
async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
    } catch (error) {
       // Catch error here

    }
}

// ON LOAD
getPhotos();

