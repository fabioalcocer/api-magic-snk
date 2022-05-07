let dataHumans = []
let dataTitans = []

document.addEventListener('click', (e) => {
  const dialog = document.querySelector(".modal");
  const modal = document.querySelector('.modal')
  const cancel = document.querySelector("#cancel");

  cancel.addEventListener("click", () => {
    dialog.close();
    enableScroll()
  })

  if (!dialog.contains(e.target)) {
    dialog.close()
    enableScroll()
  }


  if (e.target.dataset.name) {
    dialog.showModal()
    // console.log(e.target.matches('.char-img'));

    const humanFiltered = dataHumans.filter((character) => {
      return character.name === e.target.dataset.name
    })

    const human = humanFiltered[0]
    modal.querySelector('.modal__img').src = human.picture_url
    modal.querySelector('.modal__title').textContent = human.name
    modal.querySelector('.modal__paragraph').textContent = human.gender
    disableScroll()
  }

  if (e.target.dataset.nameTitan) {
    dialog.showModal()

    const titanFiltered = dataTitans.filter((titan) => {
      return titan.name === e.target.dataset.nameTitan
    })

    const titan = titanFiltered[0]
    modal.querySelector('.modal__img').src = titan.picture_url
    modal.querySelector('.modal__title').textContent = titan.name
    modal.querySelector('.modal__paragraph').textContent = titan.height_m + "M"
    modal.querySelector('.modal__description').textContent = titan.description
  }
})


export const createModalHumans = async (dataModal) => {
  const data = dataModal
  getDataHumans(data)
}

const getDataHumans = async (datos) => {
  dataHumans.push(...datos)
}

export const createModalTitans = async (dataModal) => {
  const data = dataModal
  getDataTitans(data)
}

const getDataTitans = async (datos) => {
  dataTitans.push(...datos)
}


const disableScroll = () => {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () { window.scrollTo(x, y) };
}

const enableScroll = () => {
  window.onscroll = null;
}