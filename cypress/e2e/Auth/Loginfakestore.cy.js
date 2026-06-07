import {AUTH } from "../../constants/endpoints";


describe("login feature " ,() => {
  let loginData;
  // extract user data from fixutres 
 beforeEach(() => {

    cy.fixture("login_data").then((data) => {
      loginData = data;
    });

  });
//postitve case : 
 it("login request with passing credentials ", () => {
  cy.request({
  method: 'POST',
  url:  AUTH.auth,
  body: loginData.validUser
}).then((response) => {
  expect(response.status).to.eq(201)
  expect(response.body).to.have.property('token')
  //cy.log(JSON.stringify(response.body))
})
 })

// negative case 
it("login request with false credentials ", () => {
  cy.request({
  method: 'POST',
  url:  AUTH.auth,
  body:loginData.invalidUser ,
  failOnStatusCode: false,
}).then((response) => {
  expect(response.status).to.eq(401)
})
})
})