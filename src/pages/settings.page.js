const { assert } = require("chai");
const ActionHelper = require("../helpers/actionHelpers");
const BasePage = require("./base.page");
require("chai");

class SettingsPage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/settings.screen.js`);
  }

  verifySettingsPageDisplayNoConfig() {
    ActionHelper.waitForElement(this.getObjectLocator().userName);
    this.verifyElement(this.getObjectLocator().userName);
    this.verifyElement(this.getObjectLocator().email);
    this.verifyElement(this.getObjectLocator().phone);
    this.verifyElement(this.getObjectLocator().config);
    assert(ActionHelper.getText(this.getObjectLocator().config), "Configure");
    this.verifyElement(this.getObjectLocator().signout);
    this.verifyElement(this.getObjectLocator().editPhoneBtn);
    this.verifyElement(this.getObjectLocator().privacy);
    this.verifyElement(this.getObjectLocator().terms);
  }

  verifySettingsPageDisplayWithConfig() {
    this.verifyElement(this.getObjectLocator().userName);
    this.verifyElement(this.getObjectLocator().email);
    this.verifyElement(this.getObjectLocator().phone);
    this.verifyElement(this.getObjectLocator().config);
    this.verifyElement(this.getObjectLocator().serialNumber);
    this.verifyElement(this.getObjectLocator().machineName);
    assert(ActionHelper.getText(this.getObjectLocator().config), "Reconfigure");
    this.verifyElement(this.getObjectLocator().signout);
    this.verifyElement(this.getObjectLocator().editPhoneBtn);
    this.verifyElement(this.getObjectLocator().privacy);
    this.verifyElement(this.getObjectLocator().terms);
  }

  clickOnEditPhoneBtn() {
    ActionHelper.waitForElement(this.getObjectLocator().editPhoneBtn);
    ActionHelper.click(this.getObjectLocator().editPhoneBtn);
  }

  verifyEditPhoneDisplay() {
    this.verifyElement(this.getObjectLocator().countrySp);
    this.verifyElement(this.getObjectLocator().phoneEt);
    this.verifyElement(this.getObjectLocator().phoneSaveBtn);
  }

  clickOnCountrySpinner(country) {
    ActionHelper.waitForElement(this.getObjectLocator().countrySp);
    // ActionHelper.click(this.getObjectLocator().countrySp);

    // ActionHelper.scroll(country);
    // ActionHelper.waitForElement(
    //   this.getObjectLocator().countryOpt + `[@text = '${country}']`
    // );
    // ActionHelper.scrollTo(
    //   this.getObjectLocator().countryOpt + `[@text = '${country}']`
    // );
    // ActionHelper.click(
    //   this.getObjectLocator().countryOpt + `[@text = '${country}']`
    // );
  }

  enterPhoneNumber(phone) {
    ActionHelper.clearText(this.getObjectLocator().phoneEt, phone);
    ActionHelper.sendText(this.getObjectLocator().phoneEt, phone);
  }

  clickOnSaveBtn() {
    ActionHelper.waitForElement(this.getObjectLocator().phoneSaveBtn);
    ActionHelper.click(this.getObjectLocator().phoneSaveBtn);
  }

  verifyUpdatedPhoneNumber(country, phoneNum) {
    let newPhone = ActionHelper.getText(this.getObjectLocator().phone);
    // assert(newPhone.inludes(country), true);
    assert(newPhone.includes(phoneNum), true);
  }

  verifyPageLoads(nameOfPage) {}
}

module.exports = SettingsPage;
