import React from 'react';
import { enzyme, shallow } from 'enzyme';
import Card from './Card';

describe('card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card />
    )
  });  
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  });
});