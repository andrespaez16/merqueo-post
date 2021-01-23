import { React } from 'react'
import {Comment} from './components/comment'
import { mount } from "enzyme"

describe( 'el composnente se renderiza', ()=>{
  it('render sin problemas', ()=>{
    const post =[{autor:'elias', post:'lorem'}]
    const wrapper = mount(<Comment posts={post}/>)
    expect(wrapper).toMatchSnapshot()
  })
} )