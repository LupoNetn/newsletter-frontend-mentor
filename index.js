const form = document.getElementById('form')
const row = document.querySelector('.row')
const email = document.getElementById('email-input');
const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorMessage = document.getElementById('errormsg')
const submitButton = document.getElementById('submit-button');
const userEmail = document.getElementById('user-email');
const dismissButton = document.getElementById('dismiss-btn');
const hiddenDisplay1 = document.querySelector('.hidden');
const hiddenDisplay2 = document.querySelector('.hidden-2')

email.addEventListener('input', () => {
    if (emailRegex.test(email.value)) {

        errorMessage.innerHTML = ''
        email.style.borderColor = ''

    } else {
        errorMessage.innerHTML = 'enter a valid email'
        email.style.borderColor = 'red'
    }
    setTimeout(() => {
        errorMessage.innerHTML = '';
        setTimeout(() => {
            email.style.borderColor = '';
        }, 3000);
    }, 3000);
});

submitButton.addEventListener('click', (e) => {
    if (emailRegex.test(email.value)) {

        hiddenDisplay1.classList.add('success-container');
        hiddenDisplay1.classList.remove('hidden')
        hiddenDisplay2.classList.add('success-msg');
        hiddenDisplay2.classList.remove('hidden-2')
        row.classList.add('hidden');
        row.classList.remove('row')
    } else {
        errorMessage.innerHTML = 'enter a valid email'
        email.style.borderColor = 'red'
    }

    userEmail.innerHTML = email.value;


    setTimeout(() => {
        errorMessage.innerHTML = '';
        setTimeout(() => {
            email.style.borderColor = '';
        }, 3000);
    }, 3000);
    form.reset()
    e.preventDefault()

});

dismissButton.addEventListener('click', () => {
    hiddenDisplay1.classList.remove('success-container');
    hiddenDisplay1.classList.add('hidden')
    hiddenDisplay2.classList.remove('success-msg');
    hiddenDisplay2.classList.add('hidden-2')
    row.classList.remove('hidden');
    row.classList.add('row')
})
