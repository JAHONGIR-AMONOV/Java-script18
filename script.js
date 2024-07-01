let arr = ['alex', 123, 0, false, null, undefined, [], {}, false, ''];
let wished = arr.filter(element => typeof element === 'string' || typeof element === 'number');

console.log(wished);