const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: null,
    headless: false,
    slowMo: 100,
    width: 1920,
    height: 1080,
  });
  const page = await browser.newPage();
  //  await page.goto('http://localhost:3000');
  await page.goto('http://frontend.plmx.xcloud-dev.x5.ru');
  await page.waitFor(500);
  await page.type('#email', 'plmx_help@x5.ru');
  await page.waitFor(1000);
  await page.type('#password', 'plmxX5');
  await page.click('#AuthSubmit', {clickCount: 1});
  await page.waitFor(3000);
  await page.screenshot({path: 'task.png'});
  await page.reload();
  await page.waitFor(3000);
  await page.screenshot({path: 'task2.png'});

  await browser.close();
})();
