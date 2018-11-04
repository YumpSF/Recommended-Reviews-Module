import React from 'react';
import {shallow} from 'enzyme';
import jest from 'jest-mock';
import App from '../../client/components/app.js';

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
},
    {
      review: {
        "name":"Swaniawski Inc","user_avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebjoyce/128.jpg","user_name":"Carey Welch","location":"Rahulport" +
          "Montana","number_reviews":40,"number_photos":1,"date":"2018-08-21T07:00:00.000Z","review_comment":"Et quo numquam aut. Sit occaecati quia repellat dolorem beatae autem libero. Possimus aliquam officiis repellat incidunt in enim rem tempore. Saepe sunt veritatis suscipit id adipisci rerum odio autem dolor. Doloremque est sed expedita. Eaque voluptas et eum nihil iste quo et quos at.","score":"https://s3-us-west-1.amazonaws.com/hrfrontendcapstone/regular_4.png","picture_food":"https://s3-us-west-1.amazonaws.com/hrfrontendcapstone/7.jpeg"
    },
    searched: true
    }
  ];

let wrapper;

describe('Main App Component', () => {
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });
  it('filter function should filter properly', () => {
    wrapper.setState({reviews: mockData});
    wrapper.instance().filterReviews("Corporis");
    expect(wrapper.state('reviews')[0].searched).toEqual(true);
    expect(wrapper.state('reviews')[1].searched).toEqual(false);
  });
});