const puppeteer = require("puppeteer");
const fs = require("fs");

// fs.readFile('C:/remixos_install.log','utf8',(err,data)=>{

// console.log(data);
// var store = data;
// converttopdf(store);

// });
async function converttopdf(storage) {
  fs.writeFile("clone.txt", storage, (err) => {
    if (err == null) {
      console.log("Success");
    }
  });
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://uims.cuchd.in/uims/");

  await page.type("#txtUserId", "18bcs2169");
  page.click("#btnNext");

  await page.waitForNavigation();
  await page.type("#txtLoginPassword", "Kratoswar@123");

  page.click("#btnLogin");

  page.waitForNavigation();

  await page.waitForSelector(".a-uims-nav");

  const fun = await page.$$eval(".a-uims-nav", (rows) => {
    for (let v = 0; v < rows.length; v++) {
      if (rows[v].innerHTML == "Result ( Regular )") {
        console.log("found");
        rows[v].click();
      }
    }
  });
 await page.waitForSelector('#ContentPlaceHolder1_wucResult1_ddlResultType');

var b = await page.evaluate(()=>{

var bb = document.getElementById('ContentPlaceHolder1_wucResult1_ddlResultType').value='Session';
console.log(bb.innerHTML);
 document.getElementById('ContentPlaceHolder1_wucResult1_btnShowResult').click();

})


await page.waitForNavigation();
// const eeee=await page.select('select#ContentPlaceHolder1_wucResult1_ddlResultType', "Session");
// console.log(eeee.innerHTML);
// await page.waitForNavigation();


//   await Promise.all([
   
//     page.click("#ContentPlaceHolder1_wucResult1_btnShowResult"),
//     page.waitForNavigation()

//   ]);
  // await page.$eval('.a-uims-nav',(element)=> element.click());

  // await page.goto("https://uims.cuchd.in/UIMS/result.aspx");
//  await browser.close();
  // await page.screenshot({ path: "example.png" });
})();
