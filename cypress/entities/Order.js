import Method from "../utilities/Method";

const URL = '/orders';

export default class Order {
    create(requestedBody) {
        return Method.post(URL, undefined, requestedBody);
    };

    create(userId, status, productId, quantity) {
        let body = {
            userId: userId,
            status: status,
            items: [{ productId: productId, quantity: quantity }]
        }
        return Method.post(URL, undefined, body);
    }
}