const loading = document.querySelector('.pl')
export const loadingData = (bool) => {
  if (bool) {
    loading.classList.remove('d-none')
  } else {
    loading.classList.add('d-none')
  }
}