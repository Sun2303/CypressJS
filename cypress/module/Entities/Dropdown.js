import DropdownPage from "../Pages/DropdownPage";

export default class Dropdown {
    accessToDropdownPage() {
        cy.visit(DropdownPage.getURL());
    }
    selectEachOptionInAList(ListOfValue) {
        ListOfValue.forEach(value => {
            DropdownPage.getDropdownElement().select(value).should('have.value', value).then(() => {
                cy.log(`Successfully selecting ${value}`);
            });
        })
    }
}