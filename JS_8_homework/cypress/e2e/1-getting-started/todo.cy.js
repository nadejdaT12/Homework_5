import {faker} from '@faker-js/faker';

describe('Test goals on clickup', () => {
    it('Should sent Get_Goals_simple request and return 200', () => {
        //url, method, header, body
        cy.sentRequest('team/90151208302/goal', 'GET')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.goals[0].name).to.be.eql('Goal_2_26052525')
            })
    })


    it('Should sent POST request and return 200', () => {
        cy.createGoal()
            .then((response) => {
                cy.log(response.duration)
                expect(response.status).to.eq(200)
                cy.wrap(response.body.goal.id).as('goalId')
            })
        cy.get('@goalId').then((id) => {
            cy.sentRequest('goal/' + id, 'GET')
                .then((response) => {
                    expect(response.status).to.eq(200)
                })

            cy.sentRequest('goal/' + id, 'DELETE')
                .then((response) => {
                    expect(response.status).to.eql(200)
                })
        })
    })

    it('Should sent GET request and return 200', () => {
        cy.createGoal()
            .then((response) => {
                cy.wrap(response.body.goal.id).as('goalId')
            })
        cy.get('@goalId').then((id) => {
            cy.sentRequest('goal/' + id, 'GET')
                .then((response) => {
                 expect(response.status).to.eql(200)
            cy.sentRequest('goal/' + id, 'DELETE')
                .then((response) => {
                    expect(response.status).to.eql(200)
                })
            })
        })
    })

    it('Should sent PUT request and return 200', () => {
        cy.updateGoal()
            .then((response) => {
              expect(response.status).to.eql(200)
                })
        })

    it('Should sent DELETE request and return 200', () => {
         cy.createGoal()
             .then((response) => {
                 cy.wrap(response.body.goal.id).as('goalId')
             })
         cy.get('@goalId').then((id) => {
         cy.sentRequest('goal/' + id, 'DELETE')
         })
             .then((response) => {
                 expect(response.status).to.eql(200)
             })
     })

    it('Should sent POST request and return 401', () => {
        cy.sentRequest_false('team/90151208302/goal', 'POST',{"name": faker.internet.username()})
            .then((response) => {
                expect(response.status).to.eq(401)
            })
    })

    it('Should sent GET_GOALS request and return 200', () => {
        cy.createGoal()
            .then((response) => {
                cy.wrap(response.body.goal.id).as('goalId_1')
            })
        cy.createGoal()
            .then((response) => {
                cy.wrap(response.body.goal.id).as('goalId_2')
            })
        cy.getGoals()
            .then((response) => {
                expect(response.status).to.eq(200)
            })
        cy.get('@goalId_1').then((id) => {
            cy.sentRequest('goal/' + id, 'DELETE')
                .then((response) => {
                    expect(response.status).to.eql(200)
                })
            cy.get('@goalId_2').then((id) => {
                cy.sentRequest('goal/' + id, 'DELETE')
                    .then((response) => {
                        expect(response.status).to.eql(200)
                    })
            })
        })
    })
})
