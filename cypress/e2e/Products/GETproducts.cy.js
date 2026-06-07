import { PRODUCTS_ENDPOINTS } from "../../constants/endpoints";

describe( "GET all products ",() => {

//positive case 
    it (" GET all products in fakestore " ,()=>{
      cy.api({
                method: 'GET',
                url: PRODUCTS_ENDPOINTS.product
            })

    .then((response) => {
     expect(response.status).to.eq(200);
     expect(response.body).to.be.an('array')
     response.body.forEach((product) => {
     expect(product).to.have.property('id')
     expect(product).to.have.property('title')
     expect(product).to.have.property('price')
     expect(product).to.have.property('description')
     expect(product).to.have.property('category')
     expect(product).to.have.property('image')
     expect(product).to.have.property('rating')
    })
    
    })

}) 
})