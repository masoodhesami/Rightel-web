/// <reference types="cypress" />

describe('Testing Homepage', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display rightel logo', () => {
    cy.get('img[alt="rightel-logo"]').should('be.visible');
  });

  it('serach input should be empty', () => {
    cy.get('input[type = "tel"]').should('be.empty')
  });

  it('when nav ancher hover subbox should be visible', () => {
    cy.get('a[id = "popover-trigger-:r5:"]').trigger('mouseover')
    cy.get('section[id = "popover-content-:r5:"]').should('be.visible')
    cy.get('a[id = "popover-trigger-:r5:"]').trigger('mouseout')

    cy.get('a[id = "popover-trigger-:r9:"]').trigger('mouseover')
    cy.get('section[id = "popover-content-:r9:"]').should('be.visible')
    cy.get('a[id = "popover-trigger-:r9:"]').trigger('mouseout')

  });

  it('slideShow arrows should be visible', () => {
    cy.get('svg[fill = "#fff"]')
  });

  it('when tab button clicked content should toggle', () => {
    cy.get('button').contains('Android').should('be.visible')
    cy.get('button[id = "tabs-:r1d:--tab-1"]').click()
    cy.get('button').contains('Windows').should('be.visible')
    cy.get('button[id = "tabs-:r1d:--tab-2"]').click()
    cy.get('button').contains('Windows').not('be.visible')
    cy.get('button[id = "tabs-:r1d:--tab-3"]').click()
    cy.get('button').contains('Windows').not('be.visible')
  })
}) 