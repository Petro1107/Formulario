/* Mostrar contraseña */

function mostrarContra(){
    var x = document.getElementById('contra')
    var y = document.getElementById('ocultar')
    var z = document.getElementById('mostrar')
    
    
    if(x.type=='password'){
        x.type="text"
        y.style.display="block"
        z.style.display="none"
    }else{
        x.type="password"
        y.style.display="none"
        z.style.display="block"
    }
}

/* Mover página */

const movPag = document.querySelector(".movPag")
const btnAdelante2 = document.querySelector(".sigPag")
const btnAdelante3 = document.querySelector(".adelante-pag3")
const btnAdelante4 = document.querySelector(".adelante-pag4")
const btnAtras1 = document.querySelector(".volver-pag1")
const btnAtras2 = document.querySelector(".volver-pag2")
const btnAtras3 = document.querySelector(".volver-pag3")
const btnFin = document.querySelector(".fin")

const progressText = document.querySelectorAll('.paso p')
const progressCheck = document.querySelectorAll('.paso .check')
const num = document.querySelectorAll('.paso .num')

let max = 4;
let cont = 1;


btnAdelante2.addEventListener("click", function(e){
    e.preventDefault();

    let nombre = document.getElementById('nombres').value;
    let apellido1 = document.getElementById('apellido1').value;
    let apellido2 = document.getElementById('apellido2').value;

    if (nombre =="" || apellido1 =="" || apellido2 == "" ){
        document.getElementById('nombres-error').innerHTML = "* Todos los campos son obligatorios"
        document.getElementById('nombres').style.borderColor = "#db2a31"
        document.getElementById('apellido1').style.borderColor = "#db2a31"
        document.getElementById('apellido2').style.borderColor = "#db2a31"
    }else{

        document.getElementById('nombres-error').innerHTML = ""
        document.getElementById('nombres').style.borderColor = "lightgrey"
        document.getElementById('apellido1').style.borderColor = "lightgrey"
        document.getElementById('apellido2').style.borderColor = "lightgrey"
    movPag.style.marginLeft="-25%"
    num[cont - 1 ].classList.add("active");
    progressCheck[cont - 1 ].classList.add("active");
    progressText[cont - 1 ].classList.add("active");
    cont += 1;
}
})

btnAdelante3.addEventListener("click", function(e){
    e.preventDefault();

    movPag.style.marginLeft="-50%";
    num[cont - 1 ].classList.add("active");
    progressCheck[cont - 1 ].classList.add("active");
    progressText[cont - 1 ].classList.add("active");
    cont += 1;
})

btnAdelante4.addEventListener("click", function(e){
    e.preventDefault();

    movPag.style.marginLeft="-75%";
    num[cont - 1 ].classList.add("active");
    progressCheck[cont - 1 ].classList.add("active");
    progressText[cont - 1 ].classList.add("active");
    cont += 1;
})

btnFin.addEventListener("click", function(e){
    e.preventDefault;

    num[cont - 1 ].classList.add("active");
    progressCheck[cont - 1 ].classList.add("active");
    progressText[cont - 1 ].classList.add("active");
    cont += 1;

    alert("Fin del registro")
})

btnAtras1.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft="0%"
    num[cont - 2 ].classList.remove("active");
    progressCheck[cont - 2 ].classList.remove("active");
    progressText[cont - 2 ].classList.remove("active");
    cont -= 1;
})

btnAtras2.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft="-25%"
    num[cont - 2 ].classList.remove("active");
    progressCheck[cont - 2 ].classList.remove("active");
    progressText[cont - 2 ].classList.remove("active");
    cont -= 1;
})

btnAtras3.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft="-50%"
    num[cont - 2 ].classList.remove("active");
    progressCheck[cont - 2 ].classList.remove("active");
    progressText[cont - 2 ].classList.remove("active");
    cont -= 1;
})