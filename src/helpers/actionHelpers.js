const { default: $ } = require("webdriverio/build/commands/browser/$");
const { signInButton } = require("../screens/native/ios/welcome.screen");

const waitTimeInSeconds = 60000;
class ActionHelper {
  static launchBrowserUrl(urlToLaunch) {
    browser.url(urlToLaunch);
  }

  static getTitle() {
    return browser.getTitle();
  }

  static launchApp() {
    driver.launchApp();
  }

  static closeApp() {
    driver.closeApp();
  }

  static backgroundApp() {
    // driver.background(20);
    driver.pressKeyCode(3);
  }

  static switchToNativeContext() {
    browser.switchContext("NATIVE_APP");
  }

  static pause(seconds) {
    browser.pause(seconds * 1000);
  }

  static isVisible(locator) {
    return browser.$(locator).isDisplayed() ? true : false;
  }

  static click(locator) {
    browser.$(locator).click();
  }

  static waitForElement(locator) {
    browser.$(locator).waitForDisplayed({ waitTimeInSeconds });
  }

  static waitForNotElement(locator) {
    browser.$(locator).waitForDisplayed({ waitTimeInSeconds, reverse: true });
  }

  static clearText(locator) {
    browser.$(locator).clearValue();
  }

  static sendText(locator, inputText) {
    browser.$(locator).addValue(inputText);
  }

  static getText(locator) {
    return browser.$(locator).getText();
  }

  static async scrollRecipe() {
    await browser.touchAction([
      { action: "press", x: 0, y: 500 },
      { action: "moveTo", x: -1500, y: 500 },
      "release",
    ]);
  }

  static async scrollVideo() {
    await browser.touchAction([
      { action: "press", x: 0, y: 1600 },
      { action: "moveTo", x: -2500, y: 1600 },
      "release",
    ]);
  }

  static async touchTopleft() {
    await browser.touchAction([{ action: "press", x: 100, y: 100 }, "release"]);
  }

  static async getDeviceSize() {
    return await driver.getWindowSize();
  }

  static async touchTopleftXBtn() {
    // console.log(await this.getDeviceSize());
    this.pause(1);
    browser.touchAction([{ action: "press", x: 50, y: 50 }, "release"]);
  }

  static async touchTopRight() {
    console.log(await this.getDeviceSize());
    ActionHelper.pause(1);
    await browser.touchAction([
      {
        action: "press",
        x: 1000,
        y: 100,
      },
      "release",
    ]);
  }

  static getPageSource() {
    return driver.getPageSource();
  }

  static openChrome() {
    browser.$("//android.widget.TextView[@content-desc='Chrome']").click();
  }

  static openSafari() {
    browser.$('//XCUIElementTypeIcon[@name="Safari"]').click();
  }

  static relaunchApp() {
    driver.pressKeyCode(187);
    this.pause(5);
    browser.$("(//android.widget.FrameLayout[@content-desc='Rotimatic'])").click();
  }

  static getOTP(mail) {
    console.log("Get the OTP from Yopmail");
    let urlInp =
      "//android.widget.EditText[@resource-id='com.android.chrome:id/search_box_text' or @resource-id='com.android.chrome:id/url_bar']";
    this.click(urlInp);
    browser.$(urlInp).setValue("yopmail.com");
    driver.pressKeyCode(66);

    this.pause(5);

    let inp = "//android.widget.EditText[@resource-id='login']";
    let searchBtn =
      "//android.view.View[@resource-id='ycptcpt']//android.widget.Button";
    this.waitForElement(inp);
    this.clearText(inp);
    this.sendText(inp, mail);
    this.click(searchBtn);

    this.pause(5);
    let inbox =
      "(//android.view.View[@text='Inbox']//android.widget.Button)[1]";
    this.click(inbox);

    let content =
      "//android.view.View[contains(@text='Your One-Time-Password is:')]";
    // console.log(driver.getContexts());
    driver.switchContext("WEBVIEW_chrome");

    let otp = driver.execute(
      ' return document.querySelector("#ifmobmail").contentWindow.document.getElementsByTagName("strong")[0].innerText;'
    );

    console.log("Reopen the app");
    browser.switchContext("NATIVE_APP");
    this.relaunchApp();
    let otpTextField =
      '//android.widget.EditText[@resource-id="com.zimplistic.rotimaticmobile:id/edtOTP"]';

    let submitBtn =
      "//android.widget.TextView[@resource-id='com.zimplistic.rotimaticmobile:id/tvButtonText']";

    this.waitForElement(otpTextField);
    this.sendText(otpTextField, otp);
    this.click(submitBtn);
  }

  static getOTPIOS(mail) {
    console.log("Get the OTP from Yopmail");
    let urlInp =
      '//XCUIElementTypeOther[@name="Address"]';
    this.click(urlInp);
    browser.$('//XCUIElementTypeTextField[@name="URL"]').setValue("yopmail.com");
    browser.$('//XCUIElementTypeButton[@name="Go"]').click();

    this.pause(5);

    let inp = '//XCUIElementTypeTextField[@name="Login"]';
    this.waitForElement(inp);
    this.clearText(inp);
    browser.$(inp).setValue(mail);
    browser.$('//XCUIElementTypeButton[@name="Go"]').click();

    this.pause(5);
    let inbox =
      '//XCUIElementTypeOther[@name="ifinbox"]/XCUIElementTypeOther[last()]';
    this.click(inbox);

    let otp = this.getText('(//XCUIElementTypeOther[@name="main"])[2]/XCUIElementTypeOther[4]//XCUIElementTypeStaticText[4]');
    console.log(otp);
    console.log("Reopen the app");

    this.launchApp();
    
    let signInButton =
    '//XCUIElementTypeButton[@name="sign in button"]';

    let emailTextField =
      '//XCUIElementTypeTextField[@value="Email Address*" or @value="Email Address"]';

    let passwordTextField =
      '//XCUIElementTypeSecureTextField[@value="Password*" or @value="Password"]';

    let signInButton2 =
        '//XCUIElementTypeButton[@name="Sign in"]';

    browser.$(signInButton).click();
    browser.$(emailTextField).setValue(mail + "@yopmail.com");
    browser.$(passwordTextField).setValue("123456");
    browser.$(signInButton2).click();

    browser.$('//XCUIElementTypeButton[@name="OK"]').click();

    let otpTextField =
      "//XCUIElementTypeTextField[@value='Enter OTP']";

    let submitBtn =
      '//XCUIElementTypeButton[@name="Submit"]';

    this.waitForElement(otpTextField);
    this.sendText(otpTextField, otp);
    this.click(submitBtn);

    this.pause(5);
    browser.$(passwordTextField).setValue("123456");
    browser.$(signInButton2).click();
  }

  static hideKeyboard(){
    driver.hideKeyboard();
  }

  static swipeDown(){
    browser.touchAction([
      { action: "press", x: 250, y: 500 },
      { action: "moveTo", x: 250, y: 4500 },
      "release",
    ]);
  }
}

module.exports = ActionHelper;
