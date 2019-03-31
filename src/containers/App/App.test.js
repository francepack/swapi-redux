import React from 'react';
import { enzyme, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  });  
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  });
});
