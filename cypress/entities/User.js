import Method from "../utilities/Method";
import SystemMessage from "../utilities/SystemMessage";

const URL = '/users';


export default class User {
    create(requestedBody) {
        return Method.post(URL,undefined,requestedBody);
    };

    create(username, email, password){
        let body = {username, email, password};
        return Method.post(URL, undefined,body);
    };

    validateResponse(response, expectedResponse, expectedStatus) {
        let status = response.status;
        if (status == expectedStatus) {
            SystemMessage.successfulMessageNewRecord;
            this._validateResponseBody(response, expectedResponse);
        } else {
            SystemMessage.errorMessage;
        }

    };
    _validateResponseBody(response, expectedResponse) {
        let { username, email, password } = expectedResponse;
        expect(response.body.username.username).to.eq(username);
        expect(response.body.username.email).to.eq(email);
        expect(response.body.username.password).to.eq(password);
    };
};