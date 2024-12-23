describe('Verify a flow', () => {
    let randomName = `username${Math.floor(Math.random() * 100) + 50}`;
    let randomEmail = `username${Math.floor(Math.random() * 100) + 50}@gmail.com`;
    it('Successfully order and review a product', () => {
        let body = {
            username: randomName,
            email: randomEmail,
            password: "Password@1"
        }
        cy.api({
            url: 'http://localhost:3000/users',
            method: 'POST',
            body: body
        }).then(response => {
            expect(response.status).eq(201);
            const userID = response.body.id
            cy.log(userID);
            cy.api({
                url: 'http://localhost:3000/categories',
                method: 'GET',
                qs: {
                    name: "Electronics"
                }
            }).then(response => {
                const categoryID = response.body.find(item => {
                    return item.name === "Electronics"
                }).id
                cy.log(categoryID);
                cy.api({
                    url: 'http://localhost:3000/products',
                    method: 'GET',
                    qs: {
                        categoryID: categoryID
                    }
                }).then(response => {
                    expect(response.status).eq(200);
                    const productID = response.body.find(item => {
                        return item.name === "iPhone 13"
                    }).id
                    cy.log(productID);
                    cy.api({
                        url: 'http://localhost:3000/orders',
                        method: 'POST',
                        body: {
                            userId: userID,
                            status: "processing",
                            items: [
                                {
                                    productId: productID,
                                    quantity: 1
                                }
                            ]
                        }
                    }).then(response => {
                        expect(response.status).eq(201);
                        cy.api({
                            url: 'http://localhost:3000/reviews',
                            method: 'POST',
                            body: {
                                userId: userID,
                                productId: productID,
                                rating: 5,
                                comment: "Great product. Perfect itenm. Will back!112312311"
                            }
                        }).then(response => {
                            expect(response.status).eq(201);
                        });
                    });
                });
            });
        });
    });
});
