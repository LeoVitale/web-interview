import React from 'react';
import { mount } from 'enzyme';
import TextBox from './TextBox.jsx';

describe('<TextArea />', () => {
  const textBox = mount(<TextBox />);

  it('should render TextBox as expected', () => {
    expect(textBox).toMatchSnapshot();
  });
});
