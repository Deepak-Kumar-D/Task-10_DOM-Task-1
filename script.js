//Display Numbers
function display(dig){
    let num = document.getElementById("show").value;
    let sol = window.localStorage.getItem("sol");
    let mr = window.localStorage.getItem("Memory");
    
    if(sol > 0)
    {
        window.localStorage.removeItem("sol");
        document.getElementById("show").value = "";
        document.getElementById("show").value = dig;        
    }
    else if(+num === 0 || num === " " || num === mr)
    {
        document.getElementById("show").value = dig;
    }
    else
    {
        document.getElementById("show").value = num + dig;
    }
}

//Clear Display
function clr(){
    document.getElementById("show").value = "";
}

//Operations
function operation(operator){
    let a = +document.getElementById("show").value;
    window.localStorage.setItem("a", a);
    clr();
    window.localStorage.setItem("op", operator);
}

//Equals
function equal(){
    let b = +document.getElementById("show").value;
    let a = +window.localStorage.getItem("a");
    let op = window.localStorage.getItem("op");
    let sol;
    let display = document.getElementById("show").value;
    
    if(op === "divide")
    {
        sol=(window.localStorage.setItem("sol", display = a / b));
        document.getElementById("show").value = a / b;
    }
    else if(op === "multiply")
    {
        sol=(window.localStorage.setItem("sol", display = a * b));
        document.getElementById("show").value = a * b;
    }
    else if(op === "plus")
    {
        sol=(window.localStorage.setItem("sol", display = a + b));
        document.getElementById("show").value = a + b;
    }
    else if(op === "minus")
    {
        sol=(window.localStorage.setItem("sol", display = a - b));
        document.getElementById("show").value = a - b;
    }
}

//Memory
function memory(ele){
    let mem = +document.getElementById("show").value;
    let save = +window.localStorage.getItem("Memory");
    
    if(ele === "M+")
    {
        window.localStorage.setItem("Memory", save + mem);
    }
    else if(ele === "M-")
    {
        window.localStorage.setItem("Memory", save - mem);
    }
    else if(ele === "MC")
    {
        window.localStorage.removeItem("Memory");
        document.getElementById("show").value = "";
    }
    else if(ele = "MR")
    {
        document.getElementById("show").value = window.localStorage.getItem("Memory");
    }
}