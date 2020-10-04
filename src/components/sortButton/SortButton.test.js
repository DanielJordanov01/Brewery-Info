import React from "react";
import SortButton from "./SortButton";
import '@testing-library/jest-dom'
import {shallow} from '../../TestConfiguration'

const setSorted = jest.fn()

let wrapper = shallow(<SortButton />)
let instance = wrapper.instance()


describe('sort()', () => {

    test('sort(breweries) by name', () => {

        let initialProps = {
            setSorted,
            column: 'name',
            breweries: [
                {
                    name: 'name 2'
                },
                {
                    name: '1 name'
                }
            ]
        }

        wrapper = shallow(<SortButton {...initialProps} />)
        instance = wrapper.instance()

        const expected = [
            {
                name: '1 name'
            },
            {
                name: 'name 2'
            }
        ]

        // When
        const result = instance.sort()

        expect(result).toStrictEqual(expected)
    })

    test('sort(breweries) by type', () => {

        let initialProps = {
            setSorted,
            column: 'type',
            breweries: [
                {
                    type: 'type 2'
                },
                {
                    type: '1 type'
                }
            ]
        }

        wrapper = shallow(<SortButton {...initialProps} />)
        instance = wrapper.instance()

        const expected = [
            {
                type: '1 type'
            },
            {
                type: 'type 2'
            }
        ]

        // When
        const result = instance.sort()

        expect(result).toStrictEqual(expected)
    })

    test('sort(breweries) by state', () => {

        let initialProps = {
            setSorted,
            column: 'state',
            breweries: [
                {
                    state: 'state 2'
                },
                {
                    state: '1 state'
                }
            ]
        }

        wrapper = shallow(<SortButton {...initialProps} />)
        instance = wrapper.instance()

        const expected = [
            {
                state: '1 state'
            },
            {
                state: 'state 2'
            }
        ]

        // When
        const result = instance.sort()

        expect(result).toStrictEqual(expected)
    })

})


describe('compare(prev, next)', () => {

    test('compare returns 1', () => {
        const expected = 1

        // When
        const given = instance.compare(2, 1)

        // Assert
        expect(given).toBe(expected)
    })

    test('compare returns -1', () => {
        const expected = -1

        // When
        const given = instance.compare(1, 2)

        // Assert
        expect(given).toBe(expected)
    })

    test('compare returns 0', () => {
        const expected = 0

        // When
        const given = instance.compare(1, 1)

        //Assert
        expect(given).toBe(expected)
    })

    test('prev equals null', () => {
        const expected = 1

        // When
        const given = instance.compare(null, 1)

        expect(given).toBe(expected)
    })

    test('next equals null', () => {
        const expected = -1

        // When
        const given = instance.compare(1, null)

        expect(given).toBe(expected)
    })
})