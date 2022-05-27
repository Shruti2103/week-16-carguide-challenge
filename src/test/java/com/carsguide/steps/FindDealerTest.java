package com.carsguide.steps;

import com.carsguide.pages.HomePage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class FindDealerTest {
    @And("^I click Find a Dealer link$")
    public void iClickFindADealerLink() {
        new HomePage().clickondealerclick();
    }

    @Then("^I navigate to Find a car Dealership Near you page$")
    public void iNavigateToFindACarDealershipNearYouPage(DataTable dataTable) {
        List<String>expectedlist=dataTable.asList(String.class);
        for(String data: expectedlist){
            while (new HomePage().makelistofdealers(data)==null){
                new HomePage().clickOnNextButton();
            }
            Assert.assertEquals("Dealer name not found !",data,new HomePage().makelistofdealers(data));
        }



    }
}
