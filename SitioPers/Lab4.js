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
  document.write("<p id = Chase>",i," ",i*i," ",i*i*i,"</p>");
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

let array2 = [[9,8],[9,7]];
let sum=0;
let avg=0;
function averages(myArray){
    for(var i=0; i< myArray.length; i++) {
        var x = myArray[i];
        for(var j=0; j< x.length; j++) {
            sum   = sum + x[j];
        }
    }
    document.write("<p class = Problem>The average of the arrays is:</p>")
    avg = sum/4;
    document.write("<p id = Chase>"+avg+"</p>")
}
averages(array2);

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

document.write("<p id = Chase>"+number+" backwards is ",reverseNum(number),"</p>");

document.write("<h1>JavaScript Problem</h1>");
document.write("<p id=Chase>It was a normal day in the Mushroom Kingdom, Mario went to gather some coins in order to help Yoshi pay off the money he owed after comitting tax fraud countless times, however, Mario doesn't know how much money Yoshi owes as he's been on the run from the cops for over 30 years now.</p>");
document.write("<p id=Chase>As far as we know, taxes in the mushroom kingdom are a set fee of 1000 coins each year, however, for every missed payment, a fraud must pay what they haven't payed as well as an extra 200 coins on legal fees. Help Mario figure out how much Yoshi owes.</p>");

function Coins(years){
  this.years = years;
  this.yevaded = years_evaded(years);
  this.legal = legal_fees(years);
  this.total = calculation(years);
}

function years_evaded(years){
  var coins = 0
  for(let i=0; i< parseInt(years); i++){
    coins = coins + 1000
  }
  return coins
}

function legal_fees(years){
  var coins = 0
  for(let i=1; i< parseInt(years); i++){
    coins = coins + 200
  }
  return coins
}

function calculation(years){
  return years_evaded(years) + legal_fees(years)
}

var total_coins = new Coins(30);
document.write("<p id = Chase>The perpetrator owes ", total_coins.yevaded, " coins to the IRS.</p>");
document.write("<p id = Chase>The cost of legal fees for evading the IRS for ", total_coins.years," years is an estimated ", total_coins.legal ," coins.</p>");
document.write("<p id = Chase>That means Yoshi owes a total of ",total_coins.total, " coins for evading the IRS for ",  total_coins.years, " years.</p>");
