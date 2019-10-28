/* var brand = "Mercedes";
switch (brand) {
  case "BMW":
    document.write("German Car");
    break;
  case "Toyota":
    document.write("Japanese Car");
    break;
  case "Mercedes":
    document.write("German Car");
    break;
  default:
    document.write("Not in system");
}
*/

// var i = 2;
// for (x = 10 + i; x <= 100; x += 10) {
//   document.write("Das ist die " + x + ". Runde des Loops" + "<br />");
// }

for (bombTimer = 5; bombTimer > 0; bombTimer--) {
  alert("Still time so escape. Bomb goes off in " + bombTimer);
  if (bombTimer < 2) {
    alert("BOOM!");
  }
}

// var day_of_week = 1;
// switch (day_of_week) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     document.write("Working Days");
//     break;
//   case 6:
//     document.write("Saturday");
//     break;
//   case 7:
//     document.write("Today is Sunday");
//     break;
//   default:
//     document.write("Wrong day input");
//     break;
// }
