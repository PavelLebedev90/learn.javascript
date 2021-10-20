/* let admin;
let name;
name = "Djohn";
admin = name;
console.log(admin); */


/* let name = 'Ilya';
alert(`hello ${1}`);
alert(`hello ${"name"}`);
alert(`hello ${name}`); */


let yourName = prompt("What's your name?");
alert(`Hello, /t ${yourName}, /n fdfdfdfdfdf`);


let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(Number(a) + Number(b)); // 12

"" + 1 + 0  // "10"
"" - 1 + 0  // -1
true + false    // 1
6 / "3"     // 2
"2" * "3"       //6
4 + 5 + "px"    // "9px"
"$" + 4 + 5     // "$45"
"4" - 2         // 2
"4px" - 2       // NaN
7 / 0           // infinity
"  -9  " + 5        // "-9  5"
"  -9  " - 5        // -14
null + 1            // 1
undefined + 1       // NaN
" \t \n" - 2        // -2



5 > 4               // true
"ананас" > "яблоко"     // false
"2" > "12"              //  true
undefined == null       //  true
undefined === null      //   false
null == "\n0\n"         //   false
null === +"\n0\n"       // false


alert("к" > "а");


let nameJs = prompt("Какое официальное название Javascript?, '' ");
/* if(nameJs == "ECMAScript"){
    alert("Верно!");
}else{
    alert("Не знаете?");
} */
(nameJs == "ECMAScript")? alert("Верно!") :
alert("Не знаете?");



let num = prompt("ВВедите ваше число", "");
if(num > 0){
    alert("1");
}else if(num < 0){
    alert("-1");

} else {
    alert("0");
}
/////////////////
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}


let result = (a + b < 4)? "small" : "big";
////////////////////////


let message = (login == "Сотрудник")? "Hi":
(login == "Директор")? "Hello":
(login == "")? "no login":
"";
//////////////////////
alert(null || 2 || undefined);   //2
alert( alert(1) || 2 || alert(3) ); /// 1 , 2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); //  1, undefined
alert( null || 2 && 3 || 4 );  // 3

if(!(age >= 14 && age <= 90)){}
if(age < 14 || age > 90){}

if (-1 || 0) alert( 'first' );   // -1 true
if (-1 && 0) alert( 'second' );  //  0  false
if (null || -1 && 1) alert( 'third' );  // 1 true


let login = prompt("What's your login?", "");
if(login == "Admin"){
    let password = prompt("What's your password?", "");
    if(password == "I am a boss"){
        alert(`Hello, ${login}`);
    }else if(password == null || undefined){
        
        alert("Reset.");
    }else{alert("Not true password.");}
}else if(login == null || undefined){
    
    alert("Reset.");
}else{
    alert("Who is you?");
}

let admin = '';
console.log(admin);

let a;
let b = '';

alert( a);
alert( b);



for(let i = 2; i < 10; i++){
    if(i % 2 == 0){
        console.log(i);
    } 
}



let i = 0;
while(i < 3){
    alert(`numner ${i}`);
    i++;
}



    
while(true){
    let mess = prompt("Введите ваше число?", "");
    if(mess > 100){
        alert("Число больше 100.");
        break;
        
    }else if(mess == null || undefined){
        break;
        }
}



prost:for( let n = 2; n <= 100; n++){
    for(let x = 2; x < n;x++){
        if(n % x == 0){
            continue prost;
        }
    }
    console.log(n);
}


let browser = prompt("Введите название браузера", "");
if(browser == "Edge"){
    alert("You've got the Edge!");
}else if(browser == "Chrome" || browser == "Firefox" ||
          browser == "Safari" || browser == "Opera"){
              alert("Okay we support these browsers too");
          }else{
              alert("We hope that this page looks ok!");
          }


////////////////////////

const number = +prompt("What is your number?", "");
switch(number){
    case 0:
        alert("Your number is 0");
        break;
    case 1:
        alert("Your number is 1");
        break;
    case 2:
    case 3:
        alert("Your number is 2 or 3");
        break;

}

let a = confirm("Quations?")
console.log(a);



/////////////////////////////
function checkAge(age){
    return (age > 18)? 
    true: 
    confirm("parent is know?");
}
checkAge(19);
function checkAge(age){
    return (age > 18) || confirm("parent is know?");
}

