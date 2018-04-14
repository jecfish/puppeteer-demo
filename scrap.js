const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.npmjs.com/search?q=angular');
  
  const packages = await page.evaluate(() => {
    var nodes = document.querySelectorAll('.package-list-item__title___sqwj8');
    return [...nodes].map(el => el.textContent);
  });
  console.log(packages);

  browser.close();
})();
