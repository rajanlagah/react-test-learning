import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index.js'
import { findByTestAtrr } from './../../utility'

const setUp = (props={}) => {
  const component = shallow(<Headline {...props} />);
  return component
}

describe ('Should render headline', ()=>{

  describe('Have props', ()=> {
    let wrapper;
    beforeEach( ()=> {
      const props = {
        header:'Test header',
        desc:'Test Dec'
      }
      wrapper = setUp(props)
    })
    it('should render', ()=> {
      const component = findByTestAtrr(wrapper, "HeadlineComponent")
      expect(component.length).toBe(1)
    })
    it('should render h1', ()=> {
      const h1 = findByTestAtrr(wrapper, 'header')
      expect(h1.length).toBe(1)
    })
    it('should render desc', ()=> {
      const desc = findByTestAtrr(wrapper, 'desc')
      expect(desc.length).toBe(1)
    })
  })
  describe('Have no props', () => {
    let wrapper;
    beforeEach(()=>{
      wrapper =  setUp()
    })

    it('Should not render', ()=> {
      const component = findByTestAtrr(wrapper,"HeadlineComponent")
      expect(component.length).toBe(0)
    })

  })
})
