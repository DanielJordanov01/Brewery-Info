import React from "react";
import App from "./App";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import Loader from "./components/loader/Loader";
import {shallow} from './TestConfiguration'
import {store} from "./store";
import {setError} from "./actions";
import {setBreweries} from "./actions";


// Given
let wrapper = shallow(<App />)
const instance = wrapper.instance()

describe('renders correct component', () => {
    test('renders ErroMessage if there is error', () => {
        // When
        store.dispatch(setError(true))
        wrapper = shallow(<App />)

        // Assert
        expect(wrapper.contains(<ErrorMessage />)).toBeTruthy()
    })

    test('renders Loader if there is no error and state.breweries is empty', () => {
        // When
        store.dispatch(setError(false))
        store.dispatch(setBreweries([]))
        wrapper = shallow(<App />)

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
