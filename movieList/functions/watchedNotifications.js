const {By} = require('selenium-webdriver')

const watchedNotification = async (driver) =>{
    await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//li/span')).click()

   const watched = await driver.findElement(By.xpath('//aside[contains(@id,"message")]'))
////span[contains(@class,"checked")]
    const displayed = watched.isDisplayed()
   expect(displayed).toBeTruthy()

   // const movie = await driver.findElement(By.xpath('//li'))
}

module.exports = {
    watchedNotification
}