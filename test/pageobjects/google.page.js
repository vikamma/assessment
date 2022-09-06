import Page from "./page";

class GooglePage extends Page {
  async clickResult(result2Click) {
    await $(`h3*=${result2Click}`).click();
  }

  open() {
    browser.url("https://www.google.com");
  }
}

export default new GooglePage();
