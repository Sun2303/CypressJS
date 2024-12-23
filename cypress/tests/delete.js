describe('delete', () => {
    it('delete a user', () => {
        let id = ["one$hundred", -100, 101, 102, 103, 104, 105, 106, 107, 111, 112, 113, 114, 115, 116,1000,1001,1002,1003];
        id.forEach(id => {
            cy.api({
                url: `http://localhost:3000/users/${id}`,
                method: 'DELETE'
            }).then(response => {
                expect(response.status).eq(200);
            })
        })
        
    })

    it('delete a category', () => {
        cy.api({
            url: 'http://localhost:3000/categories/1111116',
            method: 'DELETE'
        }).then(response => {
            expect(response.status).eq(200);
        })
    })

    it.only('delete a prduct', () => {
        cy.api({
            url: 'http://localhost:3000/products/5',
            method: 'DELETE'
        }).then(response => {
            expect(response.status).eq(200);
        })
    })

    it('delete an order', () => {
        cy.api({
            url: 'http://localhost:3000/orders/1111116',
            method: 'DELETE'
        }).then(response => {
            expect(response.status).eq(200);
        })
    })

    it('delete a review', () => {
        cy.api({
            url: 'http://localhost:3000/reviews/1111116',
            method: 'DELETE'
        }).then(response => {
            expect(response.status).eq(200);
        })
    })
});