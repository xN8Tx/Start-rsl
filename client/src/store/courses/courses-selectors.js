import { avgRating } from '../../utils/avg-rating';

const selectByFilters = (state, level, rating) => {
  if (level === 'null') {
    return state.courses.entities.filter((c) => (c.rating.length > 0 ? avgRating(c.rating) : 0) >= rating);
  }
  return state.courses.entities.filter(
    (c) => c.level === level && (c.rating.length > 0 ? avgRating(c.rating) : 0) >= rating,
  );
};

const selectBySearch = (state, search = '') => {
  if (search.length > 0)
    return state.courses.entities.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
  return state.courses.entities;
};

const selectByActive = (state) =>
  state.courses.entities.filter((element) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < state.myUser.entities.courses.length; i++) {
      if (state.myUser.entities.courses[i].id === element.id) return element;
    }
    return null;
  });
export { selectByFilters, selectBySearch, selectByActive };
