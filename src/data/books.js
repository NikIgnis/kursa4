const books = [
    {
      id: 1,
      title: 'Гарри Поттер и философский камень',
      author: 'Дж. К. Роулинг',
      genre: 'Фэнтези',
      description: 'История мальчика-волшебника, который меняет мир.',
      rating: 5,
      price: 999,
      cover: 'https://avatars.mds.yandex.net/get-mpic/12280826/2a0000019123cb589606c1e238b6098c5301/orig'
    },
    {
      id: 2,
      title: '1984',
      author: 'Джордж Оруэлл',
      genre: 'Антиутопия',
      description: 'Роман о тоталитарном обществе и цене свободы.',
      rating: 4,
      price: 699,
      cover: 'https://steamuserimages-a.akamaihd.net/ugc/43100917013436984/785F51FFFC42AB478B30E62A879DE5C0D25EAC6A/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false'
    },
    {
      id: 3,
      title: 'Убить пересмешника',
      author: 'Харпер Ли',
      genre: 'Роман',
      description: 'История расовой несправедливости в американской глубинке.',
      rating: 5,
      price: 599,
      cover: 'https://avatars.mds.yandex.net/get-mpic/4119784/img_id6849037735687796795.jpeg/orig'
    },
    {
      id: 4,
      title: 'Великий Гэтсби',
      author: 'Ф. Скотт Фицджеральд',
      genre: 'Классика',
      description: 'Трагическая история любви и стремления к мечте.',
      rating: 4,
      price: 499,
      cover: 'https://avatars.mds.yandex.net/i?id=33c3535361796fc6070214b9e174865a_l-5288553-images-thumbs&n=13'
    },
    {
      id: 5,
      title: 'Гордость и предубеждение',
      author: 'Джейн Остин',
      genre: 'Классика',
      description: 'Ироничная история о любви и социальных различиях.',
      rating: 4,
      price: 450,
      cover: 'https://avatars.mds.yandex.net/i?id=7f2119f8be5bbcb3bda31b359f1081f2c4a36cba-10268314-images-thumbs&n=13'
    },
    {
      id: 6,
      title: 'Тёмные начала',
      author: 'Филип Пулман',
      genre: 'Фэнтези',
      description: 'Первая книга знаменитой трилогии "Темные начала".',
      rating: 3,
      price: 799,
      cover: 'https://avatars.mds.yandex.net/i?id=d51e20c2fa526f4124a80ebab89e095e_l-4289847-images-thumbs&n=13'
    },
    {
      id: 7,
      title: 'Прощай, оружие!',
      author: 'Эрнест Хемингуэй',
      genre: 'Роман',
      description: 'История любви на фоне войны.',
      rating: 4,
      price: 550,
      cover: 'https://static10.labirint.ru/books/552431/cover.jpg'
    },
    {
      id: 8,
      title: 'Мастер и Маргарита',
      author: 'Михаил Булгаков',
      genre: 'Сатира',
      description: 'Философская притча о добре и зле.',
      rating: 5,
      price: 899,
      cover: 'https://cdn1.ozone.ru/s3/multimedia-x/6597669093.jpg'
    },
    {
      id: 9,
      title: 'Преступление и наказание',
      author: 'Фёдор Достоевский',
      genre: 'Психология',
      description: 'Психологический портрет человека перед лицом совести.',
      rating: 5,
      price: 799,
      cover: 'https://avatars.mds.yandex.net/get-mpic/6219218/img_id6420448166471816741.jpeg/orig'
    },
    {
      id: 10,
      title: 'Человек-паук: Через вселенные',
      author: 'Дэниел Клирмонт',
      genre: 'Комиксы',
      description: 'Новая глава приключений легендарного героя.',
      rating: 4,
      price: 399,
      cover: 'https://avatars.mds.yandex.net/get-mpic/3907807/2a0000019206abd5e4fb7c50eb3f9c197aee/orig'
    },
    {
      id: 11,
      title: 'Степь',
      author: 'Антон Чехов',
      genre: 'Классика',
      description: 'Рассказ о первых впечатлениях ребёнка от путешествия по степи.',
      rating: 4,
      price: 299,
      cover: 'https://cdn1.ozone.ru/multimedia/1010340433.jpg'
    },
    {
      id: 12,
      title: 'Три товарища',
      author: 'Эрих Мария Ремарк',
      genre: 'Роман',
      description: 'История дружбы, любви и потерь после войны.',
      rating: 4,
      price: 699,
      cover: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/1690602717/100024720773b0.jpg'
    },
    {
      id: 13,
      title: 'Мцыри',
      author: 'Михаил Лермонтов',
      genre: 'Поэзия',
      description: 'Поэма о жажде свободы и борьбе за свою судьбу.',
      rating: 5,
      price: 249,
      cover: 'https://cdn1.ozone.ru/multimedia/c600/1020919779.jpg'
    },
    {
      id: 14,
      title: 'Остров сокровищ',
      author: 'Роберт Стивенсон',
      genre: 'Приключения',
      description: 'Классическая история о поисках пиратских сокровищ.',
      rating: 4,
      price: 399,
      cover: 'https://cdn1.ozone.ru/multimedia/1007522355.jpg'
    },
    {
      id: 15,
      title: 'Маленький принц',
      author: 'Антуан де Сент-Экзюпери',
      genre: 'Философия',
      description: 'Мудрая сказка для взрослых о жизни и любви.',
      rating: 5,
      price: 499,
      cover: 'https://avatars.mds.yandex.net/get-mpic/6212300/img_id2239853483883321063.jpeg/orig'
    },
    {
      id: 16,
      title: 'Дракула',
      author: 'Брэм Стокер',
      genre: 'Ужасы',
      description: 'Легендарная история о графе вампире.',
      rating: 4,
      price: 599,
      cover: 'https://cdn1.ozone.ru/s3/multimedia-6/6664432470.jpg'
    },
    {
      id: 17,
      title: 'Гроза',
      author: 'Александр Островский',
      genre: 'Драма',
      description: 'Классическая русская драма о противостоянии личности и общества.',
      rating: 4,
      price: 349,
      cover: 'https://avatars.mds.yandex.net/get-mpic/4949903/img_id6618838921266291549.jpeg/orig'
    },
    {
      id: 18,
      title: 'Тарас Бульба',
      author: 'Николай Гоголь',
      genre: 'История',
      description: 'История казачьей чести, верности и отцовства.',
      rating: 4,
      price: 399,
      cover: 'https://static10.labirint.ru/books/525938/cover.jpg'
    },
    {
      id: 19,
      title: 'Записки из подполья',
      author: 'Фёдор Достоевский',
      genre: 'Философия',
      description: 'Мрачная исповедь внутреннего конфликта человека с самим собой.',
      rating: 5,
      price: 299,
      cover: 'https://avatars.mds.yandex.net/i?id=2a89f2697a8caece4e17f3122d4a7432_l-5866271-images-thumbs&n=13'
    },
    {
      id: 20,
      title: 'Сквозь снег',
      author: 'Джон Уиллис',
      genre: 'Приключения',
      description: 'История выживания в условиях сурового севера.',
      rating: 3,
      price: 599,
      cover: 'https://avatars.mds.yandex.net/get-mpic/4955516/img_id3029043407128307217.jpeg/orig'
    }
  ]
  
  export default [...books, ...books].slice(0, 20); 