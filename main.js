
const selector = document.getElementById("select")
let resultado = document.getElementById('resultado')
const btn = document.querySelector("button")

btn.addEventListener("click" , () =>{
    let n1 = Namber(document.getElementById("num1").value)
    let n2 = Namber(document.getElementById("num2").value)
    let option = selector.options[selector.selectedIndex].value
    if( option == '+'){
        resultado.value = n1 + n2 
    }else if ( option == '-' ){
        resultado.value = n1 - n2
    }else if( option.value == "*"){
        resultado.value = n1 * n2
    }else if ( option.value == "/"){
        resultado.value = n1 / n2
    }
    else{
        alert("selecione uma opção!")
    }


})