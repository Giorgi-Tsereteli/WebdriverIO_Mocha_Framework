const expectchai = require('chai').expect;

describe('Functional Testing', async () => {
  xit('Scroll and mouse over', async () => {
    await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    await $("//*[@id='mousehover']").scrollIntoView();
    await browser.pause(1500);
    await $("//*[@id='mousehover']").moveTo();
    await browser.pause(2500);
    await $("(//*[@class='mouse-hover-content']/a)[1]").click();
    await browser.pause(1000);
  });
  it('Alert Handling', async () => {
    await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    await $("//*[@id='name']").setValue('helloooo');
    await $("//*[@id='alertbtn']").click();
    expectchai(await browser.isAlertOpen()).to.be.true;
    await browser.acceptAlert();
    expectchai(await browser.isAlertOpen()).to.be.false;
  });
});

// In video, he also showed example of .doubleClick()
