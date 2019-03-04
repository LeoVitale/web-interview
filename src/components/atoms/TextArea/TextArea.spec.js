import React from 'react';
import { mount } from 'enzyme';
import TextArea from './TextArea.jsx';

describe('<TextArea />', () => {
  const textArea = mount(<TextArea />);

  it('should render TextArea as expected', () => {
    expect(textArea).toMatchSnapshot();
  });
});
