document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')

  for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div')
    div.classList.add('my-div')
    div.textContent = 'div' + i
    body.appendChild(div)
  }

  const movableDivs = document.querySelectorAll('.my-div')

  movableDivs.forEach((div) => {
    div.addEventListener('click', () => {
      const body = document.body
      const firstDiv = body.querySelector('.my-div')

      if (div !== firstDiv) {
        body.insertBefore(div, firstDiv)
      } else {
        const originalIndex = Array.from(movableDivs).indexOf(div)
        const referenceDiv = movableDivs[originalIndex + 1]
        body.insertBefore(div, referenceDiv)
      }
    })
  })
})
