import { PRODUCTS_ENDPOINTS } from "../../constants/endpoints";

describe('GET Product By ID', () => {
  const productId = 5
// positive case 
  it('should return the correct product for existing id ', () => {
    cy.api({
                method: 'GET',
                url: PRODUCTS_ENDPOINTS.product+ "/" + productId
            })

      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(productId)
      })
  })
 

})