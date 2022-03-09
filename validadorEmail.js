const errorMsg = document.querySelector('.footer-msg-error');
const submit = document.querySelector('.joined__btn');
const input = document.querySelector('#email');
const imgErro = document.querySelector('.footer-img-error')



const emailValidation = (e) => {
    const border = document.querySelector(".footer-btn-input");
    const tamanhoInput = document.querySelector('.joined-input');

    e.preventDefault();
    console.log({ errorMsg });
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.value == "") {
        errorMsg.innerHTML = "Email address cannot be empty.";
        imgErro.style.display = "flex";

    } else if (!validEmail.test(input.value)) {
        errorMsg.innerHTML = "Please enter a valid email address.";


    } else {
        errorMsg.innerHTML = "";
        imgErro.style.display = "none";


    }
};
submit.addEventListener('click', emailValidation);