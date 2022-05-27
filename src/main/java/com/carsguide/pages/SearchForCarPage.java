package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchForCarPage extends Utility {
    private static final Logger log = LogManager.getLogger(SearchForCarPage.class.getName());

    public SearchForCarPage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement carmakevarrify;

    public String varrifycarmake(String make) {
        log.info("getting email  car make varrify from "+carmakevarrify.toString());
    return    getTextFromElement(carmakevarrify);

    }






}
