export const quote = (state = {}, action) => {
  switch(action.type) {
    case 'PICK_CRAWL':
      const randomMovie = Math.ceil(Math.random() * Math.floor(7));
      const { films } = action;
      return {
        quote: films[randomMovie].opening_crawl,
        title: films[randomMovie].title,
        date: films[randomMovie].release_date
      }
    default:
      return state;
  }
}