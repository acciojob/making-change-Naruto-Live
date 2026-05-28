const makeChange = (c) => {
	let q = Math.floor( c / 25 );
	c %= 25;
	let d = Math.floor( c / 10 );
	c %= 10;
	let n = Math.floor( c / 5 );
	c %= 5;
	let p = c;
	console.log({
		q: q,
		d: d,
		n: n,
		p: p
	});
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
