// Создание массива, методы 
// push(), pop(), unshift(), shift()
// замена среднего эл-та массива

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length / 2)] = "Классика";
console.log(styles);
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);

//////


function sumInput(){
    let arr = [];
    while(true){
        let a = prompt("");
        //let b = prompt("");
        //let c = prompt("");
        if(!isFinite(a)|| 
        a === "" || a === null)  {
            break;
        }
        
            else{
            arr.push(+a);
            }
            
        
    }
        let summ = 0;
        for(let numb of arr){
            summ += numb;
        }
    
    return summ;
}
sumInput();


