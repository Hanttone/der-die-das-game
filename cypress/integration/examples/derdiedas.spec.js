describe('Der, die & das App end to end testing', () => {
  it('Visits the Der, die & das app page', () => {
    cy.visit('http://localhost:3000/');
  });

  it('tests network request', () => {
    // https://on.cypress.io/request
    cy.request(
      'http://localhost:4000/api/scores'
    ).should((response) => {
      expect(response.status).to.eq(200);
    });
    cy.wait(5000);
  });

  it('clicks through the navigation', () => {
    cy.get('[data-cy=Navigation_Open]').click();
    cy.contains('Game').click();
    cy.location('pathname').should(
      'include',
      'game'
    );
    cy.get('[data-cy=Navigation_Open]').click();
    cy.contains('High Score').click();
    cy.location('pathname').should(
      'include',
      'highscore'
    );
    cy.get('[data-cy=Navigation_Open]').click();
    cy.contains('Home').click();
    cy.location('pathname').should(
      'include',
      '/'
    );
  });

  it('Changes the game layout', () => {
    cy.get('[data-cy=Switch_mode]').should(
      'not.be.visible'
    );

    cy.get('[data-cy=Switch_btn]').click();
    cy.get('[data-cy=Background_element]')
      .invoke('attr', 'time')
      .should('equal', '5s');
  });
});
