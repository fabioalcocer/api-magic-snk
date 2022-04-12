export const createTitansCards = async (dataTitans) => {
  const data = dataTitans
  const titans = document.getElementById('titans')
  const cardTitanTemplate = document.getElementById('template-titan').content
  const fragment = document.createDocumentFragment()

  data.forEach((titan) => {
    const clone = cardTitanTemplate.cloneNode(true)
    clone.querySelector('img').src = titan.picture_url

    fragment.appendChild(clone)
  })

  titans.appendChild(fragment)
}