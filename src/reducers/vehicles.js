export const vehicles = (state = [], action) => {
  switch(action.type) {
    case 'SET_VEHICLES':
      const { vehicles } = action;
      return vehicles;
    default:
      return state;
  }
}