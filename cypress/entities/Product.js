import Method from "../utilities/Method";

const URL = '/products';

export default class Product {
    create(requestedBody) {
        return Method.post(URL, undefined, requestedBody);
    };

    create(id, name, description, price, stock, categoryId) {
        let body = { id, name, description, price, stock, categoryId };
        return Method.post(URL, undefined, body);
    };

    getProductID(categoryId, productName) {
        let qs = {categoryId}
        return Method.get(URL, undefined, qs).then(response => {
            expect(response.status).to.eq(200);
            return response.body.find(item => item.name === productName).id;
        });
    };
};