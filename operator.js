// Less Than =>    <
// Greater Than =>   >
// Not Equals => !
// AND => && , OR => ||

let number = 90;
let isAuth = true;
// AND => &&
if (number == 90 && isAuth == true) {
  console.log("You passed");
}
// OR => ||
if (number == 90 || isAuth == true) {
  console.log("You passed");
}
// not equals
let num = 9;
if (number != 9 || isAuth == true) {
  console.log("You passed");
}

/*
num == 9 && isAuth == true
true && false
false
!false = true
*/
