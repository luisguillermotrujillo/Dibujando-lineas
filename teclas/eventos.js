//alert("todo bien")
var teclas = {
UP:38,
DOWN:40,
LEFT:37,
RIGHT:39
};
document.addEventListener("keyup",dibujarTeclado);
var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("blue",x-1,y-1,x+1,y+1,papel);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo) {
    lienzo.beginPath();
    lienzo.stronkeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujarTeclado(evento) {
    var colorcito = "yellow";
    var movimiento = 10;
    switch(evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito,x,y,x,y + movimiento,papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito,x,y,x - movimiento,y,papel);
            x = x - movimiento;
        case teclas.RIGHT :
            dibujarLinea(colorcito,x,y,x + movimiento,y,papel);
            x = x + movimiento;      
        default:
        
            break;
    }
}