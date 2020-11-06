test('the user should see the card on scroll', async () => {
	await page.goto('http://localhost:8084')

	// the scroll is at the very top
	expect(await page.evaluate(() => window.scrollY)).toBe(0);
	// there is enough scroll heigth available
	expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBeGreaterThan(400);

	await page.waitForFunction(() => window.scroll(0, 100) || true);
	// just to check the scroll worked
	expect(await page.evaluate(() => window.scrollY)).toBe(100);

	await page.waitForFunction(() => window.scroll(0, 200) || true);
	// this expectation should pass on host and fail on docker
	expect(await page.evaluate(() => window.scrollY)).toBe(200);
});
