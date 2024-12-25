import Checkbox from "../module/Entities/Checkbox";
const CHECKBOX = '[type="checkbox"]';

describe('Verify the checkboxes', () => {
    let user = new Checkbox();

    it('Should be able to check/ uncheck all checkboxes', () => {
        user.accessToCheckboxPage();
        user.uncheckAllCheckedOptions();
        user.checkAllOptions();
    });
});