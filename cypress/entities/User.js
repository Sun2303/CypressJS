export default class User {
    static post(requestedBody) {
        return cy.api({
            url: '/users',
            method: 'POST',
            body: requestedBody,
            failOnStatusCode: false
        })
    };

    static validateResponse(response, expectedResponse) {
        let status = response.status;
        if (status == 201) {
            cy.log('Response code: 201 - Successfully');
            this._validateResponseBody(response, expectedResponse);
        } else {
            cy.log('Return an error message')
        }

    }
    static _validateResponseBody(response, expectedResponse) {
        let { username, email, password } = expectedResponse;
        expect(response.body.username).to.eq(username);
        expect(response.body.email).to.eq(email);
        expect(response.body.password).to.eq(password);
    }
}