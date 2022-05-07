/*=============== FILTERS TABS ===============*/
export const filterData = () => {
  const tabs = document.querySelectorAll('[data-target]')
  const tabContents = document.querySelectorAll('[data-content]')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target)
      tabContents.forEach(tc => {
        tc.classList.remove('filters__active')
      })
      target.classList.add('filters__active')
      tabs.forEach(t => {
        t.classList.remove('filter-tab-active')
      })
      tab.classList.add('filter-tab-active')

      //Add transition when switching between tabs 
      const titanContainer = document.getElementById('titans')
      const humanContainer = document.getElementById('humans')
      if (tab.dataset.target === "#titans") {
        titanContainer.style.opacity = '0'
        setTimeout(() => {
          titanContainer.style.opacity = '1'
        }, 200);
      }

      if (tab.dataset.target === "#humans") {
        humanContainer.style.opacity = '0'
        setTimeout(() => {
          humanContainer.style.opacity = '1'
        }, 200);
      }
    })
  })
}