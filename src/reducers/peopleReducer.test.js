import { people } from './people';
import * as actions from '../actions';

describe('peopleReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = people(undefined, {});
    expect(result).toEqual(expected);
  })
  it('should return vehicle objects', () => {
    const initialState = [];
    const expected = [{name: 'Luke'}, {name: 'Leia'}, {name: 'Han'}]
    const result = people(initialState, actions.setPeople([{name: 'Luke'}, {name: 'Leia'}, {name: 'Han'}]))
    expect(result).toEqual(expected)
  })
})