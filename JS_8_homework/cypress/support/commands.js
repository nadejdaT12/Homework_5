// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/*Cypress.Commands.add('printName', () => {
    console.log('Hello World')

})*/




import {faker} from "@faker-js/faker";

Cypress.Commands.add('sentRequest_false',(endpoint, method, body=null) =>{
    cy.request({
        url: endpoint,
        method: method,
        headers: {
            'Authorization': 'pk_194692916_P3F3I9XQZ8DRL',
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: body
    })
})
Cypress.Commands.add('sentRequest',(endpoint, method, body=null) =>{
    cy.request({
        url: endpoint,
        method: method,
        headers: {
            'Authorization': 'pk_194692916_P3F3I9XQZ8DRLVGZP24GJLSW8X4P1IXC',
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: body
    })
})

Cypress.Commands.add('createGoal',() =>{
    cy.sentRequest('team/90151208302/goal', 'POST', {"name": faker.internet.username()})

})
Cypress.Commands.add('getGoals',() =>{
    cy.sentRequest('team/90151208302/goal', 'GET')

})


Cypress.Commands.add('updateGoal',() => {
    cy.createGoal()
        .then((response) => {
            cy.wrap(response.body.goal.id).as('goalId')
        })
    cy.get('@goalId').then((id) => {
        cy.sentRequest('goal/' + id, 'PUT', {"name": faker.internet.username()})
            .then((response) => {
                expect(response.status).to.eq(200)
            })
        cy.sentRequest('goal/' + id, 'GET')
            .then((response) => {
                cy.log(response.duration)
            })
        cy.sentRequest('goal/' + id, 'DELETE')
    })
})
/*Cypress.Commands.add('getGoal', (id) => {
    cy.request({
        url: 'goal/' + id,
        method: 'GET',
        headers: {
            'Authorization': 'pk_194692916_P3F3I9XQZ8DRLVGZP24GJLSW8X4P1IXC',
            'Content-Type': 'application/json'
        }
    })
})*/