export default class Validate {
    static statusCode(responseCode) {
        expect(response.status).to.eq(responseCode)
    }
};