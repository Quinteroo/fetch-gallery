import './printImages.css'


const imgContainer = document.querySelector('#img-container');


export const printImages = (array) => {
  imgContainer.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    const img = document.createElement('img')

    // img.classList.add()

    img.src = array[i]

    imgContainer.appendChild(img)

  }

}