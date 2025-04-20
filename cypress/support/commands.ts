declare namespace Cypress {
  interface Chainable {
    /**
     * Set the value of an element by its data-e2e attribute
     * @param key
     * @param value
     */
    setElementByKeyValue(key: string, value: string): Chainable<HTMLElement>;
  }
}

Cypress.Commands.add('setElementByKeyValue', (key: string, value: string) => {
  cy.get(`[data-e2e="${key}"]`).focus().type(value);
});
