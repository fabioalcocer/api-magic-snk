export const createHumansCards = async (info) => {
  const data = info
  const humans = document.getElementById('humans')
  const cardHumanTemplate = document.getElementById('template-human').content
  const fragment = document.createDocumentFragment()

  data.forEach((character) => {
    const clone = cardHumanTemplate.cloneNode(true)
    clone.querySelector('img').src = character.picture_url

    fragment.appendChild(clone)
  })

  humans.appendChild(fragment)
}