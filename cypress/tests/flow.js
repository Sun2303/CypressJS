import User from "../entities/User";
import Category from "../entities/Category";
import Product from "../entities/Product";
import Order from "../entities/Order";
import Review from "../entities/Review";
describe('Verify a flow', () => {
    let user = new User();
    let category = new Category();
    let product = new Product();
    let order = new Order();
    let review = new Review();

    let randomName = `username${Math.floor(Math.random() * 100) + 50}`;
    let randomEmail = `username${Math.floor(Math.random() * 100) + 50}@gmail.com`;
    let randomPassword = `Password@${Math.floor(Math.random() * 100) + 50}`;

    let userBodyRequest = { randomName, randomEmail, randomPassword };
    it('Successfully order and review a product', () => {
       // Create a user
    user.create(userBodyRequest).then(response => {
        expect(response.status).to.eq(201);
        const userId = response.body.id;

        // Search for a products with a category named: “Electronics“ successfully
        category.getCategoryIdByName('Electronics').then(categoryId => {
            product.getProductID(categoryId, "iPhone 13").then(productId => {

                // Place an order with a product of the previous step successfully
                order.create(userId, 'processing', productId).then(orderResponse => {
                    expect(orderResponse.status).to.eq(201);
                    cy.log("Order created successfully.");

                    // Add a review
                    review.create(userId,productId,5,"The product is great!" ).then(reviewResponse => {
                        expect(reviewResponse.status).to.eq(201);
                            cy.log("Review added successfully.");
                    })
                })
            })
        })
    }) 
    });


});
