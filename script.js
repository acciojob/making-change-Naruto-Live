const makeChange = (c) => {
	let q = Math.floor( c / 25 );
	amount %= 25;
	let d = Math.floor( c / 10 );
	amount %= 10;
	let n = Math.floor( c / 5 );
	amount %= 5;
	let p = amount;

	return {
		q: q,
		d: d,
		n: n,
		p: p
	};
}



// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
