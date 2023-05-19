const statusCounter = (course) => {
  const qnt = course.length;
  let completed = 0;

  course.forEach((el) => {
    if (el.status === true) completed = +1;
  });

  return Math.floor((completed * 100) / qnt);
};

export { statusCounter };
