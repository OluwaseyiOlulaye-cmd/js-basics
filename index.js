
function multiAmount(d, n) {
  return (d * n) 
}

let d = prompt("Type in your number", '');
let n = prompt("Type in your number", '');

if (n < 410.83) {
    console.log (`number ${n} is not accepted, use the correct number`);
   
}else {
    console.log(multiAmount (d, n));  
}

