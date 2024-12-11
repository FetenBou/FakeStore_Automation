
import { PRODUCTS_ENDPOINTS } from "../../constants/endpoints";



describe('Update a product', () => {
    context('PUT product ', () => {

        it('should update a product to the database ', () => { 
            const requestBody = {
                title: 'test product updated',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            
           };

            cy.api({
                method: 'PUT',
                url: PRODUCTS_ENDPOINTS.product +'/20', 
                body: requestBody
            }).then((res) => {
                    expect(res.status).to.eq(200);
                    expect (res.body.id).to.eql(20);
                    expect (res.body.title).to.eq(requestBody.title);
                    expect (res.body.price).to.eq(requestBody.price);
                    expect (res.body.description).to.eq(requestBody.description);
                    expect (res.body.image).to.eq(requestBody.image);
                    expect (res.body.category).to.eq(requestBody.category);






                    
            })
        })
    })
})

