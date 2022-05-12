const { assert } = require("chai");
const ActionHelper = require("../helpers/actionHelpers");
const BasePage = require("./base.page");
require("chai").should;

class HomePage extends BasePage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/home.screen.js`);
  }

  verifyBannerImage() {
    if(this.platform == "ios")
      this.allowAllowAccessLocationDialgIfPresent();
      else{
        this.dismissAllowAccessLocationDialgIfPresent();
      }
    ActionHelper.waitForElement(this.getObjectLocator().bannerImage);
    ActionHelper.isVisible(this.getObjectLocator().bannerImage).should.true;
  }

  clickMenu() {
    ActionHelper.waitForElement(this.getObjectLocator().menuButton);
    ActionHelper.click(this.getObjectLocator().menuButton);
  }

  clickChatIcon() {
    ActionHelper.waitForElement(this.getObjectLocator().chatIcon);
    ActionHelper.click(this.getObjectLocator().chatIcon);
  }

  clickBannerImage() {
    ActionHelper.waitForElement(this.getObjectLocator().bannerImage);
    ActionHelper.click(this.getObjectLocator().bannerImage);
  }

  verifyFacebookTitle() {
    ActionHelper.waitForElement(this.getObjectLocator().facebookTitle);
    ActionHelper.isVisible(this.getObjectLocator().facebookTitle).should.true;
  }

  swipeRecipe() {
    ActionHelper.waitForElement(this.getObjectLocator().firstRecipe);
    ActionHelper.swipeToLeft(this.getObjectLocator().lastRecipe);
  }

  clickOnLastRecipe() {
    ActionHelper.waitForElement(this.getObjectLocator().lastRecipe);
    ActionHelper.click(this.getObjectLocator().lastRecipe);
  }
  clickOn1stRecipe() {
    ActionHelper.waitForElement(this.getObjectLocator().firstRecipe);
    ActionHelper.click(this.getObjectLocator().firstRecipe);
  }

  verifyVideo() {
    this.verifyElement(this.getObjectLocator().firstVideo);
    ActionHelper.isVisible(this.getObjectLocator().firstVideo).should.true;

    this.verifyElement(this.getObjectLocator().firstVideoPlaybtn);
    ActionHelper.isVisible(this.getObjectLocator().firstVideoPlaybtn).should
      .true;
  }

  playVideo() {
    this.verifyElement(this.getObjectLocator().firstVideoPlaybtn);
    ActionHelper.click(this.getObjectLocator().firstVideoPlaybtn);
  }

  playVideoIOS(){
    this.verifyElement(this.getObjectLocator().firstVideo);
    ActionHelper.click(this.getObjectLocator().firstVideo);
  }

  verifyVideoPlay() {
    this.verifyElement(this.getObjectLocator().videoFrame);
  }

  swipeRecipe() {
    // return $(
    //   'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.zimplistic.rotimaticmobile:id/ivRecipe").instance(4))'
    // );
    ActionHelper.scrollRecipe();
  }

  swipeRecipeiOS() {
    ActionHelper.scrollRecipeiOS();
  }

  swipeVideo() {
    ActionHelper.scrollVideo();
  }

  closeRecipeDetail() {
    ActionHelper.touchTopleft();
  }

  touchShareBtn() {
    ActionHelper.touchTopRight();
  }

  verifyRecipeDetail(category, title) {
    ActionHelper.pause(5);
    let pageSource = "" + ActionHelper.getPageSource();
    // pageSource = pageSource.replace('"', "");
    console.log(pageSource);

    assert(pageSource.includes(category), true);
    assert(pageSource.includes(title), true);
    assert(pageSource.includes("PREP TIME"), true);
    assert(pageSource.includes("COOK TIME"), true);
    assert(pageSource.includes("SERVES"), true);
  }

  closeVideo(){
      ActionHelper.touchTopleftXBtn();
      // ActionHelper.click(this.getObjectLocator().videoCloseBtn);
  }

  clickPlayer(){
    ActionHelper.waitForElement(this.getObjectLocator().videoFrame);
    ActionHelper.click(this.getObjectLocator().videoFrame);
  }

  clickPause(){
    ActionHelper.waitForElement(this.getObjectLocator().videoPauseBtn);
    ActionHelper.click(this.getObjectLocator().videoPauseBtn);
  }

  relaunchApp(){
    ActionHelper.closeApp();
    ActionHelper.launchApp();
  }
}

module.exports = HomePage;
