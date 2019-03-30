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