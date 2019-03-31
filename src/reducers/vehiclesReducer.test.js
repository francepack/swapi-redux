import { vehicles } from './vehicles';
import * as actions from '../actions';

describe('vehiclesReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = vehicles(undefined, {});
    expect(result).toEqual(expected);
  })
  it('should return vehicle objects', () => {
    const initialState = [];
    const expected = [{name: 'ATT'}, {name: 'X-wing'}, {name: 'Star destroyer'}]
    const result = vehicles(initialState, actions.setVehicles([{name: 'ATT'}, {name: 'X-wing'}, {name: 'Star destroyer'}]))
    expect(result).toEqual(expected)
  })
})