const inputbox = document.querySelector('#inp');
const btn = document.querySelector('#btn_add');
const Listcontents = document.getElementById("list");

btn.addEventListener('click', ()=>{
    if(inputbox.value == ""){
        alert("You Must Add Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value
        Listcontents.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    save()
})

Listcontents.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        save()
    }
},false);


function save(){
    localStorage.setItem("data", Listcontents.innerHTML);

}

function show(){
    Listcontents.innerHTML = localStorage.getItem("data");
}

show();