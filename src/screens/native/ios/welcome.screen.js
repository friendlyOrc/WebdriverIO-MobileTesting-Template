class WelcomeScreen {
  constructor() {
    this.signUpButton =
      '//XCUIElementTypeButton[@name="sign up button"]';
    this.signInButton =
    '//XCUIElementTypeButton[@name="sign in button"]';
    this.letsBeginButton =
      `//XCUIElementTypeButton[@name="LET'S BEGIN!"]`;
    this.skipButton =
      `//XCUIElementTypeButton[@name="Skip to connection" or @name="SKIP CONNECTION" or @name="SKIP" or @name="Skip connection"]`;
    this.yesButton =
      '//XCUIElementTypeButton[@name="Yes" or @name="GOT IT"]';
    this.noButton =
    '//XCUIElementTypeButton[@name="No" or @name="BACK"]';
    this.dialogMessage =
      '//XCUIElementTypeAlert';
  }
}

module.exports = new WelcomeScreen();
