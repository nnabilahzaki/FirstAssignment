describe('Displayed Correctly', () => {
    it('verify title-positive', () => {

      cy.visit("https://www.jogetcloud.com/partners.html")
      cy.title().should('eq','Partners - JOGET CLOUD - DELIVERING A MODERN PLATFORM FOR ENTERPRISE APPLICATION DEVELOPMENT AND WORKFLOW AUTOMATION.') 
    })

    it('verify all elements are exist', () => {
      cy.visit("https://www.jogetcloud.com/partners.html")
      
      //navigation bar
      //joget cloud logo
      cy.xpath("//img[@alt='JOGET CLOUD - DELIVERING A MODERN PLATFORM FOR ENTERPRISE APPLICATION DEVELOPMENT AND WORKFLOW AUTOMATION.']").should('exist')

      //hamburger menu
      cy.xpath("//div[@class='container']//a[@aria-label='Menu']").should('exist')

      //Partners H2
      cy.xpath("//font[normalize-space()='Partners']").should('exist')
      
      //cloud platform providers
      cy.xpath("//h2[normalize-space()='Cloud Platform Providers']").should('exist')
      cy.xpath("//div[normalize-space()='Joget Cloud collaborates with world-class Cloud Platforms to provide you with a worry free experience.']").should('exist')
      cy.xpath("//a[@href='https://aws.amazon.com/']//img[@alt='Picture']").should('exist')
      cy.xpath("//a[@href='https://cloud.google.com/']//img[@alt='Picture']").should('exist')
      cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[1]/div[1]/a[1]/img[1]").should('exist')
      cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/div[1]/div[1]/a[1]/img[1]").should('exist')
      
      //joget partners
      cy.xpath("//h2[normalize-space()='Joget Partners']").should('exist')
      cy.xpath("//div[normalize-space()='Joget Partners are ready to assist you to transform your business by leveraging on the Joget DX platform.']").should('exist')

      //exclusive partners
      cy.xpath("//img[@alt='Valuprosys Technology, China']").should('exist')
      cy.xpath("//img[@alt='Mokxa Technologies, USA & India']").should('exist')
      cy.xpath("//img[@alt='Precise Digital Economy, Thailand']").should('exist')

      //accredited partners
      cy.xpath("//img[@alt='Excel Technology, Hong Kong, China']").should('exist')
      cy.xpath("//img[@alt='BeOne Stuttgart, Germany']").should('exist')
      cy.xpath("//img[@alt='Itasof, Indonesia']").should('exist')
      cy.xpath("//img[@alt='I&C, Italy']").should('exist')
      cy.xpath("//img[@alt='Khatib & Alami, Lebanon']").should('exist')
      cy.xpath("//img[@alt='Hypernix, Malaysia']").should('exist')
      cy.xpath("//img[@alt='Beans Group, Malaysia']").should('exist')
      cy.xpath("//img[@alt='Dren Solutions, Malaysia']").should('exist')
      cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[4]/div[1]/a[1]/img[1]").should('exist')
      cy.xpath("//img[@alt='Persys Technologies, Malaysia']").should('exist')
      cy.xpath("//img[@alt='Reveron Consulting, Malaysia']").should('exist')
      cy.xpath("//img[@alt='Teknologi Maklumat Semesta, Malaysia']").should('exist')
      cy.xpath("//img[@alt='TMS Software, Malaysia']").should('exist')
      cy.xpath("//img[@alt='A2Ten Solution, Nigeria']").should('exist')
      cy.xpath("//img[@alt='Dynacon, Poland']").should('exist')
      cy.xpath("//img[@alt='Neyond, Portugal']").should('exist')
      cy.xpath("//img[@alt='Gulf Business Solutions, Saudi Arabia']").should('exist')
      cy.xpath("//img[@alt='Soitron. Slovakia']").should('exist')
      cy.xpath("//img[@alt='Abai Business Solutions, Spain']").should('exist')
      cy.xpath("//img[@alt='BCircle, Thailand']").should('exist')
      cy.xpath("//img[@alt='Thaitizens, Thailand']").should('exist')
      cy.xpath("//img[@alt='Alpha Data, UAE']").should('exist')
      cy.xpath("//img[@alt='Avaxia International, UAE']").should('exist')
      cy.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[11]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[3]/div[9]/div[1]/a[1]/img[1]").should('exist')
      cy.xpath("//img[@alt='Resemble Systems, UAE']").should('exist')
      cy.xpath("//img[@alt='Eleviant Technologies, USA']").should('exist')
      cy.xpath("//img[@alt='Avaxia International, UAE']").should('exist')
      cy.xpath("//img[@alt='IDB, Vietnam']").should('exist')

      //contact an implemantation partner now
      cy.xpath("//h2[contains(text(),'​Contact an Implementation Partner Now')]").should('exist')
      cy.xpath("//span[contains(text(),'If you need any development or implementation assi')]").should('exist')

      //form
      cy.xpath("//label[@class='wsite-form-label wsite-form-fields-required-label']").should('exist')
      cy.xpath("//div[@class='wsite-form-field wsite-name-field']//label[@class='wsite-form-label']").should('exist')

      //first name
      cy.xpath("//input[@id='input-854780788815326819']").should('exist')

      //last name
      cy.xpath("//input[@id='input-854780788815326819-1']").should('exist')

      //company name
      cy.xpath("//input[@id='input-491276055781529145']").should('exist')

      //email
      cy.xpath("//input[@id='input-672454182976339477']").should('exist')

      //select implemantation partner dropdown menu
      cy.xpath("//select[@id='input-667693140168453864']").should('exist')
      .select('Australia, Satori Group')
      .should('have.value','Australia, Satori Group')

      .select('Australia, SRA Information Technology')
      .should('have.value','Australia, SRA Information Technology')

      .select('Australia, vLinkD')
      .should('have.value','Australia, vLinkD')

      .select('Chile, CM Communications')
      .should('have.value','Chile, CM Communications')

      .select('China, Valuprosys Technology')
      .should('have.value','China, Valuprosys Technology')

      .select('France, Cogiserv')
      .should('have.value','France, Cogiserv')

      .select('Hong Kong, China, Excel Technologies')
      .should('have.value','Hong Kong, China, Excel Technologies')

      .select('Indonesia, Itasof Pelagus Global')
      .should('have.value','Indonesia, Itasof Pelagus Global')

      .select('Jordan, Digital Series')
      .should('have.value','Jordan, Digital Series')

      .select('Lebanon, Khatib & Alami')
      .should('have.value','Lebanon, Khatib & Alami')

      .select('Malaysia, Beans Group')
      .should('have.value','Malaysia, Beans Group')

      .select('Malaysia, Dren Consulting')
      .should('have.value','Malaysia, Dren Consulting')

      .select('Malaysia, Hypernix')
      .should('have.value','Malaysia, Hypernix')

      .select('Malaysia, Innov8tif Solution')
      .should('have.value','Malaysia, Innov8tif Solution')

      .select('Malaysia, Persys Technologies')
      .should('have.value','Malaysia, Persys Technologies')

      .select('Malaysia, Reveron Consulting')
      .should('have.value','Malaysia, Reveron Consulting')

      .select('Malaysia, Teknologi Maklumat Semesta')
      .should('have.value','Malaysia, Teknologi Maklumat Semesta')

      .select('Malaysia, TMS Software')
      .should('have.value','Malaysia, TMS Software')

      .select('Nigeria, Agaldo Technical Services')
      .should('have.value','Nigeria, Agaldo Technical Services')

      .select('Poland, Dynacon')
      .should('have.value','Poland, Dynacon')

      .select('Poland, Wasko')
      .should('have.value','Poland, Wasko')

      .select('Singapore, Velosoft,')
      .should('have.value','Singapore, Velosoft,')

      .select('Slovakia, Soitron')
      .should('have.value','Slovakia, Soitron')

      .select('Spain, Abai Group')
      .should('have.value','Spain, Abai Group')

      .select('Thailand, BCircle')
      .should('have.value','Thailand, BCircle')

      .select('Thailand, Precise Digital Economy')
      .should('have.value','Thailand, Precise Digital Economy')

      .select('Thailand, Thaitizens')
      .should('have.value','Thailand, Thaitizens')

      .select('Turkey, Skala Technologies')
      .should('have.value','Turkey, Skala Technologies')

      .select('USA, Impiger')
      .should('have.value','USA, Impiger')

      .select('USA, Mokxa Technology')
      .should('have.value','USA, Mokxa Technology')

      .select('Vietnam, IDB')
      .should('have.value','Vietnam, IDB')


      //comment
      cy.xpath("//textarea[@id='input-528841581417962198']").should('exist')

      //submit button
      cy.xpath("//span[normalize-space()='Submit']").should('exist')

      //joget patnership
      cy.xpath("//body[1]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[15]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/div[1]/a[1]/img[1]").should('exist')
      cy.xpath("//div[normalize-space()='If you are interested to find out more about the Joget Partnership Program, please let us know.']").should('exist')
    
      //start here button
      cy.xpath("//span[normalize-space()='Start here']").should('exist')
    
      //footer
      cy.xpath("//font[normalize-space()='CONTACT US']").should('exist')
      cy.xpath("/html[1]/body[1]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/div[1]/font[1]").should('exist')
      cy.xpath("//a[normalize-space()='https://www.joget.org']").should('exist')
      cy.xpath("//a[normalize-space()='http://blog.joget.org']").should('exist')
      
      cy.xpath("//span[contains(text(),'Joget DX is the next generation successor to Joget')]").should('exist')
      
      //ISO/IEC certified
      cy.xpath("//span[contains(text(),'Certification Body: Guardian Independent Certifica')]").should('exist')
      cy.xpath("//a[normalize-space()='758754a']").should('exist')
      cy.xpath("//a[normalize-space()='ISO/IEC 27001:2013']").should('exist')
      
      //resources
      cy.xpath("//font[normalize-space()='RESOURCES']").should('exist')
      cy.xpath("//a[normalize-space()='Community and Knowledge Base']").should('exist')
      cy.xpath("//a[normalize-space()='Joget DX Translation']").should('exist')
      cy.xpath("//a[normalize-space()='Joget Marketplace']").should('exist')
      cy.xpath("//a[normalize-space()='Joget DX Videos']").should('exist')
      cy.xpath("//a[normalize-space()='Download Joget DX On-Premise']").should('exist')
      cy.xpath("//a[normalize-space()='Open Source Repository']").should('exist')
      cy.xpath("//a[normalize-space()='Joget China']").should('exist')
      cy.xpath("//a[normalize-space()='Joget Cloud in China']").should('exist')
      
      //links
      cy.xpath("//font[normalize-space()='LINKS']").should('exist')
      cy.xpath("//div[@class='paragraph']//a[normalize-space()='On-Demand']").should('exist')
      cy.xpath("//div[@class='paragraph']//a[normalize-space()='Managed Services']").should('exist')
      cy.xpath("//a[normalize-space()='Google Workspace']").should('exist')
      cy.xpath("//li[contains(text(),'​')]//a[normalize-space()='Partners']").should('exist')
      cy.xpath("//a[normalize-space()='FAQ']").should('exist')
      cy.xpath("//a[normalize-space()='Support Policy']").should('exist')
      cy.xpath("//a[normalize-space()='On-Demand Services Agreement']").should('exist')
      cy.xpath("//a[normalize-space()='Managed Services Agreement']").should('exist')
      cy.xpath("//a[normalize-space()='VPS Services Agreement']").should('exist')
      cy.xpath("//a[normalize-space()='Security']").should('exist')
      cy.xpath("//a[@href='/privacy-policy.html']").should('exist')
      cy.xpath("//div[@class='paragraph']//a[normalize-space()='Contact']").should('exist')
      cy.xpath("//a[normalize-space()='About']").should('exist')

      //mobile apps
      cy.xpath("//font[normalize-space()='MOBILE APPS']").should('exist')
      cy.xpath("//a[@href='https://play.google.com/store/apps/details?id=org.joget.mobile&hl=en']//img[@alt='Picture']").should('exist')
      cy.xpath("//body[1]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]/div[3]/div[1]/a[1]/img[1]").should('exist')
    
    
    })
    
  })


  
           