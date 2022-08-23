console.log('Tuwaiq Academy JS')
console.log('Week 4 Day 2 HW')

let paragraph = document.querySelector('#status');
let btn_login = document.querySelector('#login');
let email_input = document.querySelector('#email_input');
let password_input = document.querySelector('#password_input')

const users = [ {user:'Feras', password:'1234'}, {user:'Alnowiser', password: '5678'}];

function verify() {
   console.log('Verify Function')
}

btn_login.addEventListener('click', verify);
