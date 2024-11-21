import React from 'react'
import ColoursList from '../../src/components/ColoursList'
import { mount } from 'cypress/react18'
import { RemoveFromListContext } from '../../src/components/ColourInputer'
import { Colour } from '../../src/reusableTypes/colourType'


const colourListTestArray : Colour[] = [
    {id: '1', colourName: 'blue', hexColour:'#0000ff'},
    {id: '2', colourName: 'red', hexColour:'#ff0000'},
    {id: '3', colourName: 'green', hexColour:'#00ff00'}
]

describe('Test colour block component', () => {
    it('Renders correctly', () => {
        const removeFromList = cy.stub().as('removeFromList')

        mount(<RemoveFromListContext.Provider value={{ removeFromList }}>
            <ColoursList colourList={colourListTestArray}/>
        </RemoveFromListContext.Provider>)
    })
})