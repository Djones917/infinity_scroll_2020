const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];



// UNSPLASH API
const count = 30;
const apiKey = '4DVV1N03R9y736qXG9fVSyI9GeNF8PY4wcwzSktM51g';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;



// Check if all images were loaded
function imageLoaded() {  
  imagesLoaded++;  
  if (imagesLoaded === totalImages) {
     ready = true;
     loader.hidden = true;     
  }
}



// Helpter function to set attributes on DOM elements
function setAttributes(element, attributes) {
   for (const key in attributes) {
     element.setAttribute(key, attributes[key]);
   } 
}



// Create elements for links, photos add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;  
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
    // Event Listener, check when each is finish loading
    img.addEventListener('load', imageLoaded);
    // Put img inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
} 



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



// Check to see if scrolling near bottom of the pag, load more photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();    
  }
});

// ON LOAD
getPhotos();

// Finished for now