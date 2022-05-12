class WelcomeScreen {
  constructor() {
    this.signUpButton =
      '//android.widget.ImageView[@resource-id="com.zimplistic.rotimaticmobile:id/ivSignUp"]';
    this.signInButton =
      '//android.widget.ImageView[@resource-id="com.zimplistic.rotimaticmobile:id/ivSignIn"]';
    this.letsBeginButton =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvLetsBegin"]';
    this.skipButton =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvBottomText" or @resource-id="com.zimplistic.rotimaticmobile:id/tvSkip"]';
    this.yesButton =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvPositive"]';
    this.noButton =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvNegative"]';
    this.dialogMessage =
      '//android.widget.TextView[@resource-id="com.zimplistic.rotimaticmobile:id/tvDialogMessage"]';
  }
}

module.exports = new WelcomeScreen();
