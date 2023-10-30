const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    try {
      await page.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
      await page.setViewport({
        width: 1200,
        height: 1200,
      });
      // Wait for the button element with id "submit" to appear
      await page.waitForSelector('#submit', { timeout: 2000 });
     
      // Check the button's text content
      const buttonText = await page.$eval('#submit', (buttonElement) => {
        return buttonElement.textContent.trim();
      });
    
      // Expected text content
      const expectedText = 'Submit';
    
      // Check if the button's text content matches the expected text
      if (buttonText === expectedText) {
        console.log('TESTCASE:testcase_for_submit_button_text:success');
      } else {
        console.log('TESTCASE:testcase_for_submit_button_text:failure');
      }
    } catch (e) {
      console.log('TESTCASE:testcase_for_submit_button_text:failure');
    }
    
    const page1 = await browser.newPage();

    try {
      await page1.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
      await page1.setViewport({
        width: 1200,
        height: 1200,
      });
    
      // Wait for the first question and its options to appear
      await page1.waitForSelector('.question', { timeout: 2000 });
    
      // Check if the first question text is correct
      const firstQuestionText = await page1.$eval('.question p', (questionElement) => {
        return questionElement.textContent;
      });
    
      // Check if the first question options are correct
      const firstQuestionOptions = await page1.$$eval('.question:first-child .options li', (optionElements) => {
        return optionElements.map((optionElement) => {
          return optionElement.textContent.trim();
        });
      });
      // Expected question and options
      const expectedQuestionText = "What is the capital of France?";
      const expectedOptions = ["Paris", "London", "Berlin", "Madrid"];
    
      // Check if the first question and options match the expected values
      if (firstQuestionText === expectedQuestionText && JSON.stringify(firstQuestionOptions) === JSON.stringify(expectedOptions)) {
        console.log('TESTCASE:testcase_for_first_question_and_options:success');
      } else {
        console.log('TESTCASE:testcase_for_first_question_and_options:failure');
      }
    } catch (e) {
      console.log('TESTCASE:testcase_for_first_question_and_options:failure');
    } 

    const page2 = await browser.newPage();

try {
  // Test for the second question
  await page2.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page2.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the second question and its options to appear
  await page2.waitForSelector('.question:nth-child(2)', { timeout: 2000 });

  // Check if the second question text is correct
  const secondQuestionText = await page2.$eval('.question:nth-child(2) p', (questionElement) => {
    return questionElement.textContent;
  });

  // Check if the second question options are correct
  const secondQuestionOptions = await page2.$$eval('.question:nth-child(2) .options li', (optionElements) => {
    return optionElements.map((optionElement) => {
      return optionElement.textContent.trim();
    });
  });

  // Expected question and options for the second question
  const expectedSecondQuestionText = "Who painted the Mona Lisa?";
  const expectedSecondOptions = ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"];

  // Check if the second question and options match the expected values
  if (secondQuestionText === expectedSecondQuestionText && JSON.stringify(secondQuestionOptions) === JSON.stringify(expectedSecondOptions)) {
    console.log('TESTCASE:testcase_for_second_question_and_options:success');
  } else {
    console.log('TESTCASE:testcase_for_second_question_and_options:failure');
  }

} catch (e) {
  console.log('TESTCASE:testcase_for_second_question_and_options:failure');
} 

const page3 = await browser.newPage();


try{
    
  // Test for the third question
  await page3.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page3.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the third question and its options to appear
  await page3.waitForSelector('.question:nth-child(3)', { timeout: 2000 });

  // Check if the third question text is correct
  const thirdQuestionText = await page3.$eval('.question:nth-child(3) p', (questionElement) => {
    return questionElement.textContent;
  });

  // Check if the third question options are correct
  const thirdQuestionOptions = await page3.$$eval('.question:nth-child(3) .options li', (optionElements) => {
    return optionElements.map((optionElement) => {
      return optionElement.textContent.trim();
    });
  });

  // Expected question and options for the third question
  const expectedThirdQuestionText = "Which planet is known as the Red Planet?";
  const expectedThirdOptions = ["Mars", "Jupiter", "Venus", "Saturn"];

  // Check if the third question and options match the expected values
  if (thirdQuestionText === expectedThirdQuestionText && JSON.stringify(thirdQuestionOptions) === JSON.stringify(expectedThirdOptions)) {
    console.log('TESTCASE:testcase_for_third_question_and_options:success');
  } else {
    console.log('TESTCASE:testcase_for_third_question_and_options:failure');
  }
}
catch(error)
{
    console.log('TESTCASE:testcase_for_third_question_and_options:failure');

}
const page4 = await browser.newPage();

