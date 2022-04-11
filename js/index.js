import { filters } from './filters.js'

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

    getData(data)
  }
  catch (error) {
    console.log(error);
  }
  finally {
    loadingData(false);
  }
};


const getData = async (info) => {
  const data = info
  const humans = document.getElementById('humans')
  const cardHumanTemplate = document.getElementById('template-human').content
  const fragment = document.createDocumentFragment()

  data.forEach((character) => {
    const clone = cardHumanTemplate.cloneNode(true)
    clone.querySelector('img').src = character.picture_url
    // console.log(character);

    fragment.appendChild(clone)
  })

  humans.appendChild(fragment)
}

const revealImages = async () => {
  setTimeout(() => {
    const image = document.querySelectorAll('.char-img')
    image.forEach((img) => {
      img.style.opacity = '1'
    })
  }, 10000);
}

const loadingData = (bool) => {
  if (bool) {
    console.log("Loading...");
  } else {
    console.log("Fin del loading");
  }
}