window.addEventListener("load", ()=>{
   setTimeout(
    function open(event){
       document.querySelector(".popup").style.display = "block";
    }, 
   2000)
});


document.querySelector("#close").addEventListener("click", ()=>{
    document.querySelector(".popup").style.display = "none";
});
