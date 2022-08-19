const form = document.querySelector('form');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');

form.addEventListener('submit', (e) => {
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        password.value = '';
        confirmPassword.classList.add('error');
        confirmPassword.value = '';
        e.preventDefault();
    }
})