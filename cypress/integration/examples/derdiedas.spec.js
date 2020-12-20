describe('Der, die & das App end to end testing', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });
  it('tests network request', () => {
    // https://on.cypress.io/request
    cy.request(
      'http://localhost:4000/api/scores'
    ).should((response) => {
      expect(response.status).to.eq(200);
    });
    cy.request(
      'http://localhost:4000/api/scores'
    ).should((response) => {
      expect(response.status).to.eq(200);
    });
    cy.wait(5000);
  });

  it('clicks through the navigation - in dark mode', () => {
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
    cy.get('[data-cy=Navigation_Open]').click();
    cy.get('[data-cy=Navigation_Closed]').click();
  });

  it('Clicks the play button to start the game', () => {
    cy.get('[data-cy=Game_button]').click();
    cy.location('pathname').should(
      'include',
      'game'
    );
  });

  it('Clicks the der, die and das buttons', () => {
    cy.get('[data-cy=Game_button]')
      .contains('Der')
      .click();
    cy.wait(3000);
    cy.get('[data-cy=Game_button]')
      .contains('Die')
      .click();
    cy.wait(3000);
    cy.get('[data-cy=Game_button]')
      .contains('Das')
      .click();
  });

  it('Changes the game layout', () => {
    cy.get('[data-cy=Navigation_Open]').click();
    cy.contains('Home').click();
    cy.location('pathname').should(
      'include',
      '/'
    );
    cy.get('[data-cy=Switch_btn]').click();
  });

  it('clicks through the navigation - in light mode', () => {
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
    cy.get('[data-cy=Navigation_Open]').click();
    cy.get('[data-cy=Navigation_Closed]').click();
  });

  it('Clicks the play button to start the game - in light mode', () => {
    cy.get('[data-cy=Game_button]').click();
    cy.location('pathname').should(
      'include',
      'game'
    );
  });

  it('Clicks the der, die and das buttons - in light mode', () => {
    cy.get('[data-cy=Game_button]')
      .contains('Der')
      .click();
    cy.wait(3000);
    cy.get('[data-cy=Game_button]')
      .contains('Die')
      .click();
    cy.wait(3000);
    cy.get('[data-cy=Game_button]')
      .contains('Das')
      .click();
  });
});
