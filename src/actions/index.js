export const pickRandomCrawl = (films) => ({
  type: 'PICK_CRAWL',
  films
})

export const addFavorite = (id) => ({
  type: 'ADD_FAVORITE',
  id
})

export const deleteFavorite = (id) => ({
  type: 'DELETE_FAVORITE',
  id
})

export const setPeople = (people) => ({
  type: 'SET_PEOPLE',
  people
})

export const setPlanets = (planets) => ({
  type: 'SET_PLANETS',
  planets
})

export const setVehicles = (vehicles) => ({
  type: 'SET_VEHICLES',
  vehicles
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})