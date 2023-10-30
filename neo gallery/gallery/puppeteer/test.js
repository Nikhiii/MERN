const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    try{
      await page.goto('https://api.example.com/');
      await page.setViewport({
        width:1200,
        height:1200,
      })
      await page.waitForSelector('div',{timeout: 2000});
      await page.waitForSelector('h1',{timeout: 2000});
      await page.waitForSelector('img',{timeout: 2000});
      await page.waitForSelector('p',{timeout: 2000});
   
      console.log('TESTCASE:div_h1_image_and_paragraph_tags:success');
    }
    catch(e){
      console.log('TESTCASE:div_h1_image_and_paragraph_tags:failure');
    }
    
    const page1 = await browser.newPage();
    try{
      await page1.goto('https://api.example.com/');
      await page1.setViewport({
        width:1200,
        height:800,
      })
      const result1 = await page.evaluate(()=>{
        let heading = document.querySelector("#card");
        return heading.innerHTML;
      })
      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#grid-container");
        return heading.innerHTML;
      })
      const result3 = await page1.evaluate(()=>{
        let heading = document.querySelector("#grid-item-1");
        return heading.innerHTML;
      })
      const result4 = await page1.evaluate(()=>{
        let heading = document.querySelector("#grid-item-2");
        return heading.innerHTML;
      })
      const result5 = await page1.evaluate(()=>{
          let heading = document.querySelector("#grid-item-3");
          return heading.innerHTML;
      })
      const result6 = await page1.evaluate(()=>{
          let heading = document.querySelector("#grid-item-4");
          return heading.innerHTML;
      })
      const result7 = await page1.evaluate(()=>{
        let heading = document.querySelector("#grid-item-5");
        return heading.innerHTML;
      })
      const result8 = await page1.evaluate(()=>{
        let heading = document.querySelector("#grid-item-6");
        return heading.innerHTML;
      })
      const result9 = await page1.evaluate(()=>{
        let heading = document.querySelector("#grid-item-7");
        return heading.innerHTML;
      })
      const result10 = await page1.evaluate(()=>{
        let heading = document.querySelector("#grid-item-8");
        return heading.innerHTML;
      })
      const result11 = await page1.evaluate(()=>{
        let heading = document.querySelector("#grid-item-9");
        return heading.innerHTML;
      })
      const result12 = await page1.evaluate(()=>{
        let heading = document.querySelector("#grid-item-10");
        return heading.innerHTML;
      })

      console.log('TESTCASE:grid_ids:success');
    }
    catch(e){
      console.log('TESTCASE:grid_ids:failure');
    } 

    // JAVASCRIPT
      const page2 = await browser.newPage();
      try {
        await page2.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

      await page2.waitForSelector('#grid-item-1',{"timeout":2000}); // Wait for the associated text to be visible

      await page2.click('#grid-item-1'); 
    const displayPropertyValue = await page2.$eval('#grid-item-1 p', (pElement) => {
      const computedStyle = getComputedStyle(pElement);
      return computedStyle.getPropertyValue('display');
    });

    if (displayPropertyValue=="block") {
      console.log('TESTCASE:grid_item1:success');
    } else {
      console.log('TESTCASE:grid_item1:failure');
    }
    } catch (e) {
      console.log('Error:', e);
    }
    
  const page3 = await browser.newPage();
    try {
        await page3.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

    await page3.waitForSelector('#grid-item-1',{"timeout":2000}); // Wait for the associated text to be visible

    await page3.click('#grid-item-1'); 
    const displayProperty = await page3.$eval('#grid-item-1 p', (pElement) => {
    
      return pElement.innerText;
    });

    if (displayProperty==`"I'm so happy today!"`) {
      console.log('TESTCASE:grid_item1_content:success');
    } else {
      console.log('TESTCASE:grid_item1_content:failure');
    }
    } catch (e) {
    console.log('Error:', e);
    }

  const page4 = await browser.newPage();
      try {
        await page4.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

      await page4.waitForSelector('#grid-item-2',{"timeout":2000}); // Wait for the associated text to be visible

      await page4.click('#grid-item-2'); 
    const displayPropertyValue = await page4.$eval('#grid-item-2 p', (pElement) => {
      const computedStyle = getComputedStyle(pElement);
      return computedStyle.getPropertyValue('display');
    });

    if (displayPropertyValue=="block") {
      console.log('TESTCASE:grid_item2:success');
    } else {
      console.log('TESTCASE:grid_item2:failure');
    }
  } catch (e) {
    console.log('Error:', e);
  }

  const page5 = await browser.newPage();
  try {
      await page5.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

    await page5.waitForSelector('#grid-item-2',{"timeout":2000}); // Wait for the associated text to be visible

    await page5.click('#grid-item-2');

    const displayProperty = await page5.$eval('#grid-item-2 p', (pElement) => {

      return pElement.innerText;
    });

    if (displayProperty==`"I see those nugs."`) {
      console.log('TESTCASE:grid_item2_content:success');
    } else {
      console.log('TESTCASE:grid_item2_content:failure');
    }
    } catch (e) {
    console.log('Error:', e);
    }
  
    const page6 = await browser.newPage();
    try {
      await page6.goto('https://api.example.com/', {
    waitUntil: 'domcontentloaded',
  });

    await page6.waitForSelector('#grid-item-3',{"timeout":2000}); // Wait for the associated text to be visible

    await page6.click('#grid-item-3'); 
  const displayPropertyValue = await page6.$eval('#grid-item-3 p', (pElement) => {
    const computedStyle = getComputedStyle(pElement);
    return computedStyle.getPropertyValue('display');
  });

    if (displayPropertyValue=="block") {
      console.log('TESTCASE:grid_item3:success');
    } else {
      console.log('TESTCASE:grid_item3:failure');
    }
  } catch (e) {
    console.log('Error:', e);
  }


  const page7 = await browser.newPage();
  try {
      await page7.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

    await page7.waitForSelector('#grid-item-3',{"timeout":2000}); // Wait for the associated text to be visible

    await page7.click('#grid-item-3');

    const displayProperty = await page7.$eval('#grid-item-3 p', (pElement) => {

      return pElement.innerText;
    });

    if (displayProperty==`"I love you so much!"`) {
      console.log('TESTCASE:grid_item3_content:success');
    } else {
      console.log('TESTCASE:grid_item3_content:failure');
    }
    } catch (e) {
    console.log('Error:', e);
    }

    const page8 = await browser.newPage();
    try {
      await page8.goto('https://api.example.com/', {
    waitUntil: 'domcontentloaded',
  });

    await page8.waitForSelector('#grid-item-4',{"timeout":2000}); // Wait for the associated text to be visible

    await page8.click('#grid-item-4'); 
  const displayPropertyValue = await page8.$eval('#grid-item-4 p', (pElement) => {
    const computedStyle = getComputedStyle(pElement);
    return computedStyle.getPropertyValue('display');
  });

    if (displayPropertyValue=="block") {
      console.log('TESTCASE:grid_item4:success');
    } else {
      console.log('TESTCASE:grid_item4:failure');
    }
  } catch (e) {
    console.log('Error:', e);
  }

  const page9 = await browser.newPage();
  try {
      await page9.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

    await page9.waitForSelector('#grid-item-4',{"timeout":2000}); // Wait for the associated text to be visible

    await page9.click('#grid-item-4');

    const displayProperty = await page9.$eval('#grid-item-4 p', (pElement) => {

      return pElement.innerText;
    });

    if (displayProperty==`"I'm the baby of the house!"`) {
      console.log('TESTCASE:grid_item4_content:success');
    } else {
      console.log('TESTCASE:grid_item4_content:failure');
    }
    } catch (e) {
    console.log('Error:', e);
    }

    const page10 = await browser.newPage();
    try {
      await page10.goto('https://api.example.com/', {
    waitUntil: 'domcontentloaded',
  });

    await page10.waitForSelector('#grid-item-5',{"timeout":2000}); // Wait for the associated text to be visible

    await page10.click('#grid-item-5'); 
  const displayPropertyValue = await page10.$eval('#grid-item-5 p', (pElement) => {
    const computedStyle = getComputedStyle(pElement);
    return computedStyle.getPropertyValue('display');
  });

    if (displayPropertyValue=="block") {
      console.log('TESTCASE:grid_item5:success');
    } else {
      console.log('TESTCASE:grid_item5:failure');
    }
  } catch (e) {
    console.log('Error:', e);
  }


  const page11 = await browser.newPage();
  try {
      await page11.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

    await page11.waitForSelector('#grid-item-5',{"timeout":2000}); // Wait for the associated text to be visible

    await page11.click('#grid-item-5');

    const displayProperty = await page11.$eval('#grid-item-5 p', (pElement) => {

      return pElement.innerText;
    });

    if (displayProperty==`"Are you gunna throw the ball?"`) {
      console.log('TESTCASE:grid_item5_content:success');
    } else {
      console.log('TESTCASE:grid_item5_content:failure');
    }
    } catch (e) {
    console.log('Error:', e);
    }

    const page12 = await browser.newPage();
    try {
      await page12.goto('https://api.example.com/', {
    waitUntil: 'domcontentloaded',
  });

    await page12.waitForSelector('#grid-item-6',{"timeout":2000}); // Wait for the associated text to be visible

    await page12.click('#grid-item-6'); 
  const displayPropertyValue = await page12.$eval('#grid-item-6 p', (pElement) => {
    const computedStyle = getComputedStyle(pElement);
    return computedStyle.getPropertyValue('display');
  });

    if (displayPropertyValue=="block") {
      console.log('TESTCASE:grid_item6:success');
    } else {
      console.log('TESTCASE:grid_item6:failure');
    }
  } catch (e) {
    console.log('Error:', e);
  }

  const page13 = await browser.newPage();
  try {
      await page13.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

    await page13.waitForSelector('#grid-item-6',{"timeout":2000}); // Wait for the associated text to be visible

    await page13.click('#grid-item-6');

    const displayProperty = await page13.$eval('#grid-item-6 p', (pElement) => {

      return pElement.innerText;
    });

    if (displayProperty==`"C'mon friend!"`) {
      console.log('TESTCASE:grid_item6_content:success');
    } else {
      console.log('TESTCASE:grid_item6_content:failure');
    }
    } catch (e) {
    console.log('Error:', e);
    }

    const page14 = await browser.newPage();
    try {
      await page14.goto('https://api.example.com/', {
    waitUntil: 'domcontentloaded',
  });

    await page14.waitForSelector('#grid-item-7',{"timeout":2000}); // Wait for the associated text to be visible

    await page14.click('#grid-item-7'); 
  const displayPropertyValue = await page14.$eval('#grid-item-7 p', (pElement) => {
    const computedStyle = getComputedStyle(pElement);
    return computedStyle.getPropertyValue('display');
  });

    if (displayPropertyValue=="block") {
      console.log('TESTCASE:grid_item7:success');
    } else {
      console.log('TESTCASE:grid_item7:failure');
    }
  } catch (e) {
    console.log('Error:', e);
  }

  const page15 = await browser.newPage();
  try {
      await page15.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

    await page15.waitForSelector('#grid-item-7',{"timeout":2000}); // Wait for the associated text to be visible

    await page15.click('#grid-item-7');

    const displayProperty = await page15.$eval('#grid-item-7 p', (pElement) => {

      return pElement.innerText;
    });

    if (displayProperty==`"A rose for mommy!"`) {
      console.log('TESTCASE:grid_item7_content:success');
    } else {
      console.log('TESTCASE:grid_item7_content:failure');
    }
    } catch (e) {
    console.log('Error:', e);
    }

    const page16 = await browser.newPage();
    try {
      await page16.goto('https://api.example.com/', {
    waitUntil: 'domcontentloaded',
  });

    await page16.waitForSelector('#grid-item-8',{"timeout":2000}); // Wait for the associated text to be visible

    await page16.click('#grid-item-8'); 
  const displayPropertyValue = await page16.$eval('#grid-item-8 p', (pElement) => {
    const computedStyle = getComputedStyle(pElement);
    return computedStyle.getPropertyValue('display');
  });

    if (displayPropertyValue=="block") {
      console.log('TESTCASE:grid_item8:success');
    } else {
      console.log('TESTCASE:grid_item8:failure');
    }
  } catch (e) {
    console.log('Error:', e);
  }

  const page17 = await browser.newPage();
  try {
      await page17.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

    await page17.waitForSelector('#grid-item-8',{"timeout":2000}); // Wait for the associated text to be visible

    await page17.click('#grid-item-8');

    const displayProperty = await page17.$eval('#grid-item-8 p', (pElement) => {

      return pElement.innerText;
    });

    if (displayProperty==`"You gunna finish that?"`) {
      console.log('TESTCASE:grid_item8_content:success');
    } else {
      console.log('TESTCASE:grid_item8_content:failure');
    }
    } catch (e) {
    console.log('Error:', e);
    }

    const page18 = await browser.newPage();
    try {
      await page18.goto('https://api.example.com/', {
    waitUntil: 'domcontentloaded',
  });

    await page18.waitForSelector('#grid-item-9',{"timeout":2000}); // Wait for the associated text to be visible

    await page18.click('#grid-item-9'); 
  const displayPropertyValue = await page18.$eval('#grid-item-9 p', (pElement) => {
    const computedStyle = getComputedStyle(pElement);
    return computedStyle.getPropertyValue('display');
  });

    if (displayPropertyValue=="block") {
      console.log('TESTCASE:grid_item9:success');
    } else {
      console.log('TESTCASE:grid_item9:failure');
    }
  } catch (e) {
    console.log('Error:', e);
  }


  const page19 = await browser.newPage();
  try {
      await page19.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

    await page19.waitForSelector('#grid-item-9',{"timeout":2000}); // Wait for the associated text to be visible

    await page19.click('#grid-item-9');

    const displayProperty = await page19.$eval('#grid-item-9 p', (pElement) => {

      return pElement.innerText;
    });

    if (displayProperty==`"We can't afford a cat!"`) {
      console.log('TESTCASE:grid_item9_content:success');
    } else {
      console.log('TESTCASE:grid_item9_content:failure');
    }
    } catch (e) {
    console.log('Error:', e);
    }

    const page20 = await browser.newPage();
    try {
      await page20.goto('https://api.example.com/', {
    waitUntil: 'domcontentloaded',
  });

    await page20.waitForSelector('#grid-item-10',{"timeout":2000}); // Wait for the associated text to be visible

    await page20.click('#grid-item-10'); 
  const displayPropertyValue = await page20.$eval('#grid-item-10 p', (pElement) => {
    const computedStyle = getComputedStyle(pElement);
    return computedStyle.getPropertyValue('display');
  });

    if (displayPropertyValue=="block") {
      console.log('TESTCASE:grid_item10:success');
    } else {
      console.log('TESTCASE:grid_item10:failure');
    }
  } catch (e) {
    console.log('Error:', e);
  }

  const page21 = await browser.newPage();
  try {
      await page21.goto('https://api.example.com/', {
      waitUntil: 'domcontentloaded',
    });

    await page21.waitForSelector('#grid-item-10',{"timeout":2000}); // Wait for the associated text to be visible

    await page21.click('#grid-item-10');

    const displayProperty = await page21.$eval('#grid-item-10 p', (pElement) => {

      return pElement.innerText;
    });

    if (displayProperty==`"Dis my fren!"`) {
      console.log('TESTCASE:grid_item10_content:success');
    } else {
      console.log('TESTCASE:grid_item10_content:failure');
    }
    } catch (e) {
    console.log('Error:', e);
    }

    const page22 = await browser.newPage();
    try {
        await page22.goto('https://api.example.com/', {
        waitUntil: 'domcontentloaded',
      });
  
      const bodyStyles = await page22.evaluate(() => {
        const bodyElement = document.querySelector('body');
        const computedStyles = window.getComputedStyle(bodyElement);
  
        return {
          display: computedStyles.getPropertyValue('display'),
          justifyContent: computedStyles.getPropertyValue('justify-content'),
          alignItems: computedStyles.getPropertyValue('align-items'),
          flexDirection: computedStyles.getPropertyValue('flex-direction'),
        };
      });
  
      // Define the expected styles
      const expectedStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      };
  
      // Compare the computed styles with the expected styles
      if (
        JSON.stringify(bodyStyles) === JSON.stringify(expectedStyles)
      ) {
        console.log('TESTCASE:styling:success');
      } else {
        console.log('TESTCASE:styling:failure');
      }
      } catch (e) {
      console.log('Error:', e);
      }

      const page23 = await browser.newPage();
      try {
          await page23.goto('https://api.example.com/', {
        waitUntil: 'domcontentloaded',
      });
    
      await page23.waitForSelector('h1');

      // Test Case: Check the content of the <h1> element.
      const h1Content = await page23.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1.textContent;
      });
  
      // Define the expected content you want to check against.
      const expectedContent = 'The Purest of Doggos'; // Replace with the expected content.
  
      if (h1Content === expectedContent) {
        console.log('TESTCASE:h1_content:success');
      } else {
        console.log('TESTCASE:h1_content:failure');
      }
      } catch (e) {
      console.log('Error:', e);
      }

  finally{
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await page6.close();
    await page7.close();
    await page8.close();
    await page9.close();
    await page10.close();
    await page11.close();
    await page12.close();
    await page13.close();
    await page14.close();
    await page15.close();
    await page16.close();
    await page17.close();
    await page18.close();
    await page19.close();
    await page20.close();
    await page21.close();
    await page22.close();
    await page23.close();

    await browser.close();
  }
  
})();