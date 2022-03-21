const puppeteer = require('puppeteer');
let page;
let browser;
(async () => {
    try {

        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
        });
        page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0);

        let product1 = "redmi note 10 pro";
        let product2 = "redmi note 9 pro max"

        await page.goto('https://www.amazon.in');

        let FprojectInfo = await productObject(product1);
        await clearInput();
        let SprojectInfo = await productObject(product2);

        let MainInfo = {};
        for (key in FprojectInfo) {
            MainInfo[key] = [FprojectInfo[key], SprojectInfo[key]];
        }
        console.log(MainInfo);
    } catch (error) {
        console.log(error)
    }
})();
let clearInput = async () => {
    let input = await page.$('.nav-search-field .nav-input.nav-progressive-attribute');
    await input.click({ clickCount: 3 });
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(3000)
    await page.keyboard.up("Backspace");
}
let productObject = async (productName) => {
    try {
        await page.type('.nav-search-field .nav-input.nav-progressive-attribute', productName, { delay: 300 })
        await page.click(".nav-search-submit-text .nav-input.nav-progressive-attribute")
        await page.waitForSelector('.s-result-item.s-asin');
        await page.evaluate(() => new Promise((resolve) => {
            var scrollTop = -1;
            const interval = setInterval(() => {
                window.scrollBy(0, 100);
                if (document.documentElement.scrollTop !== scrollTop) {
                    scrollTop = document.documentElement.scrollTop;
                    return;
                }
                clearInterval(interval);
                resolve();
            }, 10);
        }));
        let AllItems = await page.$$('div[data-component-type="s-search-result"] .a-section.a-spacing-none.s-padding-right-small.s-title-instructions-style .a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal')

        await AllItems[1].click().then(data => console.log(data))


        await page.waitForTimeout(30000) // just to make sure the new tab is opened
        let pages = await browser.pages();
        page = pages[pages.length - 1];
        // const url = await page.evaluate(() => window.location.href);
        await page.evaluate(() => new Promise((resolve) => {
            var scrollTop = -1;
            const interval = setInterval(() => {
                window.scrollBy(0, 100);
                if (document.documentElement.scrollTop !== scrollTop) {
                    scrollTop = document.documentElement.scrollTop;
                    return;
                }
                clearInterval(interval);
                resolve();
            }, 10);
        }));
        await page.waitForSelector('#productDetails_techSpec_section_1 tr');
        let Alltr = await page.$$("#productDetails_techSpec_section_1 tr");
        let Info = {
            OperatingSystem: "",
            Ram: "",
            ProductDimensions: "",
            Batteries: "",
            WirelessCommunicationTechnologies: "",
        }
        let iterator = 0;
        for (let key in Info) {
            let value = await Alltr[iterator].$$eval('td', el => el.map(x => x.textContent));
            Info[key] = value[0].replace("\n", "").trim();
            iterator++;
        }

        console.log(Info);
        return Info;
    } catch (error) {
        console.log(error);
    }
}