
describe('SwagLabs', () => {
    //Login incorect credetials test
    it('Login with incorect credentials', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('zzzzz');
        cy.get('#password').type('xxxx');
        cy.get('[data-test="login-button"]').click();
    })

    //  Login correct credentials test
    it('Login with correct credentials', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    })

    // Logout test
    it('Logout', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    })

    // Side menu test
    it('Side menu', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#react-burger-cross-btn').click();
    })

    //Adding to cart and removing from cart
    it('Add to cart and remove', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    })

    // checkout
    it('Checkout', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('zzz');
        cy.get('[data-test="lastName"]').type('yyyy');
        cy.get('[data-test="postalCode"]').type('003399');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="back-to-products"]').click();
    })

    //Product details
    it('Product detail', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
    })

    // Back to products
    it('Back to products', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('[data-test="back-to-products"]').click()
    })

})