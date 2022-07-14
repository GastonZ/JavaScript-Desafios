
/* dinero = prompt("Bienvenido a La Heladeria. \n Helado 1/4kg : $100 \n Helado 1kg : $200 \n Helado 2kg : $300 \n cuanto dinero tienes?");

if (dinero < 100){
    alert ("No te alcanza para ningun helado")
}
else if (dinero >= 100 && dinero <200) {
    alert("Podes comprar helado de 1/4kg")
}
else if (dinero >= 100 && dinero <300){
    alert("Podes comprar helado de 1/4kg y de 1kg")
}
else if (dinero >= 100 && dinero >= 300) {
    alert("Podes comprar helados de 1/4kg, de 1kg y de 2kg!")
}*/


let texto    = prompt("Escribe un texto ! Cuando quieras parar escribe ESC");
let escribe = " ";
while (texto != "ESC") {
    escribe += texto +"_";
    texto     = prompt("Escribe un texto ! Cuando quieras parar escribe ESC");
}
document.write ("Escribiste: " + escribe);
