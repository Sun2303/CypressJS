import User from "../entities/User";
import idUser from "../fixtures/idDataTest.json";
import userName from "../fixtures/usernameDataTest.json";
import emailAdress from "../fixtures/emailDataTest.json";
import password from "../fixtures/passwordDataTest.json";

describe('Perfoming a functionality test for creating a user', () => {
    let user = new User();
    const testUserCreationSuccessful = (description, inputData) => {
        it(description, () => {
            inputData.valid.forEach(data => {
                user.create(data).then(response => {
                    user.validateResponse(response, data);
                });
            });
        });
    };

    const testUserCreationUnsuccessful = (description, inputData) => {
        it(description, () => {
            inputData.invalid.forEach(data => {
                user.create(data).then(response => {
                    user.validateResponse(response, data);
                });
            });
        });
    };

    //Validate ID parameter
    testUserCreationSuccessful('Successfully creating a user with valid ID', idUser);
    testUserCreationUnsuccessful('Return an error when creating a user with invalid id', idUser)

    //Validate username parameter
    testUserCreationSuccessful('Successfully creating a user with valid username', userName);
    testUserCreationUnsuccessful('Return an error when creating a user with invalid username', userName)

    //Validate email parameter
    testUserCreationSuccessful('Successfully creating a user with valid email address', emailAdress);
    testUserCreationUnsuccessful('Return an error when creating a user with invalid email address', emailAdress)

    //Validate password parameter
    testUserCreationSuccessful('Successfully creating a user with valid password', password);
    testUserCreationUnsuccessful('Return an error when creating a user with invalid password', password)
});