//Creating HTML Elements
const form = document.createElement("form");
document.body.append(form);

const divClass = ["form-group", "panel"]

divClass.forEach(function(ele){
    const div = document.createElement("div");
    div.className = ele;
    form.append(div);
})

const formGroup = document.getElementsByClassName("form-group")[0];
const monitor = document.createElement("input");
monitor.className = "display";
monitor.id = "show";
monitor.type = "text";
monitor.placeholder = "0";
monitor.setAttribute("onkeypress", "return isNumber(event)");

formGroup.append(monitor);

//Input Number Only Validation
function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;
    return true;
} 

//DOM Div: row, col
const panel = document.getElementsByClassName("panel")[0];
const divRow = document.createElement("div");
divRow.className = "row";

for(i=0;i<6;i++)
{
    panel.append(divRow.cloneNode(true));
    const row = document.getElementsByClassName("row")[i];
    
    if(i!=5)
    {
        for(j=0;j<5;j++)
        {
            const col1 = document.createElement("div");
            col1.className = "col";
            col1.style="padding: 0px 0px 0px 15px;";
            row.append(col1.cloneNode(true));
            if(i>0)
            {
                for(k=0;k<2;k++)
                {
                    const col2 = document.createElement("div");
                    col2.className = "col";
                    col2.style="padding: 0px;";
                    row.append(col2.cloneNode(true));
                }
            }
            else
            {
                for(k=0;k<3;k++)
                {
                    const col2 = document.createElement("div");
                    col2.className = "col";
                    col2.style="padding: 0px;";
                    row.append(col2.cloneNode(true));
                }
            }
            const col3 = document.createElement("div");
            col3.className = "col";
            col3.style="padding: 0px 15px 0px 0px;";
            row.append(col3.cloneNode(true));
            break;
        }
    }
    else if(i === 5)
    {
        const lcol = document.createElement("div");
        lcol.className = "col";
        lcol.style="padding: 0px 15px 0px 15px;";
        row.append(lcol.cloneNode(true));
    }
}

//DOM Memory Keys
const column = document.querySelectorAll(".col");

const mem1 = document.createElement("input");
mem1.className = "btns mem";
mem1.type = "button";
mem1.value = "MR";
mem1.setAttribute("onclick","memory(this.value)");
column[0].append(mem1);

const mem2 = document.createElement("input");
mem2.className = "btns mem";
mem2.type = "button";
mem2.value = "MC";
mem2.setAttribute("onclick","memory(this.value)");
column[1].append(mem2);

const mem3 = document.createElement("input");
mem3.className = "btns mem";
mem3.type = "button";
mem3.value = "M+";
mem3.setAttribute("onclick","memory(this.value)");
column[2].append(mem3);

const mem4 = document.createElement("input");
mem4.className = "btns mem";
mem4.type = "button";
mem4.value = "M-";
mem4.setAttribute("onclick","memory(this.value)");
column[3].append(mem4);

const mem5 = document.createElement("input");
mem5.className = "btns mem";
mem5.id = "C";
mem5.type = "button";
mem5.value = "C";
mem5.setAttribute("onclick", "clr()");
column[4].append(mem5);

//DOM Digits, Operators
const dig1 = document.createElement("input");
dig1.className = "btns digits";
dig1.type = "button";
dig1.value = "1";
dig1.setAttribute("onclick","display(this.value)");
column[5].append(dig1);

const dig2 = document.createElement("input");
dig2.className = "btns digits";
dig2.type = "button";
dig2.value = "2";
dig2.setAttribute("onclick","display(this.value)");
column[6].append(dig2);

const dig3 = document.createElement("input");
dig3.className = "btns digits";
dig3.type = "button";
dig3.value = "3";
dig3.setAttribute("onclick","display(this.value)");
column[7].append(dig3);

const dig4 = document.createElement("input");
dig4.className = "btns operations";
dig4.id = "divide";
dig4.type = "button";
dig4.value = "÷";
dig4.setAttribute("onclick", "operation(this.id)");
column[8].append(dig4);

const dig5 = document.createElement("input");
dig5.className = "btns digits";
dig5.type = "button";
dig5.value = "4";
dig5.setAttribute("onclick","display(this.value)");
column[9].append(dig5);

const dig6 = document.createElement("input");
dig6.className = "btns digits";
dig6.type = "button";
dig6.value = "5";
dig6.setAttribute("onclick","display(this.value)");
column[10].append(dig6);

const dig7 = document.createElement("input");
dig7.className = "btns digits";
dig7.type = "button";
dig7.value = "6";
dig7.setAttribute("onclick","display(this.value)");
column[11].append(dig7);

const dig8 = document.createElement("input");
dig8.className = "btns operations";
dig8.id = "multiply";
dig8.type = "button";
dig8.value = "x";
dig8.setAttribute("onclick", "operation(this.id)");
dig8.setAttribute("onkeypress","operation(this.id)");
column[12].append(dig8);

const dig9 = document.createElement("input");
dig9.className = "btns digits";
dig9.type = "button";
dig9.value = "7";
dig9.setAttribute("onclick","display(this.value)");
column[13].append(dig9);

const dig10 = document.createElement("input");
dig10.className = "btns digits";
dig10.type = "button";
dig10.value = "8";
dig10.setAttribute("onclick","display(this.value)");
column[14].append(dig10);

const dig11 = document.createElement("input");
dig11.className = "btns digits";
dig11.type = "button";
dig11.value = "9";
dig11.setAttribute("onclick","display(this.value)");
column[15].append(dig11);

const dig12 = document.createElement("input");
dig12.className = "btns operations";
dig12.type = "button";
dig12.value = "+";
dig12.setAttribute("onclick", "operation(this.id)");
column[16].append(dig12);

const dig13 = document.createElement("input");
dig13.className = "btns digits";
dig13.type = "button";
dig13.value = ".";
dig13.setAttribute("onclick","display(this.value)");
column[17].append(dig13);

const dig14 = document.createElement("input");
dig14.className = "btns digits";
dig14.type = "button";
dig14.value = "0";
dig14.setAttribute("onclick","display(this.value)");
column[18].append(dig14);

const dig15 = document.createElement("input");
dig15.className = "btns digits";
dig15.type = "button";
dig15.value = "00";
dig15.setAttribute("onclick","display(this.value)");
column[19].append(dig15);

const dig16 = document.createElement("input");
dig16.className = "btns operations";
dig16.type = "button";
dig16.value = "-";
dig16.setAttribute("onclick", "operation(this.id)");
column[20].append(dig16);

const dig17 = document.createElement("input");
dig17.className = "btns operations";
dig17.id = "equals";
dig17.type = "button";
dig17.value = "=";
dig17.setAttribute("onclick","equal()");
column[21].append(dig17);

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
        document.getElementById("show").value = +dig;
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