/////////////////////////////
function min(a, b){
    return (a < b)?
    a:
    
    (a == b)? alert("=="):
    b;
}
min(2, 5);
min(3, -1);
min(1, 1);


////////////////////
function pow(x, y){
    return x ** y;
}
function getX(){
    let x = prompt("Введите значение х", "");
    return x;
}
function getY(){
    let y = prompt("Введите значение y", "");
    return y;
}
pow();


//////////////////
let ask = (quetion, yes, no) =>{
    (confirm(quetion))? yes(): no();
}
ask("Вы согласны?",
    () => {alert("Вы согласились.");},
    () => {alert("Вы отменили действие.");}
    );

    ////////////////////////
 "" + 1 + 0   // "10"
"" - 1 + 0   //  -1
true + false  //  1
6 / "3"      //  2
"2" * "3"    //  6
4 + 5 + "px"  // "9px"
"$" + 4 + 5  // "$45"
"4" - 2    //  2
"4px" - 2  //  NaN
7 / 0     // Infinity
"  -9  " + 5   // " -9  5 "
"  -9  " - 5   //  -14
null + 1     //  1
undefined + 1  // NaN
" \t \n" - 2   //  -2

//////////////////
let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США",
    a: "Russia",
  };
  
codes.b = "Belarus";
console.log("+1" in codes);

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);



let obj = {};
alert(isEmpty(obj));
obj["8:30"] = "get up";
alert(isEmpty(obj));

function isEmpty(obj){
    for(let key in obj){
        return false;
    
    }
    return true;
}

/////////////
 function moneySum(obj){
    let sum = 0;
    for( let key in obj){
       sum += obj[key];
        
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,

}
console.log(moneySum(salaries));
////////////////////////////////

function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key] === "number") {obj[key] *= 2;}
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};
multiplyNumeric(menu);
console.log(typeof menu.width);
console.log(menu);
////////////////

let calculator = {
    read(){
        this.a  = +prompt("Введите первое число", "");
        this.b = +prompt("Введите второе число", "");
        
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
//////////////////////////

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };
  ladder.up().up().down().showStep();

  ///////////////////////
  let obj = {}
  function A() { return obj; }
  function B() { return obj; }
  
  let a = new A;
  let b = new B;
  
  alert( a == b );
  //////////////////

  function Calculator() {
    this.read = function() {
        this.a  = +prompt("Введите первое число", "");
        this.b = +prompt("Введите второе число", "");
        
    };
    this.Sum = function() {
        return this.a + this.b;
    };
    this.Mul = function(){
        return this.a * this.b;
    };
}
/* calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.Sum() );
alert( "Mul=" + calculator.Mul() );
/////////////////////////////

function Accumulator(startValue){
    this.value = startValue;
    this.read = function(){
        this.a = +prompt("Введите число", "");
        this.value += this.a;
    };

}
let accumulator = new Accumulator(1);

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); 
///////////////////////////////////


function readNumber(){
    let a = +prompt("Введите число", "");
    return (a == Number)?  a:
     (isFinite(a) || a == "")? null
   
        
     
    
}
alert(readNumber());
alert(a);

/////////////////
function random(min, max){
    let a = min + Math.round(Math.random() * (max - min));
    return a;
}
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
/////////////////////

function upper(){
    let a = prompt("Введите фразу", "");
    let b = a[0].toUpperCase();
    return b + a.slice(1);
}
console.log(upper());

//////////////////////////

function checkSpam(){
    let a = prompt("Введите слово", "");
    a = a.toLowerCase();
    for(let i = 0; i < a.length; i++){
        if(a.includes("viagra") || a.includes("xxx")){
            return true;
        }
        return false;
    }
    
}
console.log(checkSpam());

////////////////////
function truncate(frases, length){
    let a = frases;
    if(a.length > a.slice(0, length -1).length){
        a = a.slice(0, length) + "...";
        
    }
    return a;
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
/////////////////////////
function prace(num){
    let a = num;
    return Number(a.slice(1));
}
prace("$120");
///////////////////////////////
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length / 2)] = "Классика";
console.log(styles);
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);

