describe('Test login form', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the login input field', () => {
        cy.get('[data-test="login"]', { timeout: 10000 }).should('exist').and('be.visible');
    });

    it('should accept input in the login field', () => {
        cy.get('[data-test="login"]').type("123456").should('have.value', '123456');
    });

    it('should accept input in the email field', () => {
        cy.get('[data-test="email"]').type("test@example.com").should('have.value', 'test@example.com');
    });

    it('should reset the form fields when reset button is clicked', () => {
        cy.get('[data-test="login"]').type("123456");
        cy.get('[data-test="email"]').type("test@example.com");
        cy.get('[data-test="reset"]').click();
        cy.get('[data-test="login"]').should('have.value', '');
        cy.get('[data-test="email"]').should('have.value', '');
    });
    
    it('should submit the form when submit button is clicked', () => {
        cy.get('[data-test="login"]').type("123456");
        cy.get('[data-test="email"]').type("test@example.com");
        cy.get('[data-test="submit"]').click();
    });
});