const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');



let photosArray = [];



// Helpter function to set attributes on DOM elements
function setAttributes(element, attributes) {
   for (const key in attributes) {
     element.setAttribute(key, attributes[key]);
   } 
}



// Create elements for links, photos add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to unsplash
    const item = document.createElement('a');
    
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create img for photo
    const img = document.createElement('img');
    
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put img inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
} 



// UNSPLASH API
const count = 10;
const apiKey = '4DVV1N03R9y736qXG9fVSyI9GeNF8PY4wcwzSktM51g';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from api
async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {
       // Catch error here

    }
}

// ON LOAD
getPhotos();

