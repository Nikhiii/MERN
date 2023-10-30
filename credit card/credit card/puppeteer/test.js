const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    await page.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html');
    await page.setViewport({
      width: 1200,
      height: 1200,
    })
    await page.waitForSelector('section',{timeout:2000});

    console.log('TESTCASE:section_tag:success');
  } catch (e) {
    console.log('TESTCASE:section_tag:failure');
  }

  const page1 = await browser.newPage();

  try {
    await page1.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html');
    await page1.setViewport({
      width: 1200,
      height: 1200,
    })
    await page1.waitForSelector('div',{timeout:2000});

    console.log('TESTCASE:div_tag:success');
  } catch (e) {
    console.log('TESTCASE:div_tag:failure');
  }

  const page2 = await browser.newPage();

  try {
    await page2.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html');
    await page2.setViewport({
      width: 1200,
      height: 1200,
    })
    await page2.waitForSelector('header',{timeout:2000});


    console.log('TESTCASE:header_tag:success');
  } catch (e) {
    console.log('TESTCASE:header_tag:failure');
  }

  const page3 = await browser.newPage();

  try {
    await page3.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html');
    await page3.setViewport({
      width: 1200,
      height: 1200,
    })
    await page3.waitForSelector('span',{timeout:2000});

    console.log('TESTCASE:span_tag:success');
  } catch (e) {
    console.log('TESTCASE:span_tag:failure');
  }

  const page4 = await browser.newPage();

  try {
    await page4.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html');
    await page4.setViewport({
      width: 1200,
      height: 1200,
    })
    await page4.waitForSelector('img',{timeout:2000});

    console.log('TESTCASE:image_tag:success');
  } catch (e) {
    console.log('TESTCASE:image_tag:failure');
  }


  const page5 = await browser.newPage();

  try {
    await page5.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html');
    await page5.setViewport({
      width: 1200,
      height: 1200,
    })
    await page5.waitForSelector('h5',{timeout:2000});

    console.log('TESTCASE:h5_tag:success');
  } catch (e) {
    console.log('TESTCASE:h5_tag:failure');
  }

  const page6 = await browser.newPage();

  try {
    await page6.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html');
    await page6.setViewport({
      width: 1200,
      height: 1200,
    })
    await page6.waitForSelector('h6',{timeout:2000});

    console.log('TESTCASE:h6_tag:success');
  } catch (e) {
    console.log('TESTCASE:h6_tag:failure');
  }


  const page7 = await browser.newPage();

  try {
    await page7.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); // Replace with your URL
    await page7.setViewport({
      width: 1200,
      height: 1200,
    })
    // Test Case: Check if the content inside the <span> element is present inside the <header> tag.
    const spanContent = await page7.$eval('header .logo', (element) => element.textContent);
    if (spanContent.includes('Master Card')) {
      console.log('Test Case:header_contents:success');
    } else {
      console.log('Test Case:header_contents:failure');
    }
  } catch (e) {
    console.error('Error:', e);
  }


  const page8 = await browser.newPage();

  try {
    await page8.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); // Replace with your URL
    await page8.setViewport({
      width: 1200,
      height: 1200,
    })
    // Test Case 1: Check the contents inside the "name-number" section.
    const nameNumberContent = await page8.$eval('.card-details .name-number', (element) => element.textContent);
    if (nameNumberContent.includes('Card Number') && nameNumberContent.includes('8050 2030 3020 5040') && nameNumberContent.includes('Cristiano Ronaldo')) {
      console.log('Test Case:name_number_contents:success');
    } else {
      console.log('Test Case:name_number_contents:failure');
    }
  } catch (e) {
    console.error('Error:', e);
  }

  const page9 = await browser.newPage();

  try {
    await page9.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); // Replace with your URL
    await page9.setViewport({
      width: 1200,
      height: 1200,
    })
    // Test Case 2: Check the contents inside the "valid-date" section.
    const validDateContent = await page9.$eval('.card-details .valid-date', (element) => element.textContent);
    if (validDateContent.includes('Valid Thru') && validDateContent.includes('05/28')) {
      console.log('Test Case:valid_date_contents:success');
    } else {
      console.log('Test Case:valid_date_contents:failure');
    }

  } catch (e) {
    console.error('Error:', e);
  }



  const page10 = await browser.newPage();
  try {
    await page10.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); 
  
    await page10.setViewport({
      width: 1200,
      height: 1200,
    });
  
    // Check the justify-content property of the body element
    const sectionStyling = await page10.$eval('section', (element) => {
      return getComputedStyle(element).getPropertyValue('position');
    });
    // Verify if the justify-content property matches the expected value ('center')
    if (sectionStyling.trim() === 'relative') {
      console.log('TESTCASE:section_position:success');
    } else {
      console.log('TESTCASE:section_position:failure');
    }
    }catch (e) {
      console.log('An error occurred:', e);
    }

  const page11 = await browser.newPage();
  try {
    await page11.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); 
  
    await page11.setViewport({
      width: 1200,
      height: 1200,
    });
  
    // Check the justify-content property of the body element
    const sectionbackgroundStyling = await page11.$eval('section', (element) => {
      return getComputedStyle(element).getPropertyValue('background');
    });
    // Verify if the justify-content property matches the expected value ('center')
    if (sectionbackgroundStyling.trim().includes('rgb(18, 19, 33)')) {
      console.log('TESTCASE:section_background:success');
    } else {
      console.log('TESTCASE:section_background:failure');
    }
    }catch (e) {
      console.log('An error occurred:', e);
    }
  
  const page12 = await browser.newPage();
  try {
    await page12.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); 
  
    await page12.setViewport({
      width: 1200,
      height: 1200,
    });
  
    // Check the justify-content property of the body element
    const sectionAlignStyling = await page12.$eval('section', (element) => {
      return getComputedStyle(element).getPropertyValue('align-items');
    });
    // Verify if the justify-content property matches the expected value ('center')
    if (sectionAlignStyling.trim() ==='center') {
      console.log('TESTCASE:section_align:success');
    } else {
      console.log('TESTCASE:section_align:failure');
    }
    }catch (e) {
      console.log('An error occurred:', e);
    }
 

    const page13 = await browser.newPage();
  try {
    await page13.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); 
  
    await page13.setViewport({
      width: 1200,
      height: 1200,
    });
  
    // Check the justify-content property of the body element
    const sectionColorStyling = await page13.$eval('section', (element) => {
      return getComputedStyle(element).getPropertyValue('color');
    });
    // Verify if the justify-content property matches the expected value ('center')
    if (sectionColorStyling.trim() ==='rgb(255, 255, 255)') {
      console.log('TESTCASE:section_color:success');
    } else {
      console.log('TESTCASE:section_color:failure');
    }
    }catch (e) {
      console.log('An error occurred:', e);
    }

    const page14 = await browser.newPage();
    try {
      await page14.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); 
    
      await page14.setViewport({
        width: 1200,
        height: 1200,
      });
        const sectionPositionStyling = await page14.evaluate(() => {
          const section = document.querySelector('section');
          const beforeElement = window.getComputedStyle(section, '::before');

          return ({
            "before_transform":beforeElement.getPropertyValue('transform'),

          })
        });
        console.log("sectionPositionStyling",sectionPositionStyling)
      if (sectionPositionStyling.before_transform=="matrix(1, 0, 0, 1, -150, -100)") {
        console.log('TESTCASE:before_transform:success');
      } else {
        console.log('TESTCASE:before_transform:failure');
      }
      }catch (e) {
        console.log('TESTCASE:before_transform:failure');
      }


      const page15 = await browser.newPage();
      try {
        await page15.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); 
      
        await page15.setViewport({
          width: 1200,
          height: 1200,
        });
          const sectionPositionStyling = await page15.evaluate(() => {
            const section = document.querySelector('section');
            const afterElement = window.getComputedStyle(section, '::after');
  
            return ({
              "after_transform":afterElement.getPropertyValue('transform')
  
            })
          });
          console.log("sectionPositionStyling",sectionPositionStyling)
        if (sectionPositionStyling.after_transform=='matrix(1, 0, 0, 1, 150, 100)') {
          console.log('TESTCASE:after_transform:success');
        } else {
          console.log('TESTCASE:after_transform:failure');
        }
        }catch (e) {
          console.log('TESTCASE:after_transform:failure');
        }


      const page16 = await browser.newPage();
      try {
        await page16.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); 
      
        await page16.setViewport({
          width: 1200,
          height: 1200,
        });
      
        // Check the justify-content property of the body element
        const containerStyle = await page16.$eval('.container', (element) => {
          return getComputedStyle(element).getPropertyValue('transform-style');
        });
        // Verify if the justify-content property matches the expected value ('center')
        if (containerStyle.trim() ==='preserve-3d') {
          console.log('TESTCASE:container_transform:success');
        } else {
          console.log('TESTCASE:container_transform:failure');
        }
        }catch (e) {
          console.log('An error occurred:', e);
        }


    const page17 = await browser.newPage();
      try {
        await page17.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); 
      
        await page17.setViewport({
          width: 1200,
          height: 1200,
        });
      
        // Check the justify-content property of the body element
        const containerStyle = await page17.$eval('.container', (element) => {
          return getComputedStyle(element).getPropertyValue('z-index');
        });
        // Verify if the justify-content property matches the expected value ('center')
        if (containerStyle.trim().includes('100')) {
          console.log('TESTCASE:container_z-index:success');
        } else {
          console.log('TESTCASE:container_z-index:failure');
        }
        }catch (e) {
          console.log('An error occurred:', e);
        }

    const page18 = await browser.newPage();
        try {
          await page18.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); 
        
          await page18.setViewport({
            width: 1200,
            height: 1200,
          });
        
          // Check the justify-content property of the body element
          const containerStyle = await page18.$eval('.container', (element) => {
            return getComputedStyle(element).getPropertyValue('transition');
          });
          // Verify if the justify-content property matches the expected value ('center')
          if (containerStyle.trim().includes('0.6s')) {
            console.log('TESTCASE:container_transition:success');
          } else {
            console.log('TESTCASE:container_transition:failure');
          }
          }catch (e) {
            console.log('An error occurred:', e);
          }

       
  const page19 = await browser.newPage();
    try {
      await page19.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/credit%20card/credit%20card/index.html'); 
    
      await page19.setViewport({
        width: 1200,
        height: 1200,
      });
        // Trigger the hover action
    await page19.hover('.container');

    // Wait for a brief moment to allow styles to apply
    await page19.waitForTimeout(1000); // Adjust the timeout as needed

    // Get the computed style of the element after hover
    const containerHoverStyle = await page19.evaluate(() => {
      const container = document.querySelector('.container');
      const computedStyle = window.getComputedStyle(container);
      return {
        transform: computedStyle.getPropertyValue('transform'),
      };
    });

    // Check the transformation matrix or other relevant styles here
    if (containerHoverStyle.transform === 'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)') {
      console.log('TESTCASE:container_hover:success');
    } else {
      console.log('TESTCASE:container_hover:failure');
    }
      }catch (e) {
        console.log('TESTCASE:container_hover:failure');
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
    await page13.close();
    await page14.close();
    await page15.close();
    await page16.close();
    await page17.close();
    await page18.close();
    await page19.close();

    await browser.close();
  }

})();