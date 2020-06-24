console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded",function (){

  fectDogImages()
  fetchDogBreed()
  addEventToDropdown()

})

function fectDogImages(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    json.message.forEach(element => {
      addimage(element)
    });
  })

}

function addimage(imageUrl){
  let container = document.querySelector('#dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = imageUrl;
  container.appendChild(newImageEl);
}

function fetchDogBreed(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    for (const breed in json.message){
      addBreedToList(breed)
    }
    addEventToLis()
  })
}

function addBreedToList(breed){
  const dogList = document.querySelector("#dog-breeds")
  dogList.insertAdjacentHTML("afterbegin",`<li>${breed}</li>`)
}

function addEventToLis(){
  const liItems = document.querySelectorAll("ul#dog-breeds li")
  liItems.forEach(element => {
    element.addEventListener("click",function(e){
      e.target.style.backgroundColor = "red"  
    })
  });
}


function addEventToDropdown(){
  const dropdown = document.querySelector("#breed-dropdown")
  console.log(dropdown)
  dropdown.addEventListener("change",function(e){
    const letter = e.target.value
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      const dogList = document.querySelector("#dog-breeds")
      dogList.innerHTML = ""
      let dogBreeds = json.message
      for (const breed in dogBreeds){
        if (breed.startsWith(letter)){
        addBreedToList(breed)
        }
      }
      addEventToLis()
    })
    })
}





