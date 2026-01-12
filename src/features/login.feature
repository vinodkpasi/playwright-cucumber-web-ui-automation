Feature: Login functionality for DemoQA

  Background:
    Given I open the DemoQA Login page

  @positive
  Scenario: Successful login with valid credentials
    When I login with username "tom123" and password "Tom1234$"
    Then I should be logged in successfully

  @negative
  Scenario: Login fails with invalid credentials
    When I login with username "wronguser" and password "wrongpass"
    Then I should see login error message "Invalid username or password!"
