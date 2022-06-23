describe('Practice Page', async () => {
  it('Auto Suggest Dropdown', async () => {
    await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    await $("//*[@id='autocomplete']").setValue('ind');
    //await browser.pause(1000);
    let items = await $$("//ul[@id='ui-id-1']/li/div");
    for (let i = 0; i < (await items.length); i++) {
      if ((await items[i].getText()) === 'India') {
        await items[i].click();
        break;
      }
    }
    await browser.pause(5000);
  });
  it('Auto Suggest Dropdown', async () => {
    await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    const checkboxOne = await $("//*[@id='checkBoxOption1']");
    const checkboxTwo = await $("//*[@id='checkBoxOption2']");
    await checkboxOne.click();
    console.log('----1----- ' + (await checkboxOne.isSelected()));
    console.log(await checkboxTwo.isSelected());
    console.log(await checkboxTwo.isClickable());
    console.log(await checkboxTwo.isEnabled());
    await browser.saveScreenshot('screenshot.png');
  });
});

// important to put await before certain commands.
// pay attention to loop conditions. Even array length requires await

// How to wait for array elementes to be displayed ? its seems to work only for $ and not for $$
