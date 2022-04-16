let dataHumans = []
let dataTitans = []

document.addEventListener('click', (e) => {
  const dialog = document.querySelector(".modal");
  const modal = document.querySelector('.modal')
  const cancel = document.querySelector("#cancel");

  dialog.addEventListener('click', () => dialog.close())
  cancel.addEventListener("click", () => dialog.close());

  if (e.target.dataset.name) {
    dialog.showModal()
    // console.log(e.target.matches('.char-img'));
    // console.log(e.target.dataset.name);

    const humanFiltered = dataHumans.filter((character) => {
      return character.name === e.target.dataset.name
    })

    const character = humanFiltered[0]
    modal.querySelector('.modal__img').src = character.picture_url
    modal.querySelector('.modal__title').textContent = character.name
    modal.querySelector('.modal__paragraph').textContent = character.gender
  }

  if (e.target.dataset.nameTitan) {
    dialog.showModal()
    // console.log(e.target.dataset.nameTitan);

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
  dataHumans = datos
}

export const createModalTitans = async (dataModal) => {
  const data = dataModal
  getDataTitans(data)
}

const getDataTitans = async (datos) => {
  dataTitans = datos
}