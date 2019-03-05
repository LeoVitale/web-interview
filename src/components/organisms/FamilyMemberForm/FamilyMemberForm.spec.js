import React from 'react'
import { mount } from 'enzyme'
import FamilyMemberForm from './FamilyMemberForm.jsx'

describe('<FamilyMemberForm />', () => {
  const familyMemberForm = mount(<FamilyMemberForm />)

  it('should render FamilyMemberForm as expected', () => {
    expect(familyMemberForm).toMatchSnapshot()
  })
})
