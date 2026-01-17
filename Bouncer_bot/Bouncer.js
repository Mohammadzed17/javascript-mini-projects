let nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
let dayInput = document.getElementById("day");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const numInput = document.getElementById("num");

submit.onclick = function () {
    let userage = Number(ageInput.value);
    let day = dayInput.value.trim();
    let num = Number(nameInput.value);
    let Luckynum = Math.floor(Math.random()*100 + 1);
    console.log(Luckynum);

    // Capitalize username
    let username = nameInput.value.trim();
    username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

    // If owner
    if (username === "Owner") {
        result.textContent = `Welcome Sir`;
        return; 
    }

    // Age check
    if (userage <= 18) {
        result.textContent = `You are too young ${username}, Go Home`;
        return;
    }
    if (num === Luckynum){
        result.textContent = `Congratulations You got free Entry`;
    }else{

    // Entry fee based on day
    if (day === "Friday" || day === "Saturday") {
        result.textContent = `You have to pay 50 $ as Entry Fee`;
    } else {
        result.textContent = `You have to pay 30 $ as Entry Fee`;
    }
    }
};
