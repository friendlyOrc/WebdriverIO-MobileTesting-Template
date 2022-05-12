class BaseScreen {
  constructor() {
    this.permissionControllerButton =
      `//XCUIElementTypeButton[@name="Don’t Allow"]`;
    this.permissionControllerButtonAllow =
      '//XCUIElementTypeButton[@name="Allow"]';
    this.buttonOnScreen = '//XCUIElementTypeButton[contains(@name, "%s")]';
    this.textOnNavigation = '//XCUIElementTypeNavigationBar//XCUIElementTypeStaticText[contains(@name, "%s")]';
    this.textOnScreen = '//XCUIElementTypeStaticText[contains(@name, "%s")]';
    this.messageOnScreen =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvMessage"]';
    this.progressBar =
      '//android.widget.ProgressBar[@resource-id="com.zimplistic.rotimaticmobile:id/pBar"]';

    this.browserText = "//android.view.View[@text='%s']";
  }
}

module.exports = new BaseScreen();
