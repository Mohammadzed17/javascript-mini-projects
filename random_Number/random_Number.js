const rollBtn = document.getElementById("rollBtn");
const numDisplay1 = document.getElementById("numDisplay_1");
const numDisplay2 = document.getElementById("numDisplay_2");
const numDisplay3 = document.getElementById("numDisplay_3");


rollBtn.onclick = function(){

    const randomNumber1 = Math.floor(Math.random()*6) +1 ;
    const randomNumber2 = Math.floor(Math.random()*6) +1 ;
    const randomNumber3 = Math.floor(Math.random()*6) +1 ;
    numDisplay1.textContent = `You Got : ${randomNumber1}`;
    numDisplay2.textContent = `You Got : ${randomNumber2}`;
    numDisplay3.textContent = `You Got : ${randomNumber3}`

}
