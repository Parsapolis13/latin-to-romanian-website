const animatedElements = document.querySelectorAll(".timeline-item, .card-grid")
animatedElements.forEach(el => el.classList.add('hidden'))
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {if (entry.isIntersecting) {entry.target.classList.remove('hidden')
    entry.target.classList.add('visible')} else {entry.target.classList.remove('visible')
    entry.target.classList.add('hidden')}})}, { rootMargin: '0px 0px -100px 0px'})


animatedElements.forEach(el => observer.observe(el))