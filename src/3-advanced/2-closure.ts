// function outerClosure() {
//   let counter = 0;
//   function innerOuter() {
//     counter++;
//     console.log(counter);
//   }
//   innerOuter();
// }

// outerClosure(); // 1
// outerClosure(); // 1
// outerClosure(); // 1


function outerClosure() {
  let counter = 0;
  function innerOuter() {
    counter++;
    console.log(counter);
  }
  return innerOuter;
}

const fn = outerClosure(); // 1
fn();
fn();
fn();
fn();

