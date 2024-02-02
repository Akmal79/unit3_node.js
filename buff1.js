const buf1 = Buffer.alloc(4, 'PESU')//.toString();
const buf2 = Buffer.alloc(7, 'welcome ')//.toString();

var result = Buffer.compare(Buffer.from(buf1), Buffer.from(buf2));

if (result < 0) {
    console.log(buf1 + " Comes before " + buf2);
} else if (result === 0) {
    console.log(buf1 + " is equal to " + buf2);
} else {
    console.log(buf1 + " Comes after " + buf2);
}

var buf3 = Buffer.alloc(25)
buf2.copy(buf3);
console.log("buffer2 contents is copied to buff3: " + buf3.toString());
console.log(buf3.toString());