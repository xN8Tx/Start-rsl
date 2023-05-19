const avgRating = (rating) => {
  let avgRat = 0;
  rating.forEach((element) => {
    avgRat += element.rating;
  });
  avgRat /= rating.length;

  return avgRat;
};

export { avgRating };
