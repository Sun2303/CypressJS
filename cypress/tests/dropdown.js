import Dropdown from "../module/Entities//Dropdown";


describe('Verify the dropdown list', () => {
    let user = new Dropdown();
    let optionList = ['Option 1', 'Option 2']
    it('Should able to select each option in a dropdown list', () => {
        user.accessToDropdownPage();
        user.selectEachOptionInAList(optionList); 
    });
});