import Login from '../module/Entities/Login';
import data from '../fixtures/Credentials.json';

describe('Verify the login functionality', () => {
    let user = new Login();

    it('Should be able to log in with valid credentials sucessfully', () => {
        user.accessToLoginPage();
        user.inputCredential(data.validCredential.username, data.validCredential.password);
        user.checkSuccessfulMessage();
    });

    it('Should see an error message for invalid username', () => {
        user.accessToLoginPage();
        user.inputCredential(data.invalidUsername.username, data.invalidUsername.password);
        user.checkErrorMessage();
    });

    it('Should see an error message for invalid password', () => {
        user.accessToLoginPage();
        user.inputCredential(data.invalidPassword.username, data.invalidPassword.password);
        user.checkErrorMessage();
    });

});