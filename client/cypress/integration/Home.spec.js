describe('Home view test', () => {
  it('The Title and the Balance is correctly displayed', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Accounting notebook');
    cy.contains('Balance:');
  });
  it('If there are no transactions maded, the initial balance is $1000 and there is no accordion', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Balance: $1000');
    cy.contains('No transactions recorded');
  });
});