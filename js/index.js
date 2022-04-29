import { filterData } from './filters.js'
import { loadingData } from './loading.js'
import { createHumansCards } from './cards-humans.js'
import { createTitansCards } from './cards-titans.js'
import { revealImages } from './reveals-images.js'
import { createModalHumans, createModalTitans } from './modals.js'

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

    createHumansCards(data)
    createModalHumans(data)
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
    createModalTitans(data)
  }
  catch (error) {
    console.log(error);
  }
  finally {
    loadingData(false);
  }
};


//TODO ver si podemos cambiar el src del video con JS


