// ══════════════════════════════════════════════
// PRODUCT DATA (from price list)
// ══════════════════════════════════════════════
const products = [
  // REGULAR 2025
  { id:1, series:'REGULAR 2025', name:'ACH-07QR', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'18-20', areaVal:20, price:143451, desc:'Сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 4 метра электрического кабеля. Без соединительных труб.', badges:['stock','today'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'18–20 м²', Хладагент:'R410A', Класс:'A', Питание:'220-240В, 1~50Гц', Гарантия:'36 месяцев'} },
  { id:2, series:'REGULAR 2025', name:'ACH-09QR', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'20-25', areaVal:25, price:157291, desc:'Сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 4 метра электрического кабеля.', badges:['hit','today'], popular:true,
    specs:{Тип:'Настенный сплит', Площадь:'20–25 м²', Хладагент:'R410A', Класс:'A', Питание:'220-240В, 1~50Гц', Гарантия:'36 месяцев'} },
  { id:3, series:'REGULAR 2025', name:'ACH-12QR', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'30-35', areaVal:35, price:182458, desc:'Сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 4 метра электрического кабеля.', badges:['stock','today'], popular:true,
    specs:{Тип:'Настенный сплит', Площадь:'30–35 м²', Хладагент:'R410A', Класс:'A', Питание:'220-240В, 1~50Гц', Гарантия:'36 месяцев'} },
  { id:4, series:'REGULAR 2025', name:'ACH-18QRA', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'50-55', areaVal:55, price:277878, desc:'Сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 4 метра электрического кабеля.', badges:['today'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'50–55 м²', Хладагент:'R410A', Класс:'A', Питание:'220-240В, 1~50Гц', Гарантия:'36 месяцев'} },
  { id:5, series:'REGULAR 2025', name:'ACH-24QR', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'65-70', areaVal:70, price:369321, desc:'Сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 4 метра электрического кабеля.', badges:['stock'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'65–70 м²', Хладагент:'R410A', Класс:'A', Питание:'220-240В, 1~50Гц', Гарантия:'36 месяцев'} },
  // STANDARD 2026
  { id:6, series:'STANDARD 2026', name:'ACH-07QS', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'18-20', areaVal:20, price:146228, desc:'Сплит-система; класс A; R410A; Wi-Fi (опция); авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 4 метра кабеля; 3 метра медных труб.', badges:['new','today'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'18–20 м²', Хладагент:'R410A', Класс:'A', 'Wi-Fi':'опция', Гарантия:'36 месяцев'} },
  { id:7, series:'STANDARD 2026', name:'ACH-09QS', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'20-25', areaVal:25, price:160338, desc:'Сплит-система; класс A; R410A; Wi-Fi (опция); авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['new','hit'], popular:true,
    specs:{Тип:'Настенный сплит', Площадь:'20–25 м²', Хладагент:'R410A', Класс:'A', 'Wi-Fi':'опция', Гарантия:'36 месяцев'} },
  { id:8, series:'STANDARD 2026', name:'ACH-12QS', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'30-35', areaVal:35, price:188532, desc:'Сплит-система; класс A; R410A; Wi-Fi (опция); авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['new'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'30–35 м²', Хладагент:'R410A', Класс:'A', 'Wi-Fi':'опция', Гарантия:'36 месяцев'} },
  { id:9, series:'STANDARD 2026', name:'ACH-18QSA', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'50-55', areaVal:55, price:285799, desc:'Сплит-система; класс A; R410A; Wi-Fi (опция); авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; 3 метра медных труб.', badges:['new','stock'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'50–55 м²', Хладагент:'R410A', Класс:'A', Гарантия:'36 месяцев'} },
  { id:10, series:'STANDARD 2026', name:'ACH-24QSA', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'65-70', areaVal:70, price:379012, desc:'Сплит-система; класс A; R410A; Wi-Fi (опция); авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; 3 метра медных труб.', badges:['new'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'65–70 м²', Хладагент:'R410A', Класс:'A', Гарантия:'36 месяцев'} },
  // FAVORITE 2025
  { id:11, series:'FAVORITE 2025', name:'ACH-07QF', img: 'https://www.almacom.kz/image/cache/catalog/QF-800x600.png', type:'wall', area:'18-20', areaVal:20, price:151784, desc:'Сплит-система; класс A; R410A; ионизация; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['popular','today'], popular:true,
    specs:{Тип:'Настенный сплит', Площадь:'18–20 м²', Хладагент:'R410A', Класс:'A', Ионизация:'Есть', Гарантия:'36 месяцев'} },
  { id:12, series:'FAVORITE 2025', name:'ACH-09QF',img: 'https://www.almacom.kz/image/cache/catalog/QF-800x600.png',  type:'wall', area:'20-25', areaVal:25, price:166430, desc:'Сплит-система; класс A; R410A; ионизация; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['popular','hit'], popular:true,
    specs:{Тип:'Настенный сплит', Площадь:'20–25 м²', Хладагент:'R410A', Класс:'A', Ионизация:'Есть', Гарантия:'36 месяцев'} },
  { id:13, series:'FAVORITE 2025', name:'ACH-12QF', img: 'https://www.almacom.kz/image/cache/catalog/QF-800x600.png', type:'wall', area:'30-35', areaVal:35, price:193059, desc:'Сплит-система; класс A; R410A; ионизация; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['popular','stock'], popular:true,
    specs:{Тип:'Настенный сплит', Площадь:'30–35 м²', Хладагент:'R410A', Класс:'A', Ионизация:'Есть', Гарантия:'36 месяцев'} },
  { id:14, series:'FAVORITE 2025', name:'ACH-18QFA', img: 'https://www.almacom.kz/image/cache/catalog/QF-800x600.png', type:'wall', area:'50-55', areaVal:55, price:294022, desc:'Сплит-система; класс A; R410A; ионизация; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; 3 метра медных труб.', badges:['today'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'50–55 м²', Хладагент:'R410A', Класс:'A', Ионизация:'Есть', Гарантия:'36 месяцев'} },
  // QUALITY GREY
  { id:15, series:'QUALITY GREY', name:'ACH-07QG', img: 'https://www.almacom.kz/image/cache/catalog/QG-800x600.jpg', type:'wall', area:'18-20', areaVal:20, price:173034, desc:'Сплит-система; класс A; R410A; ионизация; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб. Стильный серый дизайн.', badges:['popular'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'18–20 м²', Хладагент:'R410A', Класс:'A', Цвет:'Серый', Гарантия:'36 месяцев'} },
  { id:16, series:'QUALITY GREY', name:'ACH-09QG', img: 'https://www.almacom.kz/image/cache/catalog/QG-800x600.jpg', type:'wall', area:'20-25', areaVal:25, price:189731, desc:'Сплит-система; класс A; R410A; ионизация; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб. Стильный серый дизайн.', badges:['popular'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'20–25 м²', Хладагент:'R410A', Класс:'A', Цвет:'Серый', Гарантия:'36 месяцев'} },
  { id:17, series:'QUALITY GREY', name:'ACH-12QG', img: 'https://www.almacom.kz/image/cache/catalog/QG-800x600.jpg', type:'wall', area:'30-35', areaVal:35, price:220087, desc:'Сплит-система; класс A; R410A; ионизация; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:[], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'30–35 м²', Хладагент:'R410A', Класс:'A', Цвет:'Серый', Гарантия:'36 месяцев'} },
  // COMFORT INVERTER
  { id:18, series:'COMFORT INVERTER', name:'ACH-07CI', img: 'https://www.almacom.kz/image/cache/catalog/ACH-CI-800x600.png', type:'wall', area:'18-20', areaVal:20, price:176371, desc:'Инверторная сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб. Инвертор — тихая работа и экономия электроэнергии.', badges:['hit','today'], popular:true,
    specs:{Тип:'Инверторный сплит', Площадь:'18–20 м²', Хладагент:'R410A', Класс:'A', Инвертор:'Да', Гарантия:'36 месяцев'} },
  { id:19, series:'COMFORT INVERTER', name:'ACH-09СI', img: 'https://www.almacom.kz/image/cache/catalog/ACH-CI-800x600.png', type:'wall', area:'20-25', areaVal:25, price:185350, desc:'Инверторная сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['hit'], popular:true,
    specs:{Тип:'Инверторный сплит', Площадь:'20–25 м²', Хладагент:'R410A', Класс:'A', Инвертор:'Да', Гарантия:'36 месяцев'} },
  { id:20, series:'COMFORT INVERTER', name:'ACH-12СI', img: 'https://www.almacom.kz/image/cache/catalog/ACH-CI-800x600.png', type:'wall', area:'26-28', areaVal:28, price:212928, desc:'Инверторная сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['stock'], popular:false,
    specs:{Тип:'Инверторный сплит', Площадь:'26–28 м²', Хладагент:'R410A', Класс:'A', Инвертор:'Да', Гарантия:'36 месяцев'} },
  // QUALITY INVERTER
  { id:21, series:'QUALITY INVERTER', name:'ACH-07QI', img: 'https://www.almacom.kz/image/cache/catalog/QI-800x600.jpg', type:'wall', area:'18-20', areaVal:20, price:187274, desc:'Инверторная сплит-система; класс A; R32; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб. Экологичный хладагент R32.', badges:['hit','today'], popular:true,
    specs:{Тип:'Инверторный сплит', Площадь:'18–20 м²', Хладагент:'R32', Класс:'A', Инвертор:'Да', Гарантия:'36 месяцев'} },
  { id:22, series:'QUALITY INVERTER', name:'ACH-09QI', img: 'https://www.almacom.kz/image/cache/catalog/QI-800x600.jpg', type:'wall', area:'20-25', areaVal:25, price:202025, desc:'Инверторная сплит-система; класс A; R32; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['hit','popular'], popular:true,
    specs:{Тип:'Инверторный сплит', Площадь:'20–25 м²', Хладагент:'R32', Класс:'A', Инвертор:'Да', Гарантия:'36 месяцев'} },
  { id:23, series:'QUALITY INVERTER', name:'ACH-12QI', img: 'https://www.almacom.kz/image/cache/catalog/QI-800x600.jpg', type:'wall', area:'30-35', areaVal:35, price:223831, desc:'Инверторная сплит-система; класс A; R32; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['popular','stock'], popular:false,
    specs:{Тип:'Инверторный сплит', Площадь:'30–35 м²', Хладагент:'R32', Класс:'A', Инвертор:'Да', Гарантия:'36 месяцев'} },
  { id:24, series:'QUALITY INVERTER', name:'ACH-18QI', img: 'https://www.almacom.kz/image/cache/catalog/QI-800x600.jpg', type:'wall', area:'50-55', areaVal:55, price:355949, desc:'Инверторная сплит-система; класс A; R32; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; 3 метра медных труб.', badges:['stock'], popular:false,
    specs:{Тип:'Инверторный сплит', Площадь:'50–55 м²', Хладагент:'R32', Класс:'A', Инвертор:'Да', Гарантия:'36 месяцев'} },
  { id:25, series:'QUALITY INVERTER', name:'ACH-24QI', img: 'https://www.almacom.kz/image/cache/catalog/QI-800x600.jpg', type:'wall', area:'65-70', areaVal:70, price:461772, desc:'Инверторная сплит-система; класс A; R32; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; 3 метра медных труб.', badges:[], popular:false,
    specs:{Тип:'Инверторный сплит', Площадь:'65–70 м²', Хладагент:'R32', Класс:'A', Инвертор:'Да', Гарантия:'36 месяцев'} },
  // QUALITY INVERTER WI-FI
  { id:26, series:'QUALITY INVERTER Wi-Fi', name:'ACH-09QI', img: 'https://www.almacom.kz/image/cache/catalog/QI-800x600.jpg', type:'wall', area:'20-25', areaVal:25, price:214725, desc:'Инверторная сплит-система; класс A; R32; Wi-Fi; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб. Управление со смартфона!', badges:['new','hit'], popular:true,
    specs:{Тип:'Инверторный сплит', Площадь:'20–25 м²', img: 'https://www.almacom.kz/image/cache/catalog/QI-800x600.jpg', Хладагент:'R32', 'Wi-Fi':'Есть', Инвертор:'Да', Гарантия:'36 месяцев'} },
  { id:27, series:'QUALITY INVERTER Wi-Fi', name:'ACH-12QI', type:'wall', area:'30-35', areaVal:35, price:236531, desc:'Инверторная сплит-система; класс A; R32; Wi-Fi; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['new','popular'], popular:true,
    specs:{Тип:'Инверторный сплит', Площадь:'30–35 м²', img: 'https://www.almacom.kz/image/cache/catalog/QI-800x600.jpg', Хладагент:'R32', 'Wi-Fi':'Есть', Инвертор:'Да', Гарантия:'36 месяцев'} },
  // LUXURY INVERTER
  { id:28, series:'LUXURY INVERTER', name:'ACH-09LI', img: 'https://www.almacom.kz/image/cache/catalog/LI-800x600.jpg', type:'wall', area:'20-25', areaVal:25, price:226268, desc:'Инверторная сплит-система; класс A; R32; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб. Премиальная серия.', badges:['popular'], popular:false,
    specs:{Тип:'Инверторный сплит', Площадь:'20–25 м²', Хладагент:'R32', Класс:'A', Серия:'Люкс', Гарантия:'36 месяцев'} },
  { id:29, series:'LUXURY INVERTER', name:'ACH-12LI', img: 'https://www.almacom.kz/image/cache/catalog/LI-800x600.jpg', type:'wall', area:'30-35', areaVal:35, price:250691, desc:'Инверторная сплит-система; класс A; R32; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['popular'], popular:false,
    specs:{Тип:'Инверторный сплит', Площадь:'30–35 м²', Хладагент:'R32', Класс:'A', Серия:'Люкс', Гарантия:'36 месяцев'} },
  { id:30, series:'LUXURY INVERTER', name:'ACH-18LI', img: 'https://www.almacom.kz/image/cache/catalog/LI-800x600.jpg', type:'wall', area:'50-55', areaVal:55, price:398663, desc:'Инверторная сплит-система; класс A; R32; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; 3 метра медных труб.', badges:[], popular:false,
    specs:{Тип:'Инверторный сплит', Площадь:'50–55 м²', Хладагент:'R32', Класс:'A', Серия:'Люкс', Гарантия:'36 месяцев'} },
  // LUXURY COMFORT INVERTER
  { id:31, series:'LUXURY COMFORT INVERTER', name:'ACH-09LCi', img: 'https://www.almacom.kz/image/cache/catalog/LCi-800x600.png', type:'wall', area:'20-25', areaVal:25, price:251837, desc:'Инверторная сплит-система; класс A; R32; чёрная стеклянная панель; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['popular','hit'], popular:false,
    specs:{Тип:'Инверторный сплит', Площадь:'20–25 м²', Хладагент:'R32', Панель:'Чёрное стекло', Инвертор:'Да', Гарантия:'36 месяцев'} },
  { id:32, series:'LUXURY COMFORT INVERTER', name:'ACH-12LCi', img: 'https://www.almacom.kz/image/cache/catalog/LCi-800x600.png', type:'wall', area:'30-35', areaVal:35, price:279019, desc:'Инверторная сплит-система; класс A; R32; чёрная стеклянная панель; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; ПДУ; 3 метра медных труб.', badges:['hit'], popular:false,
    specs:{Тип:'Инверторный сплит', Площадь:'30–35 м²',  Хладагент:'R32', Панель:'Чёрное стекло', Инвертор:'Да', Гарантия:'36 месяцев'} },
  // FLOOR MODELS
  { id:33, series:'Напольная серия A', name:'ACP-24I', img: 'https://www.almacom.kz/image/cache/catalog/ACP-24-60AE-min-800x600.jpg', type:'floor', area:'65-70', areaVal:70, price:493840, desc:'Инверторная напольная сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; режим сна; самоочистка; ПДУ; 6 метров кабеля; 5 метров медных труб.', badges:['hit','today'], popular:true,
    specs:{Тип:'Напольный сплит', Площадь:'65–70 м²', Хладагент:'R410A', Класс:'A', Инвертор:'Да', Гарантия:'36 месяцев'} },
  { id:34, series:'Напольная серия A', name:'ACP-36A', img: 'https://www.almacom.kz/image/cache/catalog/ACP-24-60AE-min-800x600.jpg', type:'floor', area:'90-100', areaVal:100, price:706768, desc:'Напольная сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; режим сна; самоочистка; ПДУ; 6 метров кабеля; 5 метров медных труб.', badges:['stock'], popular:false,
    specs:{Тип:'Напольный сплит', Площадь:'90–100 м²', Хладагент:'R410A', Класс:'A', Гарантия:'36 месяцев'} },
  { id:35, series:'Напольная серия A', name:'ACP-48A', img: 'https://www.almacom.kz/image/cache/catalog/ACP-24-60AE-min-800x600.jpg', type:'floor', area:'110-140', areaVal:140, price:904304, desc:'Напольная сплит-система; класс A; R410A; трёхфазное питание 380В; авторестарт; режим сна; самоочистка; ПДУ; 7 метров кабеля; 5 метров медных труб.', badges:[], popular:false,
    specs:{Тип:'Напольный сплит', Площадь:'110–140 м²', Хладагент:'R410A', Питание:'380-415В, 3~50Гц', Гарантия:'36 месяцев'} },
  { id:36, series:'Напольная серия LB', name:'ACP-24LB', img: 'https://www.almacom.kz/image/cache/catalog/LB%204-800x600.png', type:'floor', area:'65-70', areaVal:70, price:627240, desc:'Инверторная напольная сплит-система; класс A; R410A; авторестарт; золотое напыление на теплообменниках; режим сна; самоочистка; ПДУ; 6 метров кабеля; 5 метров медных труб. Гарантия 36 мес.', badges:['popular','stock'], popular:true,
    specs:{Тип:'Напольный сплит', Площадь:'65–70 м²', Хладагент:'R410A', Класс:'A', Инвертор:'Да', Гарантия:'36 месяцев'} },
  // COMFORT TIME
  { id:37, series:'COMFORT TIME', name:'ACH-12CT', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'30-35', areaVal:35, price:219342, desc:'Тропическая серия до +53°C! Сплит-система; класс A; R410A; ионизация; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; 3 метра медных труб.', badges:['popular','today'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'30–35 м²', Хладагент:'R410A', 'Макс. t°':'до +53°C', Ионизация:'Есть', Гарантия:'36 месяцев'} },
  { id:38, series:'COMFORT TIME', name:'ACH-18CT', img: 'https://www.almacom.kz/image/cache/catalog/QR%20QS%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-800x600.png', type:'wall', area:'50-55', areaVal:55, price:341198, desc:'Тропическая серия до +53°C! Сплит-система; класс A; R410A; ионизация; авторестарт; золотое напыление на теплообменниках; IFEEL; режим сна; самоочистка; 3 метра медных труб.', badges:['popular'], popular:false,
    specs:{Тип:'Настенный сплит', Площадь:'50–55 м²', Хладагент:'R410A', 'Макс. t°':'до +53°C', Ионизация:'Есть', Гарантия:'36 месяцев'} },
];

const badgeConfig = {
  hit: { class:'badge-hit', label:'ХИТ' },
  stock: { class:'badge-stock', label:'Со склада' },
  today: { class:'badge-today', label:'Установка сегодня' },
  popular: { class:'badge-popular', label:'Популярный' },
  new: { class:'badge-new', label:'NEW 2026' },
};

const ITEMS_PER_PAGE = 12;
let currentPage = 1;
let filteredProducts = [...products];
let currentPopup = null;

function formatPrice(n) {
  return Math.round(n).toLocaleString('ru-KZ') + ' ₸';
}

function getAreaCategory(v) {
  if (v <= 25) return 'small';
  if (v <= 45) return 'medium';
  if (v <= 70) return 'large';
  return 'xlarge';
}

function buildCard(p) {
  const badgesHtml = p.badges.slice(0,2).map(b => {
    const cfg = badgeConfig[b];
    return cfg ? `<span class="badge ${cfg.class}">${cfg.label}</span>` : '';
  }).join('');

  const typeIcon = p.type === 'floor' ? '🏢' : '🏠';
  const typeLabel = p.type === 'floor' ? 'Напольный' : 'Настенный';

  return `
<div class="product-card" data-id="${p.id}">
    <div class="product-badges">${badgesHtml}</div>
    
    <div class="product-img-wrap" onclick="openProductPage(${p.id})">
      <img 
        src="${p.img}" 
        alt="${p.name}" 
        class="product-main-img"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      >
      
      <div class="product-img-placeholder" style="display:none;">
        <div class="ac-icon">${p.type === 'floor' ? '🌀' : '❄️'}</div>
        <div style="font-size:11px;color:var(--muted);text-align:center">${p.series}</div>
      </div>
    </div>

    <div class="product-body">
      <div class="product-series">${p.series}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-area">${typeIcon} ${typeLabel} · ${p.area} м²</div>
      <div class="product-price">
        ${formatPrice(p.price)}
        <div class="product-price-sub">Розничная стоимость</div>
      </div>
      <div class="product-actions">
        <button class="btn-add" onclick="openPopup(${p.id})">Добавить</button>
        <button class="btn-more" onclick="openProductPage(${p.id})">Подробнее</button>
      </div>
    </div>
  </div>`;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const shown = filteredProducts.slice(0, currentPage * ITEMS_PER_PAGE);
  grid.innerHTML = shown.map(buildCard).join('');
  const wrap = document.getElementById('loadMoreWrap');
  wrap.style.display = filteredProducts.length > shown.length ? 'block' : 'none';
  const count = document.getElementById('filterCount');
  count.textContent = `Найдено: ${filteredProducts.length} товаров`;
}

function renderPopular() {
  const grid = document.getElementById('popularGrid');
  const pop = products.filter(p => p.popular).slice(0, 4);
  grid.innerHTML = pop.map(buildCard).join('');
}

function loadMore() {
  currentPage++;
  renderProducts();
}

function applyFilters() {
  const type = document.getElementById('filterType').value;
  const area = document.getElementById('filterArea').value;
  const price = document.getElementById('filterPrice').value;
  const sort = document.getElementById('filterSort').value;

  filteredProducts = products.filter(p => {
    if (type && p.type !== type) return false;
    if (area && getAreaCategory(p.areaVal) !== area) return false;
    if (price) {
      const [min, max] = price.split('-').map(Number);
      if (p.price < min || p.price > max) return false;
    }
    return true;
  });

  if (sort === 'price-asc') filteredProducts.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') filteredProducts.sort((a,b) => b.price - a.price);

  currentPage = 1;
  renderProducts();
}

function resetFilters() {
  ['filterType','filterArea','filterPrice','filterSort'].forEach(id => document.getElementById(id).value = '');
  filteredProducts = [...products];
  currentPage = 1;
  renderProducts();
}

// ── POPUP ──
function openPopup(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  currentPopup = p;
  document.getElementById('popupProductName').textContent = `${p.series} ${p.name}`;
  document.getElementById('popupProductPrice').textContent = formatPrice(p.price);
  document.getElementById('orderOverlay').classList.add('active');
}

function openOrderPopup() {
  currentPopup = null;
  document.getElementById('popupProductName').textContent = 'Консультация';
  document.getElementById('popupProductPrice').textContent = 'Подберём кондиционер';
  document.getElementById('orderOverlay').classList.add('active');
}

function openPopupForHero() {
  currentPopup = { name:'ACH-12QR', series:'REGULAR 2025', price:182458, id:'hero' };
  document.getElementById('popupProductName').textContent = 'Almacom ACH-12QR REGULAR';
  document.getElementById('popupProductPrice').textContent = formatPrice(182458);
  document.getElementById('orderOverlay').classList.add('active');
}

function closePopup(id) {
  document.getElementById(id).classList.remove('active');
}

function closeOverlay(event, id) {
  if (event.target === document.getElementById(id)) closePopup(id);
}

async function submitOrder() {
  const name = document.getElementById('orderName').value.trim();
  const phone = document.getElementById('orderPhone').value.trim();
  if (!name || !phone) { alert('Пожалуйста, заполните имя и телефон'); return; }

  const now = new Date();
  const dateStr = now.toLocaleDateString('ru-KZ');
  const timeStr = now.toLocaleTimeString('ru-KZ', {hour:'2-digit', minute:'2-digit'});

  const model = currentPopup ? `${currentPopup.series} ${currentPopup.name}` : 'Консультация';
  const price = currentPopup && currentPopup.price ? formatPrice(currentPopup.price) : 'По запросу';

  const text = `🆕 Новая заявка с сайта кондиционеров\n\n` +
    `❄️ Модель: ${model}\n` +
    `💰 Цена: ${price}\n` +
    `👤 Имя: ${name}\n` +
    `📞 Телефон: ${phone}\n` +
    `📅 Дата: ${dateStr}\n` +
    `⏰ Время: ${timeStr}`;

  try {
    await fetch(`https://api.telegram.org/bot8747566836:AAFXRK-QuGEIMjXiL5cjRJg1kyomKyI5vxg/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: '-5267635134', text, parse_mode: 'HTML' })
    });
  } catch(e) { console.log('Telegram error:', e); }

  document.getElementById('orderName').value = '';
  document.getElementById('orderPhone').value = '';
  closePopup('orderOverlay');
  document.getElementById('thanksOverlay').classList.add('active');
}

async function submitContactForm() {
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const msg = document.getElementById('contactMsg').value.trim();
  if (!name || !phone) { alert('Пожалуйста, заполните имя и телефон'); return; }

  const now = new Date();
  const text = `📩 Форма обратной связи\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Сообщение: ${msg || '-'}\n📅 ${now.toLocaleDateString('ru-KZ')} ${now.toLocaleTimeString('ru-KZ',{hour:'2-digit',minute:'2-digit'})}`;

  try {
    await fetch(`https://api.telegram.org/bot8747566836:AAFXRK-QuGEIMjXiL5cjRJg1kyomKyI5vxg/sendMessage`, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({chat_id:'-5267635134', text})
    });
  } catch(e) {}

  ['contactName','contactPhone','contactMsg'].forEach(id => document.getElementById(id).value = '');
  currentPopup = null;
  document.getElementById('thanksOverlay').classList.add('active');
}

// ── PRODUCT PAGE ──
function openProductPage(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const typeLabel = p.type === 'floor' ? 'Напольный' : 'Настенный';
  const typeIcon = p.type === 'floor' ? '🌀' : '❄️';
  const badgesHtml = p.badges.map(b => {
    const cfg = badgeConfig[b];
    return cfg ? `<span class="badge ${cfg.class}">${cfg.label}</span>` : '';
  }).join('');
  const specsHtml = Object.entries(p.specs).map(([k,v]) =>
    `<div class="spec-row"><span class="spec-key">${k}</span><span class="spec-val">${v}</span></div>`
  ).join('');

  document.getElementById('productPageContent').innerHTML = `
<div>
      <div class="product-page-img-wrap" style="display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 12px; min-height: 300px;">
        <img 
          src="${p.img}" 
          alt="${p.name}" 
          style="max-width: 100%; max-height: 300px; object-fit: contain;"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
        >
        
        <div style="text-align:center; display:none;">
          <div style="font-size:100px">${p.type === 'floor' ? '🌀' : '❄️'}</div>
          <div style="margin-top:16px;color:var(--muted);font-size:14px">${p.series}</div>
        </div>
      </div>
    </div>
    <div>
      <div class="product-page-series">${p.series}</div>
      <h1 class="product-page-title">Almacom ${p.name}</h1>
      <div class="product-page-badges">${badgesHtml}</div>
      <div class="product-page-price">${formatPrice(p.price)}</div>
      <div style="font-size:13px;color:var(--muted);margin:-14px 0 20px">Розничная стоимость</div>
      <p class="product-page-desc">${p.desc}</p>
      
      <div class="product-specs">
        <div class="product-specs-title">Характеристики</div>
        ${specsHtml}
        <div class="spec-row"><span class="spec-key">Площадь</span><span class="spec-val">${p.area} м²</span></div>
        <div class="spec-row"><span class="spec-key">Тип</span><span class="spec-val">${typeLabel}</span></div>
      </div>

      <div class="product-page-actions">
        <button class="btn-primary" style="flex:1;justify-content:center" onclick="openPopup(${p.id})">
          🛒 Заказать с установкой сегодня
        </button>
        <button class="btn-outline" style="color:var(--text);border-color:var(--border);background:var(--blue-light)" onclick="closePage()">
          Назад
        </button>
      </div>
    </div>`;

  const page = document.getElementById('product-page');
  page.classList.add('active');
  page.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closePage() {
  document.getElementById('product-page').classList.remove('active');
  document.body.style.overflow = '';
}

// ── NAV ──
function openNav() { document.getElementById('mobile-nav').classList.add('active'); }
function closeNav() { document.getElementById('mobile-nav').classList.remove('active'); }

// ── SCROLL ──
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  h.classList.toggle('scrolled', window.scrollY > 20);
  const btn = document.getElementById('btnUp');
  btn.classList.toggle('visible', window.scrollY > 400);
});

// ── REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── INIT ──
renderProducts();
renderPopular();

// Close float notif after 10s
setTimeout(() => {
  const el = document.getElementById('floatNotif');
  if (el) el.style.display = 'none';
}, 10000);