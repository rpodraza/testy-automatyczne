/// <reference types="cypress" />
import Base from "../pages/Base";
import Search from "../pages/Search";
import ResultPage from "../pages/ResultPage";
import { searchPhrase, notFoundProduct } from "../fixtures/searchData.json";

describe("Wpisiwanie tekstu w wyszukiwarke", () => {
    it("Wpisywanie tekstu", () => {
        Base.openHomePage();
        Search.typeSearchPrharse(searchPhrase);
        Search.searchBox.should("have.value", searchPhrase)
        cy.wait(3000)
        Search.clearSearchPhrase();
        cy.wait(3000)
        Search.typeSearchPrharse(`${searchPhrase} {enter}`)
        ResultPage.searchAlert.should("be.visible").and("include.text", notFoundProduct)
        Search.searchBox.should("have.class", "search_query")
        Search.searchBox.should("have.css", "margin-right", "1px")
    })
})