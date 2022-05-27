package com.carsguide.pages;


import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buyandsellmousehoover;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchcarclick;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Find a Dealer')]")
    WebElement dealerclick;

    @CacheLookup
    @FindBy(xpath = "//div[@class='dealerListing--name']//a")
    List<WebElement> nameofDealers;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Next')]")
    WebElement nextButton;


    public void buyandsellmousehoover() {
        mouseHoverToElement(buyandsellmousehoover);
        log.info("Clicking on buy and sell mouse hoover " + buyandsellmousehoover.toString());
    }


    public void clickonsearchcar() {
        clickOnElement(searchcarclick);
        log.info("Clicking on search car click " + searchcarclick.toString());
    }

    public void clickondealerclick() {
        clickOnElement(dealerclick);
        log.info("Clicking on  dealer click  " + dealerclick.toString());


    }

    public String makelistofdealers(String text) {
        log.info("Fetching Dealer Name :"+nameofDealers.toString());
        for(WebElement data: nameofDealers){
            String str=data.getText();
            if(str.equalsIgnoreCase(text)){
                return str;
            }
        }

       return null;
    }
    public void clickOnNextButton(){
        clickOnElement(nextButton);
    }

}
