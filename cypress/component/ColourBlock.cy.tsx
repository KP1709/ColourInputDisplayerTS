import React from 'react'
import ColourBlock from '../../src/components/ColourBlock'
import { mount } from 'cypress/react18'
import { RemoveFromListContext } from '../../src/components/ColourInputer'

describe('Test colour block component', () => {
    it('Renders + Delete block functionality', () => {
        const removeFromList = cy.stub().as('removeFromList')

        mount(<RemoveFromListContext.Provider value={{ removeFromList }}>
            <ColourBlock hexColour={'#0000ff'} id={'1'} colourName={'blue'} />
        </RemoveFromListContext.Provider>)

        cy.get('button').click();
        cy.get('@removeFromList').should('have.been.calledOnce')
    })
})