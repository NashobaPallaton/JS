if(localStorage.storedList){
    load();

}function add(){
    let newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("box").value;
    newItem.onclick = remove;
    document.getElementById("list").appendChild(newItem);
    saveList();
}

function remove(){
    document.getElementById("list").removeChild(this);
    saveList();
}

function saveList(){
    localStorage.storedList = document.getElementById("list").innerHTML;
}

function load(){
    document.getElementById("list").innerHTML = localStorage.storedList;
    for(var i=0; i < list.children.lenght; i++){
        list.children[1].onclick = remove;
    }
}