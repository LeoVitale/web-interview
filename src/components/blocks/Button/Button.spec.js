import React from 'react';
import { mount } from 'enzyme';
import Button from './Button.jsx';
import Index from '.';

describe('<Button />', () => {
  const button = mount(<Button />);

  it('test index.js import', () => {
    expect(Index).toHaveLength(0);
  });

  it('should render Button as expected', () => {
    expect(button).toMatchSnapshot();
  });
});
