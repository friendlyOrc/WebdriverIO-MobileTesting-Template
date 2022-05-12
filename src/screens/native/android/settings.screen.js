class SettingsScreen {
  constructor() {
    this.userName =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvUserName"]';
    this.email =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvUserEmail"]';
    this.phone =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvUserPhoneNumber"]';
    this.serialNumber =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvSerialNumber"]';
    this.machineName =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvMachineName"]';
    this.config =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvConfigureRotimatic"]';
    this.signout =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvSignOut"]';
    this.privacy =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvPrivacyPolicy"]';
    this.terms =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvTermsConditions"]';
    this.editPhoneBtn =
      '//android.widget.RelativeLayout[@resource-id="com.zimplistic.rotimaticmobile:id/relEditPhoneNumber"]';

    // Edit phone number screen
    this.countrySp =
      "//android.widget.Spinner[@resource-id='com.zimplistic.rotimaticmobile:id/spCountries']";
    this.phoneEt =
      '//android.widget.EditText[@resource-id="com.zimplistic.rotimaticmobile:id/edtRobLightPhoneNumber"]';
    this.phoneSaveBtn =
      "//android.widget.Button[@resource-id='com.zimplistic.rotimaticmobile:id/btnSave']";
    this.countryOpt =
      "//android.widget.TextView[@resource-id='com.zimplistic.rotimaticmobile:id/tvCountry']";
  }
}

module.exports = new SettingsScreen();
