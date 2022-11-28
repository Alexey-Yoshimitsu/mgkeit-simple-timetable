
window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    try {
      //const reg = await navigator.serviceWorker.register("/sw.js");
      console.log("Service worker register success", reg);
    } catch (e) {
      console.log("Service worker register fail");
      console.log(e)
    }
  }

  await loadPosts();
});





const timetable = {
  chet: [
    [
      {
        title: "Разговоры о важном",
        kab: "408",
        name: "Фейзуллаева Эльвира Мирьяновна",
        time: "8:15-9:00",
      },
      {
        title: "Информационные технологии",
        kab: "110",
        name: "Мызников Вячеслав Игоревич",
        time: "9:10-10:40",
      },
      {
        title: "Архитектура аппаратных средств",
        kab: "414",
        name: "Екатерина Александровна Щупкина",
        time: "11:05-12:35",
      },
      {
        title: "Электротехника",
        kab: "412",
        name: "Скороход Светлана Александровна",
        time: "13:00-14:30",
      },
    ],
    [
      {
        title: "Физическая культура",
        kab: "спотрзал",
        name: "Чернова Людмила Львовна",
        time: "11:05-12:35",
      },
      {
        title: "Операционные системы и среды",
        kab: "312",
        name: "Шамсият Рабадановна Махжутдинова",
        time: "13:00-14:30",
      },
      {
        title: "Архитектура аппаратных средств ",
        kab: "414",
        name: "Петрова Елена Александровна",
        time: "14:55-16:25",
      },
      {
        title: "Иностранный язык",
        kab: "307",
        name: "Петрова Лера Юрьевна",
        time: "16:35-18:05",
      },
    ],
    [
      {
        title: "Информатика",
        kab: "110",
        name: "Мызников Вячеслав Игоревич",
        time: "11:05-12:35",
      },
      {
        title: "Инженерная и компьютерная графика",
        kab: "314",
        name: "Аида Наилевна Зайнуллина",
        time: "13:00-14:30",
      },
      {
        title: "Высшая Математика",
        kab: "404",
        name: "Киселева Анастасия Владимировна",
        time: "14:55-16:25",
      },
      {
        title: "Высшая Математика",
        kab: "404",
        name: "Киселева Анастасия Владимировна",
        time: "16:35-18:05",
      },
    ],
    [
      {
        title: "Высшая Математика",
        kab: "404",
        name: "Киселева Анастасия Владимировна",
        time: "9:10-10:40",
      },
      {
        title: "Дискретная математика",
        kab: "208",
        name: "Петрова Елена Александровна",
        time: "11:05-12:35",
      },
      {
        title: "Электротехника",
        kab: "412",
        name: "Скороход Светлана Александровна",
        time: "13:00-14:30",
      },
    ],
    [
      {
        title: "История",
        kab: "403",
        name: "Алямкина Елена Семеновна",
        time: "9:10-10:40",
      },
      {
        title: "Операционные системы и среды",
        kab: "312",
        name: "Шамсият Рабадановна Махжутдинова",
        time: "11:05-12:35",
      },
      {
        title: "Дискретная Математика",
        kab: "208",
        name: "Петрова Елена Александровна",
        time: "13:00-14:30",
      },
      {
        title: "Инженерная и компьютерная графика",
        kab: "314",
        name: "Аида Наилевна Зайнуллина",
        time: "14:55-16:25",
      },
    ],
  ],
  nechet: [
    [
      {
        title: "Разговоры о важном",
        kab: "408",
        name: "Фейзуллаева Эльвира Мирьяновна",
        time: "8:15-9:00",
      },
      {
        title: "Информационные технологии",
        kab: "110",
        name: "Мызников Вячеслав Игоревич",
        time: "9:10-10:40",
      },
      {
        title: "Архитектура аппаратных средств",
        kab: "414",
        name: "Екатерина Александровна Щупкина",
        time: "11:05-12:35",
      },
      {
        title: "Электротехника",
        kab: "412",
        name: "Скороход Светлана Александровна",
        time: "13:00-14:30",
      },
    ],
    [
      {
        title: "Физическая культура",
        kab: "спотрзал",
        name: "Чернова Людмила Львовна",
        time: "11:05-12:35",
      },
      {
        title: "Операционные системы и среды",
        kab: "312",
        name: "Шамсият Рабадановна Махжутдинова",
        time: "13:00-14:30",
      },
      {
        title: "Архитектура аппаратных средств ",
        kab: "414",
        name: "Екатерина Александровна Щупкина",
        time: "14:55-16:25",
      },
      {
        title: "Иностранный язык",
        kab: "307",
        name: "Петрова Лера Юрьевна",
        time: "16:35:18:05",
      },
    ],
    [
      {
        title: "История",
        kab: "403",
        name: "Алямкина Елена Семеновна",
        time: "9:10-10:40",
      },
      {
        title: "Информатика",
        kab: "110",
        name: "Мызников Вячеслав Игоревич",
        time: "11:05-12:35",
      },
      {
        title: "Инженерная и компьютерная графика",
        kab: "314",
        name: "Аида Наилевна Зайнуллина",
        time: "13:00-14:30",
      },
      {
        title: "Высшая Математика",
        kab: "404",
        name: "Киселева Анастасия Владимировна",
        time: "14:55-16:25",
      },
    ],
    [
      {
        title: "Высшая Математика",
        kab: "404",
        name: "Киселева Анастасия Владимировна",
        time: "9:10-10:40",
      },
      {
        title: "Дискретная математика",
        kab: "208",
        name: "Петрова Елена Александровна",
        time: "11:05-12:35",
      },
      {
        title: "Электротехника",
        kab: "412",
        name: "Скороход Светлана Александровна",
        time: "13:00-14:30",
      },
    ],
    [
      {
        title: "История",
        kab: "403",
        name: "Алямкина Елена Семеновна",
        time: "9:10-10:40",
      },
      {
        title: "Операционные системы и среды",
        kab: "312",
        name: "Шамсият Рабадановна Махжутдинова",
        time: "11:05-12:35",
      },
      {
        title: "Дискретная Математика",
        kab: "208",
        name: "Петрова Елена Александровна",
        time: "13:00-14:30",
      },
      {
        title: "Инженерная и компьютерная графика",
        kab: "314",
        name: "Аида Наилевна Зайнуллина",
        time: "14:55-16:25",
      },
    ],
  ],
};



let dayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']
const date = new Date().toLocaleDateString();
//console.log(date);
var currentdate = new Date();
// флюгегехаймэн
Date.prototype.getWeek = function(){
  var day_miliseconds = 86400000,
      onejan = new Date(this.getFullYear(),0,1,0,0,0),
      onejan_day = (onejan.getDay()==0) ? 7 : onejan.getDay(),
      days_for_next_monday = (8-onejan_day),
      onejan_next_monday_time = onejan.getTime() + (days_for_next_monday * day_miliseconds),
      // If one jan is not a monday, get the first monday of the year
      first_monday_year_time = (onejan_day>1) ? onejan_next_monday_time : onejan.getTime(),
      this_date = new Date(this.getFullYear(), this.getMonth(),this.getDate(),0,0,0),// This at 00:00:00
      this_time = this_date.getTime(),
      days_from_first_monday = Math.round(((this_time - first_monday_year_time) / day_miliseconds));

  var first_monday_year = new Date(first_monday_year_time);

  // We add 1 to "days_from_first_monday" because if "days_from_first_monday" is *7,
  // then 7/7 = 1, and as we are 7 days from first monday,
  // we should be in week number 2 instead of week number 1 (7/7=1)
  // We consider week number as 52 when "days_from_first_monday" is lower than 0,
  // that means the actual week started before the first monday so that means we are on the firsts
  // days of the year (ex: we are on Friday 01/01, then "days_from_first_monday"=-3,
  // so friday 01/01 is part of week number 52 from past year)
  // "days_from_first_monday<=364" because (364+1)/7 == 52, if we are on day 365, then (365+1)/7 >= 52 (Math.ceil(366/7)=53) and thats wrong

  return (days_from_first_monday>=0 && days_from_first_monday<364) ? Math.ceil((days_from_first_monday+1)/7) : 52;
}
var result = (new Date()).getWeek()
//console.log((currentdate.getDay() + 1 + numberOfDays) / 7)
let dayName = new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format()
document.querySelector(".h2").innerHTML  = `Сегодня ${dayName}, ${date}`
const container = document.querySelector("#posts");
const container2 = document.querySelector(".container2")
let toDay = currentdate.getDay()-1// день недели в числовом формате от 0-6
console.log(result)


if (toDay > 4){toDay = 0}

if (toDay == -1){toDay = 0}

function createBlock(obj, day) {
  let block = document.createElement('div')
  block.classList.add('block')
  block.textContent = `${dayNames[day]} >>>`
  for (let para of obj) {
    let paraBlock = document.createElement('div')
    paraBlock.classList.add('para-block')
    paraBlock.textContent = 
    `${para.title.toUpperCase()}:
    
    Кабинет: ${para.kab}

    Учитель: ${para.name}

    Время: ${para.time}`
    block.append(paraBlock)
  }
  container.append(block)
}

function createAllDays(obj, day) {
  let block = document.createElement('div')
  block.classList.add('block2')
  block.textContent = `${dayNames[day]} >>>`
  for (let para of obj) {
    let paraBlock = document.createElement('div')
    paraBlock.classList.add('para-block2')
    paraBlock.textContent = 
    `${para.title.toUpperCase()}:
    
    Кабинет: ${para.kab}

    Преподователь: ${para.name}

    Время проведения: ${para.time}`
    block.append(paraBlock)
  }
  container2.append(block)
}



async function loadPosts() {
  let nextDay = toDay == 4 ? 0 : toDay + 1
  //console.log(result)
  if (result % 2 == 0){
    createBlock(timetable.chet[toDay], toDay)
    nextDay == 0 ? createBlock(timetable.nechet[nextDay], nextDay) : createBlock(timetable.chet[nextDay],nextDay)
    for(let i = 0; i<5; i++){
      createAllDays(timetable.chet[i], i)
      
    }
  } else {
    createBlock(timetable.nechet[toDay], toDay)
    nextDay == 0 ? createBlock(timetable.chet[nextDay], nextDay) : createBlock(timetable.nechet[nextDay],nextDay)
    for(let i = 0; i<5; i++){
      createAllDays(timetable.nechet[i], i)
      
    }
  }
  
}

const close = ()=>{
  document.querySelector(".container").style.display= "block"
  document.querySelector(".close").style.display="none"
  document.querySelector(".container2").style.display="none"
}

const h2 = () =>{
  document.querySelector(".container").style.display= "none"
  document.querySelector(".close").style.display="block"
  document.querySelector(".container2").style.display="grid"
}



document.querySelector(".h2").addEventListener("touchstart",()=>{h2()})
document.querySelector(".close").addEventListener("touchstart",()=>{close()})
document.querySelector(".h2").addEventListener("click",()=>{h2()})
document.querySelector(".close").addEventListener("click",()=>{close()})

