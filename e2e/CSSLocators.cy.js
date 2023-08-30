describe('CSSLocators', () => {
    it("css locators", () => {

        cy.visit("https://www.jogetcloud.com/partners.html")
        cy.get(".unite-header")
     
    })
})