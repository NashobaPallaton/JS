window.addEventListener("load", ()=>{
   setTimeout(
    function open(event){
       document.querySelector(".popup").style.display = "block";
    }, 
   1500)
});


document.querySelector("#close").addEventListener("click", ()=>{
    document.querySelector(".popup").style.display = "none";
});

document.querySelector("a").addEventListener("click", ()=>{
    document.querySelector(".popup").style.display = "none";
});
