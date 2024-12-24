import Method from "../utilities/Method";

const URL = '/categories';

export default class Category {
    create(requestedBody) {
        return Method.post(URL,undefined, requestedBody);
    };

    create(id, name){
        let body = {id, name};
        return Method.post(URL, undefined, body);
    };

    

    getCategoryIdByName(categoryName){
        let qs = {name: categoryName}
        return Method.get(URL,undefined,qs).then(response => {
            expect(response.status).to.eq(200);
            return response.body.find(item => item.name === categoryName).id;
        });
    };
};