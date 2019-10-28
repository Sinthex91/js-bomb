// var x = 1;
// while (x < 10) {
//   document.write(x + "<br/>");
//   x++;
// }

var bombTimer = 5;
while (bombTimer > 0) {
  alert(
    "Du hast noch Zeit. Die Bombe explodiert in " +
      bombTimer +
      " Sekunden. RENN!"
  );
  bombTimer--;
}
