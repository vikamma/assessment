# FSB Assessment

## Scenario

1.  Go to google site
2.  Search for the keyword 'Test Automation Learning'
3.  Select the link with Udemy course
4.  Verify if the Udemy site has opened
5.  Search for BDD with Cucumber
6.  Click on the course with highest rating from the list of search results

**Task:** Automate the above scenario given using JS and any tool (WebdriverIO or Selenium). The Project should be shared as a GitHub project. Each automation step should have assertions.

## Steps

1. I created separate tests for each scenario step, as this would help catch errors at each step. Step 6 divided into two tests to make sure we chose the right filter and clicked on the right course.

2. After starting to work with Udemy, there was a problem by passing the bots checking. I couldn’t create my own solution, so I performed steps 5 and 6 by creating identical steps on sites with similar functionality to be sure they work.

3. I tried to make the code as readable as possible and filled it by comments.

## How to run

`npm run wdio`