try {
  // Visit the quiz page
  await page4.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page4.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the questions and options to appear
  await page4.waitForSelector('.question', { timeout: 2000 });

  // Choose correct options for all questions
  await page4.click('input[value="Paris"]');
  await page4.click('input[value="Leonardo da Vinci"]');
  await page4.click('input[value="Mars"]');

  // Click the submit button
  await page4.click('#submit');

  // Wait for the result message to appear
  await page4.waitForSelector('#result', { timeout: 2000 });

  // Check if the result message contains the expected text
  const resultText = await page4.$eval('#result', (resultElement) => {
    return resultElement.textContent;
  });

  if (resultText.includes('You scored 3 out of 3 correct!')) {
    console.log('TESTCASE:testcase_for_score_message_with_all_correct_options:success');
  } else {
    console.log('TESTCASE:testcase_for_score_message_with_all_correct_options:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_for_score_message_with_all_correct_options:failure');
} 
const page5 = await browser.newPage();

try {
  // Visit the quiz page
  await page5.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page5.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the questions and options to appear
  await page5.waitForSelector('.question', { timeout: 2000 });

  // Choose correct options for all questions
  await page5.click('input[value="London"]');
  await page5.click('input[value="Leonardo da Vinci"]');
  await page5.click('input[value="Mars"]');

  // Click the submit button
  await page5.click('#submit');

  // Wait for the result message to appear
  await page5.waitForSelector('#result', { timeout: 2000 });

  // Check if the result message contains the expected text
  const resultText = await page5.$eval('#result', (resultElement) => {
    return resultElement.textContent;
  });

  if (resultText.includes('You scored 2 out of 3 correct!')) {
    console.log('TESTCASE:testcase_1_for_score_message_with_incorrect_option_for_question_1:success');
  } else {
    console.log('TESTCASE:testcase_1_for_score_message_with_incorrect_option_for_question_1:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_1_for_score_message_with_incorrect_option_for_question_1:failure');
} 
const page6 = await browser.newPage();

try {
  // Visit the quiz page
  await page6.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page6.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the questions and options to appear
  await page6.waitForSelector('.question', { timeout: 2000 });

  // Choose correct options for all questions
  await page6.click('input[value="Berlin"]');
  await page6.click('input[value="Leonardo da Vinci"]');
  await page6.click('input[value="Mars"]');

  // Click the submit button
  await page6.click('#submit');

  // Wait for the result message to appear
  await page6.waitForSelector('#result', { timeout: 2000 });

  // Check if the result message contains the expected text
  const resultText = await page6.$eval('#result', (resultElement) => {
    return resultElement.textContent;
  });

  if (resultText.includes('You scored 2 out of 3 correct!')) {
    console.log('TESTCASE:testcase_2_for_score_message_with_incorrect_option_for_question_1:success');
  } else {
    console.log('TESTCASE:testcase_2_for_score_message_with_incorrect_option_for_question_1:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_2_for_score_message_with_incorrect_option_for_question_1:failure');
} 
const page7 = await browser.newPage();

try {
  // Visit the quiz page
  await page7.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page7.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the questions and options to appear
  await page7.waitForSelector('.question', { timeout: 2000 });

  // Choose correct options for all questions
  await page7.click('input[value="Madrid"]');
  await page7.click('input[value="Leonardo da Vinci"]');
  await page7.click('input[value="Mars"]');

  // Click the submit button
  await page7.click('#submit');

  // Wait for the result message to appear
  await page7.waitForSelector('#result', { timeout: 2000 });

  // Check if the result message contains the expected text
  const resultText = await page7.$eval('#result', (resultElement) => {
    return resultElement.textContent;
  });

  if (resultText.includes('You scored 2 out of 3 correct!')) {
    console.log('TESTCASE:testcase_3_for_score_message_with_incorrect_option_for_question_1:success');
  } else {
    console.log('TESTCASE:testcase_3_for_score_message_with_incorrect_option_for_question_1:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_3_for_score_message_with_incorrect_option_for_question_1:failure');
} 
const page8 = await browser.newPage();

try {
  // Visit the quiz page
  await page8.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page8.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the questions and options to appear
  await page8.waitForSelector('.question', { timeout: 2000 });

  // Choose correct options for all questions
  await page8.click('input[value="Paris"]');
  await page8.click('input[value="Pablo Picasso"]');
  await page8.click('input[value="Mars"]');

  // Click the submit button
  await page8.click('#submit');

  // Wait for the result message to appear
  await page8.waitForSelector('#result', { timeout: 2000 });

  // Check if the result message contains the expected text
  const resultText = await page8.$eval('#result', (resultElement) => {
    return resultElement.textContent;
  });

  if (resultText.includes('You scored 2 out of 3 correct!')) {
    console.log('TESTCASE:testcase_1_for_score_message_with_incorrect_option_for_question_2:success');
  } else {
    console.log('TESTCASE:testcase_1_for_score_message_with_incorrect_option_for_question_2:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_1_for_score_message_with_incorrect_option_for_question_2:failure');
} 
const page9 = await browser.newPage();

try {
  // Visit the quiz page
  await page9.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page9.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the questions and options to appear
  await page9.waitForSelector('.question', { timeout: 2000 });

  // Choose correct options for all questions
  await page9.click('input[value="Paris"]');
  await page9.click('input[value="Vincent van Gogh"]');
  await page9.click('input[value="Mars"]');

  // Click the submit button
  await page9.click('#submit');

  // Wait for the result message to appear
  await page9.waitForSelector('#result', { timeout: 2000 });

  // Check if the result message contains the expected text
  const resultText = await page9.$eval('#result', (resultElement) => {
    return resultElement.textContent;
  });
  if (resultText.includes('You scored 2 out of 3 correct!')) {
    console.log('TESTCASE:testcase_2_for_score_message_with_incorrect_option_for_question_2:success');
  } else {
    console.log('TESTCASE:testcase_2_for_score_message_with_incorrect_option_for_question_2:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_2_for_score_message_with_incorrect_option_for_question_2:failure');
} 
const page10 = await browser.newPage();

try {
  // Visit the quiz page
  await page10.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page10.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the questions and options to appear
  await page10.waitForSelector('.question', { timeout: 2000 });

  // Choose correct options for all questions
  await page10.click('input[value="Paris"]');
  await page10.click('input[value="Michelangelo"]');
  await page10.click('input[value="Mars"]');

  // Click the submit button
  await page10.click('#submit');

  // Wait for the result message to appear
  await page10.waitForSelector('#result', { timeout: 2000 });

  // Check if the result message contains the expected text
  const resultText = await page10.$eval('#result', (resultElement) => {
    return resultElement.textContent;
  });

  if (resultText.includes('You scored 2 out of 3 correct!')) {
    console.log('TESTCASE:testcase_3_for_score_message_with_incorrect_option_for_question_2:success');
  } else {
    console.log('TESTCASE:testcase_3_for_score_message_with_incorrect_option_for_question_2:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_3_for_score_message_with_incorrect_option_for_question_2:failure');
} const page11 = await browser.newPage();

try {
  // Visit the quiz page
  await page11.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page11.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the questions and options to appear
  await page11.waitForSelector('.question', { timeout: 2000 });

  // Choose correct options for all questions
  await page11.click('input[value="Paris"]');
  await page11.click('input[value="Leonardo da Vinci"]');
  await page11.click('input[value="Jupiter"]');

  // Click the submit button
  await page11.click('#submit');

  // Wait for the result message to appear
  await page11.waitForSelector('#result', { timeout: 2000 });

  // Check if the result message contains the expected text
  const resultText = await page11.$eval('#result', (resultElement) => {
    return resultElement.textContent;
  });

  if (resultText.includes('You scored 2 out of 3 correct!')) {
    console.log('TESTCASE:testcase_1_for_score_message_with_incorrect_option_for_question_3:success');
  } else {
    console.log('TESTCASE:testcase_1_for_score_message_with_incorrect_option_for_question_3:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_1_for_score_message_with_incorrect_option_for_question_3:failure');
} 
const page12 = await browser.newPage();

try {
  // Visit the quiz page
  await page12.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page12.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the questions and options to appear
  await page12.waitForSelector('.question', { timeout: 2000 });

  // Choose correct options for all questions
  await page12.click('input[value="Paris"]');
  await page12.click('input[value="Leonardo da Vinci"]');
  await page12.click('input[value="Venus"]');

  // Click the submit button
  await page12.click('#submit');

  // Wait for the result message to appear
  await page12.waitForSelector('#result', { timeout: 2000 });

  // Check if the result message contains the expected text
  const resultText = await page12.$eval('#result', (resultElement) => {
    return resultElement.textContent;
  });

  if (resultText.includes('You scored 2 out of 3 correct!')) {
    console.log('TESTCASE:testcase_2_for_score_message_with_incorrect_option_for_question_3:success');
  } else {
    console.log('TESTCASE:testcase_2_for_score_message_with_incorrect_option_for_question_3:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_2_for_score_message_with_incorrect_option_for_question_3:failure');
} const page13 = await browser.newPage();

try {
  // Visit the quiz page
  await page13.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page13.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the questions and options to appear
  await page13.waitForSelector('.question', { timeout: 2000 });

  // Choose correct options for all questions
  await page13.click('input[value="Paris"]');
  await page13.click('input[value="Leonardo da Vinci"]');
  await page13.click('input[value="Saturn"]');

  // Click the submit button
  await page13.click('#submit');

  // Wait for the result message to appear
  await page13.waitForSelector('#result', { timeout: 2000 });

  // Check if the result message contains the expected text
  const resultText = await page13.$eval('#result', (resultElement) => {
    return resultElement.textContent;
  });

  if (resultText.includes('You scored 2 out of 3 correct!')) {
    console.log('TESTCASE:testcase_3_for_score_message_with_incorrect_option_for_question_3:success');
  } else {
    console.log('TESTCASE:testcase_3_for_score_message_with_incorrect_option_for_question_3:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_3_for_score_message_with_incorrect_option_for_question_3:failure');
} 
const page14 = await browser.newPage();

try {
  await page14.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page14.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the <h1> element to appear
  await page14.waitForSelector('h1', { timeout: 2000 });

  // Check if the text of the <h1> element is correct
  const h1Text = await page14.$eval('h1', (h1Element) => {
    return h1Element.textContent.trim();
  });

  // Expected text of the <h1> element
  const expectedH1Text = "Quiz Application";

  // Check if the actual text matches the expected text
  if (h1Text === expectedH1Text) {
    console.log('TESTCASE:testcase_for_h1_element:success');
  } else {
    console.log('TESTCASE:testcase_for_h1_element:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_for_h1_element:failure');
} 
const page15 = await browser.newPage();

try {
  await page15.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page15.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for the buttons to appear
  await page15.waitForSelector('button', { timeout: 2000 });

  // Check the color of buttons on page 15
  const buttonColorPage15 = await page15.$$eval('button', (buttons) => {
    return buttons.map((button) => {
      const computedStyle = getComputedStyle(button);
      return computedStyle.color;
    });
  });

  // Expected button text color
  const expectedButtonColor = 'rgb(255, 255, 255)'; // This should match the color property in your CSS

  // Check if the color of buttons on page 15 matches the expected color
  const page15ButtonColorMatch = buttonColorPage15.every((color) => color === expectedButtonColor);

  if (page15ButtonColorMatch) {
    console.log('TESTCASE:testcase_for_button_color:success');
  } else {
    console.log('TESTCASE:testcase_for_button_color:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_for_button_color:failure');
} 

const page16 = await browser.newPage();

try {
  await page16.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page16.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for elements with the specified background color to appear
  await page16.waitForSelector('button', { timeout: 2000 });

  // Check the background color of the button
  const backgroundColor = await page16.$eval('button', (button) => {
    const computedStyle = getComputedStyle(button);
    return computedStyle.backgroundColor;
  });

  // Expected background color
  const expectedBackgroundColor = 'rgb(76, 175, 80)'; // #4CAF50

  if (backgroundColor === expectedBackgroundColor) {
    console.log('TESTCASE:testcase_for_background_color_for_button:success');
  } else {
    console.log('TESTCASE:testcase_for_background_color_for_button:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_for_background_color_for_button:failure');
} 
const page17 = await browser.newPage();

try {
  await page17.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');
  await page17.setViewport({
    width: 1200,
    height: 1200,
  });

  // Wait for elements with the specified text-align style to appear
  await page17.waitForSelector('.container', { timeout: 2000 });

  // Check the text-align style of the container
  const textAlign = await page17.$eval('.container', (container) => {
    const computedStyle = getComputedStyle(container);
    return computedStyle.textAlign;
  });

  // Expected text-align style
  const expectedTextAlign = 'center';

  if (textAlign === expectedTextAlign) {
    console.log('TESTCASE:testcase_for_text_align_style_for_container:success');
  } else {
    console.log('TESTCASE:testcase_for_text_align_style_for_container:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_for_text_align_style_for_container:failure');
}

const page18 = await browser.newPage();

try {
  await page18.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');

  // Wait for the element with class "container" to appear
  await page18.waitForSelector('.container', { timeout: 2000 });

  // Check if the max-width is set to "600px"
  const maxWidth = await page18.$eval('.container', (element) => {
    const computedStyle = getComputedStyle(element);
    return computedStyle.maxWidth;
  });

  if (maxWidth === '600px') {
    console.log('TESTCASE:testcase_for_max_width_for_container:success');
  } else {
    console.log('TESTCASE:testcase_for_max_width_for_container:failure');
  }
} catch (e) {
  console.log('TESTCASE:testcase_for_max_width_for_container:failure');
} 

 const page19 = await browser.newPage();

try {
  await page19.goto('file:///C:/Users/nikhi/Desktop/HtmlCss/MILESTON%201%20COD%20APPROVED/quiz/quiz.html');

  // Wait for the element with the id "result" to appear
  await page19.waitForSelector('#result', { timeout: 2000 });

  console.log('TESTCASE:testcase_for_element_with_id_result:success');
} catch (e) {
  console.log('TESTCASE:testcase_for_element_with_id_result:failure');
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
  }
  
})();