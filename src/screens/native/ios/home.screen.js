class HomeScreen {
  constructor() {
    this.bannerImage =
      '(//XCUIElementTypeCollectionView)[2]';

    this.menuButton = "//XCUIElementTypeButton[contains(@name, 'menu')]";

    this.chatIcon =
      '//XCUIElementTypeButton[@name="intercom launcher"]';

    this.facebookTitle = '//XCUIElementTypeOther[@name="Rotimatic® Owners | Facebook"]';

    this.firstRecipe =
      "(//XCUIElementTypeCollectionView)[1]//XCUIElementTypeCell[1]";
      
      this.lastRecipe =
        "(//XCUIElementTypeCollectionView)[1]//XCUIElementTypeCell[last()]";

    this.recipeSection =
      "(//XCUIElementTypeCollectionView)[1]";

    this.firstVideo =
      "(//XCUIElementTypeCollectionView)[3]//XCUIElementTypeCell[1]/XCUIElementTypeOther";

    this.firstVideoPlaybtn =
      '(//XCUIElementTypeImage[@name="play_icon"])[1]';

    this.videoFrame =
      '//XCUIElementTypeOther[@name="Video"]';

    this.videoCloseBtn = '//XCUIElementTypeButton[@name="Done"]';

    this.videoPauseBtn = '//XCUIElementTypeButton[@name="Play/Pause"]';
  }
}

module.exports = new HomeScreen();
