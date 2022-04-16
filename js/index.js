import { filterData } from './filters.js'
import { loadingData } from './loading.js'
import { createHumansCards } from './cards-humans.js'
import { createTitansCards } from './cards-titans.js'
import { revealImages } from './reveals-images.js'
import { createModal, createModalTitan } from './modals.js'

document.addEventListener('DOMContentLoaded', () => {
  AOS.init()
  filterData()
  fetchDataHumans()
  fetchDataTitans()
  revealImages()
})


/*=============== FETCH DATA ===============*/
const urlHumans = "https://attackontitanapi.herokuapp.com/api/characters"
const urlTitans = "https://attackontitanapi.herokuapp.com/api/titans"

const fetchDataHumans = async () => {
  try {
    loadingData(true);
    const res = await fetch(urlHumans);
    const data = await res.json();
    console.log("content");

    createHumansCards(data)
    createModal(data)
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
    createModalTitan(data)
  }
  catch (error) {
    console.log(error);
  }
  finally {
    loadingData(false);
  }
};


//TODO Añadir Loading, ver si podemos cambiar el src del video con JS y ver lo de los modales


