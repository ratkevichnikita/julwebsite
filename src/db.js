export const products = [
  {
    title: 'Сборник развивающих заданий',
    id: 'p1book',
    categories: ['Общее развитие'],
    topics: ['Дети 3-4 года'],
    price: 2990,
    img: '/static/images/products/mainbook.webp',
    additionalImages: [],
    age: '3-4 года',
    selected: false,
    description: 'Сборник заданий для деток в возрасте от 3 до 4 лет. \n' +
      'В книге всего 80 заданий с яркими и красочными иллюстрациями. Все задания разбиты на темы. Всего выбрано 4 темы: математика, мышление, внимание и моторика. \n' +
      'Задания в книге расположены таким образом, чтобы, можно было заниматься с ребенком по 15-20 минут в день, и при этом в полной мере охватить всю программу: потренировать память и мышление; уделить внимание таким важным областям знаний, как математика; подготовить руку к письму. \n' +
      'Всего в книге десять занятий. Каждое занятие занимает четыре странички. Не торопите малыша во время задания, старайтесь ему помогать, но в то же время не подавляйте инициативы. Не оценивайте результаты ребёнка слишком строго и по окончании работы обязательно его похвалите.',
    payment: 'Тестовое описание оплаты',
    access: 'Тестовое описание доустап',
    video: 'qw9YFjMNpeI',
    link: ''
  },
  {
    title: 'Сборник развивающих заданий',
    id: 'p2book',
    categories: ['Общее развитие'],
    topics: ['Дети 2-3 года'],
    price: 2990,
    img: '/static/images/products/book23.webp',
    additionalImages: [],
    age: '2-3 года',
    selected: false,
    description: 'Сборник заданий для деток в возрасте от 3 до 4 лет. \n' +
      'В книге всего 80 заданий с яркими и красочными иллюстрациями. Все задания разбиты на темы. Всего выбрано 4 темы: математика, мышление, внимание и моторика. \n' +
      'Задания в книге расположены таким образом, чтобы, можно было заниматься с ребенком по 15-20 минут в день, и при этом в полной мере охватить всю программу: потренировать память и мышление; уделить внимание таким важным областям знаний, как математика; подготовить руку к письму. \n' +
      'Всего в книге десять занятий. Каждое занятие занимает четыре странички. Не торопите малыша во время задания, старайтесь ему помогать, но в то же время не подавляйте инициативы. Не оценивайте результаты ребёнка слишком строго и по окончании работы обязательно его похвалите.',
    payment: 'Тестовое описание оплаты',
    access: 'Тестовое описание доустап',
    video: '',
    link: ''
  },
  {
    title: 'Счёт до пяти. Учимся считать и писать',
    id: 'p3book',
    categories: ['Общее развитие'],
    topics: ['Дети 2-3 года','Дети 3-4 года','Дети 4-5 лет'],
    price: 1990,
    img: '/static/images/products/math.webp',
    additionalImages: [],
    age: '2+',
    selected: false,
    description: 'Тетрадь-пропись поможет научить ребёнка считать  от одного до пяти и писать цифры от 1 до 5.\n' +
      'В тетради  38 страниц с учебным материалом, заданиями и прописями.  Это пособие - прекрасный старт для знакомства малыша с цифрами. \n' +
      'Не торопите малыша во время ваших занятий, старайтесь ему помогать, но в то же время не подавляйте инициативы. Не оценивайте результаты ребёнка слишком строго и по окончании работы обязательно его похвалите.',
    payment: 'Тестовое описание оплаты',
    access: 'Тестовое описание доустап',
    video: '',
    link: ''
  },
  {
    title: 'Общее развитие. Игра-карточки “Животные”',
    id: 'cards1Animals',
    categories: ['Общее развитие','Окружающий мир',],
    topics: ['Малыши 1-2 года','Дети 2-3 года',],
    price: 1490,
    img: '/static/images/products/animals.webp',
    additionalImages: [],
    age: '1+',
    selected: false,
    description: '',
    payment: 'Тестовое описание оплаты',
    access: 'Тестовое описание доустап',
    video: '',
    link: ''
  },
]

export const sorting = [
  {
    label: '',
    id: 's1',
    isActive: true,
    options: [],
    defaultValue: 'Все'
  },
  {
    label: 'По возрасту:',
    isActive: false,
    id: 's2',
    options: [
      {name:'Все', id: 's2.1', isSelected: false},
      // {name:'Малыши 0-1 год', id:'s2.2', isSelected:false},
      {name:'Малыши 1-2 года', id:'s2.3', isSelected:false},
      {name:'Дети 2-3 года', id:'s2.4', isSelected:false},
      {name:'Дети 3-4 года', id:'s2.5', isSelected:false},
      {name:'Дети 4-5 лет', id:'s2.6', isSelected:false}
    ],
    defaultValue: 'Все'
  },
  {
    label: 'По темам:',
    isActive: false,
    id: 's3',
    options: [
      {name:'Все', id:'s3.1', isSelected: false},
      // {name:'Математика', id:'s3.2', isSelected:false},
      // {name:'Логопедические карточки', id:'s3.3', isSelected:false},
      {name:'Окружающий мир', id:'s3.4', isSelected:false},
      // {name:'Английский язык', id:'s3.5', isSelected:false},
      {name:'Общее развитие', id:'s3.6', isSelected:false},
    ],
    defaultValue: 'Все'
  }
]