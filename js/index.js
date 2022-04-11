import { filters } from './filters.js'

document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  filters.filterData()
  fetchData()
})


/*=============== FETCH DATA ===============*/
const URL = "http://attackontitanapi.herokuapp.com/api/characters"

const fetchData = async () => {

  try {
    loadingData(true);
    const res = await fetch(URL);
    const data = await res.json();
    console.log("content");

    getData(data)
  }
  catch (error) {
    console.log(error);
  }
  finally {
    loadingData(false);
  }
};


const getData = async (data) => {
  const datos = await data
  console.log(datos.at(-1));
}

const loadingData = (bool) => {
  if (bool) {
    console.log("Loading...");
  } else {
    console.log("Fin del loading");
  }
}