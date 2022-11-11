/**
 * Workshop: Password Checker with functions and DOM
 *
 */

 const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

//let password;
// password = "password"; // inte giltigt
// password = "p@$swo"; // giltigt
// password = "pa$sword"; // giltigt
//password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

let form = document.querySelector(".form");

form.addEventListener('submit', e => {
    e.preventDefault();

    password = form.myform.value;
    let numberOfTimes = 0

    checkPassword = function(password) {
        for (i = 0; i < password.length; i++){
            if (password.includes(specialChars[i])){
                numberOfTimes++
            }
        } 
        return numberOfTimes
    }

    const h1 = document.querySelector('h1');

if (password.length >= 16){
    h1.innerText = 'secure password'
}
else if (password.length >= 12 && password.includes('-')){
    h1.innerText = 'secure password'
}
else if (password.length >= 8 && checkPassword(password) >= 1){
    h1.innerText = 'secure password'
}
else if (password.length >= 6 && checkPassword(password) >= 2){
    h1.innerText = 'secure password'
}
else {
    h1.innerText = 'not a secure password, try again'
}

});


