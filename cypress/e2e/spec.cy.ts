describe('Registration Test', () => {
  it('input & send', () => {
    cy.visit('http://localhost:4200/home');

    const setElementByKeyValue = (key: string, value: string) => {
      cy.get(`[data-e2e="${key}"]`).focus().type(value);
    }

    // set input values
    setElementByKeyValue('first-name', 'Charles');
    setElementByKeyValue('last-name', 'Xavier');
    setElementByKeyValue('street', '1407 Graymalkin Lane');
    setElementByKeyValue('zip', '10560');
    setElementByKeyValue('city', 'North Salem');
    setElementByKeyValue('state', 'NY');
    setElementByKeyValue('country', 'USA');

    // click send button
    cy.get('[data-e2e="send"]').click();

    // check for success message
    cy.get('[data-e2e="success"]', { timeout: 6000 } ).should('be.visible');
  });
});
