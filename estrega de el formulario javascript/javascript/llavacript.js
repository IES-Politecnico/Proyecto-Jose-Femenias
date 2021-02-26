
function palabradepaso(){

if (document.registro.contraseña1.value == document.registro.contraseñarepetida.value) {
    document.getElementById("sicoinciden").innerHTML = "Las contraseñas coinciden"
    document.getElementById("sicoinciden").style.color = "#00ff00"
}

else {
    document.getElementById("sicoinciden").innerHTML = "Las contraseñas no coinciden"
    document.getElementById("sicoinciden").style.color  = "#ff0000"
}
}