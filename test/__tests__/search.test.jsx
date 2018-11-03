import React from 'react';
import {mount} from 'enzyme'
import Search from '../../client/components/search.js';

test('', () => {
  const test = mount(
    <Search/>
  );
  const len = test.find('input').length;
  expect(len).toBe(1);
});

