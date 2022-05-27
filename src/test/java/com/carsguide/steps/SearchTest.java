package com.carsguide.steps;

import com.carsguide.pages.HomePage;
import com.carsguide.pages.NewAndUsedCarSearchPage;
import com.carsguide.pages.SearchForCarPage;
import com.carsguide.pages.UsedCarForSalePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SearchTest {
    @Given("^I am  on  homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on \"([^\"]*)\" tab$")
    public void iMouseHoverOnTab(String arg0)  {
           new HomePage().buyandsellmousehoover();
    }

    @And("^I click \"([^\"]*)\" link$")
    public void iClickLink(String arg0)  {
       new HomePage().clickonsearchcar();
    }

    @Then("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String text)  {
    Assert.assertTrue(text,new NewAndUsedCarSearchPage().varrifyNewAndusedcarSearch().contains(text));
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {
        new NewAndUsedCarSearchPage().setselectmake(make);

    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)  {
       new NewAndUsedCarSearchPage().setselectmodel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)  {
       new NewAndUsedCarSearchPage().setselectlocation(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)  {
        new NewAndUsedCarSearchPage().setSelectprice(price);
    }

    @And("^I click on find my next car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarSearchPage().clickonfindmynewcar();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String text)  {

        Assert.assertTrue(text,new SearchForCarPage().varrifycarmake(text).contains(text));
    }


    @Then("^I navigate to \"([^\"]*)\" used cars for sale  page$")
    public void iNavigateToUsedCarsForSalePage(String text)  {
    Assert.assertEquals("not navigate to page",text,new UsedCarForSalePage().varrifyUsedCarSearch());
    }

    @And("^I click \"([^\"]*)\" use car link$")
    public void iClickUseCarLink(String arg0)  {
        new NewAndUsedCarSearchPage().clickonusedcarclick();

    }
}
