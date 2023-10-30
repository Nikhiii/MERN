const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    try{
      await page.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/employee%20registration%20form/index.html');
      await page.setViewport({
        width:1200,
        height:1200,
      })
      await page.waitForSelector('div');
      await page.waitForSelector('h1');
      await page.waitForSelector('form');
      await page.waitForSelector('label');
      await page.waitForSelector('input');

      const result1 = await page.evaluate(()=>{
        let heading = document.querySelector(".container");
        return heading.innerHTML;
      })
      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector(".form-title");
        return heading.innerHTML;
      })
   
      console.log('TESTCASE:Basic_tags:success');
    }
    catch(e){
      console.log('TESTCASE:Basic_tags:failure');
    }
    
    const page1 = await browser.newPage();
    try{
      await page1.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/employee%20registration%20form/index.html');
      await page1.setViewport({
        width:1200,
        height:800,
      })
      
    const result1 = await page1.evaluate(()=>{
        let heading = document.querySelector("#fullName");
        return heading.innerHTML;
    })
    const result2 = await page1.evaluate(()=>{
        let heading = document.querySelector("#username");
        return heading.innerHTML;
    })
    const result3 = await page1.evaluate(()=>{
        let heading = document.querySelector("#email");
        return heading.innerHTML;
    })
      console.log('TESTCASE:Id_names1:success');
    }
    catch(e){
      console.log('TESTCASE:Id_names1:failure');
    } 

    const page2 = await browser.newPage();
    try{
      await page2.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/employee%20registration%20form/index.html');
      await page2.setViewport({
        width:1200,
        height:800,
      })
      
    const result1 = await page2.evaluate(()=>{
        let heading = document.querySelector("#phoneNumber");
        return heading.innerHTML;
    })
    const result2 = await page2.evaluate(()=>{
        let heading = document.querySelector("#password");
        return heading.innerHTML;
    })
    const result3 = await page2.evaluate(()=>{
        let heading = document.querySelector("#confirmPassword");
        return heading.innerHTML;
    })
      
      console.log('TESTCASE:Id_names2:success');
    }
    catch(e){
      console.log('TESTCASE:Id_names2:failure');
    }

  const page3 = await browser.newPage();
  try{
    await page3.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/employee%20registration%20form/index.html');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('span'); 

    const result1 = await page3.evaluate(()=>{
        let heading = document.querySelector("#male");
        return heading.innerHTML;
    })
    const result2 = await page3.evaluate(()=>{
        let heading = document.querySelector("#female");
        return heading.innerHTML;
    })
    console.log('TESTCASE:gender_id:success');
  }
  catch(e){
    console.log('TESTCASE:gender_id:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/employee%20registration%20form/index.html');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    await page4.waitForSelector('button'); 

    const result1 = await page4.evaluate(()=>{
        let heading = document.querySelector("#other");
        return heading.innerHTML;
    })
    const result2 = await page4.evaluate(()=>{
      let heading = document.querySelector("#bio");
      return heading.innerHTML;
    })
    const result3 = await page4.evaluate(()=>{
      let heading = document.querySelector("#profilePicture");
      return heading.innerHTML;
    })
  
    console.log('TESTCASE:Id_names3:success');
  }
  catch(e){
    console.log('TESTCASE:Id_names3:failure');
  }


  // JAVASCRIPT

  const page5 = await browser.newPage();

  try {
    await page5.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/employee%20registration%20form/index.html'); // Replace with the URL of your HTML form
    await page5.setViewport({
      width: 1200,
      height: 1200,
    });
    await page5.waitForSelector('form');

    // Test Case 2: Submit the form with an invalid email
    await page5.type('#email', 'invalid-email');
    await page5.click('form button[type="submit"]');
    await page5.waitForSelector('.error-message');
    console.log('TESTCASE:testcase2:failure');

  } catch (e) {
    console.log('TESTCASE:testcase2:success');
  } 

  const page6 = await browser.newPage();

  try {
    await page6.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/employee%20registration%20form/index.html'); // Replace with the URL of your HTML form
  
      // Test Case: Invalid full name (contains numbers)
      await page.type('#fullName', 'John123');
      await page.click('form button[type="submit"]');
      await page.waitForSelector('.error-message');
      console.log('TESTCASE:testcase1:failure');
  
    } catch (e) {
      console.error('Error:', e);
    }


  
  finally{
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await browser.close();
  }
  
})();