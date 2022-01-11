const {By} = require('selenium-webdriver')

const deleteNotification = async (driver) =>{
    await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//li/span')).click()
    await driver.findElement(By.xpath('//li/button')).click()

   const deleted = await driver.findElement(By.xpath('//aside[contains(@id,"message")]'))
////span[contains(@class,"checked")]
    const displayed = deleted.isDisplayed()
   expect(displayed).toBeTruthy()

   // const movie = await driver.findElement(By.xpath('//li'))
}

module.exports = {
    deleteNotification
}