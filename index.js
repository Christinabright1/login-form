/* YOUR CODE GOES HERE! */

/*<!-- The rules for this exercise are simple: -->
  <!-- First you need to check the "username" field if have at least 4 characters before login and if password have minium of 8 characters-->
  <!-- After you submit the login, hide form, only show "Welcome". --> */

  let userForm= document.querySelector(".form");

  let displayError = document.querySelector(".error");

  userForm.addEventListener('submit', event =>{
let userName= userForm.elements['username'];

let passWord= userForm.elements['myPassword'];

    if(userName.value.length < 4 || passWord.value.length < 8){
        displayError.style.display=" block";
    }else{
        userForm.innerHTML =" Welcome";
         displayError.style.display=" none";
         
    }


    event.preventDefault();
  });