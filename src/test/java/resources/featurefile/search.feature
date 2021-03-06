Feature: Search functionality

  @smoke
  Scenario Outline: Search the buy car with model
    Given I am  on  homepage
    When  I mouse hover on "buy+sell" tab
    And  I click "Search Cars" link
    Then I navigate to "New & Used Car Search - carsguide" page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on find my next car tab
    Then I should see the make "<make>" in results
    Examples:
      | make       | model    | location     | price   |
      | Honda      | City     | NSW - All    | $50,000 |
      | Jeep       | Wrangler | NSW - All    | $60,000 |
      | Kia        | Niro     | QLD - All    | $40,000 |
      | Volkswagen | Golf     | NSW - Sydney | $45,000 |
      | Suzuki     | Vitara   | NT - South   | $45,000 |


  Scenario Outline: Search the used car with model
    Given I am  on  homepage
    When  I mouse hover on "buy+sell" tab
    And  I click "Used" use car link
    Then I navigate to "Used Cars For Sale" used cars for sale  page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on find my next car tab
    Then I should see the make "<make>" in results
    Examples:
      | make       | model     | location     | price   |
      | Tesla      | Model S   | Any Location | $80,000 |
      | Mitsubishi | Outlander | NT - All     | $90,000 |
      | Honda      | City      | NSW - All    | $50,000 |
      | Volkswagen | Golf      | NSW - Sydney | $45,000 |
      | Jeep       | Wrangler  | NSW - All    | $60,000 |
