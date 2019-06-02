import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr } from './../../utility'
import Header from './index.js'

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />);
  return component
}



describe("Header componet", () => {
  let component;
  beforeEach( async () => {
    component = await setUp()
  })

  it("Should render header", () => {
    const wrapper = findByTestAtrr( component, 'headerComponent' )
    expect(wrapper.length).toBe(1)
  })

  it("Should render logo", () => {
    const wrapper = findByTestAtrr( component, 'logoIMG' )
    expect(wrapper.length).toBe(1)
  })
})
