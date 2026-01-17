const minNum = 50;
const maxNum = 100;

const answer = Math.floor(Math.random()*((maxNum - minNum)+1) + minNum);

let guess;
let attempts = 0;
let isrunning = true;

while(isrunning){

    guess = prompt(`Enter Any Number Between ${minNum} to ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        alert("Please Enter Valid Number");
    } 
    else if( guess >100 || guess < 50){
        alert(`Please Enter Number Between the range of ${minNum} to ${maxNum} `);
    } 
    else{
        attempts ++;
        if(guess<answer){
            alert("You guess low then the answer");
        } 
        else if(guess>answer){
            alert("You guess Higher then the answer")
        }
        else{
            alert(`You guess the correct answer which is ${answer} in ${attempts} attempts `);
            isrunning = false;
        }
            
    }
}