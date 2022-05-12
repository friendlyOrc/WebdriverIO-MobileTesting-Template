const ActionHelper = require("../helpers/actionHelpers");
const WelcomePage = require("./welcome.page");
const BasePage = require("./base.page");
require("chai").should();

class LoginPage extends BasePage {

  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/login.screen.js`);
  }

  enterUsernameAndPassword(email, password) {
    ActionHelper.waitForElement(this.getObjectLocator().emailTextField);
    ActionHelper.sendText(this.getObjectLocator().emailTextField, email);
    ActionHelper.waitForElement(this.getObjectLocator().passwordTextField);
    ActionHelper.sendText(this.getObjectLocator().passwordTextField, password);
  }

  checkEmailTextBox() {
    ActionHelper.waitForElement(this.getObjectLocator().emailTextField);
    ActionHelper.isVisible(this.getObjectLocator().emailTextField).should.true;
  }

  clickSignIn() {
    ActionHelper.waitForElement(this.getObjectLocator().signInButton);
    ActionHelper.click(this.getObjectLocator().signInButton);
  }
}

module.exports = LoginPage;
