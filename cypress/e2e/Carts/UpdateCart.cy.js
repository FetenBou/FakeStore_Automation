
import { CARTS_ENDPOINTS } from "../../constants/endpoints";



describe('Update a cart', () => {
    context('PUT cart ', () => {

        it('should update a cart in the database ', () => { 
            const requestBody = {

            id : 1,
            userId:1,
            product:[
                {

                title: 'test cart update',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'}]
            
           };

            cy.api({
                method: 'PUT',
                url: CARTS_ENDPOINTS.carts +'/20', 
                body: requestBody
            }).then((res) => {
                    expect(res.status).to.eq(200);
                    expect (res.body.id).to.eql(20);
                    expect(res.body.userId).not.to.be.null;






                    
            })
        })
    })
})

