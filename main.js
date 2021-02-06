const arr = [10, 20, 30, 40, 50];
const [a, , , d, e] = arr;
console.log(a, d, e);

const obj = {
	a: 1,
	b: 2,
	c: 3
}

const {a: x, b: y, c: z} = obj;

console.log(x, y, z);