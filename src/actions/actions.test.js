import * as actions from './index'

describe('actions', () => {
  it('should return a type PICK_CRAWL with films', () => {
    const films = [{title: 'The Empire is Cool'}, {title: 'Its a trap!'}]
    const expected = {
      type: 'PICK_CRAWL',
      films
    }
    const result = actions.pickRandomCrawl(films)
    expect(result).toEqual(expected);
  })
})