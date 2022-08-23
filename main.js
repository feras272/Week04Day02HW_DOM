console.log('Tuwaiq Academy JS')
console.log('Week 4 Day 2 HW')

let paragraph = document.querySelector('#status');
let btn_login = document.querySelector('#login');
let email_input = document.querySelector('#email_input');
let password_input = document.querySelector('#password_input')

const users = [ {user:'Feras', password:'1234'}, {user:'Alnowiser', password: '5678'}];

function verify() {
    console.log('Verify Function')
    // solution here
    let currentEmail = email_input.value;
    let currentPassword = password_input.value;

    for(let i = 0; i < users.length; i++) {
        if(currentEmail == users[i].user && currentPassword == users[i].password) {
            console.log('Login Success');
            return;
        } else {
            console.log('Login Faild');
        }
    }
}

btn_login.addEventListener('click', verify);
