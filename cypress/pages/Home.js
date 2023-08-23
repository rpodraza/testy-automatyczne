class Home {
    get womenTab() {
        return cy.get(`a[title="Women"]`)
    }

    clickOnWomenTab() {
        this.womenTab.click();
    }
}

export default new Home();