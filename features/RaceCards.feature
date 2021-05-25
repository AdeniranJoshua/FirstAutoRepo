Feature: The Internet Guinea Pig Website

  Scenario: Big race event displays next upcomming event
    Given I am on "https://www.racingpost.com/racecards/"
    When I click the "Big Race Entries" header
    Then the date of the next big race event is in the future


  Scenario: Runners Tab - Runner Index Buttons are named correctly and displayed in expected order
    Given I am on "https://www.racingpost.com/racecards/"
    When I invoke the 'runners' tab
    Then there should be 26 Runner Index buttons
    And the Runner Index buttons are named by letters of the alphabet and are in alphabetical order
