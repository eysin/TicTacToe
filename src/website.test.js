const puppeteer = require('puppeteer');
jest.setTimeout(30000);
var browser; 
var page;
var player1 = 'Steve';
var player2 = 'Bob';
it('should render without crashing', async () => { 
    browser = await puppeteer.launch(); 
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const t = await page.title();
    expect(t).toBe('TicTacToe');
});

it('should start game with input names', async () => {
    
    await page.focus('body > div > div > div > div > div:nth-child(2) > input');
    await page.keyboard.type(player1);
    await page.focus('body > div > div > div > div > div:nth-child(3) > input');
    await page.keyboard.type(player2);
    await page.click('body > div > div > div > div > div:nth-child(4) > input');
    const text = await page.evaluate(() => document.querySelector('.player.blue').textContent);
    expect(text).toContain(player1, player2);
});
it('should know which players turn it is', async () => {
    const text = await page.evaluate(() => document.querySelector('.turn.green').textContent);
    expect(text).toContain(player1);
});
it('should know which players turn it is after the first player finishes their turn', async () => {
    await page.click('#root > div > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(1)');
    const text = await page.evaluate(() => document.querySelector('.turn.green').textContent);
    expect(text).toContain(player2);
});
it('should display who won the game', async () => {
    await page.click('#root > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(1)');
    await page.click('#root > div > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(2)');
    await page.click('#root > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)');
    await page.click('#root > div > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(3)');
    const text = await page.evaluate(() => document.querySelector('.turn.green').textContent);
    expect(text).toContain(player1+"'s won the game!");
});
it('should reset game once "play again!" button is pushed', async () => {
    await page.click('#resetBtn');
    const text = await page.evaluate(() => document.querySelector('.turn.green').textContent);  
    await page.close();
    await browser.close();
    expect(text).toContain(player1);
});

