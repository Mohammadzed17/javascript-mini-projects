const mybtn = document.getElementById("mybtn");
const myImg = document.getElementById("myImg");

mybtn.addEventListener("click", event =>{

    if (myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        mybtn.textContent = `On`
        mybtn.style.backgroundColor = `green`;
    }
    else{
        myImg.style.visibility = `hidden`;
        mybtn.textContent = `Off`;
        mybtn.style.backgroundColor = `red`;
    }
});
document.addEventListener("keydown", event =>{
    if (event.key === "Enter"){
        myImg.style.visibility = `hidden`;
        mybtn.textContent = `Off`;
        mybtn.style.backgroundColor = `red`;
    }
});
document.addEventListener("keyup", event =>{
    myImg.style.visibility = "visible";
    mybtn.textContent = `On`
    mybtn.style.backgroundColor = `green`;
});