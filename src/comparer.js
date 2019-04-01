const fs = require('fs');
const compareImages = require('resemblejs/compareImages');
const args = process.argv.slice(2);

const baseline = fs.readFileSync(args[0]);
const check = fs.readFileSync(args[1]);
compareImages(baseline, check)
    .then(handleCompareData);

// lets take the data from resemble and put it into a file
async function handleCompareData(data) {
    const suffix = args[1].substring(args[1].lastIndexOf('.'));
    const diff = args[1].replace(suffix, `.diff${suffix}`);
    await fs.writeFile(diff, data.getBuffer());
}

// but you may have noticed this line in the output
getBuffer: [Function]

// this is a function which resembleJS gives us
// and returns a "diff" image of the two input images