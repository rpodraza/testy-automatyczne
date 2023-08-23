class Search {
    get searchBox() {
        return cy.get("#search_query_top")
    }

    typeSearchPrharse(searchValue) {
        this.searchBox.type(searchValue)
    }

    clearSearchPhrase() {
        this.searchBox.clear();
    }
}

export default new Search();