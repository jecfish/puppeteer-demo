const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.npmjs.com');

    // enter keywords  
    await page.type('[name="q"]', 'angular');

    // press enter to search
    await page.type('[name="q"]', String.fromCharCode(13));
    await page.screenshot({ path: 'assets/npmjs-01.png' });

    // navigate
    await page.waitForNavigation();
    await page.screenshot({ path: 'assets/npmjs-02.png' });

    browser.close();
})();
