/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../Page/LoginPage.cy";
Given("I navigate to the Website", () => {
  login.enterURL();
});
When("I entered valid credential", (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterUserNamePassword(element.email, element.validpassword);
  });
});
And("User click on sign in button", () => {
  login.clickSubmitButton();
});
Then("Validate the title after login", () => {
  login.verifyPageTitle();
});