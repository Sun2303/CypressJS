const URL = '/login'
const USERNAME_FIELD = '#username';
const PASSWORD_FIELD = '#password';
const LOGIN_BTN = 'button[type="submit"]';
const MSG_SELECTOR = '#flash';
const SUCCESS_MSG = 'You logged into a secure area!';
const ERROR_USERNAME_MSG = 'Your username is invalid!';
const ERROR_PASSWORD_MSG = 'Your password is invalid!';


export default class LoginPage {
    static getURL(){
        return URL;
    }
    static getUserNameField() {
        return cy.get(USERNAME_FIELD);
    }

    static getPassWordField() {
        return cy.get(PASSWORD_FIELD);
    }

    static getLoginButton() {
        return cy.get(LOGIN_BTN);
    }

    static getMessageText() {
        return cy.get(MSG_SELECTOR);
    }

    static getSuccessMsg() {
        return SUCCESS_MSG;
    }

    static getErrorUserNameMsg() {
        return ERROR_USERNAME_MSG;
    }

    static getErrorPasswordMsg() {
        return ERROR_PASSWORD_MSG;
    }

}