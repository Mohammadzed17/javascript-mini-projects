const Temprature = document.getElementById("Temprature");
const f_to_C = document.getElementById("f_to_C");
const c_to_F = document.getElementById("c_to_F");
const result = document.getElementById("result");

let temp;

function convert(){
    temp = Temprature.value;
    if (f_to_C.checked){
        temp = Number(temp);
        temp = temp*9/5 + 32;
        result.textContent =  `${temp.toFixed(1)} Celcius`;
    }else  if (c_to_F.checked){
        temp = Number(temp);
        temp = (temp - 32)* 5/9 ;
        result.textContent =  `${temp.toFixed(1)} fehranhite`;
    }else{
        result.textContent = "Please Choose The Conversion";
    }
}