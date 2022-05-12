const ActionHelper = require("../helpers/actionHelpers");
const BasePage = require("./base.page");
require("chai").should();

class WelcomePage extends BasePage {

  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/welcome.screen.js`);
  }

  launchApp() {
    ActionHelper.launchApp();
    ActionHelper.switchToNativeContext();
    this.dismissAllowAccessLocationDialgIfPresent();
  }

  launchAppiOS() {
    ActionHelper.launchApp();
    ActionHelper.switchToNativeContext();
  }

  clickSignIn() {
    console.log('Click sign in');
    ActionHelper.waitForElement(this.getObjectLocator().signInButton);
    ActionHelper.click(this.getObjectLocator().signInButton);
  }

  clickSignUp() {
    ActionHelper.waitForElement(this.getObjectLocator().signUpButton);
    ActionHelper.click(this.getObjectLocator().signUpButton);
  }

  verifySignUpAndSignInButton() {
    ActionHelper.waitForElement(this.getObjectLocator().signUpButton);
    ActionHelper.isVisible(this.getObjectLocator().signUpButton).should.true;
    ActionHelper.isVisible(this.getObjectLocator().signInButton).should.true;
  }

  clickLetsBegin() {
    ActionHelper.waitForElement(this.getObjectLocator().letsBeginButton);
    ActionHelper.click(this.getObjectLocator().letsBeginButton);
  }

  clickSkip() {
    ActionHelper.waitForElement(this.getObjectLocator().skipButton);
    ActionHelper.click(this.getObjectLocator().skipButton);
  }

  clickYes() {
    ActionHelper.waitForElement(this.getObjectLocator().yesButton);
    ActionHelper.click(this.getObjectLocator().yesButton);
  }

  clickNo() {
    ActionHelper.waitForElement(this.getObjectLocator().noButton);
    ActionHelper.click(this.getObjectLocator().noButton);
  }

  verifyDialogMessage(text) {
    ActionHelper.waitForElement(this.getObjectLocator().dialogMessage);
    ActionHelper.getText(this.getObjectLocator().dialogMessage).should.contains(text);
  }
}

module.exports = WelcomePage;
