const puppeteer = require('puppeteer');
const fs = require('fs');

fs.readFile('C:/remixos_install.log','utf8',(err,data)=>{

console.log(data);
var store = data;
converttopdf(store);

});

async function converttopdf(storage){

fs.writeFile('clone.txt',storage,(err)=>{

    if(err == null){

        console.log("Success");

    }
});


}


(async()=>{

const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();

await page.goto

await page.goto('https://github.com/Nikunj-bisht');
await page.screenshot({path: 'example.png'});

await browser.close();
})();





