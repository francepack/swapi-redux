import { quote } from './quote';
import * as actions from '../actions'

describe('quoteReducer', () => {
  it('should return initial state', () => {
    const expected = {};
    const result = quote(undefined, {});
    expect(result).toEqual(expected);
  })
  it.skip('should return an object with a quote, title and date', () => {
    const initialState = {};
    const expected = { quote: 'In a galaxy...', title: 'StarWars4eva', date: 'Christmas'}
    let mockFilm;
    //how to set up a mock [random#]?
    const result = quote(initialState, actions.pickRandomCrawl({ opening_crawl: 'In a galaxy...', title: 'StarWars4eva', release_date: 'Christmas', coolness_factor: 7 }))
    expect(result).toEqual(expected)
  })
})