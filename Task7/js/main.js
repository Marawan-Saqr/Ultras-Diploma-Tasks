// import elements
let buttonDark = document.getElementById("dark");
let buttonLight = document.getElementById("light");
let div = document.getElementById("mainDiv");


// buttonDark onclick

let Dark = ()=>{
    div.style.background = "black";
    div.style.color = "#fff";
}

buttonDark.addEventListener("click", Dark);

// buttonLight onclick

let Light = ()=>{
    div.style.background = "#fff";
    div.style.color = "black";
}

buttonLight.addEventListener("click", Light);
















































