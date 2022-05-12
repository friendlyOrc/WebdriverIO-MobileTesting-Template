const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pages/login.page");
const loginPage = new LoginPage();

When('I enter {string} and {string}', (email, password) => {
    console.log('Enter email and password');
    loginPage.enterUsernameAndPassword(email, password);
});

When('I click on sign in on login screen', () => {
    console.log('Click sign in');
    loginPage.clickSignIn();
});
