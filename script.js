const form = document.getElementById('form');
const surname = document.getElementById('surname');
const firstname = document.getElementById('firstname');
const middlename = document.getElementById('middlename');
const birthday = document.getElementById('birthday');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const surnameValue = surname.value.trim();
    const firstnameValue = firstname.value.trim();
    const middlenameValue = middlename.value.trim();
    const birthdayValue = birthday.value.trim();
    const emailValue = email.value.trim();
    
  if(surnameValue === '') {
        setError(surname, 'Enter surname');
    } else {
        setSuccess(surname);
    }
    if(firstnameValue === '') {
        setError(firstname, 'Enter your name');
    } else {
        setSuccess(firstname);
    }
    if(middlenameValue === '') {
        setError(middlename, 'Enter your Middle name');
    } else {
        setSuccess(middlename);
    }
     if(birthdayValue === '') {
        setError(birthday, 'Select your Birthday');
    } else {
        setSuccess(birthday);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        }

};
