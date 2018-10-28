const puppeteer = require('puppeteer');

var browser; 
var page;
it('should render without crashing', async () => { 
    browser = await puppeteer.launch(); 
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const t = await page.title();
    expect(t).toBe('TicTacToe');
});

it('should start game with input names', async () => {
    await page.focus('body > div > div > div:nth-child(2) > input');
    await page.keyboard.type("Steve");
    await page.focus('body > div > div > div:nth-child(3) > input');
    await page.keyboard.type("Bob");
    await page.click('body > div > div > div:nth-child(4) > input');
    //await page.screenshot({ path: 'Testing.png' });
    const text = await page.evaluate(() => document.querySelector('.player.blue').textContent);
    await page.close();
    await browser.close();
    expect(text).toContain('Steve', 'Bob');
});