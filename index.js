const puppeteer = require("puppeteer");
const fs = require("fs");

//const email = require('./email');

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

// async function emailpuppeteer(){

// setInterval(async()=>{

//   await email('18BCS2163@cuchd.in',"Your result for jtp has been published visit https://jtpresults.com for more");

// },3000);

// }
var chromeoptions = {

  headless:true,
  defaultViewport:null,
  args:["--incognito","--no-sandbox","--single-process","--no-zygote"]
  
  }
//emailpuppeteer();
cuimsresultscrape();




async function cuimsresultscrape(){
  const browser = await puppeteer.launch(chromeoptions);
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/");
await page.waitForSelector('.-MzZI');
await page.type('input[name=username]','918920027160');

await page.type('input[name=password]','javaislove@1234');
//await page.$eval('input[name=username]',el=>el.value = '8920027160');
//await page.$eval('input[name=password]',el=>el.value = 'javaislove@1234');

await page.evaluate(()=>{

document.getElementsByClassName('sqdOP  L3NKy   y3zKF     ')[0].disabled = false;
document.getElementsByClassName('sqdOP  L3NKy   y3zKF     ')[0].click();

})

await page.waitForSelector('.MWDvN');


await page.evaluate(()=>{

   const search = document.getElementsByClassName('XTCLo x3qfX')[0].innerHTML = 'nikunj_bisht';
  

})

await page.type('.XTCLo.x3qfX','norafatehi');

await page.waitForSelector('.yPP5B');
await page.waitForSelector('.-qQT3');
await page.click('.-qQT3');


await  page.waitForSelector('.ySN3v');
await page.waitForSelector('.KL4Bh');

await page.click('.FFVAD');
await page.waitForSelector('._9AhH0');
await page.waitForTimeout(5000);
await page.screenshot({path:"example.png"},);
//   await page.evaluate(()=>{
// const username = document.getElementsByClassName('_2hvTZ pexuQ zyHYP');
// console.log(username);
// const user =  document.getElementsByClassName('_2hvTZ pexuQ zyHYP')[0];
// user.value="8920027160";
// const pass = document.getElementsByClassName('_2hvTZ pexuQ zyHYP')[1];
// pass.value = "javaislove@1234";

//   })

// await page.evaluate(()=>{

// document.getElementsByClassName('sqdOP  L3NKy   y3zKF     ')[0].disabled = false;
// document.getElementsByClassName('sqdOP  L3NKy   y3zKF     ')[0].click();

// })


//await page.$eval('input[name=username]',(el,value)=>e.value = "7417139360");
  //await page.type("._2hvTZ.pexuQ.zyHYP", "7417139360");
//   page.click("#btnNext");

//   await page.waitForNavigation();
//   await page.type("#txtLoginPassword", "Kratoswar@123");

//   page.click("#btnLogin");

//   page.waitForNavigation();

//   await page.waitForSelector(".a-uims-nav");

//   const fun = await page.$$eval(".a-uims-nav", (rows) => {
//     for (let v = 0; v < rows.length; v++) {
//       if (rows[v].innerHTML == "Result ( Regular )") {
//         console.log("found");
//         rows[v].click();
//       }
//     }
//   });
//  await page.waitForSelector('#ContentPlaceHolder1_wucResult1_ddlResultType');

// var b = await page.evaluate(()=>{

// var bb = document.getElementById('ContentPlaceHolder1_wucResult1_ddlResultType').value='Session';
// console.log(bb.innerHTML);
//  document.getElementById('ContentPlaceHolder1_wucResult1_btnShowResult').click();

// })


// await page.waitForNavigation();
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
}
