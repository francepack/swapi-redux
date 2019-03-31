import React from 'react';
import { enzyme, shallow } from 'enzyme';
import CardBox from './CardBox';

describe('CardBox', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CardBox />
    )
  });  
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  });
});