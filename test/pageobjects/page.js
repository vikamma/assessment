export default class Page {
  async rejectCookies() {
    await $("div=Reject all").click();
  }

  // input element with name attribute
  get searchBox() {
    return $("input[name='q']");
  }

  async search(searchTerm) {
    await this.searchBox.click();
    await this.searchBox.setValue(searchTerm);
    await this.searchBox.keys("Enter");
  }
}
