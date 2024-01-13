const myForm = document.querySelector(".login-form");

myForm.addEventListener("submit", formChange);

function formChange(event) {
  event.preventDefault();

  const formElements = event.target.elements;

  const login = formElements.email.value.trim();
  
  const password = formElements.password.value.trim();

  if (login === "" || password === "") {
    alert ("All form fields must be filled in");
  } else {
    const formData = {
      login,
      password,
    };

    console.log(formData);
  }
 

  myForm.reset();
}

