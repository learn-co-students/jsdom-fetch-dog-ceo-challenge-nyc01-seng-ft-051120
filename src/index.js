console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", e => {
    addImages()
    
    loadBreeds()
})

const addImages = () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(results => results.message.forEach(image => addImage(image)));
    
}

const addImage = (url) => {
    const imgContainer = document.getElementById("dog-image-container")
    const newImg = document.createElement("img")
    newImg.src = url
    imgContainer.append(newImg)

    
    
}

const loadBreeds = () => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(results => {
            breeds = Object.keys(results.message)
          
           
            
            // updateBreedsList(breeds);
            // addBreedSelectListener();
            addBreeds(breeds)

        })
        

        
        
        // const updateBreedsList = () => {
        //     console.log("hi2");
            
        //     let ul = document.querySelector("#dog-breeds")
        //     removeChildren(ul)
        //     breeds.forEach(breed => addBreeds(breed))
        // }
        
        // const removeChildren = (element) => {
        //     console.log("hi3");
        //     let child = element.lastElementChild;
        //     while (child) {
        //       element.removeChild(child);
        //       child = element.lastElementChild;
        //     }
        // }
        
        // const selectBreedsStartingWith = (letter) => {
        //     console.log("hi4");
        //     updateBreedsList(breeds.filter(breed => breed.startsWith(letter)))
        // }
        
        // const addBreedSelectListener = () => {
            
        //     let breedDropdown = document.querySelector("#breed-dropdown")
        //     breedDropdown.addEventListener("change", e => {
        //         selectBreedsStartingWith(e.target.value)
        //         console.log("hey");
        //     })
        // }
            
        const addBreeds = () => {
            const breedUl = document.getElementById("dog-breeds")
            
            // breeds.forEach(breed => {
            //     let breedLi = document.createElement("li")
            //     breedLi.innerText = breed
            //     breedUl.append(breedLi)
            // })
        
            for (i = 0; i < breeds.length; i++ ) {
                let breedLi = document.createElement("li")
                breedLi.innerText = breeds[i]
                // breedLi.dataset.number === breeds[i].id
                breedUl.append(breedLi)
            }

            breedUl.addEventListener("click", e => {
                if (e.target.matches("li")){
                    e.target.style.color = "palevioletred"
                }
            })
           
        }
            
    

       
}

