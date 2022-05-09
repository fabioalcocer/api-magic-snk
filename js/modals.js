import { sourcesVideos } from './videos.js'

const dialog = document.querySelector(".modal");
const modal = document.querySelector('.modal')
const cancel = document.querySelector(".modal__close");
const sectionCards = document.querySelector('.container__cards')
const filterTabs = document.querySelector('.filters__content')
const videoPlayer = document.querySelector('.wrapper')

let dataHumans = []
let dataTitans = []
let characterID = ''

document.addEventListener('click', (e) => {
  cancel.addEventListener("click", () => {
    dialog.close();
    enableScroll()
  })

  if (!dialog.contains(e.target)) {
    dialog.close()
    enableScroll()
  }

  if (e.target.dataset.name) {
    characterID = e.target.dataset.name
    changeSrc(characterID);

    const humanFiltered = dataHumans.filter((character) => {
      return character.name === e.target.dataset.name
    })

    const human = humanFiltered[0]
    modal.querySelector('.modal__img').src = human.picture_url
    modal.querySelector('.modal__title').textContent = human.name
    modal.querySelector('.modal__paragraph').textContent = human.gender

    dialog.showModal()
    disableScroll()
  }

  if (e.target.dataset.nameTitan) {
    const titanFiltered = dataTitans.filter((titan) => {
      return titan.name === e.target.dataset.nameTitan
    })

    const titan = titanFiltered[0]
    modal.querySelector('.modal__img').src = titan.picture_url
    modal.querySelector('.modal__title').textContent = titan.name
    modal.querySelector('.modal__paragraph').textContent = titan.height_m + "M"
    modal.querySelector('.modal__description').textContent = titan.description

    dialog.showModal()
    disableScroll()
  }

  if (e.target.id === "video-btn") {
    sectionCards.classList.add('d-none')
    filterTabs.classList.add('d-none')
    videoPlayer.classList.remove('d-none')
    dialog.close()
    enableScroll()
  }
})


const createModalHumans = async (dataModal) => {
  const data = dataModal
  getDataHumans(data)
}

const getDataHumans = async (datos) => {
  dataHumans.push(...datos)
}

const createModalTitans = async (dataModal) => {
  const data = dataModal
  getDataTitans(data)
}

const getDataTitans = async (datos) => {
  dataTitans.push(...datos)
}

const changeSrc = (id) => {
  console.log(sourcesVideos);

  const character = sourcesVideos.filter(char => char.id === id);
  video.poster = character[0].poster;
  video.src = character[0].src;
}


const disableScroll = () => {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () { window.scrollTo(x, y) };
}

const enableScroll = () => {
  window.onscroll = null;
}

export { createModalHumans, createModalTitans }