import { AUTH } from "../constants/endpoints";

describe("login feature " ,() => {

//postitve case : 
 it("login request with passing credentials ", () => {
  cy.request({
  method: 'POST',
  url:  AUTH.auth,
  body: {
    username: 'mor_2314',
    password: '83r5^_'
  }
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
  body: {
    username: 'xxx_2314',
    password: '83r5^_'
  },
  failOnStatusCode: false,
}).then((response) => {
  expect(response.status).to.eq(401)
})
})
})