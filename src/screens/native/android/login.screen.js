class LoginScreen {
  constructor() {
    this.emailTextField =
      '//android.widget.EditText[@resource-id="com.zimplistic.rotimaticmobile:id/edtEmailAddress"]';
    this.passwordTextField =
      '//android.widget.EditText[@resource-id="com.zimplistic.rotimaticmobile:id/edtPassword"]';
    this.userNameTextField =
      '//android.widget.EditText[@resource-id="com.zimplistic.rotimaticmobile:id/edtUserName"]';
    this.confirmPasswordTextField =
      '//android.widget.EditText[@resource-id="com.zimplistic.rotimaticmobile:id/edtConfirmPassword"]';
    this.signInButton =
      '//android.widget.TextView[@text="Sign In"]';
  }
}

module.exports = new LoginScreen();
