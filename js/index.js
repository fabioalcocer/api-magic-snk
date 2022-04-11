const titans = document.querySelectorAll('#card-titan')
const arrayTitans = [...titans]

const firstCard = document.getElementById('cartita')
firstCard.setAttribute('data-aos-delay', '400')


AOS.init();

/*=============== FILTERS TABS ===============*/
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


    // console.log(tab.dataset.target);

    // if (tab.dataset.target === "#titans") {
    //   arrayTitans.forEach(titan => {
    //     console.log(titan);
    //   })
    // }
  })
})
