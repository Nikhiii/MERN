const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--headless",
      "--disable-gpu",
      "--remote-debugging-port=9222",
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  });
  const page = await browser.newPage();
  try {
    // Test Case: Check the "pagetop" section
    await page.goto("https://api.example.com/");
    await page.setViewport({
        width: 1200,
        height: 800,
      });

      await page.waitForSelector('h1', { timeout: 2000 });
      await page.waitForSelector('form', { timeout: 2000 });

      const header = await page.$eval('h1', (element) => element.textContent);

      if (header === 'Daily Health Tracker') {
        console.log("TESTCASE:header_and_form_tag_presence:success");
      } else {
        console.log("TESTCASE:header_and_form_tag_presence:failure");
      }
   
    }catch(e){
        console.log("TESTCASE:header_and_form_tag_presence:failure")
    }


  const page1 = await browser.newPage();
  try {
    await page1.goto("https://api.example.com/");
    await page1.setViewport({
      width: 1200,
      height: 800,
    });
      // Wait for the form to load
      await page1.waitForSelector('.activity-form', { timeout: 2000 });

      await page1.waitForFunction(() => {
        return document.querySelector('#activity').value === '' &&
               document.querySelector('#duration').value === '' &&
               document.querySelector('#weight').value === '';
      });

      // Check if the form fields have been reset or cleared
      const activityValue = await page1.$eval('#activity', (input) => input.value);
      const durationValue = await page1.$eval('#duration', (input) => input.value);
      const weightValue = await page1.$eval('#weight', (input) => input.value);
  
      if (activityValue === '' && durationValue === '' && weightValue === '') {
        console.log("TESTCASE:form_submission:success");
      } else {
        console.log("TESTCASE:form_submission:failure");
      }
  } catch (e) {
    console.log("TESTCASE:form_submission:failure");
  }

  const page2 = await browser.newPage();
  try {
    await page2.goto("https://api.example.com/");
    await page2.setViewport({
      width: 1200,
      height: 800,
    });
    await page2.waitForSelector('div', { timeout: 2000 });
    await page2.waitForSelector('ul', { timeout: 2000 });
    await page2.waitForSelector('#activities', { timeout: 2000 });
     // Check for the presence of the "Your Activities" section
     const activitiesSection = await page2.$eval('.activity-list h2', (element) => element.textContent);

     if (activitiesSection === 'Your Activities:') {
       console.log("TESTCASE:activities_section_presence:success");
     } else {
       console.log("TESTCASE:activities_section_presence:failure");
     }

    } catch (e) {
        console.log("TESTCASE:activities_section_presence:failure");
    }


    const page3 = await browser.newPage();
    try {
      await page3.goto("https://api.example.com/");
      await page3.setViewport({
        width: 1200,
        height: 800,
      });

    await page3.waitForSelector('section', { timeout: 2000 });
    await page3.waitForSelector('p', { timeout: 2000 });

      // Check for the presence of the "Calories Burnt" section
    const caloriesBurntSection = await page3.$eval('.calories-burnt h2', (element) => element.textContent);

    if (caloriesBurntSection === 'Calories Burnt:') {
      console.log("TESTCASE:calories_burnt_section_presence:success");
    } else {
      console.log("TESTCASE:calories_burnt_section_presence:failure");
    }

    } catch (e) {
      console.log("TESTCASE:calories_burnt_section_presence:failure");
    }

    const page4 = await browser.newPage();
    try {
      await page4.goto("https://api.example.com/");
      await page4.setViewport({
        width: 1200,
        height: 800,
    });

    await page4.waitForSelector('div', { timeout: 2000 });
    await page4.waitForSelector('p', { timeout: 2000 });
   // Check for the presence of the "Your Health Status" section
   const healthStatusSection = await page4.$eval('#health-status-text', (element) => element.textContent);

   if (healthStatusSection === 'Health status will be displayed here.') {
     console.log("TESTCASE:health_status_section_presence:success");
   } else {
     console.log("TESTCASE:health_status_section_presence:failure");
   }

    } catch (e) {
      console.log("TESTCASE:health_status_section_presence:failure");
    }

    const page5 = await browser.newPage();
    try {
      await page5.goto("https://api.example.com/");
      await page5.setViewport({
        width: 1200,
        height: 800,
    });

   // Check the computed styles of the h1 element
        const h1Styles = await page5.evaluate(() => {
            const h1 = document.querySelector('h1');
            return {
            backgroundColor: window.getComputedStyle(h1).backgroundColor,
            color: window.getComputedStyle(h1).color,
            padding: window.getComputedStyle(h1).padding,
            textAlign: window.getComputedStyle(h1).textAlign,
            };
        });
        
        // Now, you can compare the computed styles with your expected styles.
        if (
            h1Styles.backgroundColor === 'rgb(52, 152, 219)' &&
            h1Styles.color === 'rgb(255, 255, 255)' &&
            h1Styles.padding === '20px' &&
            h1Styles.textAlign === 'center'
        ) {
            console.log("TESTCASE:h1_styles:success");
        } else {
            console.log("TESTCASE:h1_styles:failure");
        }  
        } catch (e) {
            console.log("TESTCASE:h1_styles:failure");
        }

    const page6 = await browser.newPage();
    try {
      await page6.goto("https://api.example.com/");
      await page6.setViewport({
        width: 1200,
        height: 800,
    });

    // Check the computed styles of the h1 element
    const activityForm = await page6.evaluate(() => {
        const form = document.querySelector('.activity-form');
        return {
            margin: window.getComputedStyle(form).margin,
            align: window.getComputedStyle(form).textAlign,
        };
    });    
    // Now, you can compare the computed styles with your expected styles.
    if (
        activityForm.margin === '20px' &&
        activityForm.align === 'center' 
        ) {
        console.log("TESTCASE:activityForm_styles:success");
    } else {
        console.log("TESTCASE:activityForm_styles:failure");
    }  

    } catch (e) {
      console.log("TESTCASE:activityForm_styles:failure");
    }

    const page7 = await browser.newPage();
    try {
      await page7.goto("https://api.example.com/");
      await page7.setViewport({
        width: 1200,
        height: 800,
    });
    // Check the computed styles of the h1 element
    const activityForm = await page7.evaluate(() => {
        const form = document.querySelector('.activity-form label');
        return {
            display: window.getComputedStyle(form).display,
            margin: window.getComputedStyle(form).marginBottom,
            width: window.getComputedStyle(form).width,
            align: window.getComputedStyle(form).textAlign,
        };
    });

    // Now, you can compare the computed styles with your expected styles.
    if (
        activityForm.display === 'inline-block' &&
        activityForm.margin === '5px' &&
        activityForm.width === '348px' &&
        activityForm.align === 'right' 
        ) {
        console.log("TESTCASE:activityForm_label_styles:success");
    } else {
        console.log("TESTCASE:activityForm_label_styles:failure");
    }  
    } catch (e) {
      console.log("TESTCASE:activityForm_label_styles:failure");
    }

    const page8 = await browser.newPage();
    try {
      await page8.goto("https://api.example.com/");
      await page8.setViewport({
        width: 1200,
        height: 800,
    });
 // Check the computed styles of the h1 element
 const activityForm = await page8.evaluate(() => {
    const form = document.querySelector('.activity-form input');
    return {
        display: window.getComputedStyle(form).display,
        margin: window.getComputedStyle(form).marginBottom,
        width: window.getComputedStyle(form).width,
        padding: window.getComputedStyle(form).padding,
        border: window.getComputedStyle(form).border,
        borderRadius: window.getComputedStyle(form).borderRadius,

    };
    });

    // Now, you can compare the computed styles with your expected styles.
    if (
        activityForm.display === 'inline-block' &&
        activityForm.margin === '10px' &&
        activityForm.width === '742.391px' &&
        activityForm.padding === '5px'&&
        activityForm.border === '1px solid rgb(204, 204, 204)'&&
        activityForm.borderRadius === '5px' 

        ) {
        console.log("TESTCASE:activityForm_input_styles:success");
    } else {
        console.log("TESTCASE:activityForm_input_styles:failure");
    }  
        
    } catch (e) {
      console.log("TESTCASE:activityForm_input_styles:failure");
    }

    const page9 = await browser.newPage();
    try {
      await page9.goto("https://api.example.com/");
      await page9.setViewport({
        width: 1200,
        height: 800,
    });
 // Check the computed styles of the h1 element
 const activityList = await page9.evaluate(() => {
    const lsit = document.querySelector('.activity-list');
    return {
        backgroundColor: window.getComputedStyle(lsit).backgroundColor,
        padding: window.getComputedStyle(lsit).padding,
        borderRadius: window.getComputedStyle(lsit).borderRadius,
        boxShadow: window.getComputedStyle(lsit).boxShadow,
        margin: window.getComputedStyle(lsit).margin,

    };
    });

    // Now, you can compare the computed styles with your expected styles.
    if (
        activityList.backgroundColor === 'rgb(255, 255, 255)' &&
        activityList.margin === '20px' &&
        activityList.boxShadow === 'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px' &&
        activityList.padding === '20px'&&
        activityList.borderRadius === '5px' 

        ) {
        console.log("TESTCASE:activityList_styles:success");
    } else {
        console.log("TESTCASE:activityList_styles:failure");
    }  
        
    } catch (e) {
      console.log("TESTCASE:activityList_styles:failure");
    }

    const page10 = await browser.newPage();
    try {
      await page10.goto("https://api.example.com/");
      await page10.setViewport({
        width: 1200,
        height: 800,
    });
    // Check the computed styles of the h1 element
    const health = await page10.evaluate(() => {
    const status = document.querySelector('.calories-burnt, .health-status');
    return {
        display: window.getComputedStyle(status).display,
        width: window.getComputedStyle(status).width,
        boxSizing: window.getComputedStyle(status).boxSizing,
        textAlign: window.getComputedStyle(status).textAlign,
    };
    });
    // Now, you can compare the computed styles with your expected styles.
    if (
        health.display === 'block' &&
        health.width === '600px' &&
        health.boxSizing === 'border-box' &&
        health.textAlign === 'center'
        ) {
        console.log("TESTCASE:calories_health_styles:success");
    } else {
        console.log("TESTCASE:calories_health_styles:failure");
    }    
    } catch (e) {
      console.log("TESTCASE:calories_health_styles:failure");
    }

    const page11 = await browser.newPage();
    try {
      await page11.goto("https://api.example.com/");
      await page11.setViewport({
        width: 1200,
        height: 800,
    });
    // Fill out the form with valid data
    await page11.type('#activity', 'Running');
    await page11.type('#duration', '30');
    await page11.type('#weight', '70');
    await page11.click('#add-activity');

    // Check if any activity and duration are added to the list
    const activitiesList = await page11.$eval('#activities', (element) => element.textContent);

    if (/\w+ - \d+ minutes/.test(activitiesList)) {
    console.log("TESTCASE:Add_Activity:success");
    } else {
    console.log("TESTCASE:Add_Activity:failure");
    }
    } catch (e) {
      console.log("TESTCASE:Add_Activity:failure");
    }


    const page12 = await browser.newPage();
    try {
      await page12.goto("https://api.example.com/");
      await page12.setViewport({
        width: 1200,
        height: 800,
    });
   // Add an activity
    await page12.type('#activity', 'Running');
    await page12.type('#duration', '30');
    await page12.type('#weight', '70');
    await page12.click('#add-activity');

    // Delete the added activity
    await page12.click('#activities button');

    // Check if the activity is removed from the list
    const activitiesList = await page12.$eval('#activities', (element) => element.textContent);
    if (!activitiesList.includes('Running - 30 minutes')) {
    console.log("TESTCASE:Delete_Activity:success");
    } else {
    console.log("TESTCASE:Delete_Activity:failure");
    }
    } catch (e) {
      console.log("TESTCASE:Delete_Activity:failure");
    }


   finally {
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
    await browser.close();
  }
})();
