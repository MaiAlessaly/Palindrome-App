let palindromeInputEl = document.querySelector("#inputEl");
let buttonEl = document.querySelector("#submitBtn");
let resultEl = document.querySelector("#result");

buttonEl.addEventListener('click', () => {
    resultEl.innerHTML = palindromeInputEl.value;
})