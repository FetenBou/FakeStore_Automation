import { CARTS_ENDPOINTS } from "../../constants/endpoints";

describe ( "GET all carts",() => {
    
    //positive case 
        it (" GET all carts in fakestore " ,()=>{
          cy.api({
                    method: 'GET',
                    url: CARTS_ENDPOINTS.carts
                })
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.be.an('array');
                    response.body.forEach((cart) => {
                    expect(cart).to.have.property('id');
                    expect(cart).to.have.property('userId');
                    expect(cart).to.have.property('date');
                    expect(cart).to.have.property('products');
                    expect(cart.products).to.be.an('array');
                    cart.products.forEach((product)=> {
                    expect(product).to.have.property('productId'); 
                    expect(product).to.have.property('quantity'); })


                    })
                })
            }) 
        })