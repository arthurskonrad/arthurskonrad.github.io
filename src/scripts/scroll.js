const anchor = document.querySelectorAll('[data-anchor]');

const scroll = function (event) {
  event.preventDefault();

  const href = this.getAttribute('href');

  const goTo = document.querySelector(href)

  goTo.scrollIntoView({
    behavior: 'smooth',
  })

  setTimeout(function () {
    window.location = href
  }, 1000)
}

for (let index = 0; index < anchor.length; index++) {
  const element = anchor[index];

  element.addEventListener('click', (scroll))
}
