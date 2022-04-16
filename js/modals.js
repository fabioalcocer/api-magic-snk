document.addEventListener('click', (e) => {
  const dialog = document.querySelector(".modal");

  dialog.addEventListener('click', () => {
    dialog.close()
  })

  if (e.target.dataset.name) {
    console.log(e.target.matches('.char-img'));
    console.log(e.target.dataset.name);
    dialog.showModal()
  }

  const cancel = document.querySelector("#cancel");
  cancel.addEventListener("click", () => dialog.close());
})


export const createModal = async (dataModal) => {
  const data = dataModal
  const modal = document.querySelector('.modal')

  modal.querySelector('.modal__img').src = data[0].picture_url
  modal.querySelector('.modal__title').textContent = data[0].name
  modal.querySelector('.modal__paragraph').textContent = data[0].gender
}

export const createModalTitan = async (dataModal) => {
  const data = dataModal
  const modal = document.querySelector('.modal')

  // modal.querySelector('.modal__img').src = data[3].picture_url
  // modal.querySelector('.modal__title').textContent = data[3].name
  // modal.querySelector('.modal__paragraph').textContent = data[3].gender
}


