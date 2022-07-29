/// <reference types="cypress" />

describe('Testing Header Items', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('display rightel logo', () => {
    cy.get('img[alt="rightel-logo"]').should('be.visible');
  });

  it('serach input should be empty', () => {
    cy.get('input[type = "tel"]').should('be.empty')
  });

  it('when hover on nav ancher sub box should be visible', () => {
    cy.get('a[id = "popover-trigger-:r5:"]').trigger('mouseover')
    cy.get('section[id = "popover-content-:r5:"]').should('be.visible')
    cy.get('a[id = "popover-trigger-:r5:"]').trigger('mouseout')

    cy.get('a[id = "popover-trigger-:r9:"]').trigger('mouseover')
    cy.get('section[id = "popover-content-:r9:"]').should('be.visible')
    cy.get('a[id = "popover-trigger-:r9:"]').trigger('mouseout')

  })
}) 