describe('Ecommerce Application', async () => {
  // async is not function name. Its needed for await to work.
  it('Login Automation', async () => {
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    await expect(browser).toHaveTitleContaining('Rahul');
    await $("//input[@name='username']").setValue('qastudent@qa.com');
    await $("//input[@name='username']").setValue('george_qaengineer@gmail.com');
    await $("//*[@id='password']").setValue('somepassword213');
    await $("//*[@id='signInBtn']").click();
    await browser.pause(2500);
    const alertMessage = await $("//div[contains(@class,'alert-danger')]").getText();
    await console.log(await browser.getTitle());
    await console.log(alertMessage);
  });
});
