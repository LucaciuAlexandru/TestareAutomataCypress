describe('Sportisimo', () => {
    //Login incorect password
    it('Login with incorrect password', () => {
        cy.visit('https://www.sportisimo.ro/');
        cy.get('#didomi-notice-agree-button').click();
        cy.get('#login_tab_link > p').click();
        cy.get('#input_login-menu-email').type('alexandru.lucaciu@hotmail.com');
        cy.get('#login_menu_password').type('zzzzz');
        cy.get(':nth-child(4) > .button > label').click();
    })

    //Login correct credentials test
    it('Login with correct credentials', () => {
        cy.visit('https://www.sportisimo.ro/');
        cy.get('#didomi-notice-agree-button').click();
        cy.get('#login_tab_link > p').click();
        cy.get('#input_login-menu-email').type('alexandru.lucaciu@hotmail.com');
        cy.get('#login_menu_password').type('*******');
        cy.get(':nth-child(4) > .button > label').click();
    })

    //  Logout test
    it('Logout test', () => {
        cy.visit('https://www.sportisimo.ro/');
        cy.get('#didomi-notice-agree-button').click();
        cy.get('#login_tab_link > p').click();
        cy.get('#input_login-menu-email').type('alexandru.lucaciu@hotmail.com');
        cy.get('#login_menu_password').type('******');
        cy.get(':nth-child(4) > .button > label').click();
        cy.get('#login_menu_link').click();
        cy.get('.sbm_login_head > a').click();
        cy.get('.account_save > .button').click();
    })

    //Menu Test
    it('Menu test', () => {
        cy.visit('https://www.sportisimo.ro/');
        cy.get('#didomi-notice-agree-button').click();
        cy.get('#login_tab_link > p').click();
        cy.get('#input_login-menu-email').type('alexandru.lucaciu@hotmail.com');
        cy.get('#login_menu_password').type('*******');
        cy.get(':nth-child(4) > .button > label').click();
        cy.get('#main_menu_head > p').click();
        cy.get('#cat_56501_link > span').click();
        cy.get('[href="https://www.sportisimo.ro/incaltaminte-casual/"] > span').click();
        cy.get(':nth-child(1) > .col_in > .subcat').click();

    })

    // Adding to cart and removing from cart
    it('Adding to cart and removing from cart', () => {
        cy.visit('https://www.sportisimo.ro/');
        cy.get('#didomi-notice-agree-button').click();
        cy.get('#login_tab_link > p').click();
        cy.get('#input_login-menu-email').type('alexandru.lucaciu@hotmail.com');
        cy.get('#login_menu_password').type('******l');
        cy.get(':nth-child(4) > .button > label').click();
        cy.get('#main_menu_head > p').click();
        cy.get('#cat_56501_link > span').click();
        cy.get('[href="https://www.sportisimo.ro/incaltaminte-casual/"] > span').click();
        cy.get(':nth-child(1) > .col_in > .subcat').click();
        cy.get('#p_list_0_cnt > .product-box__images > .product-box__image > .img > img').click();
        cy.get('#select-variant-8-head').click();
        cy.get('#attr-label-8-5').click();
        cy.get('.cart-added--no-mobile > label').click();
        cy.get('#popup_add_to_cart_close').click();
        cy.get('#cart_menu_link').click();
        cy.get('#ico-close').click();
    })

    // Product details
    it('Product details', () => {
        cy.visit('https://www.sportisimo.ro/');
        cy.get('#didomi-notice-agree-button').click();
        cy.get('#login_tab_link > p').click();
        cy.get('#input_login-menu-email').type('alexandru.lucaciu@hotmail.com');
        cy.get('#login_menu_password').type('******');
        cy.get(':nth-child(4) > .button > label').click();
        cy.get('#main_menu_head > p').click();
        cy.get('#cat_56501_link > span').click();
        cy.get('[href="https://www.sportisimo.ro/incaltaminte-casual/"] > span').click();
        cy.get(':nth-child(1) > .col_in > .subcat').click();
        cy.get('#p_list_0_cnt > .product-box__images > .product-box__image > .img > img').click();
        cy.get('#tab-desc-button > .info-section__button-label').click();
        cy.get('#tab-desc-close').click();
    })



    //  Back to home page
    it('Home Page', () => {
        cy.visit('https://www.sportisimo.ro/');
        cy.get('#didomi-notice-agree-button').click();
        cy.get('#login_tab_link > p').click();
        cy.get('#input_login-menu-email').type('alexandru.lucaciu@hotmail.com');
        cy.get('#login_menu_password').type('******');
        cy.get(':nth-child(4) > .button > label').click();
        cy.get('#main_menu_head > p').click();
        cy.get('#cat_56501_link > span').click();
        cy.get('[href="https://www.sportisimo.ro/incaltaminte-casual/"] > span').click();
        cy.get(':nth-child(1) > .col_in > .subcat').click();
        cy.get('#p_list_0_cnt > .product-box__images > .product-box__image > .img > img').click();
        cy.get('#tab-desc-button > .info-section__button-label').click();
        cy.get('#tab-desc-close').click();
        cy.get('#header_logo > picture > img').click();
    })

    // Search Bar
    it('Search Bar', () => {
        cy.visit('https://www.sportisimo.ro/');
        cy.get('#didomi-notice-agree-button').click();
        cy.get('#login_tab_link > p').click();
        cy.get('#input_login-menu-email').type('alexandru.lucaciu@hotmail.com');
        cy.get('#login_menu_password').type('*******');
        cy.get(':nth-child(4) > .button > label').click();
        cy.get('#search_head > p').click();
        cy.get('#search_input').type('puma').type('{enter}');
        cy.get('.center > form > .button > label').click();
    })

})
