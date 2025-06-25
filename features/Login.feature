Feature: Login Feature
  As a user
  I want to log in to the application
  So that I can access my account

  Background:
    Given main page loads

  @Login @Positive @SMK @UI @Test_1
  Scenario: Successful Login
    Then user opens login page
    When the user logs in with valid credentials
    Then login redirected user properly to main application

  @Login @Negative @SMK @UI @Test_2
  Scenario: Unsuccessful Login
  Then user opens login page
    When the user logs in with invalid credentials
    Then the login will fail with invalid password error

  @Login @Positive @SMK @UI @Test_3
  Scenario: Successful Login
    Then user opens login page
    When the user logs in with valid credentials
    Then login redirected user properly to main application
    Then navigate to notes section
    Then create a random note
    Then logout from the application
    Then user opens login page
    When the user logs in with valid credentials
    Then navigate to notes section
    #cannot continue with the test due to validation errors from the evernote site(robot validation limitations)
    # Then verify that the created note is present