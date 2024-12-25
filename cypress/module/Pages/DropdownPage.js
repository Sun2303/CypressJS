const URL = '/dropdown';
const DROPDOWN_SELECTOR = '#dropdown';

export default class DropdownPage{
    static getURL(){
        return URL;
    }
    static getDropdownElement(){
        return cy.get(DROPDOWN_SELECTOR);
    }
}