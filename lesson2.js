/* 1 */
/* var a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // 2 - потому, что здесь используется префиксная запись, т.е сначала мы
// увеличили а на 1, а потом присвоили полученное значение переменной с 
d = b++;
alert(d); // 1 - здесь используется постфиксная запись, т.е. мы сначала присвоили
// переменной d значение переменной b, а потом увеличили b на 1
c = (2 + ++a);
alert(c); // 5 - 2 + 2 + 1
d = (2 + b++);
alert(d); // 4 - 2 + 2
alert(a); // 3 - после всех вычислений в данной переменной записано число 3
alert(b); // 3 - после всех вычислений в данной переменной записано число 3 */

/* 2 */
/* var a = 2;
var x = 1 + (a *= 2); // =5
alert(x); */

/* 3 */
//1 через if
/* var a, b;
a = 5;
b = 7;
if (a >= 0 && b >= 0) alert(a - b);
else if (a < 0 && b < 0) alert(a * b);
else alert(a + b); */

//2 тернарные операторы
/* var a, b;
a = 5;
b = -7;
alert((a >= 0 && b >= 0) ? a - b : ((a < 0 && b < 0) ? a * b : a + b)); */


/* 4 */
/* function outputNums(x) {
    let outStr = "";
    for (var i = x; i < 16; i++) outStr += `${i} `;
    return outStr;
}
var a;
a = 16;
switch (a) {
    case 0:
        alert(outputNums(a));
        break;
    case 1:
        alert(outputNums(a));
        break;
    case 2:
        alert(outputNums(a));
        break;
    case 3:
        alert(outputNums(a));
        break;
    case 4:
        alert(outputNums(a));
        break;
    case 5:
        alert(outputNums(a));
        break;
    case 6:
        alert(outputNums(a));
        break;
    case 7:
        alert(outputNums(a));
        break;
    case 8:
        alert(outputNums(a));
        break;
    case 9:
        alert(outputNums(a));
        break;
    case 10:
        alert(outputNums(a));
        break;
    case 11:
        alert(outputNums(a));
        break;
    case 12:
        alert(outputNums(a));
        break;
    case 13:
        alert(outputNums(a));
        break;
    case 14:
        alert(outputNums(a));
        break;
    case 15:
        alert(outputNums(a));
        break;
    default:
        alert("a not in [0..15]!");
        break;
} */

/* 5 */
/* function my_sum(a, b) {
    return a + b;
}

function my_diff(a, b) {
    return a - b;
}

function my_mul(a, b) {
    return a * b;
}

function my_div(a, b) {
    if (b != 0) return a / b;
    else return null;
}
var x = 5,
    y = 0;
alert(`${x}+${y}=${my_sum(x,y)}`);
alert(`${x}-${y}=${my_diff(x,y)}`);
alert(`${x}*${y}=${my_mul(x,y)}`);
alert(`${x}/${y}=${my_div(x,y)}`); */

/* 6 */
/* function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "my_sum":
            return arg1 + arg2;
            break;
        case "my_diff":
            return arg1 - arg2;
            break;
        case "my_mul":
            return arg1 * arg2;
            break;
        case "my_div":
            if (arg2 != 0) return arg1 / arg2;
            else return null;
            break;
        default:
            return "operation not registered!";
            break;
    }
}

var a = 5,
    b = 0;
alert(`${a}+${b} = ${mathOperation(a,b,"my_sum")}`);
alert(`${a}-${b} = ${mathOperation(a,b,"my_diff")}`);
alert(`${a}*${b} = ${mathOperation(a,b,"my_mul")}`);
alert(`${a}/${b} = ${mathOperation(a,b,"my_div")}`); */

/* 7 */
//alert(0 == null); // return false - т.к. null не равен 0

/* 8 */
function power(val, pow) {
    if (pow == 0) return 1;
    else return val * power(val, --pow);
}

alert(power(2, 3));
alert(power(3, 3));