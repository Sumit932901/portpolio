let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(input.value == ""){
        alert("please enter your task")

    }else{
        let newEle =document.createElement("ul");
        newEle.innerHTML="add({input.value})";
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove()
        }
    }
}