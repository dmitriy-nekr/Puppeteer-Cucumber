const { clickElement } = require("./lib/command");


let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://qamid.tmweb.ru/client/index.php");
  await clickElement (page, "body > nav > a:nth-child(4)");
  await clickElement (page, "body > main > section > div.movie-seances__hall > ul > li > a");
});

afterEach(() => {
  page.close();
});

describe("Netology.ru tests", () => {
    test("First test happy-path", async ()=>{
        await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(10)");
        const actual = await page.$eval("body > main > section > button", (link) => link.getAttribute("disabled"));
        const expected = null;
        expect(actual).toEqual(expected);

    });
    test("Second test happy-path", async ()=>{
        await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(2)");
        await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(4)");
        const actual = await page.$eval("body > main > section > button", (link) => link.getAttribute("disabled"));
        const expected = null;
        expect(actual).toEqual(expected);

    });
    test("Sad-path test", async ()=>{
        await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(2)");
        await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(2)");
        const actual = await page.$eval("body > main > section > button", (link) => link.getAttribute("disabled"));
        const expected = "true";
        expect(actual).toEqual(expected);

    });

});   