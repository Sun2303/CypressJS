import UploadPage from '../Pages/UploadPage';

export default class UploadAttachment{
    accessToUploadPage(){
        cy.visit(UploadPage.getURL());
    }

    selectAFile(filePath){
        UploadPage.getChooseFileButton().attachFile(filePath);
    }

    uploadAFile(){
        UploadPage.getUploadButton().click();
    }

    checkUploadedFile(nameFile){
        UploadPage.getUploadedFileElement().should('contain.text', nameFile);
    }

}