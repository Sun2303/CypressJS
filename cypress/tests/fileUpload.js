import UploadAttachment from "../module/Entities/UploadAttachment";

describe('Verify the Upload functionality', () => {
    let user = new UploadAttachment();
    const fileName = 'ExampleText.txt';

    it('Should be able to upload a file successfully', () => {
        user.accessToUploadPage();
        user.selectAFile(fileName);
        user.uploadAFile();
        user.checkUploadedFile(fileName);
    });
});