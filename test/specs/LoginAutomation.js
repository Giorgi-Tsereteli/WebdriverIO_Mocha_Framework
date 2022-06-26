describe('Ecommerce Application', async () => {
  // async is not function name. Its needed for await to work.
  it('Invalid Login TC', async () => {
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    await console.log(await browser.getTitle());
    await expect(browser).toHaveTitleContaining('Rahul');
    await $("//input[@name='username']").setValue('qastudent@qa.com');
    await $("//input[@name='username']").setValue('george_qaengineer@gmail.com');
    await $("//*[@id='password']").setValue('somepassword213');
    await $("//*[@id='signInBtn']").click();

    await console.log(await $("//div[contains(@class,'alert-danger')]").getText());
    // await browser.waitUntil(
    //   async () => (await $('#signInBtn').getAttribute('value')) === 'Sign In',
    //   {
    //     timeout: 5000,
    //     timeoutMsg: 'Failed'
    //   }
    // );
    await browser.waitUntil(
      async () =>
        (await $("//div[contains(@class,'alert-danger')]").isDisplayed()) === true,
      {
        timeout: 5000,
        timeoutMsg: 'Failed'
      }
    );
    await console.log(await $("//div[contains(@class,'alert-danger')]").getText());
    await expect($('//p')).toHaveTextContaining('username is rahul');
  }); // end of it 1
  it('Valid Login TC', async () => {
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    await $("//input[@name='username']").setValue('rahulshettyacademy');
    await $("//*[@id='password']").setValue('learning');
    await $("//*[@id='signInBtn']").click();
    await browser.pause(32000); // <-- something wrong with website. Normal waitForExists() does not work. 32000 passes
    // await $('//h1').waitForExist();
    await expect(browser).toHaveTitleContaining('Proto');
    await expect(browser).toHaveUrlContaining('shop');
  }); // end of it2
}); // end of describe

/**
 * In this example you created "describe" and "it" blocks
 * it block acts as a test scenario which includes all code and steps about that TC
 *
 *  - udnerstanding of await, async
 *  - shorthand writing of anonymous function
 *
 *  - launch url
 *  - work with css/xpath
 *  - assert that title contains certain sequence
 *  - enter text
 *  - get text
 *  - basic pause command
 *  - kind of explicit wait using several functions
 *    - timeout, message on fail
 */
