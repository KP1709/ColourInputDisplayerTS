import ColourInputer from '../../src/components/ColourInputer'
import { mount } from 'cypress/react18'

describe('Test Colour Inputer Component', () => {
  it('Renders', () => {
    mount(<ColourInputer />)
  })

  it('Testing colour list functionality', () => {
    mount(<ColourInputer />)

    cy.get('data-test="colour-list"').within(() => {
      cy.get('li').should('have.length', 0)
    })

    cy.get('data-test="colour-form"').as('colour-input')

    cy.get('@colour-input').type('0000FF')
    cy.wait(1000) // debouncing
    cy.get('data-test="add-colour-button"').click()

    cy.get('@colour-input').type('abcdef')
    cy.wait(1000)
    cy.get('data-test="add-colour-button"').click()

    cy.get('@colour-input').type('123456')
    cy.wait(1000)
    cy.get('data-test="add-colour-button"').click()

    cy.get('@colour-input').type('zb34fa')
    cy.wait(1000)
    cy.get('data-test="add-colour-button"').click()

    cy.get('data-test="colour-list"').within(() => {
      cy.get('li').should('have.length', 3)
    })

    cy.get('data-test="colour-list"').within(() => {
      cy.get('li').its(1).within(() => {
        cy.get('button').click()
      })
    })

    cy.get('data-test="colour-list"').within(() => {
      cy.get('li').its(0).within(() => {
        cy.get('button').click()
      })
    })

    cy.get('data-test="colour-list"').within(() => {
      cy.get('li').should('have.length', 1)
    })
  })

  it('Testing colour block contains correct elements', () => {
    mount(<ColourInputer />)

    cy.get('data-test="colour-form"').as('colour-input')

    cy.get('@colour-input').type('4A90E2')
    cy.wait(1000) // debouncing
    cy.get('data-test="add-colour-button"').click()

    cy.get('data-test="colour-block-#4A90E2"').should('exist')
    cy.get('data-test="colour-block-#4A90E2"').should('have.css', 'background-color','rgb(74, 144, 226)')
    cy.get('data-test="colour-block-#4A90E2"').within(() => {
      cy.get('p:nth-child(1)').should('contain', '#4A90E2') // Not wise to do as 'p' element could change
      cy.get('p:nth-child(2)').should('contain', 'HAVELOCK BLUE') 

      cy.get('button').should('exist')
    })

  })

  it('Test human input and debouncing', () => {
    mount(<ColourInputer />)
    cy.log('Paused to get input of a valid hex colour')
    cy.pause()
    cy.get('data-test="add-colour-button"').click()
  })

})