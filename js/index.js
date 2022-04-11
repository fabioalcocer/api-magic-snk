import { filters } from './filters.js'
import { loadingData } from './loading.js'
import { createHumansCards } from './create-cards.js'
import { revealImages } from './reveals-images.js'

document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  filters.filterData()
  fetchData()
  revealImages()
})


/*=============== FETCH DATA ===============*/
const URL = "http://attackontitanapi.herokuapp.com/api/characters"

const fetchData = async () => {

  try {
    loadingData(true);
    const res = await fetch(URL);
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