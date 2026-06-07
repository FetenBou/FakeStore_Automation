import { CARTS_ENDPOINTS } from "../../constants/endpoints";

describe('add new cart', () => {
    it( "POST new cart ", ()=> {
         const requestBody = {

            id : 1,
            userId:1,
            product:[
                {

                title: 'test product feten',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'}]
            
           };

        cy.api({
                        method: 'POST',
                        url: CARTS_ENDPOINTS.carts, 
                        body: requestBody
                    }).then((res) => {
                            expect(res.status).to.eq(201);
                            expect (res.body.id).to.not.be.null;
    })
}) })