
import { PRODUCTS_ENDPOINTS } from "../../constants/endpoints";



describe('add new product', () => {
    context('POST product ', () => {

        it('should add a new product to the database ', () => { 
            const requestBody = {
                title: 'test product feten',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            
           };

            cy.api({
                method: 'POST',
                url: PRODUCTS_ENDPOINTS.product, 
                body: requestBody
            }).then((res) => {
                    expect(res.status).to.eq(200);
                    expect (res.body.id).to.not.be.null;
                    expect (res.body.title).to.eq(requestBody.title);
                    expect (res.body.price).to.eq(requestBody.price);
                    expect (res.body.description).to.eq(requestBody.description);
                    expect (res.body.image).to.eq(requestBody.image);
                    expect (res.body.category).to.eq(requestBody.category);






                    
            })
        })
    })
})

