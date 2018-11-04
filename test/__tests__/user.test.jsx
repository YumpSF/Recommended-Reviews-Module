import React from 'react';
import {shallow} from 'enzyme';
import User from '../../client/components/user.js';

const mockData =
  {
    review: {
      "name": "Swaniawski Inc",
      "user_avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/smenov/128.jpg",
      "user_name": "Miss Yvette Lemke",
      "location": "Giuseppefurt Georgia",
      "number_reviews": 41,
      "number_photos": 20,
      "date": "2018-08-23T07:00:00.000Z",
      "review_comment": "Corporis id molestiae voluptates ipsum dolorem voluptatum culpa. Perspiciatis sed enim quibusdam. Nam fuga voluptatem officiis sit facilis distinctio nostrum. Tenetur ipsum officia est ab odit illum explicabo aut.",
      "score": "https://s3-us-west-1.amazonaws.com/hrfrontendcapstone/regular_3.png",
      "picture_food": "https://s3-us-west-1.amazonaws.com/hrfrontendcapstone/6.jpeg"
    },
    searched: true
  };

const wrapper = shallow(<User restaurant={mockData}/>);

describe('User Component', () => {
  it('should have five images', () => {
    expect(wrapper.find('img').length).toBe(5)
  });
  it('should render users_info className ', () => {
    expect(wrapper.find('.users_info').length).toBe(1);
  });
  it('should render user_info_location className', () => {
    expect(wrapper.find('.user_info_location').length).toBe(1);
  });
  it('should render user_info_reviews className', () => {
    expect(wrapper.find('.user_info_reviews').length).toBe(1);
  });
  it('should render user_info_photos className', () => {
    expect(wrapper.find('.user_info_photos').length).toBe(1);
  });
  it('should render users_reviews className', () => {
    expect(wrapper.find('.users_reviews').length).toBe(1);
  });
  it('should render food_picture className', () => {
    expect(wrapper.find('.food_picture').length).toBe(1);
  });
  it('should render text of review.user_name', () => {
    expect(wrapper.find('.user_info_name').text()).toBe('Miss Yvette Lemke')
  });
  it('should render text of review.user_location', () => {
    expect(wrapper.find('.user_info_location').text()).toBe('Giuseppefurt Georgia');
  });
  it('should render text of review.users_reviews', () => {
    expect(wrapper.find('.users_comment').text()).toBe('Corporis id molestiae voluptates ipsum dolorem voluptatum culpa. Perspiciatis sed enim quibusdam. Nam fuga voluptatem officiis sit facilis distinctio nostrum. Tenetur ipsum officia est ab odit illum explicabo aut.');
  });

});