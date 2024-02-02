const buf1 = Buffer.alloc(14, 'pesu');
const buf2 = Buffer.alloc(15, 'University');

console.log(buf1.toString());
console.log(buf2.toString());

const total = buf1.length + buf2.length;
console.log("Total is: ", total);

const buf3 = Buffer.concat([buf1, buf2], total);
console.log(buf3.toString());
