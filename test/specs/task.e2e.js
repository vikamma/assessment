//  Scenario:
//  1. Go to google site
//  2. Search for the keyword 'Test Automation Learning'
//  3. Select the link with Udemy course
//  4. Verify if the Udemy site has opened
//  5. Search for BDD with Cucumber
//  6.Click on the course with highest rating from the list of search results

describe("Assessment", function () {
  //  1. Go to google site
  it("opens Google and rejects cookies", async function () {
    await browser.url("http://www.google.com");

    // assert it is google page by page's title
    const title = await browser.getTitle();
    expect(title).toEqual("Google");

    // reject cookies
    const cookie = $("div=Reject all");
    await cookie.click();
  });

  //  2. Search for the keyword 'Test Automation Learning'
  it("searchs 'Test Automation Learning' in goodle search ", async function () {
    const searchingTerm = "Test Automation Learning";

    // input element with name attribute
    const googleSearch = await $("input[name='q']");
    await googleSearch.click();
    await googleSearch.setValue(searchingTerm);
    await googleSearch.keys("Enter");

    // check if search result's page title contains searching term
    await expect(browser).toHaveTitleContaining(searchingTerm);
  });

  //  3. Select the link with Udemy course
  //  4. Verify if the Udemy site has opened
  it("selects search on Udemy course site", async function () {
    // h3 which contains "udemy"
    const udemyPage = await $("h3*=Udemy");
    await udemyPage.click();

    // assert it is Udemy page by url
    await expect(browser).toHaveUrlContaining("udemy");
  });

  //  5. Search for BDD with Cucumber
  //  on this step issues with Captcha start
  it("searchs 'BDD with Cucumber' on Udemy course site", async function () {
    const udemySearch = await $("input[name='q']");
    await udemySearch.click();
    await udemySearch.setValue("BDD with Cucumber");
    await udemySearch.keys("Enter");

    await expect(browser).toHaveUrlContaining("BDD+with+Cucumber");
  });

