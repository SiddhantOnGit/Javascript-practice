function outer(){
	let x = 10;
	return function inner(){
		x = x+10;
		console.log(x);
	}
}

let hello = outer();