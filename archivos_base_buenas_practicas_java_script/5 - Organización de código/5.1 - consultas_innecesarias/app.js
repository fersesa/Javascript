//window.onload = function() {
    var btnSaludar = document.getElementById("btnSaludar");

    btnSaludar.addEventListener('click', function() {
        console.log("¡Hola Mundo!");
    });
//}
//Para evitar el uso de window se puede en el archivo html cargar el scrip no en el head si no despues del body
//es aconsejable que los scrips se carguend despues del body asi ya se tiene cargado todos los elementos anteriores