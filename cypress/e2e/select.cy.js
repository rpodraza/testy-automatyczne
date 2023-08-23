/// <reference types="cypress" />

describe("Test związany z wybieraniem select", () => {
    it("Kliknięcie w zakładkę Women", () => {
        cy.visit("/");
        cy.get(`a[title="Women"]`).click();
        cy.url().should("include", "id_category=3&controller=category")
    })

    it("Wybranie filtra Instock", () => {
        cy.get("#selectProductSort").select("In stock")
        cy.get("#selectProductSort").should("have.value", "quantity:desc")
    })

    it("Wybranie filtra Product Name: A to Z", () => {
        cy.get("#selectProductSort").select("name:asc")
        cy.get("#selectProductSort").should("have.value", "name:asc")
    })
})