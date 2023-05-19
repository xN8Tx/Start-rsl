const paths = [
  { name: 'Домашняя страница', links: [
    { text: 'Домашняя страница', type: 'link', path: '/' },
    { text: 'О нас', type: 'a', path: '#about' },
    { text: 'Преимущества', type: 'a', path: '#benefits' },
    { text: 'Обучение', type: 'a', path: '#education' },
    { text: 'Курсы', type: 'a', path: '#courses' },
  ]},
  { name: 'Дэшбоард', links: [
    { text: 'Дэшбоард', type: 'link', path: '/board' },
    { text: 'Мои курсы', type: 'link', path: '/board/my-courses' },
    { text: 'Курсы', type: 'link', path: '/board/courses' },
    { text: 'Форум', type: 'link', path: '/board/forum' },
  ]},
  { name: 'Профиль', links: [
    { text: 'Профиль', type: 'link', path: '/profile' },
  ]},
  { name: 'Авторизация', links: [
    { text: 'Зарегистрироваться', type: 'link', path: '/auth/registration' },
    { text: 'Войти', type: 'link', path: '/auth' },
  ]},
];

export default paths;