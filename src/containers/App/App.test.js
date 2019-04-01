import React from 'react';
import { shallow } from 'enzyme';
import { setPeople, setPlanets, setVehicles } from '../../actions'
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps} from './App';

describe('App', () => {
  let wrapper;
  let mockProps = { 
    quote: { quote: 'In a galaxy closeby...', title: 'Star Wars 16, Newest Hopes', date: 'December 2030' }
  }
  beforeEach(() => {
    wrapper = shallow(
      <App {...mockProps} />
    )
  });  
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps', () => {
    it('should return an object with a quote', () => {
      const mockState = {
        people: [],
        planets: [],
        vehicles: [],
        quote: {quote: 'In a galaxy pretty closeby...'}
      };

      const expectedState = {
        quote: {quote: 'In a galaxy pretty closeby...'}
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch with a setPeople action', () => {
      const mockPeople = [{name: 'Mason'}, {name: 'Luke'}];
      const dispatch = jest.fn();
      const actionToDispatch = setPeople(mockPeople);
      const mappedProps = mapDispatchToProps(dispatch);
      mappedProps.setPeople(mockPeople);
      expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with a setPlanets action', () => {
      const mockPlanets = [{name: 'Mars'}, {name: 'Hoth'}];
      const dispatch = jest.fn();
      const actionToDispatch = setPlanets(mockPlanets);
      const mappedProps = mapDispatchToProps(dispatch);
      mappedProps.setPlanets(mockPlanets);
      expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    
    it('should call dispatch with a setVehicles action', () => {
      const mockVehicles = [{name: 'tie-fighter'}, {name: 'x-wing'}];
      const dispatch = jest.fn();
      const actionToDispatch = setVehicles(mockVehicles);
      const mappedProps = mapDispatchToProps(dispatch);
      mappedProps.setVehicles(mockVehicles);
      expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});
