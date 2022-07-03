const baseUrl = 'https://www.superheroapi.com/api.php/3361053774115582/'

const getRandomId = () => {
  return Math.floor(Math.random() * 731)
}

function getSuperHero(id) {
  document.getElementById('superHeroImage').innerHTML =
    '<div class="spinner-border text-primary"></div>'
  fetch(`${baseUrl}${id}`)
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementById(
          'superHeroImage'
        ).innerHTML = `<img src=${data.image.url} />`)
    )
}

function getSearchSuperHero(name) {
  console.log(name)
  document.getElementById('superHeroImage').innerHTML =
    '<div class="spinner-border"></div>'
  fetch(`${baseUrl}search/${name}`)
    .then((response) => response.json())
    .then((data) => {
      data.results.map((item) => {
        document.getElementById(
          'superHeroImage'
        ).innerHTML += `<img src=${item.image.url} />`
      })
    })
}

const getNewHeroButton = document.getElementById('getNewHeroButton')
getNewHeroButton.onclick = () => getSuperHero(getRandomId())

const searchInput = document.getElementById('searchInput')

document.getElementById('searchButton').addEventListener('click', () => {
  document.getElementById('superHeroImage').innerHTML =
    '<div class="spinner-border"></div>'
  const input = document.getElementById('searchInput').value
  fetch(`${baseUrl}search/${input}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('superHeroImage').innerHTML = ' '
      data?.results
        ? data?.results.map((item) => {
            document.getElementById(
              'superHeroImage'
            ).innerHTML += `<img src=${item.image.url} />`
          })
        : (document.getElementById('superHeroImage').innerHTML =
            '<div>No data Found</div>')
    })
})

getSuperHero(getRandomId())
