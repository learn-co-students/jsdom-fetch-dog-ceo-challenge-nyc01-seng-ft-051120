

document.addEventListener( "DOMContentLoaded", function() {
  
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  
  function renderImage(dogURL){
    const dogsContainer = document.querySelector("#dog-image-container")
    const dogImage = document.createElement("img")
    dogImage.src = dogURL
    dogsContainer.appendChild(dogImage)
  }

  function fetchDogImages(url){
    fetch(url)
    .then(resp => resp.json)
    .then(dogURL => renderImage(url))
  }
  fetchDogImages(imgUrl)
  
  function renderBreed(breedURL){
    const breedsContainer = document.querySelector("#dog-breeds")
    const breed = document.createElement("li")
    
  }

 

});



/*
fetch all the dog breeds using the url above ⬆️
add the breeds to the page in an <ul> (take a look at the included index.html)
*/