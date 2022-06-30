
let select = document.getElementById("select")
let resultado = document.getElementById("resultado")
let btn = document.querySelector("button")

btn.addEventListener("click" , () => {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let option = select.options[select.selectedIndex].value
    if( option =="+"){
        resultado.value = num1 + num2 
    }else if ( option == "-" ){
        resultado.value = num1 - num2

    }else if( option.value == "*"){
        resultado.value = num1 * num2

    }else if ( option.value == "/"){
        resultado.value = num1 / num2
    }
    else{
        alert("selecione uma opção!")
    }
})
