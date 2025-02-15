import LoginPage from '../Pages/LoginPage'

export default class Login {
    accessToLoginPage() {
        cy.visit(LoginPage.getURL());
    };

    inputCredential(username, password) {
        LoginPage.getUserNameField().type(username);
        LoginPage.getPassWordField().type(password);
        LoginPage.getLoginButton().click();
    };

    checkSuccessfulMessage(){
        LoginPage.getMessageText().should('contain.text', LoginPage.getSuccessMsg());
    };

    checkErrorMessage(){
        LoginPage.getMessageText().invoke('text').then(text => {
            const isUsernameError = text.includes("username");
            cy.log(isUsernameError ? LoginPage.getErrorUserNameMsg() : LoginPage.getErrorPasswordMsg());
        });
    };
};