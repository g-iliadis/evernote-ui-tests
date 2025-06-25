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