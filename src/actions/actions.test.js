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

  it('should return a type SET_PEOPLE with people objects', => {
    const people = [{name: 'Luke'}, {name: 'Leia'}, {name: 'Han'}];
    const expected = {
      type: 'SET_PEOPLE',
      people
    }
    const result = actions.setPeople(people)
    expect(result).toEqual(expected);
  })

  it('should return a type SET_PLANETS with planet objects', => {
    const planets = [{name: 'Tatooine'}, {name: 'Earth'}, {name: 'Hoth'}];
    const expected = {
      type: 'SET_PLANETS',
      planets
    }
    const result = actions.setPlanets(planets)
    expect(result).toEqual(expected);
  })
  
  it('should return a type SET_VEHICLES with vehicle objects', => {
    const vehicles = [{name: 'ATT'}, {name: 'X-wing'}, {name: 'Star Destroyer'}];
    const expected = {
      type: 'SET_VEHICLES',
      vehicles
    }
    const result = actions.setVehicles(vehicles)
    expect(result).toEqual(expected);
  })

})