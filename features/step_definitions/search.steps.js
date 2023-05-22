const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement } = require("../../lib/command");


Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`${string}`, {
    setTimeout: 20000,
  });
});

When("user choose place", async function () {
  await clickElement (page, "body > nav > a:nth-child(4)");
  await clickElement (page, "body > main > section > div.movie-seances__hall > ul > li > a");
  await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(10)");
});
When("user choose two places", async function () {
  await clickElement (page, "body > nav > a:nth-child(4)");
  await clickElement (page, "body > main > section > div.movie-seances__hall > ul > li > a");
  await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(2)");
  await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(4)");
});
When("user choose twice one place", async function () {
  await clickElement (page, "body > nav > a:nth-child(4)");
  await clickElement (page, "body > main > section > div.movie-seances__hall > ul > li > a");
  await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(2)");
  await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(2)");
});

Then("user sees button become enable", async function () {
  const actual = await page.$eval("body > main > section > button", (link) => link.getAttribute("disabled"));
  const expected = null;
  expect(actual).equal(expected);
});
Then("user sees button become disable", async function () {
  const actual = await page.$eval("body > main > section > button", (link) => link.getAttribute("disabled"));
  const expected = "true";
  expect(actual).equal(expected);
});