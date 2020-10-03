import React from "react";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BreweryDetails from "./BreweryDetails";

Enzyme.configure({adapter: new Adapter()})

const wrapper = shallow(<BreweryDetails />)

test('close button', () => {
    const button = wrapper.getElementById('button')

    console.log(button)
})