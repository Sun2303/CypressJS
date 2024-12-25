const URL = '/upload';
const CHOOSE_FILE_BTN = '#file-upload';
const UPLOAD_BTN = '#file-submit';
const UPLOADED_FILE_SELECTOR = '#uploaded-files';


export default class UploadPage{
    static getURL(){
        return URL;
    }
    static getChooseFileButton(){
        return cy.get(CHOOSE_FILE_BTN);
    }

    static getUploadButton(){
        return cy.get(UPLOAD_BTN);
    }

    static getUploadedFileElement(){
        return cy.get(UPLOADED_FILE_SELECTOR);
    }
}