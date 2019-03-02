import React from 'react';
import { mount } from 'enzyme';
import Header from './Header.jsx';
import Index from '.';

describe('<Header />', () => {
  const header = mount(<Header />);

  it('test index.js import', () => {
    expect(Index).toHaveLength(1);
  });

  it('should render Header as expected', () => {
    expect(header).toMatchSnapshot();
  });
});
