let a: number = 2;
function outer() {
  let b: number = 3;
  function inner() { 
    let c: number = 8;
    console.log(a, b, c);
  }
  inner();
}
outer();


/**
 * function terdalam hanya bisa mengakses variable di dalam function itu sendiri dan fungsi terluarnya,
 * fungsi terluar tidak bisa mengakses variable didalam fungsi terdalam
 */