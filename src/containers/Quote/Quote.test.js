import React from 'react';
import { enzyme, shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Quote />
    )
  });  
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  });
});