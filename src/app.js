const form = document.getElementById("contact-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const doggoName = document.getElementById("doggo-name");
const doggoBreed = document.getElementById("doggo-breed");
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirm-email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const successModal = document.getElementById("modal-success");

const PASSWORD_REGEX_3=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

var formJSON; 

initFormListeners(form);
initModalListeners(successModal);
populateDoggoBreedSelect();

function initFormListeners(formToInit) {
  formToInit.addEventListener("submit", e => {
    unsetErrorInput(); /*joel*/
    e.preventDefault();
    //joel
    const data = new FormData(e.target);

    const value = Object.fromEntries(data.entries());
  
    const myJSON = JSON.stringify(value);
    console.log({ value });
    

  
    

    if (validateAllInputs()) {
   
      var url = "https://api.devnovatize.com/frontend-challenge";

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);

      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {

          if (xhr.status === 201){
            displaySuccessModal();
          } else if (xhr.status === 400){
            displayErrorModal(xhr);
          } 
            console.log(xhr.status);
            console.log(xhr.responseText);  
        }};

      xhr.send(myJSON)
    

    } 
  });
}



function initModalListeners(successModalToInit) {
  var closeButtons = document.getElementsByClassName("modal__close");

  for (let el of closeButtons) {
    el.onclick = function () {
      successModalToInit.style.display = "none";
    }
  }

  window.onclick = function (event) {
    if (event.target == successModal) {
      successModalToInit.style.display = "none";
    }
  }
}



function populateDoggoBreedSelect() {
  fetch('https://api.devnovatize.com/frontend-challenge')
    .then(
      function (response) {
        if (!response.ok) {
          console.log('Error calling external API. Status Code: ' +
            response.status);
          return;
        }

        response.json().then(function (data) {
          var selectElem = document.getElementById("doggo-breed");
          fillSelectElem(selectElem, data);
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error : ', err);
    });
}

function fillSelectElem(selectElem, dataToFill) {
  dataToFill.forEach((element) => {
    var optionElem = document.createElement("option");
    optionElem.innerHTML = element;
    selectElem.appendChild(optionElem);
  });
}

function validateAllInputs() {
  let allInputValids = validateInput(firstName) &&
    validateInput(lastName) &&
    validateInput(doggoName) &&
    validateInput(doggoBreed) &&
    validateInput(email) &&
    validateInput(confirmEmail, function (value) { return value === email.value.trim(); }) && 
    validateInput(password) &&
    validateInput(confirmPassword, function (value) { return value === password.value.trim(); });

  return allInputValids;
}

function validateInput(element, validationFunction) {
  let inputValid = isInputValid(element, validationFunction);

  inputValid ? setSuccessInput(element) : setErrorInput(element);

  return inputValid
}

function isInputValid(element, validationFunction) {
  let value = element.value.trim();

  return !(value === "" || (validationFunction && !validationFunction(value)));
}

function setErrorInput(input) {
  const formControl = input.parentElement.parentElement;
  formControl.classList.add("error");
}

function setSuccessInput(input) {
  const formControl = input.parentElement.parentElement;
  formControl.classList.add("success");
}


//Fix bug
function unsetErrorInput() {
 
  firstName.parentElement.parentElement.classList.remove("error");

  lastName.parentElement.parentElement.classList.remove("error");

  doggoName.parentElement.parentElement.classList.remove("error");

  doggoBreed.parentElement.parentElement.classList.remove("error");

  email.parentElement.parentElement.classList.remove("error");

  confirmEmail.parentElement.parentElement.classList.remove("error");

  password.parentElement.parentElement.classList.remove("error");

  confirmPassword.parentElement.parentElement.classList.remove("error");

}

function displaySuccessModal() {
  var modal = document.getElementById("modal-success");
  modal.style.display = "block";
}

function displayErrorModal(myResponse) {
  console.log(myResponse.status);
  console.log(myResponse.responseText);  
  var modal = document.getElementById("modal-error");
  modal.style.display = "block";
  document.getElementById("errorText").innerHTML= myResponse.status + myResponse.responseText;
}

