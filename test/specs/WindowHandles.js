describe('Handling multiple windows', async () => {
  it('Switch to second window Sanity', async () => {
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    console.log(await browser.getTitle());
    await $("//*[@class='blinkingText']").click();
    const allWindows = await browser.getWindowHandles();
    await browser.switchToWindow(allWindows[1]);
    console.log(await browser.getTitle());
    await browser.closeWindow();
    await browser.switchToWindow(allWindows[0]);
    console.log(await browser.getTitle());
    await browser.pause(2000);
  });
  it('Open new window manually and switch', async () => {
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    await browser.pause(2000);
    await browser.newWindow('https://www.google.com/');
    await browser.pause(2000);
    await browser.switchWindow('https://www.rahulshettyacademy.com/loginpagePractise/');
    await browser.pause(2000);
  });
});

// Almost identical to Java.
// Later double check with somone if getting all window handles retunrs ordered array or set
