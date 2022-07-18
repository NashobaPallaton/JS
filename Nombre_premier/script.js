function premier(){
    n = document.getElementById("number").value;
    n = parseInt(n);

if(n<2)
document.write(`${n} n'est pas  nombre premier`)


for (let i = 2; i < n; i++)
    if (n % i == 0)
    document.write(`${n} n'est pas  nombre premier`)
    
    else
        document.write(`${n} est un nombre premier`)
    
}
