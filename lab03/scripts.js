const content = document.getElementById('content')
const message = document.getElementById('info')
document.getElementById('download').addEventListener('click', () => {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => addUser(data.results[0]))
    .catch(() => (message.innerText = 'failure!'))
})

function addUser(user) {
  const item = document.createElement('div')
  item.className = 'item'

  const image = document.createElement('img')
  image.src = user.picture.large
  image.alt = 'User picture'
  item.appendChild(image)

  const postcode = document.createElement('div')
  postcode.innerText = `Postcode: ${user.location.postcode}`
  item.appendChild(postcode)

  const city = document.createElement('div')
  city.innerText = `City: ${user.location.city}`
  item.appendChild(city)

  const name = document.createElement('div')
  name.innerText = `Name: ${user.name.title} ${user.name.first}
${user?.name?.last}`
  item.appendChild(name)

  const email = document.createElement('div')
  email.innerText = `Email: ${user.email}`
  item.appendChild(email)

  content.appendChild(item)
  message.innerText = 'success!'
}
