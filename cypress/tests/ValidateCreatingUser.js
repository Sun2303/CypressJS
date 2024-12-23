import User from "../entities/User";
import idUser from "../fixtures/idDataTest.json";
import userName from "../fixtures/usernameDataTest.json";
import emailAdress from "../fixtures/emailDataTest.json";
import password from "../fixtures/passwordDataTest.json";


describe('Perform a functionality test for creating a user', () => {
    //Validate ID parameter
    it('Successfully creating a user with valid ID', () => {
        let dataList = idUser.valid;
        dataList.forEach(data => {
            User.post(data).then(response => {
                User.validateResponse(response, data)
            })
        })
    });
    it('Return an error when creating a user with invalid ID', () => {
        let dataList = idUser.invalid;
        dataList.forEach(data => {
            User.post(data).then(response => {
                User.validateResponse(response, data)
            })
        })
    });

    //Validate username parametergit 
    it('Successfully creating a user with valid username', () => {
        let dataList = userName.valid;
        dataList.forEach(data => {
            User.post(data).then(response => {
                User.validateResponse(response, data)
            })
        })
    });
    it('Return an error when creating a user with invalid username', () => {
        let dataList = userName.invalid;
        dataList.forEach(data => {
            User.post(data).then(response => {
                User.validateResponse(response, data)
            })
        })
    });

    //Validate email parameter
    it('Successfully creating a user with valid email', () => {
        let dataList = emailAdress.valid;
        dataList.forEach(data => {
            User.post(data).then(response => {
                User.validateResponse(response, data)
            })
        })
    });
    it('Return an error when creating a user with invalid email', () => {
        let dataList = emailAdress.invalid;
        dataList.forEach(data => {
            User.post(data).then(response => {
                User.validateResponse(response, data)
            })
        })
    });

    //Validate password parameter
    it('Successfully creating a user with valid password', () => {
        let dataList = password.valid;
        dataList.forEach(data => {
            User.post(data).then(response => {
                User.validateResponse(response, data)
            })
        })
    });
    it('Return an error when creating a user with invalid password', () => {
        let dataList = password.invalid;
        dataList.forEach(data => {
            User.post(data).then(response => {
                User.validateResponse(response, data)
            })
        })
    });

});