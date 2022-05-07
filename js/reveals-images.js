export const revealImages = async () => {
  setTimeout(() => {
    const image = document.querySelectorAll('.char-img')
    image.forEach((img) => {
      img.style.opacity = '1'
    })
  }, 20000);
}