
import { CARTS_ENDPOINTS, PRODUCTS_ENDPOINTS } from "../../constants/endpoints";



describe('delete a cart', () => {
    context('DELETE cart ', () => {

        it('should delete a cart from the database ', () => { 
           
         

            cy.api({
                method: 'DELETE',
                url: CARTS_ENDPOINTS.carts  +'/2', 
                
            }).then((res) => {
                    expect(res.status).to.eq(200);
                    






                    
            })
        })
    })
})

