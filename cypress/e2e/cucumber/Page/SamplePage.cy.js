class SamplePage{

Openweb(){
    cy.visit("https://practicetestautomation.com/practice-test-login/");
}
Enterlogins(){
    cy.get('#username').type('student');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();
}

CheckLogin(){
    cy.get('.post-title').should('have.text','Logged In Successfully')
}
}

const sam = new SamplePage();
export default sam ;