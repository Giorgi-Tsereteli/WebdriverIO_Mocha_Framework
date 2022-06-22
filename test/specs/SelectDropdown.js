describe('Dropdown Automation', async () => {
  it('Select Tag', async () => {
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    const loginDropdown = await $("//select[@class='form-control']");
    await browser.pause(1200);
    await loginDropdown.selectByIndex(2);
    await browser.pause(1200);
    await loginDropdown.selectByVisibleText('Teacher');
    await browser.pause(1200);
    await loginDropdown.selectByAttribute('value', 'stud');
    await browser.pause(2000);
  });
});
