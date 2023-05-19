const registrationTest = (email, password) => {
  if (!email.includes('@') || email.match(/[а-яА-Я]/)) return 'Введите корректную почту';
  if (password.match(/[а-яА-Я]/)) return 'Введите корректный пароль';
  return null;
};

export { registrationTest };
