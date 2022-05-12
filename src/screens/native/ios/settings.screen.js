class SettingsScreen {
  constructor() {
    this.userName =
      '//XCUIElementTypeStaticText[@name="Name"]';
    this.email =
      '//XCUIElementTypeStaticText[@name="Email address"]';
    this.phone =
      '//XCUIElementTypeStaticText[@name="Phone Number"]';
    this.serialNumber =
      '//XCUIElementTypeStaticText[@name="Machine serial number"]';
    this.machineName =
      '//XCUIElementTypeStaticText[@name="Machine Name"]';
    this.config =
      '//XCUIElementTypeButton[@name = "Configure" or @name = "Reconfigure"]';

    this.signout =
      '//XCUIElementTypeStaticText[@name="Sign out"]';
    this.privacy =
      '//XCUIElementTypeStaticText[@name="See our Privacy Policy and Terms & Conditions"]';
    this.terms =
      '//XCUIElementTypeStaticText[@name="See our Privacy Policy and Terms & Conditions"]';
    this.editPhoneBtn =
      '//XCUIElementTypeButton[@name="edit"]';

    // Edit phone number screen
    this.countrySp =
      '//XCUIElementTypeStaticText[@name="Your country"]';
    this.phoneEt =
      '//XCUIElementTypeTextField[3]';
    this.phoneSaveBtn =
      '//XCUIElementTypeButton[@name="Save"]';
    this.countryOpt =
      "//XCUIElementTypeTextField[2]";
  }
}

module.exports = new SettingsScreen();
