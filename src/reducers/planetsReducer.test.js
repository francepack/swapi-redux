import { planets } from './planets';
import * as actions from '../actions'

describe('planetsReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = planets(undefined, {});
    expect(result).toEqual(expected);
  })
  it('should return planet objects', () => {
    const initialState = [];
    const expected = [{name: 'Tatooine'}, {name: 'Earth'}, {name: 'Hoth'}]
    const result = planets(initialState, actions.setPlanets([{name: 'Tatooine'}, {name: 'Earth'}, {name: 'Hoth'}]))
    expect(result).toEqual(expected)
  })
})