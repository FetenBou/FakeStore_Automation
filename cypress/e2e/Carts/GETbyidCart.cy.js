import { CARTS_ENDPOINTS } from "../../constants/endpoints";

describe('GET Cart By ID', () => {
  const cartId = 2
// positive case 
  it('should return the correct product for existing id ', () => {
    cy.api({
                method: 'GET',
                url: CARTS_ENDPOINTS.carts+ "/" + cartId
            })

      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(cartId)
      })
  })
 

})