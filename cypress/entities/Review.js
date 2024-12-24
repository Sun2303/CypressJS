import Method from "../utilities/Method";

const URL = '/reviews';

export default class Review {
    create(requestedBody) {
        return Method.post(URL, undefined, requestedBody);
    };

    create(userId, productId, rating, comment) {
        let body = { userId, productId, rating, comment };
        return Method.post(URL, undefined, body);
    };
};