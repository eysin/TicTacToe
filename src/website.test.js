const puppeteer = require('puppeteer');

it('renders without crashing', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const t = await page.title();
    await page.close();
    await browser.close();
    expect(t).toContain('TicTacToe');
});