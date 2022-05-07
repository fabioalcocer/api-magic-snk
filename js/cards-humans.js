export const createHumansCards = async (dataHumans) => {
  const data = dataHumans
  const humans = document.getElementById('humans')
  const cardHumanTemplate = document.getElementById('template-human').content
  const fragment = document.createDocumentFragment()

  data.forEach((character) => {
    const clone = cardHumanTemplate.cloneNode(true)
    clone.querySelector('img').src = character.picture_url
    clone.querySelector('img').dataset.name = character.name

    fragment.appendChild(clone)
  })

  humans.appendChild(fragment)
}