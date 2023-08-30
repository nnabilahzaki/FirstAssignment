/*describe('Form Submission Test', () => {
  it('should prevent submission if required fields are not filled', () => {
  
    cy.visit('https://www.jogetcloud.com/partners.html')

    // Getting all visible input elements
    const inputFields = cy.get('input:visible');
    
    // Loop through each input element
    inputFields.each((input) => {
    // Log the attributes of the input element
    cy.log('Input Element:', input.attr('name'), input.attr('type'));
  });


    //Fill in required fields
    cy.xpath("//input[@id='input-854780788815326819']").type('Nabilah')
    cy.xpath("//input[@id='input-854780788815326819-1']").type('Zaki')
    cy.xpath("//input[@id='input-491276055781529145']").type('nnabilahzaki@gmail.com')
    cy.xpath("//input[@id='input-672454182976339477']").type('Joget')
    cy.xpath("//textarea[@id='input-528841581417962198']").type('Comment')
    cy.get('#input-667693140168453864').should('not.have.value')

    //Attempt to submit the form
    cy.get('form > div > a').click()
  })
})*/

describe('Form Submission Test', () => {
  it('should prevent submission if required fields are not filled', () => {
    // Visit the target URL
    cy.visit('https://www.jogetcloud.com/partners.html');

    // Define an array of required field IDs
    const requiredFieldIds = [
      'input-854780788815326819',
      'input-854780788815326819-1',
      'input-491276055781529145',
      'input-672454182976339477',
      'input-528841581417962198'
    ];

    // Loop through each required field and type values
    requiredFieldIds.forEach((fieldId) => {
      const fieldValue = fieldId === 'input-528841581417962198' ? 'Comment' : 'Nabilah';
      cy.xpath(`//input[@id='${fieldId}']`).type(fieldValue);
    });

    // Ensure the checkbox is not selected
    cy.get('#input-667693140168453864').should('not.have.value');

    // Attempt to submit the form
    cy.get('form > div > a').click();
  });
});




        
          
        