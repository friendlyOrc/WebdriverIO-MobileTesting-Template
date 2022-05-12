const { Given, When, Then, And } = require("@cucumber/cucumber");
const SettingsPage = require("../pages/settings.page");

const settingsPage = new SettingsPage();

Then("I can see the Setting screen", {timeout: 120000}, () => {
  console.log("Verify Setting screen with no config");
  settingsPage.verifySettingsPageDisplayNoConfig();
});

Then("I can see the Setting screen - with config", {timeout: 120000}, () => {
  console.log("Verify Setting screen with config");
  settingsPage.verifySettingsPageDisplayWithConfig();
});

Given("I click on the Edit phone button", () => {
  console.log("Click on Edit phone button");
  settingsPage.clickOnEditPhoneBtn();
});

Then("I can see the Edit phone screen", () => {
  console.log("Verify Edit Phone screen appears");
  settingsPage.verifyEditPhoneDisplay();
});

Given("I click on the Country spinner: {string}", (country) => {
  console.log("Click on the Country spinner");
  settingsPage.clickOnCountrySpinner(country);
});

When("I enter the phone number: {string}", (phone) => {
  console.log("Enter Phone number");
  settingsPage.enterPhoneNumber(phone);
});

Then("I click on the Save button", () => {
  console.log("Click on Save button");
  settingsPage.clickOnSaveBtn();
});

Then(
  "I can see the phone number is updated: {string} {string}",
  (country, phone) => {
    console.log("Verify the new phone number");
    settingsPage.verifyUpdatedPhoneNumber(country, phone);
  }
);

Then("I can see the error state", () => {
  console.log("Verify error state");
  settingsPage.verifyEditPhoneDisplay();
});

Then("I can see Privacy Page loads", () => {
  console.log("Verify Privacy Page loads");
  settingsPage.verifyBrowserText("Privacy Policy");
});

Then("I can see Terms Page loads", () => {
  console.log("Verify Terms & Conditions loads");
  settingsPage.verifyBrowserText("Terms of Use");
});

When("I click on confirm Sign out button", () => {
  console.log("Click on Sign out button");
  settingsPage.clickButtonOnScreen("Sign Out");
});

When("I click on cancel Sign out button", () => {
  console.log("Click on Sign out button");
  settingsPage.clickButtonOnScreen("Cancel");
});
