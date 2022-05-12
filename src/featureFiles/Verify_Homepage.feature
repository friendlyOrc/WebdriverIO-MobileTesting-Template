Feature: Verify Homepage

    @androidApp
    Scenario: Lauch and Open Rotimatic app
        Given I launch and Open Rotimatic app
        Then I can see options to sign up and sign in

    @iosApp
    Scenario: Lauch and Open iOS Rotimatic app
        Given I launch and Open Rotimatic iOS app
        Then I can see options to sign up and sign in

    @androidApp
    @iosApp
    Scenario: Click on sign in
        Given I click on sign in on welcome screen
        When I enter "rotimatic.automation123@gmail.com" and "Abcd123!@"
        When I click on sign in on login screen

    @androidApp
    Scenario: Skip connection
        Given I click on Let's Begin button
        When I click skip button
        When I click skip button
        When I click yes button
        When I click yes button
        When I click skip button
        When I click on "Yes, I am sure." button
        Then I can see the text - Rotimatic Owners Group
        Then I can see the text - "SEE MORE"
        Then I can see the text - "Get inspired to create"
        Then I should see the recipe: "Snack" - "Samosa"

    @iosApp
    Scenario: Skip connection
        Given I click on Let's Begin button
        When I click skip button
        When I click skip button
        When I click yes button
        When I click yes button
        When I click skip button
        When I click on "Yes, I am sure" button
        Then I can see the text - "SEE MORE"
        Then I can see the text - "Get Inspired to create"

    @androidApp
    # @iosApp
    Scenario: Click on See More button 
        Given I'm in Home screen
        When I click on "SEE MORE" link 
        Then I should see the text - "Recipes"
        Then I should see the text - "All the different ways to cook with Rotimatic."

    @androidApp
    # @iosApp
    Scenario: Click on the Home link
        Given I'm in Recipe screen
        When I click on "Home" link  
        Then I should see the text - "Home"

    @androidApp
    Scenario: Click on Rotimatic Owners Group
        Given I click on Rotimatic Owners Group
        Then I should be on the news page
        Then I should see the text - "Rotimatic® Owners" 
        Then I should see "Join Group" button

    @iosApp
    Scenario: Click on Rotimatic Owners Group
        Given I click on Rotimatic Owners Group
        # Then I should see the text - "Rotimatic® Owners" 
        Then I should see "Join Group" button

    @androidApp
    Scenario: Click on the Back button
        Given I click on the Back button
        Then I should see the text - "Home"

    @iosApp
    Scenario: Return to Home screen
        Given I click on the Back button
        Then I can see the text - "Get Inspired to create"

    @androidApp
    @iosApp
    Scenario: Click on Hamburger menu
        Given I click on Hamburger menu
        Then I can see the text - "Home"
        Then I can see the text - "Connect"
        Then I can see the text - "Chat"
        Then I can see the text - "Quick Help"
        Then I can see the text - "Dashboard"
        Then I can see the text - "Settings"
        
    @androidApp
    Scenario: Click on the Home option
        Given I click on "Home" link
        Then I can see the text - "Home"

    @iosApp
    Scenario: Click on the Home option
        Given I click on "Home" link
        Then I can see the text - "Get Inspired to create"

    @androidApp
    @iosApp
    Scenario: Click on chat icon at the bottom
        Given I click on chat icon
        Then I can see the text - "Start a conversation"
        
    @androidApp
    Scenario: Click on intercom close button
        Given I click on Intercom close button
        Then I can see the text - "Home"
     
    @iosApp
    Scenario: Click on intercom close button
        Given I click on "intercom close button" button
        Then I can see the text - "Get Inspired to create"   

    @androidApp
    Scenario: Click on a Video
        Given I see the Video section
        When I swipe the Video section
        Then I should see the text - "RECONFIGURE WI-FI"
        * I click on a Video
        Then The video should appear

    @iosApp
    Scenario: Click on a Video
        Given I see the Video section
        When I click on a Video card on iOS
        # * I click pause button
        When I click on the Close Video button
        Then I can see the text - "Get Inspired to create"   
    
    # On iOS, since reseting app causing crash issue on simulator
    # We log out after a Feature
    @iosApp
    Scenario: Click on the Setting option
        Given I click on Hamburger menu
        When I click on "Settings" link
        Then I can see the Setting screen 

    @iosApp
    Scenario: Click on Sign out button - Cancel
        Given I click on "Sign out" link
        Then I click yes button
        Then I can see options to sign up and sign in