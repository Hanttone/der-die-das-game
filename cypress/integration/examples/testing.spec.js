describe('Der, die & das App end to end testing', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
    cy.waitForReact('#root');
  });

  it('selects navigation', () => {
    cy.wait(5000);
    cy.react('Nagivation');
    cy.react('Navigation');
  });
});
