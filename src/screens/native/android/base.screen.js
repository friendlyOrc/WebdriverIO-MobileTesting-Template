class BaseScreen {
  constructor() {
    this.permissionControllerButton =
      `//android.widget.Button[(@text="Deny") or (@text="DENY") or (@text="Don’t allow")]`;
    this.permissionControllerButtonAllow =
      '//android.widget.Button[(@text="Allow") or (@text="ALLOW") or (@text="Only this time")]';
    this.buttonOnScreen = '//android.widget.Button[contains(@text, "%s")]';
    this.textOnScreen = '//android.widget.TextView[contains(@text, "%s")]';
    this.messageOnScreen =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvMessage"]';
    this.progressBar =
      '//android.widget.ProgressBar[@resource-id="com.zimplistic.rotimaticmobile:id/pBar"]';

    this.browserText = "//android.view.View[@text='%s']";
  }
}

module.exports = new BaseScreen();
