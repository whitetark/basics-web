// Task 1, Lab 2
let nameRegex = /[а-яіїєА-ЯІЇЄ]+\s[А-ЯІЇЄ]\.[А-ЯІЇЄ]\./m
let groupRegex = /[А-ЯІЇЄ][А-ЯІЇЄ]\-[0-9][0-9]/m
let variantRegex = /[0-9]{1,2}/m
let facultyRegex = /[А-ЯІЇЄ]{1,4}/m
let dateRegex = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/m

const fullname = document.getElementById('fullname')
const group = document.getElementById('group')
const variant = document.getElementById('variant')
const faculty = document.getElementById('faculty')
const birthday = document.getElementById('birthday')

const info = [fullname, group, variant, faculty, birthday]

const fullnameSpan = document.getElementById('users-fullname')
const groupSpan = document.getElementById('users-group')
const variantSpan = document.getElementById('users-variant')
const facultySpan = document.getElementById('users-faculty')
const birthdaySpan = document.getElementById('users-birthday')

const myForm = document.getElementById('myForm')

function checkForm() {
  let success = true

  if (!checkForEmpty(info)) {
    return alert('Заповніть усі колонки')
  }

  fullname.classList.remove('input-error')
  if (!nameRegex.test(fullname.value)) {
    fullname.classList.add('input-error')
    success = false
  }

  group.classList.remove('input-error')
  if (!groupRegex.test(group.value)) {
    group.classList.add('input-error')
    success = false
  }

  variant.classList.remove('input-error')
  if (!variantRegex.test(variant.value) || variant.value == 0 || variant.value < 0) {
    variant.classList.add('input-error')
    success = false
  }

  faculty.classList.remove('input-error')
  if (!facultyRegex.test(faculty.value)) {
    faculty.classList.add('input-error')
    success = false
  }

  birthday.classList.remove('input-error')
  if (!dateRegex.test(birthday.value)) {
    birthday.classList.add('input-error')
    success = false
  }

  if (success) {
    fullnameSpan.innerHTML = info[0].value
    groupSpan.innerHTML = info[1].value
    variantSpan.innerHTML = info[2].value
    facultySpan.innerHTML = info[3].value
    birthdaySpan.innerHTML = info[4].value
    myForm.reset()
  } else {
    alert('Ви ввели некоректні дані.')
  }
  success = true
}

function checkForEmpty(info) {
  let status = true
  info.forEach((element) => {
    if (!element.value) {
      status = false
    }
  })
  return status
}

// Task 2, Lab 2
const table = document.getElementById('table')
const palette = document.getElementById('palette')

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function createTable() {
  for (let i = 0; i < 6; i++) {
    let tableRow = document.createElement('tr')
    for (let j = 0; j < 6; j++) {
      let tableCell = document.createElement('td')
      tableCell.innerHTML = i * 6 + j + 1
      tableCell.id = (i * 6 + j + 1).toString()
      tableRow.appendChild(tableCell)
    }
    table.appendChild(tableRow)
  }
}

createTable()
const needCell = document.getElementById('9')

needCell.onclick = function () {
  needCell.style.backgroundColor = palette.value
}

needCell.ondblclick = function () {
  let currColumn = 0
  let currRow = 0
  for (let row = 0; row < table.rows.length - 1; row++) {
    for (let col = 0; col < table.rows[row].cells.length; col++) {
      if (table.rows[row].cells[col].id == needCell.id) {
        currColumn = col
        currRow = row
      }
    }
  }
  for (let i = currRow; i <= table.rows.length - 1; i += 2) {
    table.rows[i].cells[currColumn].style.backgroundColor = palette.value
  }
}

needCell.onmouseover = function () {
  needCell.style.background = getRandomColor()
  needCell.style.color = getRandomColor()
}
