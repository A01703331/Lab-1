var numInp = prompt("Give me a number", "0");
while (numInp <= 0){
  var numInp = prompt("Please give me a number higher than 0", "0");
}
const number = parseInt(numInp);
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
var x = random(0,20);
var y = random(0,20);
var result = x+y;
var start = new Date;
start.getSeconds();
const answer = prompt("How much is "+ x + " + "+ y + "?");
var finish = new Date;
finish.getSeconds();
var Ttime = finish-start;
if (answer == result){
  alert("You answered correctly, and took " + Ttime + "ms to do so.");
}
else {
  alert("Shame. You've answered incorrectly, peasant. You took "+ Ttime + "ms of my time to disappoint me, shame on you.");
}

document.write("<p class = Problem> Count, Squares, and cubes from 1 to " + number +".</p>");
for (let i = 1; i <= number; i++) {
  document.write("<p class = Answer>",i," ",i*i," ",i*i*i,"</p>");
}


array1 = new Array();
for (let i = 0; i <= 9; i++){
  numA = prompt("Give me a number for an array. ("+(i+1)+"/10)");
  array1.push(parseInt(numA));
}

function counter(myArray){
  var zeroes = 0;
  var negatives = 0;
  var overZero = 0;
  for (let i = 0; i<= myArray.length;i++){
    if(myArray[i]==0){
      zeroes++;
    }
    else if (myArray[i]<0){
      negatives++;
    }
    else if (myArray[i]>0){
      overZero++;
    }
  }
  document.write("<p class = Problem> In the array, there are "+zeroes+" zeroes, "+negatives+" negative numbers, and "+overZero+" numbers greater than zero.</p>");
}
counter(array1);

let matriz = [[9,8],[9,7]];
let sum=0;
let prom=0;
function promedio(myArray){
    for(var i=0; i< myArray.length; i++) {
        var x = myArray[i];
        for(var j=0; j< x.length; j++) {
            sum   = sum + x[j];
        }
    }
    document.write("<p class = Problem>The average of the arrays is:</p>")
    avg = sum/4;
    document.write("<p class = Answer>"+avg+"</p>")
}
promedio(matriz);

function reverseNum(num){
  return (
    parseFloat(
      num
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(num)
  )
}

document.write("<p class = Problem>"+number+" backwards is ",reverseNum(number),"</p>");

document.write("<h1>JavaScript Problem</h1>");
document.write("<p id=Chase>It was a normal day in the Mushroom Kingdom, </p>");
document.write("<p id=Chase>José quiere andar con María (◕ᴗ◕✿) pero María es la inteligente del salón y solo sale con chicos inteligentes. Como José es un soberano tarado pues María ni lo pela. Obsesionado por obtener el amorx de María.</p>");
document.write("<p id=Chase>José invoca al demonio azteca tepartolacaratl para hacer un pacto con él y ser el we más inteligente del mundo pero tepartolacaratl hace magia más no milagros así que como es bien mañoso te pide a ti que tires paro y le hagas un programa en JavaScript para que saque los cuadrados de los números porque claro eso fue lo que le pidió José (￣ヘ￣) maldito tepartolacaratl ni le da lo que le pide el José</p>");
document.write("<p id=Chase>Te niegas pero luego tepartolacaratl te recuerda que una vez te tiro paro para pasar la materia de Ricardo en análisis de software así que de mala gana aceptas (ー_ー゛)</p>");
document.write("<p id=Chase>Ademas de demonio chantajista y estafador</p>");

 function PowerStars(num){
   this.num = num;
   this.sac_cuadrado = sacar_cuadrado(num);
   this.tablamulti = tabla_multiplicar(num)
 }

 function tabla_multiplicar(num){
   document.write("<p class = Problem> La tabla de multiplicar del numero que hay en el codigo  </p>");
   for( let i =0; i<= 10; i++){
     document.write("<p class = Answer>",i*num,"</p>");
   }
 }

 function sacar_cuadrado(num){
   document.write("<p class = Problem> El cuadrado del numero que hay en el codigo  </p>");
   document.write("<p class = Answer>",num*num,"</p>");
 }

var numeros1 = new numeros(5);
numeros1.sac_cuadrado(num);
numeros1.tablamulti(num);