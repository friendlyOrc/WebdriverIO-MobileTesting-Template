const { Given, When, Then } = require("@cucumber/cucumber");
const WelcomePage = require("../pages/welcome.page");
const welcomePage = new WelcomePage();

Given('I launch and Open Rotimatic app', () => {
    console.log('Launch and Open Rotimatic app');
    welcomePage.launchApp();
});

Given('I launch and Open Rotimatic iOS app', () => {
    console.log('Launch and Open Rotimatic app');
    welcomePage.launchAppiOS();
});

Given('I click on sign in on welcome screen', () => {
    console.log('Click sign in');
    welcomePage.clickSignIn();
});

Given('I click on sign up on welcome screen', () => {
    console.log('Click sign up');
    welcomePage.clickSignUp();
});

Then('I can see options to sign up and sign in', () => {
    console.log('Verify text - Sign Up / Sign In');
    welcomePage.verifySignUpAndSignInButton();
});

Given('I click skip button', () => {
    console.log('Click skip');
    welcomePage.clickSkip();
});

Given('I click yes button', () => {
    console.log('Click yes');
    welcomePage.clickYes();
});

Given('I click no button', () => {
    console.log('Click no');
    welcomePage.clickNo();
});

Given(`I click on Let's Begin button`, () => {
    console.log('Click lets begin');
    welcomePage.clickLetsBegin();
});

Given('I click on {string} button', (text) => {
    console.log(`Click ${text} button`);
    welcomePage.clickButtonOnScreen(text);
});

Then('I can see the text - {string}', (text) => {
    console.log(`Verify the text - ${text}`);
    welcomePage.verifyText(text);
});

Then('I can see the text - {string} on dialog', (text) => {
    console.log(`Verify the text - ${text}`);
    welcomePage.verifyDialogMessage(text);
});
