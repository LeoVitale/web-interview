import React from 'react';
import { mount } from 'enzyme';
import Modal from './Modal.jsx';

describe('<Modal />', () => {
  const modal = mount(<Modal />);

  it('should render Modal as expected', () => {
    expect(modal).toMatchSnapshot();
  });
});
