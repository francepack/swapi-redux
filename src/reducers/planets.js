export const planets = (state = [], action) => {
  switch(action.type) {
    case 'SET_PLANETS':
      const { planets } = action;
      return planets;
    default:
      return state;
  }
}