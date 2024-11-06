describe('template spec', () => {
  it('passes', () => {
    cy.visit('127.0.0.1:5500/index.html?')
    cy.get("input#value").type("What's up?");
    cy.get("button#btn").click();
    cy.get("p#message").should("have.text", "What's up?");
    
  })
})