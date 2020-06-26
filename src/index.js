
document.addEventListener('DOMContentLoaded', (e)=>{
    
    getBreed() 
    document.addEventListener('click', e =>{
        
        if(e.target.tagName=='LI'){
            changeLiColor(e.target)
            
        }
    })


    document.addEventListener('change', e=>{
        
        sortLi(e.target.value)
    })
    getImg()
    
})
let breeds=[]
function getImg(){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
    .then(function(resp){return resp.json()} )
    .then(function(json) {
      addImg(json)
      
    })
}
function addImg(imgObj){
    imgObj.message.forEach(element => {
        newImg(element)
    });
 }
 function newImg(imgUrl){
     let imgDiv= document.querySelector('#dog-image-container')
     let newImgTag=document.createElement('img')
     newImgTag.src=`${imgUrl}`
     imgDiv.appendChild(newImgTag)
       
    }

function getBreed(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp =>resp.json())
    .then(json =>{
     
        for(const breedObj in json.message){
        
            if(breedObj){
                breeds.push(breedObj)
                addBreed(breedObj)
                
            }
        }
    })
}
function addBreed(breed){
    const ul=document.querySelector('#dog-breeds')
    const li=document.createElement('li')
    li.innerText=`${breed}`
    ul.append(li)

}
function changeLiColor(li){
    li.style.color='orange'
}
function sortLi(ch){
    const lis=document.querySelectorAll("li")
    let i=0
    const ul=document.querySelector('#dog-breeds')
    while(i<lis.length){
       ul.removeChild(document.querySelector('li'))
        i++

    }
    
   breeds.forEach(breed =>{

        if(breed[0]===ch){
           
            addBreed(breed)
        }

    })

}