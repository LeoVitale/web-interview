import React from 'react';
import { mount } from 'enzyme';
import Header from './Header.jsx';

describe('<Header />', () => {
  const header = mount(<Header />);

  it('should render Header as expected', () => {
    expect(header).toMatchSnapshot();
  });
});
