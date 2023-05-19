const avgRating = (rating) => {
  let avgRating = 0;
  rating.forEach(element => avgRating += element.rating);
  avgRating = avgRating / rating.length;
  
  return avgRating; 
};

export { avgRating };
