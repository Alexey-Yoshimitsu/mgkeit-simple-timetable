window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    try {
      const reg = await navigator.serviceWorker.register("/sw.js");
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
        title: "Разговоры о 'важном'",
        kab: "408",
        name: "Фейзуллаева Эльвира Мирьяновна",
        time: "8:15-9:15",
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
        kab: "107",
        name: "Долгий Сергей Александрович",
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
        kab: "107",
        name: "Долгий Сергей Александрович",
        time: "14:55-16:25",
      },
    ],
  ],
  nechet: [
    [
      {
        title: "Разговоры о 'важном'",
        kab: "408",
        name: "Фейзуллаева Эльвира Мирьяновна",
        time: "8:15-9:15",
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
        time: "9:10-10:40",
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
        kab: "107",
        name: "Долгий Сергей Александрович",
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
        kab: "107",
        name: "Долгий Сергей Александрович",
        time: "14:55-16:25",
      },
    ],
  ],
};

let dayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']
const date = new Date().toLocaleDateString();
console.log(date);
var currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(), 0, 1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);// номер недели в году

let dayName = new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format()
document.querySelector(".h2").innerHTML  = `Сегодня ${dayName}, ${date}, ${result}`
const container = document.querySelector("#posts");
let toDay = currentdate.getDay()-1// день недели в числовом формате от 0-6

if (toDay == -1){toDay = 0}


console.log(result)
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

    ПРепод: ${para.name}

    Время: ${para.time}`
    block.append(paraBlock)
  }

  /* for (let para of obj) {
    block.textContent += `
    ${para.title}
    
    Кабинет: ${para.kab}

    ПРепод: ${para.name}

    Время: ${para.time}




    `
  }
 */
  container.append(block)
}
async function loadPosts() {
  let nextDay = toDay == 4 ? 0 : toDay + 1
  //console.log(result)
  if (result % 2 == 0){
    createBlock(timetable.chet[toDay], toDay)
    nextDay == 0 ? createBlock(timetable.nechet[nextDay], nextDay) : createBlock(timetable.chet[nextDay],nextDay)
  } else {
    createBlock(timetable.nechet[toDay], toDay)
    nextDay == 0 ? createBlock(timetable.chet[nextDay], nextDay) : createBlock(timetable.nechet[nextDay],nextDay)
  }

  
  //container.innerHTML = data.map(toCard).join("\n");
}


