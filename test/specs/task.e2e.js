import GooglePage from "../pageobjects/google.page";
import UdemyPage from "../pageobjects/udemy.page";

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
    await GooglePage.open();

    // assert it is google page by page's title
    await expect(browser).toHaveTitleContaining("Google");

    // reject cookies
    await GooglePage.rejectCookies();
  });

  //  2. Search for the keyword 'Test Automation Learning'
  it("searchs 'Test Automation Learning' in goodle search ", async function () {
    const searchingTerm = "Test Automation Learning";

    await GooglePage.search(searchingTerm);

    // check if search result's page title contains searching term
    await expect(browser).toHaveTitleContaining(searchingTerm);
  });

  //  3. Select the link with Udemy course
  //  4. Verify if the Udemy site has opened
  it("selects search on Udemy course site", async function () {
    const udemyPageResult = "Udemy";
    await GooglePage.clickResult(udemyPageResult);

    // assert it is Udemy page by url
    await expect(browser).toHaveUrlContaining("udemy");
  });

  //  5. Search for BDD with Cucumber
  //  on this step issues with Captcha start
  it("searchs 'BDD with Cucumber' on Udemy course site", async function () {
    const searchingTerm = "BDD with Cucumber";

    await UdemyPage.search(searchingTerm);

    await expect(browser).toHaveUrlContaining("BDD+with+Cucumber");
  });

  //  6.Click on the course with highest rating from the list of search results
  it("selects highest rating filter", async function () {
    await UdemyPage.selectFilter("Highest Rated");

    // check filter by chosen option's value
    await expect(UdemyPage.filter).toHaveValueContaining("highest-rated");
  });

  it("clicks on highest rating course", async function () {
    await UdemyPage.chooseCourse();

    await expect(browser).toHaveTitleContaining("Learn Cucumber BDD with Java");
  });
});
