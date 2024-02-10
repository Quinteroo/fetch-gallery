


export let inputValue;

import { createArrayImages } from "../../../main";

const input = document.querySelector('#input');
input.addEventListener('change', (e) => {      //! el evento 'change' se activa cuando se termina de escribir en el input, evita sobra llamadas a la API y su posterior bloqueo por SPAM
  inputValue = e.target.value
  // console.log(inputValue)
  createArrayImages()
})