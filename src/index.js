console.log('%c HI', 'color: firebrick')
let imagesContainer = document.getElementById("dog-image-container");
let breedsListElement = document.getElementById("dog-breeds");
let dropdown = document.querySelector("select");

reqImages = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/4");
    const data = await res.json();
    return data.message
  } catch (error) {
    console.log(error)
  }
}

renderImages = async () => {
  let images = await reqImages();
  images.forEach(imageUrl => {
    imagesContainer.insertAdjacentHTML("beforeend",
      `<img src="${imageUrl}"><br>`
    );
  });
}

reqBreeds = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    let data = await res.json();
        data = data.message;
    let breeds = [];

    for(let breed in data) {
      data[breed].forEach(region => {
        breeds.push(`${region} ${breed}`)
      })      
    }
    return breeds;
  } catch (error) {
    console.log(error);
  }
}

renderBreeds = async () => {
  const breeds = await reqBreeds();
  breedsListElement.innerHTML= "";
  breeds.forEach((breed) => {
    if (dropdown.value == breed[0]) { 
      breedsListElement.insertAdjacentHTML("afterbegin", `
        <li>${breed}</li>
      `)
    }
  });
  breedColorChange();
}

breedColorChange = () => {
  const colors = ['blue', 'red', 'green'];
  breedsListElement.addEventListener("click", (e) => {
    if(e.target.tagName == "LI") {
      e.target.style.color = colors[Math.floor(Math.random() * 3)];
    }
  })
}


dropdown.addEventListener("change", (e) => {
  renderBreeds()
}) 


renderImages();
renderBreeds();

