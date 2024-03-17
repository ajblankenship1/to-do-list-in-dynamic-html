let toDOListItems = ["make the bed", "take out the trash", "go to the store"];



for(let item of toDOListItems){
    addLiToUl(item);
    
}

document.querySelector("input[name='addItem']").addEventListener("click", () =>{
    let toDoInput = document.querySelector("input[name='todo']");

    addLiToUl(toDoInput.value);
    toDoInput.value = "";

})

document.querySelector("#theForm").addEventListener("submit", (event) =>{
    console.log("submitted");
    event.preventDefault();
    
    let toDoInput = document.querySelector("input[name='todo']");

    addLiToUl(toDoInput.value);
    toDoInput.value = "";
})


document.querySelectorAll("#toDoList li button").forEach((button) =>{
    button.addEventListener("click", buttonClicked);
})



// toDOList.forEach((thing) =>{
//     console.log(thing);
// })



function addLiToUl(item){

    let toDOList = document.querySelector("#toDoList");
    let listItem = document.createElement("li");
    let paragraph = document.createElement("p");
    paragraph.innerHTML =item;

    let button = document.createElement("button");
    button.innerHTML = "Done";
    button.addEventListener("click", buttonClicked);

    listItem.appendChild(paragraph);
    listItem.appendChild(button);

    toDOList.appendChild(listItem);

}

function buttonClicked(event){
    console.log("button was clicked");
    event.srcElement.parentElement.remove();
}