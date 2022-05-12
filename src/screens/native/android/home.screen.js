class HomeScreen {
  constructor() {
    this.bannerImage =
      '//android.widget.ImageView[@resource-id="com.zimplistic.rotimaticmobile:id/ivBannerImage"]';

    this.menuButton = "(//android.widget.ImageButton)[1]";

    this.chatIcon =
      '//android.widget.FrameLayout[@resource-id="com.zimplistic.rotimaticmobile:id/launcher_root"]';

    this.facebookTitle = '//android.view.View[@content-desc="Facebook"]';

    this.firstRecipe =
      "//android.widget.ImageView[@resource-id='com.zimplistic.rotimaticmobile:id/ivRecipe']";

    this.thirdRecipe =
      "(//android.widget.ImageView[@resource-id='com.zimplistic.rotimaticmobile:id/ivRecipe'])[3]";

    this.lastRecipe =
      "(//android.widget.ImageView[@resource-id='com.zimplistic.rotimaticmobile:id/ivRecipe'])[last()]";

    this.recipeSection =
      "//androidx.recyclerview.widget.RecyclerView[@resource-id='com.zimplistic.rotimaticmobile:id/carouselRecipe']";

    this.firstVideo =
      "//android.widget.ImageView[@resource-id='com.zimplistic.rotimaticmobile:id/ivThumbnail']";

    this.firstVideoPlaybtn =
      "//android.widget.ImageView[@resource-id='com.zimplistic.rotimaticmobile:id/ivPlayFullScreen']";

    this.videoFrame =
      '//android.widget.FrameLayout[@resource-id="com.zimplistic.rotimaticmobile:id/video_frame"]';
  }
}

module.exports = new HomeScreen();
