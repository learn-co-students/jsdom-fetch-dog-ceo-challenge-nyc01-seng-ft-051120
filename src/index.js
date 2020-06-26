console.log('%c HI', 'color: firebrick')
let breeds = []
document.addEventListener("DOMContentLoaded", function(e){
  postDogImages();
  getDogBreeds()
})

function postDogImages(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(data => {
    data.message.forEach(pic => {
     let dogCon = document.querySelector('#dog-image-container')
     let dogPic = document.createElement('img')
     dogPic.src = pic
     dogCon.appendChild(dogPic)
    })
  })
}

    
function getDogBreeds(){  
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
   breeds = Object.keys(data.message)
    breeds.forEach(breed => {
      let container = document.querySelector("#dog-breeds")
      let li = document.createElement('li')
      li.innerText = breed 
      container.append(li)
    })
  })

}


document.addEventListener('click', function(e){
  let dropDown = document.getElementsByTagName('select')
  let maui = document.querySelectorAll('#dog-breeds li')

  let li = e.srcElement
  if (e.target ='li'){
      li.style.color = 'green'
  }
  
})







