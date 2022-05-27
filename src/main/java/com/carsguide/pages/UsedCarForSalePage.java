package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UsedCarForSalePage extends Utility {
    private static final Logger log = LogManager.getLogger(UsedCarForSalePage.class.getName());

    public UsedCarForSalePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Used Cars For Sale')]")
    WebElement usedcarsearch;


    public String varrifyUsedCarSearch() {
        log.info("getting email  used car search from " + usedcarsearch.toString());
        return getTextFromElement(usedcarsearch);
    }


}
