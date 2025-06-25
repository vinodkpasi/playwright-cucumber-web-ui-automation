Feature: Login Functionality

  Background:
    Given The user is on the login page

  @positive
  Scenario Outline: Successful login with valid credentials
    When The user enters the email "<email>"
    And The user clicks on the "Continue with login" button
    And The user enters the password "<password>"
    Then The user clicks on the "Login" button
    Then The user should be logged into to the application
    When The user signs out of the application
    Then The user is on the login page

    Examples:
      | email                     | password   |
      | dev+jamor@gocoachgo.com   | Abc123!234 |
      | dev+sconnor@gocoachgo.com | Abc123!234 |
      | dev+atrager@gocoachgo.com | Abc123!234 |

  @negative
  Scenario Outline: Login with valid email and invalid password
    When The user enters the email "<email>"
    And The user clicks on the "Continue with login" button
    And The user enters the password "<password>"
    Then The user clicks on the "Login" button
    Then An error message "Could not login with email and password provided" should be displayed

    Examples:
      | email                     | password         |
      | dev+jamor@gocoachgo.com   | invalid_password |
      | dev+sconnor@gocoachgo.com | invalid_password |
      | dev+atrager@gocoachgo.com | invalid_password |

  @negative
  Scenario: Login with invalid email and valid password
    When The user enters the email "invalidemail@gocoachgo.com"
    And The user clicks on the "Continue with login" button
    And The user enters the password "Abc123!234"
    Then The user clicks on the "Login" button
    Then An error message "Could not login with email and password provided" should be displayed

  @negative
  Scenario: Login with invalid email and invalid password
    When The user enters the email "invalidemail@gocoachgo.com"
    And The user clicks on the "Continue with login" button
    And The user enters the password "invalid_password"
    Then The user clicks on the "Login" button
    Then An error message "Could not login with email and password provided" should be displayed

  @negative
  Scenario: Login with blank email and password
    When The user enters the email "dev+jamor@gocoachgo.com"
    And The user clicks on the "Continue with login" button
    And The user leaves email blank
    And The user leaves password blank
    Then The button "Login" should be disabled

  @negative
  Scenario Outline: Login with only valid email
    When The user enters the email "<email>"
    And The user clicks on the "Continue with login" button
    And The user leaves password blank
    Then The button "Login" should be disabled

    Examples:
      | email                     |
      | dev+jamor@gocoachgo.com   |
      | dev+sconnor@gocoachgo.com |
      | dev+atrager@gocoachgo.com |

  @negative
  Scenario Outline: Login with only valid password
    When The user enters the email "dev+jamor@gocoachgo.com"
    And The user clicks on the "Continue with login" button
    And The user leaves email blank
    When The user enters the password "<password>"
    Then The button "Login" should be disabled

    Examples:
      | password   |
      | Abc123!234 |
      | Abc123!234 |
      | Abc123!234 |

  @negative
  Scenario: Continue Login button should be disabled without email input
    Then The button "Continue with login" should be disabled
    When The user enters the email "xyz@gmail.com"
    Then The button "Continue with login" should be enabled

  @negative
  Scenario: Continue Login button should be disabled with invalid email format
    When The user enters the email "invalidformat"
    And The user presses the "Tab" button
    Then The validation error message "Please enter a valid email address" should be displayed
    And The button "Continue with login" should be disabled