describe('Registration Test', () => {
  it('input and send', () => {
    cy.visit('http://localhost:4200/home');

    // set input values
    cy.setElementByKeyValue('first-name', 'Charles');
    cy.setElementByKeyValue('last-name', 'Xavier');
    cy.setElementByKeyValue('street', '1407 Graymalkin Lane');
    cy.setElementByKeyValue('zip', '10560');
    cy.setElementByKeyValue('city', 'North Salem');
    cy.setElementByKeyValue('state', 'NY');
    cy.setElementByKeyValue('country', 'USA');

    // click send button
    cy.get('[data-e2e="send"]').click();

    // check for success message
    cy.get('[data-e2e="success"]').should('be.visible');
  });

  it('required validation input', () => {
    cy.visit('http://localhost:4200/home');

    // click send button
    cy.get('[data-e2e="send"]').click();

    // check if form is invalid and touched
    cy.get('[data-e2e="example-form"]')
      .should('have.class', 'ng-invalid')
      .and('have.class', 'ng-touched');
  });
});
