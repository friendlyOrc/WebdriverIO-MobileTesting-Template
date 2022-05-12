class LoginScreen {
  constructor() {
    this.emailTextField =
      '//XCUIElementTypeTextField[@value="Email Address*" or @value="Email Address"]';
    this.passwordTextField =
      '//XCUIElementTypeSecureTextField[@value="Password*" or @value="Password"]';
    this.userNameTextField =
      '//XCUIElementTypeTextField[@value="Name*"]';
    this.confirmPasswordTextField =
      '//XCUIElementTypeSecureTextField[@value="Password*" or @value="Password"]';
    this.signInButton =
      '//XCUIElementTypeButton[@name="Sign in"]';
  }
}

module.exports = new LoginScreen();
