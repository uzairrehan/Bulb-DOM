let bulb = document.querySelector("#bulb");
let i = 0;
bulb.addEventListener("click", function () {
    if (i === 0) {
        bulb.style.backgroundColor = "yellow"
        i = 1 
    }
    else{
        bulb.style.backgroundColor = "#ffffff"
        i = 0
    }
})