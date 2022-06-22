describe('Pop Up Windows Automation', async () => {
  it('Registration Modal Window', async () => {
    // First verification that modal is shown and admin is still selected when clicking cancel
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    await $("(//span[@class='checkmark'])[2]").click();
    const popUp = await $("//*[@class='modal-body']"); // reusable locator for modal
    await popUp.waitForDisplayed();
    await $("//*[@id='cancelBtn']").click();
    const isAdminBtnSelected = await $("(//input[@id='usertype'])[1]").isSelected();
    await console.log('Admin Button --> ' + isAdminBtnSelected);

    // Second verification that modal is not showing when choosing Admin after User
    await $("(//span[@class='checkmark'])[2]").click();
    await popUp.waitForDisplayed();
    await $("//*[@id='okayBtn']").click();
    await $("(//span[@class='checkmark'])[1]").click();
    await expect(popUp).not.toBeDisplayed();
  });
  // can I create second it block and access my locators and vars from first?
});

// waitForDisplayed is used to wait for element to load. Then u begin interacting with it.
// expect is like Assert.assertTrue/False in Java. You simply verify something. Mehtod names for chaining are a bit different

// Everything else works in similar way as Selenium with Java
