const countIncrease = document.getElementById("countIncrease");
const countReset = document.getElementById("countReset");
const countDecrease = document.getElementById("countDecrease");
const countDisplay = document.getElementById("countDisplay");

let count = 0;
countIncrease.onclick = function(){

    count ++;
    document.getElementById("countDisplay").textContent = count;
}
countDecrease.onclick = function(){

    count --;
    document.getElementById("countDisplay").textContent = count;
}
countReset.onclick = function(){

    count = 0;
    document.getElementById("countDisplay").textContent = count;
}

