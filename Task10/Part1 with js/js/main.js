// import Elements
let btn = document.getElementById("btn");
let body = document.querySelector("body");
let input = document.getElementById("input");
let btnAdd = document.getElementById("btnAdd");
let h5 = document.getElementById("h5");
let tasks = document.getElementById("tasks");
let hr = document.querySelector("hr");
let btnShow = document.getElementById("btnShow");
let btnShow2 = document.getElementById("btnShow2");
let divShow = document.getElementById("divShow");
let divShow2 = document.getElementById("divShow2");
let btnDeleteAll = document.getElementById("btnDeleteAll");

// event theme
let theme = () => {
    if(btn.textContent == "Dark Mode") {
        btn.textContent = "Normal";
        btn.style.background = "#fff";
        btn.style.color = "black";
        body.style.background = "black";
        body.style.color = "#fff";
        hr.style.background = "#fff";
    } else {
        btn.textContent = "Dark Mode";
        btn.style.background = "black";
        btn.style.color = "#fff";
        body.style.background = "#fff";
        body.style.color = "black";
        hr.style.background = "black";
    }
}

// event added
let added = () => {
    let data = input.value;
        if(data.trim() == 0 || data.length < 3 || data.length > 20) {
            alert("You must enter valid data between 3 and 20 characters");
        } else {
            h5.classList.add("display");
            tasks.innerHTML += 
            `<div class="alert alert-info">
                ${data}
                <button class="delete btn btn-info float-right">
                    Delete
                </button>
             </div>`

             input.value = "";
             btnDeleteAll.classList.remove("display");
             tasks.classList.remove("display");
            
        }
}

let showNoTask = () => {
    if(tasks.childElementCount == 0) {
        h5.classList.remove("display");
        btnDeleteAll.classList.add("display");
    }
}

let show = () => {
    if(divShow.classList.contains("display")) {
        divShow.classList.remove("display");
        divShow2.classList.add("display");
    } else{
        divShow.classList.add("display");
    }
}

let show2 = () => {
    if(divShow2.classList.contains("display")) {
        divShow2.classList.remove("display");
        divShow.classList.add("display");
    } else{
        divShow2.classList.add("display");
    }
}

let check = (e) => {
    if (e.target.classList.contains("task")) {
        e.target.classList.toggle("check");
    }
}

let All = () => {
    if (tasks.classList.contains("display")) {
        tasks.classList.add("display");
    } else {
        tasks.classList.add("display");
        btnDeleteAll.classList.add("display");
        h5.classList.remove("display");
    }
    
}




// Add Events
btnShow.addEventListener("click", show);
btnShow2.addEventListener("click", show2);
btn.addEventListener("click", theme);
btnAdd.addEventListener("click", added);
document.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        showNoTask();
    }
})
tasks.addEventListener("click", check);
btnDeleteAll.addEventListener("click", All);