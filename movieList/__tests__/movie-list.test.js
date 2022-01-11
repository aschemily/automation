const {crossOffMovie} = require('../functions/crossOffMovie')
const {watchedNotification} = require('../functions/watchedNotifications')
const {deleteNotification} = require('../functions/deleteNotifications')
const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () =>{
    await driver.quit()
})

// test('movie is crossed off', async()=>{
//     await crossOffMovie(driver)
//     await driver.sleep(3000)
// })

// test('watched notification displaying', async()=>{
//     await watchedNotification(driver)
//     await driver.sleep(3000)
// })

test('delete notification displaying', async()=>{
    await deleteNotification(driver)
    await driver.sleep(3000)
})

