const { test, expect } = require("@playwright/test");
const { createDiffieHellmanGroup } = require("node:crypto");

test("First test case", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});

test("Second test case", async ({ browser }) => {
  const bc = await browser.newContext();
  const page = await bc.newPage();
  await page.goto("http://www.rahulshettyacademy.com/");
  await expect(page).toHaveTitle("google");
});

test("Login test case", async ({ browser }) => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  const usernameTextbox = page.locator("#username");
  const passwordTextbox = page.locator("[name='password']");
  const siginButton = page.locator("#signInBtn");
  const errorMessage = page.locator("[style*='block']");
  const productTitle = page.locator(".card-body a");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  await usernameTextbox.fill("rahulshettyacademy1");
  await passwordTextbox.fill("learning");
  await siginButton.click();
  console.log(await page.locator("[style*='block']").textContent());

  await expect(errorMessage).toContainText("Incorrect username/password.");

  await usernameTextbox.fill("rahulshettyacademy");
  await siginButton.click();

  await expect(productTitle.nth(0)).toContainText("iphone X1");
});

test("Register", async ({ browser }) => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();

  const firstName = page.locator("#firstName");
  const lastName = page.locator("#lastName");
  const userEmail = page.locator("#userEmail");
  const mobile = page.locator("#userMobile");
  const occupation = page.locator("[formcontrolname='occupation']");
  const gender = page.locator("[value='Male']");
  const password = page.locator("#userPassword");
  const confirmPassword = page.locator("#confirmPassword");
  const checkboxConfirm = page.locator("[type='checkbox']");
  const register = page.locator("#login");

  await page.goto("https://rahulshettyacademy.com/client/");

  await page.locator(".text-reset").click();

  await firstName.fill("Puvi");

  await lastName.fill("Murugan");

  await userEmail.fill("puviarasan881@gmail.com");

  await mobile.fill("2243454567");

  await occupation.selectOption("3: Engineer");

  await gender.click();

  await password.fill("Welcome@2025");

  await confirmPassword.fill("Welcome@2025");

  await checkboxConfirm.click();

  await register.click();
});

test.only("Login 2", async ({ browser }) => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();

  await page.goto("https://rahulshettyacademy.com/client/");

  await page.locator("#userEmail").fill("puviarasan881@gmail.com");
  await page.locator("#userPassword").fill("Welcome@2025");
  await page.locator("#login").click();

  // await page.waitForLoadState("networkidle");

  await page.locator(".card-body b").first().waitFor();
  const title = await page.locator(".card-body b").allTextContents();
  console.log(title);
});
