const POST = 'POST';
const GET = 'GET';
const PUT = 'PUT';
const PATCH = 'PATCH';
const DELETE = 'DELETE';

export default class Method {
    static post(url, headers, body) {
        return cy.api({
            method: POST,
            url: url,
            headers: headers,
            body: body
        });
    };

    static get(url, headers, qs) {
        return cy.api({
            method: GET,
            url: url,
            headers: headers,
            qs: qs
        })
    }

    static put(url, headers, body) {
        return cy.api({
            method: PUT,
            url: url,
            headers: headers,
            body: body
        })
    }

    static patch(url, headers, body) {
        return cy.api({
            method: PATCH,
            url: url,
            headers: headers,
            body: body
        })
    }

    static delete(url, headers) {
        return cy.api({
            method: DELETE,
            url: url,
            headers: headers
        })
    }
}