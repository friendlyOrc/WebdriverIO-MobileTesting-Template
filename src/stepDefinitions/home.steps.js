const { Given, When, Then, And } = require("@cucumber/cucumber");
const ActionHelper = require("../helpers/actionHelpers");
const HomePage = require("../pages/home.page");
const RecipeListPage = require("../pages/recipeList.page");

const homePage = new HomePage();
const recipeListPage = new RecipeListPage();

Then("I can see the text - Rotimatic Owners Group", {timeout: 70000}, () => {
  console.log("Verify the text - Rotimatic Owners Group");
  homePage.verifyBannerImage();
});

Given("I click on Hamburger menu", () => {
  console.log("Click Hamburger menu");
  homePage.clickMenu();
});

Given("I click on {string} link", (text) => {
  console.log(`Click ${text}`);
  homePage.clickLinkOnMenu(text);
});

Given("I click on chat icon", () => {
  console.log("Click chat icon");
  homePage.clickChatIcon();
});

Given("I click on Rotimatic Owners Group", () => {
  console.log("Click Rotimatic Owners Group");
  homePage.clickBannerImage();
});

Then("I should see the text - {string}", {timeout: 120000}, (text) => {
  console.log(`Verify the text - ${text}`);
  homePage.verifyText(text);
});

Then("I should see the text on navigation - {string}", (text) => {
  console.log(`Verify the text - ${text}`);
  homePage.verifyTextNavigation(text);
});

Then("I should be on the news page", () => {
  console.log("User lands on Facebook page");
  homePage.verifyFacebookTitle();
});

Then("I should see {string} button", (text) => {
  console.log(`Verify ${text} button`);
  homePage.verifyButton(text);
});

Then("I should see the recipe: {string} - {string}", (label, recipeName) => {
  console.log(`Verify the recipe: ${label} - ${recipeName}`);
  homePage.verifyText(label.toUpperCase());
  homePage.verifyText(recipeName);
});

Given("I'm in Home screen", () => {});

When("I swipe the Recipe section", () => {
  console.log(`Verify swipe recipe`);
  homePage.swipeRecipe();
});

When("I swipe the Recipe section on iOS", () => {
  console.log(`Verify swipe recipe`);
  homePage.swipeRecipeiOS();
});

When("I click on the first recipe", () => {
  console.log("Click on the first recipe");
  homePage.clickOn1stRecipe();
});

Then("I should see the recipe detail page", () => {
  console.log("Verify recipe page opens");
  homePage.verifyRecipeDetail("Dessert", "Sweet Kesar Milk Poli");
  homePage.touchShareBtn();
});

When("I toggle on filters", () => {
  console.log("Toggle on first 3 filters");
  recipeListPage.clickOnFilters();
});

Then("I should see recipe update according to filters", () => {
  console.log("Verify Recipe appears");
  recipeListPage.verifyRecipeFilter();
});

Given("I'm in Recipe screen", () => {
  homePage.verifyText("Recipes");
});

Given("I click on the Back button", () => {
  console.log("Click on the Back button");
  if(browser.capabilities.platformName.toLowerCase() == 'android')
    $('android=new UiSelector().className("android.widget.ImageButton")').click();
    else
    $('//XCUIElementTypeButton[contains(@name, "back arrow")]').click();

});

Given("I see the Video section", () => {
  console.log("Verify video section");
  homePage.verifyText("How-To Videos");
  // homePage.verifyVideo();
});

When('I click on a Video card on iOS', () => {
  console.log("Play a video on iOS");
  homePage.playVideoIOS();
})

When("I click on a Video", () => {
  console.log("Play a video");
  homePage.playVideo();
});

Then("The video should appear", () => {
  console.log("Verify the video plays");
  homePage.verifyVideoPlay();
});

Then("I click on the last recipe", () => {
  console.log("Click on the last recipe");
  homePage.clickOnLastRecipe();
});

Then("I click on topleft button", () => {
  console.log("Close reipe detail screen");
  homePage.closeRecipeDetail();
  ActionHelper.pause(1);
  homePage.closeRecipeDetail();
});

Then("I click on topleft button 1 time", () => {
  console.log("Close reipe detail screen");
  homePage.closeRecipeDetail();

})

When('I click on the Close Video button', () => {
  console.log('Click on Video close button');
  // ActionHelper.pause(5);
  // homePage.closeRecipeDetail();
  // console.log('Click on Video close button');
  homePage.closeVideo();
})

When("I swipe the Video section", () => {
  console.log("Swipe the Video section");
  homePage.swipeVideo();
});

Then('I swipe down', () => {
  console.log('Swipe down');
  homePage.swipeDown();
})

Then('I click the player', () => {
  console.log('Toggle on the toolbar');
  homePage.clickPlayer();
})

Then('I click pause button', () => {
  console.log('Click pause video');
  homePage.clickPause();
})

Given('I relaunch the app', () => {
  console.log('Relaunch App');
  console.log(driver.getContexts());
  homePage.relaunchApp();
})