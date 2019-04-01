// screenshotter.js
const puppeteer = require('puppeteer');

// read arguments from command line
const args = process.argv.slice(2);

// async - the way of the future and destroyer of brains
(async () => {

    // launch a browser and open a page (we provide on command line)
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(args[0]);

    // take a screenshot
    await page.screenshot({path: `${args[1]}.png`});

    // close the browser
    await browser.close();
})();



// comparer.js

// we import filesystem to read our images
const fs = require(‘fs');

// and the compareImages utility from resembleJS
const compareImages = require(‘resemblejs/compareImages');

// again, we also need to get our arguments from the command line
const args = process.argv.slice(2);

// read our images
const baseline = fs.readFileSync(args[0]);
const check = fs.readFileSync(args[1]);

// and then compare, printing the comparison data to console
compareImages(baseline, check)
    .then(data => console.log(data));




