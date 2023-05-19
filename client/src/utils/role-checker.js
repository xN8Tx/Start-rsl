const roleChecker = (role) => {
  switch (role) {
  case 1: return 'Мут';
  case 2: return 'Пользователь';
  case 3: return 'Модератор';
  case 4: return 'Администратор';
  default: return 'Пользователь';
  }
};

export { roleChecker };