const container = document.getElementById("container");

document.addEventListener("keydown", event => {
    container.style.backgroundImage = `url('https://i.pinimg.com/1200x/b3/5b/37/b35b3714f1f63dd28e52a0027f26f034.jpg')`;
});
document.addEventListener("keyup", event => {
    container.style.backgroundImage = `url('https://i.pinimg.com/1200x/64/93/19/649319cff15c7ad009e3df292335d3c6.jpg')`
});

let speed = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{

    event.preventDefault();
    if (event.key.startsWith("Arrow")){
        switch(event.key){

            case "ArrowUp":
                y-= speed;
                break;
            case "ArrowDown":
                y+= speed;
                break;
           case "ArrowLeft":
                x-= speed;
                break;
             case "ArrowRight":
                x+= speed;
                break;
        }
        container.style.top = `${y}px`;
        container.style.left = `${x}px`;
    }
});