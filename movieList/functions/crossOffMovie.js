const {By} = require('selenium-webdriver')

const crossOffMovie = async(driver)=>{
    await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')
    await driver.findElement(By.xpath('//button')).click()
    await driver.findElement(By.xpath('//li/span')).click()

   const crossed = await driver.findElement(By.xpath('//span[contains(@class,"checked")]'))
////span[contains(@class,"checked")]
   expect(crossed).toBeTruthy()

   // const movie = await driver.findElement(By.xpath('//li'))
}

module.exports = {
    crossOffMovie
}