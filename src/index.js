console.log('%c HI', 'color: firebrick')
let imagesContainer = document.getElementById("dog-image-container");

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

    for(let entry in data) {
      entry, data[entry]
    }

  } catch (error) {
    console.log(error);
  }
}

reqBreeds();

