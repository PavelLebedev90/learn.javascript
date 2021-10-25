const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const {today, tomorrow} = HIGH_TEMPERATURES;


/* То же, что и 
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
 */
/////////////////////////////////////////////////////////////////////////////////////////////


 const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES

/* присвоить переменной highToday значение объекта HIGH_TEMPERATURES.today
присвоить переменной highTomorrow значение объекта HIGH_TEMPERATURES.tomorrow

const highTomorrow = HIGH_TEMPERATURES.tomorrow;  */

/////////////////////////////////////////////////////////////////////////////////////////////

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};


  
/* const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high; */

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;



