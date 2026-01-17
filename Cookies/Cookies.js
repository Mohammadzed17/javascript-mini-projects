const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const submitbtn = document.querySelector("#submitbtn");
const getCookiesbtn = document.querySelector("#getCookiesbtn");

submitbtn.addEventListener("click", () =>{
    setCookie("firstName",firstName.value,365);
    setCookie("lastName",lastName.value,365);
});
getCookiesbtn.addEventListener("click",() =>{
    firstName.value = getCookie("firstName");
    lastName.value = getCookie("lastName");
});


function setCookie(name,value,daysToLive){

    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60* 1000);
    let expires = `expires= ${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    let cDecoded = decodeURIComponent(document.cookie);
    let cArray = cDecoded.split("; ");
    let result = null;
    cArray.forEach(element =>{
        if (element.indexOf(name + "=") === 0) {
            result = element.substring(name.length + 1) 
        }       
    });
    return result;
}



