  Feature: Notes Feature
  As a user
  I want to be able to create and manage my notes

  Background:
    Given main page loads
  
  @Notes @Positive @SMK @UI @Test_3
  Scenario: Create a note
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