Feature: Search Dealer

  @smoke
  Scenario: Search the buy car with model
    Given I am  on  homepage
    When  I mouse hover on "buy+sell" tab
    And  I click Find a Dealer link
    Then I navigate to Find a car Dealership Near you page


      | 101 Auto Centre         |
      | 4WD & Commercial Centre |
      | 5 Star Auto Trade       |
      | 777 Pinoy Auto Sales    |
      | 864 Cars                |
      | A Cullen & Son          |
