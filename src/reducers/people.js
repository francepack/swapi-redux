export const people = (state = [], action) => {
  switch(action.type) {
    case 'SET_PEOPLE':
      const { people } = action;
      return people;
    default:
      return state;
  }
}