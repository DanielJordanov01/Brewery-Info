import React from "react";
import App from "./App";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import Loader from "./components/loader/Loader";
import {shallow} from './TestConfiguration'


// Given
const wrapper = shallow(<App />)
const instance = wrapper.instance()

describe('renders correct component', () => {
    test('renders ErroMessage if there is error', () => {
        // When
        wrapper.setState({error: true})

        // Assert
        expect(wrapper.contains(<ErrorMessage />)).toBeTruthy()
    })

    test('renders Loader if there is no error and state.breweries is empty', () => {
        // When
        wrapper.setState({
                error: false,
                breweries: []
            })

        // Assert
        expect(wrapper.contains(<Loader />)).toBeTruthy()
    })
})


describe('createUrl(pageNumber, itemsPerPage)', () => {
    test('correct url', () => {
        const expected = 'https://api.openbrewerydb.org/breweries?page=1&per_page=50'

        // When
        const given = instance.createUrl(1, 50)

        // Assert
        expect(given).toBe(expected)
    })
})


test('closeWindow', () => {
    const expected = false

    // When
    instance.closeWindow()
    const given = wrapper.state().isWindowOpen

    // Assert
    expect(given).toBe(expected)
})

test('getBreweryId(id)', () => {
    const expectedId = 1
    const expectedWindowState = true

    // When
    instance.getBreweryId(1)
    const givenId = wrapper.state().clickedBrewery
    const givenWindowState = wrapper.state().isWindowOpen

    // Assert
    expect(expectedId).toBe(givenId)
    expect(expectedWindowState).toBe(givenWindowState)
})
