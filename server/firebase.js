var database = firebase.database();
const name = document.getElementById('name');
const department = document.getElementById('department');
const batch = document.getElementById('batch');
const messTit = document.getElementById('messTit');
const messBody = document.getElementById('messBody');

const formSubmit = document.querySelector('.formSubmit');

formSubmit.addEventListener('click', submitHandlerForm);

function submitHandlerForm() {
  console.log(
    name.value,
    department.value,
    batch.value,
    messTit.value,
    messBody.value
  );
}
