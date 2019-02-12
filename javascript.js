(function(window){
	console.log('MAP ========');
	const usuarios = [
		{
			name: 'aldo'
		},
		{
			name: 'lalo'
		}
	];
	var c3ntro = 'judios';
	const num = 10;
	const array1 = usuarios.map(element => {
		return element.name + 'c3ntro';
	});
	console.log(array1);

	console.log('REDUCE ========');
	const calificaciones = [10,11,21,3,4,5];
	const promedio = calificaciones.reduce((actual, siguiente) => actual + siguiente );
	console.log(promedio);

	const aprovaron = calif => calif >= 6 ? calif : 0;

	console.log('FILTER ========');
	const calificacion = [0,10,10,3,9,5];
	const aprobaron = calificacion.filter(element => aprovaron(element));
	console.log(aprobaron);


	console.log("TYPE COHERSION");
	console.log(0 == null);


	console.log("HOISTING");
	x = 0;
	console.log(x);
	var x;

})(window);


console.log('CLOSURES AND SCOPES');
var xxx = 'porno';
function a(){
	var variable = 'aaaaaa';
	console.log(xxx);
}
a();
console.log(variable);

var variable = 'bbbbbbb';

function func() {
	var x = 10;

	function closure() {
		var y = 1;
		console.log(x);
	}

	closure();


}

func();













