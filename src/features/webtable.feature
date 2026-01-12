Feature: DemoQA Web Tables

  Scenario: Add a new record to the web table
    Given I open the DemoQA Web Tables page
    When I add a new record with following details
      | firstName | lastName | email             | age | salary | department |
      | Sam       | Steel    | samsteel@test.com | 30  | 50000  | QA         |
    Then the record "samsteel@test.com" should be displayed in the table
