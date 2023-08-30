describe('Displayed Correctly', () => {
    it('verify title-positive', () => {

      cy.visit("https://www.jogetcloud.com/partners.html")
      cy.title().should('eq','Partners - Joget Cloud - Delivering a Modern Platform for Enterprise Application Development and Workflow Automation.') 
    })

    it('verify all elements are exist', () => {
      cy.visit("https://www.jogetcloud.com/partners.html")
      cy.get('.unite-header').should('exist')
      cy.get('.wsite-logo > a').should('exist')
      cy.get('.wsite-logo > a > img').should('exist')
      cy.get('.container > .hamburger').should('exist')

      //cy.get('.membership-cart')

      cy.get(':nth-child(1) > .wsite-section > .wsite-section-content > .container').should('exist')
      cy.get('.wsite-content-title > strong > font').should('exist')
      cy.get(':nth-child(2) > .wsite-section > .wsite-section-content > .container').should('exist')
      cy.get(':nth-child(2) > .wsite-section > .wsite-section-content > .container > .wsite-section-elements > :nth-child(1)').should('exist')
      cy.get('.wsite-section-elements > :nth-child(2)').should('exist')
      cy.get('.wsite-section-elements > :nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(1)').should('exist')
      cy.get(':nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(1) > :nth-child(1) > .wsite-image > a > img').should('exist')
      cy.get(':nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(2) > :nth-child(1) > .wsite-image > a > img').should('exist')
      cy.get(':nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(3)').should('exist')
      cy.get(':nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(3) > :nth-child(1) > .wsite-image > a > img').should('exist')
      cy.get(':nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(4)').should('exist')
      cy.get(':nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(4)').should('exist')
      cy.get(':nth-child(4) > :nth-child(1) > .wsite-image > a > img').should('exist')
      cy.get('.wsite-section-elements > :nth-child(4)').should('exist')
      cy.get('.wsite-section-elements > :nth-child(5) > :nth-child(1)').should('exist')
      cy.get(':nth-child(5) > :nth-child(3)').should('exist')
      cy.get('.wsite-section-elements > :nth-child(6)').should('exist')
      cy.get('.wsite-section-elements > :nth-child(7)').should('exist')
      cy.get('.wsite-section-elements > :nth-child(8)').should('exist')
      cy.get('.wsite-section-elements > :nth-child(9) > :nth-child(1)').should('exist')
      cy.get(':nth-child(9) > :nth-child(3)').should('exist')
      cy.get('.wsite-section-elements > :nth-child(10)').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(1) > :nth-child(1) > .wsite-image').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(1) > :nth-child(1) > .wsite-image').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(1) > :nth-child(1) > .wsite-image > a').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(1) > :nth-child(1) > .wsite-image > div').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(2) > :nth-child(1) > .wsite-image').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(2) > :nth-child(1) > .wsite-image > a > img').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(2) > :nth-child(1) > .wsite-image > a').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(2) > :nth-child(1) > .wsite-image > div').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(3) > :nth-child(1) > .wsite-image').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(3) > :nth-child(1) > .wsite-image').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(3) > :nth-child(1) > .wsite-image > a').should('exist')
      cy.get(':nth-child(11) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(3) > :nth-child(1) > .wsite-image > div').should('exist')
      cy.get('.wsite-section-elements > :nth-child(12)').should('exist')
      cy.get(':nth-child(13) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(1)').should('exist')
      cy.get(':nth-child(13) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(2)').should('exist')
      cy.get(':nth-child(13) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > :nth-child(3)').should('exist')
      //continue with logos

      //divide under logos
      cy.get('[style="height:19px;"]').should('exist')
      cy.get(':nth-child(15) > :nth-child(1)').should('exist')

      //contact an implemantion partner now
      cy.get(':nth-child(15) > :nth-child(1)').should('exist')
      cy.get('.wsite-section-elements > :nth-child(16)').should('exist')

      //form left
      cy.get('.waddons_vertical_divider_column').should('exist')
      cy.get('.waddons_vertical_divider_column > .wsite-content-title').should('exist')
      cy.get('.waddons_vertical_divider_column > .paragraph > span').should('exist')
      cy.get('.waddons_vertical_divider_column > :nth-child(3) > :nth-child(1)').should('exist')
      cy.get('.waddons_vertical_divider_column > :nth-child(3) > :nth-child(3)').should('exist')

      //form list
      //cy.get('#\38 81368613959443876-form-list').should('exist')

      //form list elements
      cy.get('.wsite-form-fields-required-label').should('exist')
      cy.get(':nth-child(2) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > [style="width:45.454545454545%; padding:0 15px;"]').should('exist')
      cy.get(':nth-child(2) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > [style="width:45.454545454545%; padding:0 15px;"] > :nth-child(1) > .wsite-form-field > .wsite-form-label').should('exist')
      cy.get(':nth-child(2) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > [style="width:45.454545454545%; padding:0 15px;"] > :nth-child(1) > .wsite-form-field').should('exist')
      cy.get('#input-854780788815326819').should('exist')
      cy.get('#input-854780788815326819-1').should('exist')
      cy.get(':nth-child(2) > .wsite-form-field > .wsite-form-label').should('exist')
      cy.get(':nth-child(2) > .wsite-form-field').should('exist')
      cy.get('#input-491276055781529145').should('exist')
      cy.get(':nth-child(2) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > [style="width:54.545454545455%; padding:0 15px;"]').should('exist')
      cy.get(':nth-child(2) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > [style="width:54.545454545455%; padding:0 15px;"] > :nth-child(1) > .wsite-form-field > .wsite-form-label').should('exist')
      cy.get('#input-672454182976339477').should('exist')
      cy.get(':nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > [style="width:45.454545454545%; padding:0 15px;"]').should('exist')
      cy.get(':nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > [style="width:45.454545454545%; padding:0 15px;"] > :nth-child(1) > .wsite-form-field > .wsite-form-label').should('exist')
      cy.get('#input-667693140168453864').should('exist')
      cy.get(':nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > [style="width:54.545454545455%; padding:0 15px;"] > :nth-child(1) > .wsite-form-field').should('exist')
      cy.get(':nth-child(3) > .wsite-multicol > .wsite-multicol-table-wrap > .wsite-multicol-table > .wsite-multicol-tbody > .wsite-multicol-tr > [style="width:54.545454545455%; padding:0 15px;"] > :nth-child(1) > .wsite-form-field > .wsite-form-label').should('exist')
      cy.get('#input-528841581417962198').should('exist')
      cy.get('[style="text-align:left; margin-top:10px; margin-bottom:10px;"]').should('exist')
      cy.get('[style="text-align:left; margin-top:10px; margin-bottom:10px;"] > .wsite-button > .wsite-button-inner').should('exist')


      //joget partnership right
      cy.get('[style="width:33.307984790875%; padding:0 15px;"]').should('exist')
      cy.get('[style="width:33.307984790875%; padding:0 15px;"] > :nth-child(1) > .wsite-image > a > img').should('exist')
      cy.get('[style="width:33.307984790875%; padding:0 15px;"] > :nth-child(1) > .wsite-image > a').should('exist')
      cy.get('[style="width:33.307984790875%; padding:0 15px;"] > .paragraph').should('exist')
      cy.get('[style="width:33.307984790875%; padding:0 15px;"] > :nth-child(3)').should('exist')
      cy.get('[style="width:33.307984790875%; padding:0 15px;"] > :nth-child(3) > .wsite-button > .wsite-button-inner').should('exist')

      //footer
      cy.get(':nth-child(3) > .wsite-section > .wsite-section-content > .container').should('exist')
      cy.get('.footer > .wsite-elements').should('exist')
      
      //contact us
      cy.get('[style="width:29.180186828866%; padding:0 15px;"]').should('exist')
      cy.get('[style="width:29.180186828866%; padding:0 15px;"] > :nth-child(1)').should('exist')
      cy.get('[style="width:29.180186828866%; padding:0 15px;"] > :nth-child(1) > :nth-child(1) > [color="#515151"]').should('exist')
      cy.get('[style="width:29.180186828866%; padding:0 15px;"] > :nth-child(1) > :nth-child(1) > :nth-child(3)').should('exist')
      cy.get('font[style="color:rgb(98, 98, 98)"]').should('exist')
      cy.get('[style="width:29.180186828866%; padding:0 15px;"] > :nth-child(1) > :nth-child(4)')
      cy.get('[href="https://www.joget.org/"]').should('exist')
      cy.get('[style="width:29.180186828866%; padding:0 15px;"] > :nth-child(1) > :nth-child(8)').should('exist')
      cy.get('[href="http://blog.joget.org/"]').should('exist')
      cy.get('[style="width:29.180186828866%; padding:0 15px;"] > :nth-child(2)').should('exist')
      cy.get('em > font > span').should('exist')
      cy.get(':nth-child(2) > :nth-child(4) > span').should('exist')
      cy.get('span > strong').should('exist')
      cy.get('[style="color:rgb(66, 66, 66)"] > font').should('exist')
      
      //resources
      cy.get('[style="width:27.964345710997%; padding:0 15px;"]').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > strong > font').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(1)').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(1) > a').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(2)').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(2) > a').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(3)').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(3) > a').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(4)').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(4) > a').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(5)').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(5) > a').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(6)').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(6) > a').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(7)').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(7) > a').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(8)').should('exist')
      cy.get('[style="width:27.964345710997%; padding:0 15px;"] > .paragraph > ul > :nth-child(8) > a').should('exist')

      //links
      cy.get('[style="width:25.304603040773%; padding:0 15px;"]').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > strong > font').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(1)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(1) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(2)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(2) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(3)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(3) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(4)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(4) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(5)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(5) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(6)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(6) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(7)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(7) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(8)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(8) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(9)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(9) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(10)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(10) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(11)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(11) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(12)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(12) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(13)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(13) > a').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(14)').should('exist')
      cy.get('[style="width:25.304603040773%; padding:0 15px;"] > .paragraph > ul > :nth-child(14) > a').should('exist')


      //mobile apps
      cy.get('[style="width:17.550864419364%; padding:0 15px;"]').should('exist')
      cy.get('[style="width:17.550864419364%; padding:0 15px;"] > .paragraph > strong > font').should('exist')
      cy.get('[style="width:17.550864419364%; padding:0 15px;"] > .paragraph').should('exist')
      cy.get('[style="width:17.550864419364%; padding:0 15px;"] > :nth-child(2) > .wsite-image').should('exist')
      cy.get('[style="width:17.550864419364%; padding:0 15px;"] > :nth-child(2) > .wsite-image > a > img').should('exist')
      cy.get('[style="width:17.550864419364%; padding:0 15px;"] > :nth-child(3) > .wsite-image').should('exist')
      cy.get('[style="width:17.550864419364%; padding:0 15px;"] > :nth-child(3) > .wsite-image > a > img').should('exist')
    
      cy.get('[style="width:17.550864419364%; padding:0 15px;"] > :nth-child(3) > .wsite-image > a > img').should('exist')
      cy.get('.wsite-elements > :nth-child(2) > :nth-child(3)').should('exist')
    
      
    })
    
  })


  describe('Form Submission', () => {
        it('should not submit the form without filling required fields', () => {
          cy.visit('https://www.jogetcloud.com/partners.html');
          
          cy.get('#input-854780788815326819').type("Nabilah");
          cy.get('#input-854780788815326819-1').type("Zaki");
          cy.get('#input-672454182976339477').type("nnabilahzaki@gmail.com");
          cy.get('#input-491276055781529145').type("Joget");
          cy.get('#input-667693140168453864').select("Malaysia, Beans Group");
          cy.get('#input-528841581417962198').type("comment");

         
          //submit button
          cy.get("span[normalize-space()='Submit']").click();
          cy.get('[style="text-align:left; margin-top:10px; margin-bottom:10px;"] > .wsite-button > .wsite-button-inner').each(($btn) => {
          cy.wrap($btn).should('not.be.disabled');
          cy.get('[style="text-align:left; margin-top:10px; margin-bottom:10px;"] > .wsite-button > .wsite-button-inner').should('be.visible').click()
          
          
    
          });
        });
    });

    describe('All links are clickable and display correct pages', () => {
      it('check all links on page', () => {

        /*cy.visit('https://www.jogetcloud.com/partners.html')
        cy.get('a').each(page => {
          cy.request('https://www.jogetcloud.com/')
 
        
          cy.get(links).each(($a) => {
          expect($a).to.have.attr("href");
    })*/
        
          
        })
      
      });
      
    
      
    