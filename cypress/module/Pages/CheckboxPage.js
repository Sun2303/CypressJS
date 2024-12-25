const URL = '/checkboxes';
const CHECKBOX_SELECTOR = 'input[type="checkbox"]';

export default class CheckboxPage {
    static getURL(){
        return URL;
    }
    static getCheckboxElement(){
        return cy.get(CHECKBOX_SELECTOR);
    }
}