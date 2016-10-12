// funcion promedio
function callbackPromedio (a, b, c, callback){

	var nota =( a + b + c)/ 3;
	return callback (nota);
}
// funcion segundero
var segundo = 1;
function segundero (){
	document.getElementById("titulo").innerHTML = segundo++;

}
setInterval(segundero,1000);