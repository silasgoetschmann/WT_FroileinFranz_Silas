const mailregex=new RegExp('.+@.+\..+');

const name = document.querySelector("#name");
name.addEventListener("input", () => {
    if (name.value.trim() === "") {
        name.classList.add("error");
    } else {
        name.classList.remove("error");
    }
});


const mail = document.querySelector("#mail");
mail.addEventListener("input", () => {
    if (mail.value.trim() === "" || !mailregex.test(mail.value)) {
        mail.classList.add("error");
    } else {
        mail.classList.remove("error");
    }
});

const textfeld = document.querySelector("#textfeld");
textfeld.addEventListener("input", () => {
    if (textfeld.value.trim() === "") {
        textfeld.classList.add("error");
    } else {
        textfeld.classList.remove("error");
    }
});
