const loading = document.querySelector('.spinner')
export const loadingData = (bool) => {
  if (bool) {
    loading.classList.remove('d-none')
  } else {
    loading.classList.add('d-none')
  }
}