describe('Main Page Tests', () => {
  it('Visit main page', () => {
      cy.visit('/')
  })

  it('Contains correct header', () =>{
      cy.getDataTest('page-header').contains(/Colour Input Displayer/i)
  })

  it('Test colour form', () => {

      // Happy Path 
      
      // Adding colours to list
      cy.getDataTest('colour-list').within(() =>{
          cy.get('li').should('have.length', 0)
      })

      cy.getDataTest('colour-form').as('colour-input')
      cy.get('@colour-input').type('0000FF')
      cy.wait(1000) // debouncing
      cy.getDataTest('add-colour-button').click()
      cy.wait(500)
      cy.get('@colour-input').type('ff0000') // Testing lower case input
      cy.wait(1000) // debouncing
      cy.getDataTest('add-colour-button').click()
      cy.wait(500)
      cy.get('@colour-input').type('0F0') // Testing length of 3
      cy.wait(1000) // debouncing
      cy.getDataTest('add-colour-button').click()

      cy.getDataTest('colour-list').within(() =>{
          cy.get('li').should('have.length', 3)
      })

      // Deleting colours from list
      cy.getDataTest('colour-list').within(() => {
          cy.get('li').its(1).within(() => {
              cy.get('button').click()
          })
      })

      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 2)
      })

      cy.getDataTest('colour-list').within(() => {
          cy.get('li').its(0).within(() => {
              cy.get('button').click()
          })
      })

      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 1)
      })

      // Sad path - invalid length (less than 3 - with valid characters)
      cy.get('@colour-input').type('0A')
      cy.getDataTest('add-colour-button').click()
      // Shouldn't be added - length of 1 remains
      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 1)
      })

      // Sad path - invalid length (Between 3 and 6 (exclusive) - with valid characters)
      cy.get('@colour-input').type('0ABCD')
      cy.getDataTest('add-colour-button').click()
      // Shouldn't be added - length of 1 remains
      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 1)
      })

      // Sad path - invalid length (greater than 6 - with valid characters)
      cy.get('@colour-input').type('0ABCDEF')
      cy.getDataTest('add-colour-button').click()
      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 1)
      })

      // Sad path - No text entered
      cy.getDataTest('add-colour-button').click()
      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 1)
      })

      // Sad path - valid length (6) and invalid characters
      cy.get('@colour-input').type('HIJKLM')
      cy.getDataTest('add-colour-button').click()
      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 1)
      })

      // Sad path - valid length (3) and invalid characters
      cy.get('@colour-input').type('UZX')
      cy.getDataTest('add-colour-button').click()
      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 1)
      })

      // Sad path - invalid length (Between 3 and 6 (exclusive)) and invalid characters
      cy.get('@colour-input').type('UZXS')
      cy.getDataTest('add-colour-button').click()
      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 1)
      })

      // Sad path - invalid length (less than 3) and invalid characters
      cy.get('@colour-input').type('ZY')
      cy.getDataTest('add-colour-button').click()
      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 1)
      })

      // Sad path - invalid length (more than 6) and invalid characters
      cy.get('@colour-input').type('ZYXWUTU')
      cy.getDataTest('add-colour-button').click()
      cy.getDataTest('colour-list').within(() => {
          cy.get('li').should('have.length', 1)
      })

  })

})