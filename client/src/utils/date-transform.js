const dateTransform = (_date) => {
  const date = new Date(_date);
  
  const day = date.getDate();
  const month = date.getMonth() >= 10 ? date.getMonth() : `0${date.getMonth()}`; 
  const year = date.getFullYear();
  
  return `${day}.${month}.${year}`;
}; 

export { dateTransform };