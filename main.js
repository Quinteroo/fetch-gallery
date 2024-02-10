
/* IMPORTS */
import './style.css'
import { printImages } from './src/components/printImages/printImages.js';
import { inputValue } from './src/components/input/input.js';



/* API */
const accessKey = 'EuiZIEo3C57tgt-_4zzf0ucQjmCaaZ3cCIjlncUvYLo';
const UNSPLASHAPI_URL = 'https://api.unsplash.com/search/photos'




export const createArrayImages = async () => {
  const arrayImages = [];

  try {
    const response = await fetch(`${UNSPLASHAPI_URL}?query=${inputValue}&client_id=${accessKey}`)
    const res = await response.json();
    // console.log(res)

    if (res.results) {   // Trusie/falsie > Verificar si la propiedad 'results' existe en la respuesta
      for (let i = 0; i < res.results.length; i++) {
        arrayImages.push(res.results[i].urls.full);
      }
    } else {
      console.log("No se encontraron resultados.");
    }

    printImages(arrayImages);

  } catch (error) {
    console.log(error);
  }
}






