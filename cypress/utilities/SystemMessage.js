const SUCCESSFUL_MSG_NEW_RECORD = 'Response code: 201 - Successfully';
const SUCCESSFUL_MSG_EXISTING_RECORD = 'Response code: 200 - Successfully';
const ERROR_REQUEST = 'Return an error message';

export default class SystemMessage {
    static get SUCCESSFUL_MSG_NEW_RECORD() {
        return 'Response code: 201 - Successfully';
    }

    static get SUCCESSFUL_MSG_EXISTING_RECORD() {
       return 'Response code: 200 - Successfully';
    }

    static get ERROR_REQUEST() {
        return 'Return an error message';
    }
}