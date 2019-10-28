// var x = 10;
// do {
//   document.write(x + " und ");
//   x++;
// } while (x < 20);

var bombTimer = 5;
do {
  alert("Die Bombe tickt: " + bombTimer + " Sekunden noch! LAUF!");
  bombTimer--;
} while (bombTimer > 0);
if (bombTimer < 1) {
  alert("BOOM!");
}
