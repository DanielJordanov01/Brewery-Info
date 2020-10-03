import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {shallow} from 'enzyme'
import Loader from "./Loader";
import React from "react";

configure({adapter: new Adapter()})

test('renders correctly', () => {
    shallow(<Loader />)
})