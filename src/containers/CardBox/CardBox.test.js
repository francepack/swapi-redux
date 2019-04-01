import React from 'react';
import { enzyme, shallow } from 'enzyme';
import { CardBox, mapStateToProps } from './CardBox';

describe('CardBox', () => {
  let wrapper;
  let mockProps = {
    id: 'home'
  }
  beforeEach(() => {
    wrapper = shallow(
      <CardBox {...mockProps} />
    )
  });  
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps', () => {
    it('should return an object with people, planets, and vehicles', () => {
      const mockState = {
        people: [],
        planets: [],
        vehicles: [],
        quote: {quote: 'In a galaxy pretty closeby...'}
      };

      const expectedState = {
        people: [],
        planets: [],
        vehicles: []
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });
});