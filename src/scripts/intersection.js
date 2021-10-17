const goToTop = document.querySelector('#goToTop')

const callback = ([entry]) => {
  if (entry.isIntersecting) {
    goToTop.classList.add('hidden');
  } else {
    goToTop.classList.remove('hidden');
  }
}

let observer = new IntersectionObserver(callback);

const header = document.querySelector('#header');

observer.observe(header);
