const now = new Date();
const test = new Date();

// 1. It is a date?

// 2. The "now" variable type is an object.
//      console.log(typeof now);

// 3. The date is Wed Aug 24 2022 15:03:21 GMT+0200 (Central European Summer Time)
//      console.log(Date());

// 4. "Date" type is a function.
//      console.log(typeof Date);

// 5. I get:
//          2022-08-24T13:04:27.554Z
//  when I console.log(now)
console.log(now);

// 6. I get:
//          [Function: Date]
//  when I console.log(Date)
console.log(Date);

// 7. I get:
//          2022-08-24T13:06:47.273Z
//  when I console.log(new Date())
console.log(new Date());

// 8. No, it is not.
console.log(now === true);

// 9. You get false because
console.log(now === test);

// 10. You get false.
console.log(now === Date);

// 11. You get false.
console.log(now === new Date());

// 12. You get false because
console.log(new Date() === new Date());
