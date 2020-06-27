
document.addEventListener('DOMContentLoaded', () => {
const dropdown = document.querySelector('#breed-dropdown');
let breeds = [];
let breedDropdown = document.querySelector('#breed-dropdown');

  breedDropdown.addEventListener('change', function (event) {
    selectBreed(event.target.value);
  });

function selectBreed(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

  function updateColor(e) {
    e.target.style.color = 'DarkMagenta';
  }

function addImage(dogImageUrl) {
  let imgContainer = document.querySelector('#dog-image-container')
  let newImage = document.createElement('img')

  newImage.src = dogImageUrl;
  console.log(newImage)
  imgContainer.appendChild(newImage);

}

function updateBreedList(breeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
  }


function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}

function getImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
   .then(res => res.json())
   .then(data => {

     data.message.forEach(dogImageUrl => addImage(dogImageUrl))

   })

 }

 function getBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
   .then(res => res.json())
   .then(data => {
      breeds = Object.keys(data.message);
      updateBreedList(breeds)
      // addDropListener()
     })

 }
getBreeds();
getImages();

console.log(breeds[0])

})

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

//
// method: 'POST',
// headers: {
//   'Content-Type': 'application/json',
//   Accept: 'application/json'
// },
// body: JSON.stringify({
