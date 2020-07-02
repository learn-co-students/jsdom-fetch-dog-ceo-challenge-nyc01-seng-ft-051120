console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const breedsUl = document.querySelector("#dog-breeds")

    const getImgs = url => {
        return fetch(url)
        .then(resp => resp.json())
        .then(imgs => renderImgs(imgs["message"]))
    }

    const renderImgs = imgs => {
        imgs.forEach(img => {
            const imgTag = createImgTag(img)
            renderImgTag(imgTag)
        })
    }

    const createImgTag = img => {
        const imgTag = document.createElement("img")
        imgTag.src = img
        imgTag.alt = "random dog picture"
        imgTag.className = "dog-image"
        return imgTag
    }

    const renderImgTag = imgTag => {
        const container = document.querySelector("#dog-image-container")
        container.append(imgTag)
    }

    const getDogBreeds = url => {
        return fetch(url)
        .then(resp => resp.json())
        .then(breeds => renderDogBreeds(breeds["message"]))
    }

    const renderDogBreeds = breeds => {
        Object.keys(breeds).forEach(breedName => {
            const li = createBreedLi(breedName)
            renderBreedLi(li)
        })
    }

    const createBreedLi = breedName => {
        const li = document.createElement('li')
        li.className = "breed"
        li.textContent = breedName
        return li
    }

    const renderBreedLi = li => {
        const breedsUl = document.querySelector("#dog-breeds")
        breedsUl.append(li)
    }

    const clickHandler = () => {
        document.addEventListener("click", function(e){
            if (e.target.className === "breed"){
                changeColor(e.target, "pink")
            }
        })
    }

    const changeColor = (breedLi, color) => {
        if (breedLi.style.color !== ""){
            breedLi.style.color = ""
        } else {
            breedLi.style.color = `${color}` 
        }
    }

    const changeHandler = () => {
        const breedDropdown = document.querySelector('#breed-dropdown');
        breedDropdown.addEventListener("change", function(e){
                // e.preventDefault()
                const letter = e.target.value
                // resetBreed()
                filterBreeds(letter)
    
        })
    }

    // const resetBreed = () => {
    //     removeAllBreeds()
    //     getDogBreeds(breedUrl)
    // }

    const filterBreeds = letter => {
        removeAllBreeds()
        getDogBreeds(breedUrl)
        const breedLis = breedsUl.children
        Array.from(breedLis).filter(breed => {
            breed.startsWith(letter)
        })  
    }

    const removeAllBreeds = () => {
        const breedLis = breedsUl.children
        Array.from(breedLis).forEach(li => {
            li.remove()
        }) 
    }
    const dropDownValue = () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"

        alphabet.split("").forEach(letter => {
            const option = createMenuOption(letter)
            renderMenuOption(option)
        })
    }

    const createMenuOption = letter => {
        const optionTag = document.createElement("option")
        optionTag.value = letter
        optionTag.textContent = letter
        return optionTag
    }

    const renderMenuOption = optionTag => {
        const dropDown = document.querySelector("#breed-dropdown")
        dropDown.append(optionTag)
    }




    getImgs(imgUrl)
    getDogBreeds(breedUrl)
    clickHandler()
    changeHandler()
    dropDownValue()
})