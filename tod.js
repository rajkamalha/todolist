let input=document.getElementById("inp")
let listc=document.getElementById("listc")

function addtask(){
    if(input.value===''){
        alert("you must write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = input.value;
        listc.appendChild(li);
        let span =document.createElement("span")
span.innerHTML="\u00d7"
li.appendChild(span);
    }
    input.value=''
}
listc.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
