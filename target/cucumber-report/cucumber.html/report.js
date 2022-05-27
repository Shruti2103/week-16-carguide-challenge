$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cardealer.feature");
formatter.feature({
  "line": 1,
  "name": "Search Dealer",
  "description": "",
  "id": "search-dealer",
  "keyword": "Feature"
});
formatter.before({
  "duration": 26388986800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-dealer;search-the-buy-car-with-model",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am  on  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Find a Dealer link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to Find a car Dealership Near you page",
  "rows": [
    {
      "cells": [
        "101 Auto Centre"
      ],
      "line": 11
    },
    {
      "cells": [
        "4WD \u0026 Commercial Centre"
      ],
      "line": 12
    },
    {
      "cells": [
        "5 Star Auto Trade"
      ],
      "line": 13
    },
    {
      "cells": [
        "777 Pinoy Auto Sales"
      ],
      "line": 14
    },
    {
      "cells": [
        "864 Cars"
      ],
      "line": 15
    },
    {
      "cells": [
        "A Cullen \u0026 Son"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 492487100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "SearchTest.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 1763766300,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerTest.iClickFindADealerLink()"
});
formatter.result({
  "duration": 5019273000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerTest.iNavigateToFindACarDealershipNearYouPage(DataTable)"
});
formatter.result({
  "duration": 14340674500,
  "status": "passed"
});
formatter.after({
  "duration": 6007818400,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am  on  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Honda",
        "City",
        "NSW - All",
        "$50,000"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Jeep",
        "Wrangler",
        "NSW - All",
        "$60,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Kia",
        "Niro",
        "QLD - All",
        "$40,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Volkswagen",
        "Golf",
        "NSW - Sydney",
        "$45,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Suzuki",
        "Vitara",
        "NT - South",
        "$45,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20348698400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am  on  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 72400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "SearchTest.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 1078707500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "SearchTest.iClickLink(String)"
});
formatter.result({
  "duration": 6491192700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SearchTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 382455400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "SearchTest.iSelectMake(String)"
});
formatter.result({
  "duration": 988910300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectModel(String)"
});
formatter.result({
  "duration": 1034729600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SearchTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 573582700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 519894800,
  "status": "passed"
});
formatter.match({
  "location": "SearchTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5273471900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "SearchTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 667324500,
  "status": "passed"
});
formatter.after({
  "duration": 5258826200,
  "status": "passed"
});
formatter.before({
  "duration": 17925912200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am  on  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Wrangler\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "SearchTest.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 765280000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "SearchTest.iClickLink(String)"
});
formatter.result({
  "duration": 6952793600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SearchTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 265480800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "SearchTest.iSelectMake(String)"
});
formatter.result({
  "duration": 708133900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrangler",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectModel(String)"
});
formatter.result({
  "duration": 1227094900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "SearchTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 570299100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 399104700,
  "status": "passed"
});
formatter.match({
  "location": "SearchTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5211745800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "SearchTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 615176400,
  "status": "passed"
});
formatter.after({
  "duration": 5497356400,
  "status": "passed"
});
formatter.before({
  "duration": 14888262500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am  on  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Niro\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"QLD - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "SearchTest.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 3476269500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "SearchTest.iClickLink(String)"
});
formatter.result({
  "duration": 6211674100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SearchTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 395726200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "SearchTest.iSelectMake(String)"
});
formatter.result({
  "duration": 1093470700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Niro",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectModel(String)"
});
formatter.result({
  "duration": 846521200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "SearchTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 600732600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 309835500,
  "status": "passed"
});
formatter.match({
  "location": "SearchTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4899422200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "SearchTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 471230300,
  "status": "passed"
});
formatter.after({
  "duration": 5839896200,
  "status": "passed"
});
formatter.before({
  "duration": 18455691100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am  on  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Volkswagen\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Golf\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Volkswagen\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 39500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "SearchTest.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 734297100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "SearchTest.iClickLink(String)"
});
formatter.result({
  "duration": 6590979400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SearchTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 377983000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 15
    }
  ],
  "location": "SearchTest.iSelectMake(String)"
});
formatter.result({
  "duration": 1283939300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golf",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectModel(String)"
});
formatter.result({
  "duration": 1307064200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "SearchTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 364800000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 329137900,
  "status": "passed"
});
formatter.match({
  "location": "SearchTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 9061226000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 23
    }
  ],
  "location": "SearchTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 287749400,
  "status": "passed"
});
formatter.after({
  "duration": 5828763300,
  "status": "passed"
});
formatter.before({
  "duration": 21856957600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am  on  homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Suzuki\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Vitara\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NT - South\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Suzuki\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 35600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "SearchTest.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 1187597900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "SearchTest.iClickLink(String)"
});
formatter.result({
  "duration": 10516319700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "SearchTest.iNavigateToPage(String)"
});
formatter.result({
  "duration": 249691100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 15
    }
  ],
  "location": "SearchTest.iSelectMake(String)"
});
formatter.result({
  "duration": 3129983000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vitara",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectModel(String)"
});
formatter.result({
  "duration": 1250297800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - South",
      "offset": 19
    }
  ],
  "location": "SearchTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 624761500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "SearchTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 505691600,
  "status": "passed"
});
formatter.match({
  "location": "SearchTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 9553040600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 23
    }
  ],
  "location": "SearchTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1007283700,
  "status": "passed"
});
formatter.after({
  "duration": 7118776800,
  "status": "passed"
});
});