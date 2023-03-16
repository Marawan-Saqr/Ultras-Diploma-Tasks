// import elements
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let ul = document.getElementById("ul");
let ul2 = document.getElementById("ul2");
let ul3 = document.getElementById("ul3");





// Event For Theme1
let theme = () =>{
    if(ul.classList.contains("display")) {
        ul.classList.remove("display")
    } else {
        ul.classList.add("display")
    }
}


// Event For Theme2
let theme2 = () =>{
    if(ul2.classList.contains("display")) {
        ul2.classList.remove("display")
    } else {
        ul2.classList.add("display")
    }
}


// Event For Theme3
let theme3 = () =>{
    if(ul3.classList.contains("display")) {
        ul3.classList.remove("display")
    } else {
        ul3.classList.add("display")
    }
}





// Events
btn.addEventListener("click", theme);
btn2.addEventListener("click", theme2);
btn3.addEventListener("click", theme3);























































































