// Task 1, Lab 2
let checkName = /[А-ЯІЇЄ][а-яіїє']{1,20}\s[А-ЯІЄ]\.\s[А-ЯІЄ]\./m;
let checkGroup = /[А-ЯІЇЄ][А-ЯІЇЄ]\-[0-9][0-9]/m;
let checkVariant = /[0-9]{1,2}/m;
let checkFaculty = /[А-ЯІЇЄ]{1,4}/m;
let checkDate = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/m;
const fullname = document.getElementById("fullname");
const group = document.getElementById("group");
const variant = document.getElementById("variant");
const faculty = document.getElementById("faculty");
const birthday = document.getElementById("birthday");
const fullnameSpan = document.getElementById("users-fullname");
const groupSpan = document.getElementById("users-group");
const variantSpan = document.getElementById("users-variant");
const facultySpan = document.getElementById("users-faculty");
const birthdaySpan = document.getElementById("users-birthday");
const myForm = document.getElementById("myForm");

function checkForm() {
  let success = true;
  fullname.classList.remove("input-error");
  if (!checkName.test(fullname.value)) {
    fullname.classList.add("input-error");
    success = false;
    console.log("test");
  }
  group.classList.remove("input-error");
  if (!checkGroup.test(group.value)) {
    group.classList.add("input-error");
    success = false;
    console.log("test");
  }
  variant.classList.remove("input-error");
  if (
    !checkVariant.test(variant.value) ||
    variant.value == 0 ||
    variant.value < 0
  ) {
    variant.classList.add("input-error");
    success = false;
    console.log("test");
  }
  faculty.classList.remove("input-error");
  if (!checkFaculty.test(faculty.value)) {
    faculty.classList.add("input-error");
    success = false;
    console.log("test");
  }
  birthday.classList.remove("input-error");
  if (!checkDate.test(birthday.value)) {
    birthday.classList.add("input-error");
    success = false;
    console.log("test");
  }
  if (success) {
    alert("Всі поля заповнені коректно.");
    fullnameSpan.innerHTML = fullname.value;
    groupSpan.innerHTML = group.value;
    variantSpan.innerHTML = variant.value;
    facultySpan.innerHTML = faculty.value;
    birthdaySpan.innerHTML = birthday.value;
    myForm.reset();
  } else {
    alert("Ви ввели некоректні дані.");
  }
  success = true;
}
// Task 2, Lab 2
const taskTwoDiv = document.getElementById("current-color");
const colorTool = document.getElementById("color_tool");
const myVariant = 9; // мій варіант - 89 (за розрахунком це 9)
function randomNum() {
  return Math.floor(Math.random() * 255);
}
function randomColor() {
  return "rgb(" + randomNum() + "," + randomNum() + "," + randomNum() + ")";
}
function generateTable() {
  let table = document.createElement("table");
  for (let i = 0; i < 6; i++) {
    let tableRow = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
      let tableCell = document.createElement("td");
      tableCell.innerHTML = i * 6 + j + 1;
      tableCell.id = (i * 6 + j + 1).toString();
      tableRow.appendChild(tableCell);
    }
    table.appendChild(tableRow);
  }
  taskTwoDiv.appendChild(table);
}
function cellRandomColor(cell) {
  cell.style.backgroundColor = randomColor();
}
// зафарбовує клітинку в поточний колір на пензлі (інструменті для малювання)
function cellCurrentColor(cell) {
  cell.style.backgroundColor = colorTool.value;
}
// змінює колір клітинки
function cellsChangeColor(cell) {
  let table = taskTwoDiv.getElementsByTagName("table")[0];
  let currColumn = 0;
  let currRow = 0;
  for (let row = 0; row < table.rows.length - 1; row++) {
    for (let col = 0; col < table.rows[row].cells.length; col++) {
      if (table.rows[row].cells[col].id == cell.id) {
        currColumn = col;
        currRow = row;
      }
    }
  }
  for (let i = currRow; i <= table.rows.length - 1; i += 2) {
    table.rows[i].cells[currColumn].style.backgroundColor = colorTool.value;
  }
}
generateTable();
myCell = document.getElementById(myVariant);

// додаємо події на клітинки (event listeners)
myCell.addEventListener("mouseover", () => cellRandomColor(myCell));
myCell.addEventListener("click", () => cellCurrentColor(myCell));
myCell.addEventListener("dblclick", () => cellsChangeColor(myCell));
