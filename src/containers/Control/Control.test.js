import React from 'react';
import { enzyme, shallow } from 'enzyme';
import Control from './Control';

describe('Control', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Control />
    )
  });  
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  });
});