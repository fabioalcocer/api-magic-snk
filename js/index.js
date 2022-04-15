import { filterData } from './filters.js'
import { loadingData } from './loading.js'
import { createHumansCards } from './cards-humans.js'
import { createTitansCards } from './cards-titans.js'
import { revealImages } from './reveals-images.js'

document.addEventListener('DOMContentLoaded', () => {
  AOS.init()
  filterData()
  fetchDataHumans()
  fetchDataTitans()
  revealImages()
})

document.addEventListener('click', (e) => {
  const dialog = document.querySelector("dialog");
  if (e.target.dataset.name) {
    console.log(e.target.matches('.char-img'));
    console.log(e.target.dataset.name);
    dialog.showModal()
  }

  const cancel = document.querySelector("#cancel");
  cancel.addEventListener("click", () => dialog.close());
})


/*=============== FETCH DATA ===============*/
const urlHumans = "http://attackontitanapi.herokuapp.com/api/characters"
const urlTitans = "http://attackontitanapi.herokuapp.com/api/titans"

const fetchDataHumans = async () => {
  try {
    loadingData(true);
    const res = await fetch(urlHumans);
    const data = await res.json();
    console.log("content");

    createHumansCards(data)
  }
  catch (error) {
    console.log(error);
  }
  finally {
    loadingData(false);
  }
};


const fetchDataTitans = async () => {
  try {
    loadingData(true);
    const res = await fetch(urlTitans);
    const data = await res.json();
    createTitansCards(data)
  }
  catch (error) {
    console.log(error);
  }
  finally {
    loadingData(false);
  }
};


//TODO Añadir Loading, ver si podemos cambiar el src del video con JS y ver lo de los modales


