describe('Verif the form can be submitted', () => {
    it('Must have Submit button working.', () => {
  
      // Visting the Website
      cy.visit('https://www.jogetcloud.com/partners.html')
  
      // Verifying that the button could be clicked on and submitted
      cy.get('form > div > a').click()
  
    })
  })