import React from 'react';
import {shallow} from 'enzyme';
import jest from 'jest-mock';
import Search from '../../client/components/search.js';

describe('Search Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Search />).find('input').exists()).toBe(true)
  });
  it('should render a search input', () => {
    expect(shallow(<Search />).find('#search').length).toBe(1)
  });
  it('should call on onChange prop with input value', () => {
    const onChange = jest.fn();
    const component = shallow(<Search onChange={onChange}/>);
    component.find('input').simulate('change', {target: {
      value: 'New Value'}
    });
    expect(component.state('query')).toBe('New Value');
  });
});

