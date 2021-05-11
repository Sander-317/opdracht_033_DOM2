const myButton = document.querySelector(".btn-alert");

const alertMe = () => {
    alert("buton clicked")
};

myButton.addEventListener("click", alertMe);

const changeButton = document.querySelector(".btn-change");
const body = document.querySelector(".blue-background")


const toggleMe = () => {
    body.classList.toggle("red-background");
};


changeButton.addEventListener("click", toggleMe);




