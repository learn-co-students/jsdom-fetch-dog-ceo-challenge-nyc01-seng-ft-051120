console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", ()=> {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let imgContainer = document.querySelector("#dog-image-container")
    let ul = document.querySelector("#dog-breeds")
    let breeds = [];

    fetch(imgUrl)
    .then(res =>res.json())
    .then(images => {
        images.message.forEach(image => {
            addImage(image);
        });
    })

    const addImage = image => {
        let dogImg = document.createElement("img")
        dogImg.src = image
        imgContainer.append(dogImg)
    }

    fetch(breedUrl)
    .then(res =>res.json())
    .then(data =>{
        breeds = Object.keys(data.message)
        updateBreedList(breeds);
        addBreedListener();
    })

    const updateBreedList = breeds => {
        let ul = document.querySelector('#dog-breeds');
        removeChildren(ul);
        breeds.forEach(breed => renderBreed(breed));
    }

    const removeChildren = element => {
        console.log(element);
        
        let child = element.lastElementChild;
        while (child) {
            element.removeChild(child);
            child = element.lastElementChild;
        }
    }

    const selectBreedsStartingWith = letter => {
        updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
    }
    const addBreedListener = () => {
        const dropDown = document.querySelector("#breed-dropdown")
        dropDown.addEventListener("change", e => {
            selectBreedsStartingWith(e.target.value);
        })
    }
    const renderBreed = breed => {
            let li = document.createElement('li')
            li.innerText = breed
            li.addEventListener('click', e => {
                e.target.style.color = "#0099ff";
            })
            ul.appendChild(li)
        
    }




})
