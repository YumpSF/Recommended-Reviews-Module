import React from 'react';
import {shallow} from 'enzyme';
import Users from '../../client/components/users.js';


const mockData =
  [{
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
}
];

const wrapper = shallow(<Users reviews={mockData}/>);


describe('Users Component', () => {
  it('users component renders the right amount of child components properly', () => {
    expect(wrapper.find('.allUsers').children().length).toBe(1);
  });
});