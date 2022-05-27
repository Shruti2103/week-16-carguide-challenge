package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewAndUsedCarSearchPage extends Utility {
    private static final Logger log= LogManager.getLogger(NewAndUsedCarSearchPage.class.getName());

    public NewAndUsedCarSearchPage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//div[@class='heading main-heading item-ad-wrapper ']/h1")
    WebElement newandusedcarSearchvarrify;

    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement selectmake;

    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement selectmodel;

    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement selectlocation;

    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement selectprice;

    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findmynewcar;

    // click on used car click
    @CacheLookup
    @FindBy(xpath = "//div[@class='uhf-child-menu']//ul//li//a[text()='Used']")
    WebElement usedcarclick;

    public void clickonusedcarclick(){
        clickOnElement(usedcarclick);
        log.info("Clicking on used car click " + usedcarclick.toString());
    }


    public String varrifyNewAndusedcarSearch() {
        log.info("getting varify new and used car Search "+newandusedcarSearchvarrify.toString());
        return getTextFromElement(newandusedcarSearchvarrify);

    }


    public String buyandsellmousehoover() {
        log.info("getting varify new and used car Search varrify "+newandusedcarSearchvarrify.toString());
    return getTextFromElement(newandusedcarSearchvarrify);

    }
    public void setselectmake(String make) {
       selectByVisibleTextFromDropDown(selectmake,make);
        log.info("Selecting make "+make+" from dropdown "+selectmake.toString() );

    }

    public void setselectmodel(String model) {
        selectByValueFromDropDown(selectmodel,model);
        log.info("Selecting model "+model+" from dropdown "+selectmodel.toString() );

    }

    public void setselectlocation(String location) {
        selectByVisibleTextFromDropDown(selectlocation,location);
        log.info("Selecting location "+location+" from dropdown "+selectlocation.toString() );

    }
    public void setSelectprice(String price) {
        selectByVisibleTextFromDropDown(selectprice,price);
        log.info("Selecting price "+price+" from dropdown "+selectprice.toString() );

    }
    public void clickonfindmynewcar(){
        clickOnElement(findmynewcar);
        log.info("Clicking on find my new car " + findmynewcar.toString());
    }








}
