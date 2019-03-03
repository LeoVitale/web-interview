import React from 'react';
import { mount } from 'enzyme';
import UserItem from './UserItem.jsx';

describe('<UserItem />', () => {
  const userItem = mount(<UserItem />);

  it('should render UserItem as expected', () => {
    expect(userItem).toMatchSnapshot();
  });
});
