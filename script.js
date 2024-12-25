let firstdiv = document.getElementById("first")
function firstupdate(){
    firstdiv.style.backgroundColor="Red"
    seconddiv.style.backgroundColor=""
    thirddiv.style.backgroundColor=""
}

let seconddiv = document.getElementById("second")
function secondupdate(){
    seconddiv.style.backgroundColor="yellow"
      thirddiv.style.backgroundColor=""
        firstdiv.style.backgroundColor=""
}


let thirddiv = document.getElementById("third")
function thirddivupdate(){
    thirddiv.style.backgroundColor="green"
    seconddiv.style.backgroundColor=""
    firstdiv.style.backgroundColor=""
}