describe('Switching to Frame', async () => {
  it('TC1', async () => {
    await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    console.log(await $$('//a').length); // 27
    await $("//legend[text()='iFrame Example']").scrollIntoView();
    await browser.switchToFrame(await $("//*[@id='courses-iframe']"));
    console.log(await $$('//a').length); // 100+
    await browser.switchToFrame(null);
    console.log(await $$('//a').length); // 27
    await browser.pause(3000);
  });
});
