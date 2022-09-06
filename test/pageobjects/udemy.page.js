import Page from "./page";

class UdemyPage extends Page {
  get filter() {
    return $("select");
  }

  async selectFilter(filterWant) {
    this.filter.selectByVisibleText(filterWant);
  }

  get neededCourse() {
    return $("h3*=bdd");
  }

  async chooseCourse() {
    this.neededCourse.click();
  }
}

export default new UdemyPage();
