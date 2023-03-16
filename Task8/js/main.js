let btn = document.getElementById("btn");
let body = document.getElementById("bod");


let theme = () => {
    if(btn.textContent == "Dark Mode") {
        body.style.background = "black";
        btn.textContent = "Normal";
        btn.style.background = "#fff";
        btn.style.color = "black";
    }else if(btn.textContent == "Normal") {
        body.style.background = "#fff";
        btn.textContent = "Dark Mode";
        btn.style.background = "black";
        btn.style.color = "#fff";
    }
}


btn.addEventListener("click", theme);


































































































