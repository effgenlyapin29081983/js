/**
  * This function calculate temperature in Farenheit
  * @param Tc {number}
  * @returns {number}
  */
function calcFarenheit(Tc)
{
    return (9 / 5) * Tc + 32
}
/* 1 */
let tc = 35;
console.log(calcFarenheit(tc));
tc = -26;
console.log(calcFarenheit(tc));

/* 2 */
let name, admin;
name = "Vasiliy";
admin = name;
console.log(`admin = ${admin}`);

/* 3 */
console.log(1000 + "108");
