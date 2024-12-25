import CheckboxPage from '../Pages/CheckboxPage'

const CHECK_ALL_MSG = 'All checkbox are selected!';
const UNCHECK_ALL_MSG = 'All checkbox are unselected!'

export default class Checkbox {
    accessToCheckboxPage() {
        cy.visit(CheckboxPage.getURL());
    }

    uncheckAllCheckedOptions() {
        CheckboxPage.getCheckboxElement().filter(':checked').then(option => {
            cy.get(option).uncheck();
        })
        return cy.log(UNCHECK_ALL_MSG);
    }

    checkAllOptions() {
        CheckboxPage.getCheckboxElement().filter(':not([checked])').then(option => {
            cy.get(option).check();
        })
        return cy.log(CHECK_ALL_MSG);
    }
}