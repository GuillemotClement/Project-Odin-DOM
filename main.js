const list = document.querySelector("#list-item");
const inputItem = document.querySelector("#item");
const buttonAdd = document.querySelector("#btn-add");

function getValue(){
    let value = inputItem.value;
    inputItem.value = "";
    return value
}

function deleteValue(e){
    e.target.parentElement.remove();
}

buttonAdd.addEventListener("click", () => {
    const value = getValue();

    if(value){
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");
        button.id = "btnDelete";
        span.textContent = value
        button.textContent = "Supprimer";
        button.addEventListener("click", deleteValue);

        li.appendChild(span);
        li.appendChild(button);

        list.appendChild(li);
    }
});











