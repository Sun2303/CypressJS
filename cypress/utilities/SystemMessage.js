const SUCCESSFUL_MSG_NEW_RECORD = 'Response code: 201 - Successfully';
const SUCCESSFUL_MSG_EXISTING_RECORD = 'Response code: 200 - Successfully';
const ERROR_REQUEST = 'Return an error message';

export default class SystemMessage {
    static get successfulMessageNewRecord() {
        return cy.log(SUCCESSFUL_MSG_NEW_RECORD);
    }

    static get successfulMessageExistingRecord() {
       return cy.log(SUCCESSFUL_MSG_EXISTING_RECORD);
    }

    static get errorMessage() {
        return cy.log(ERROR_REQUEST);
    }
}