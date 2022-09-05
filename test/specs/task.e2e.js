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