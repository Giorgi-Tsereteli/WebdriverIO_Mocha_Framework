const expectchai = require('chai').expect;

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
    expectchai(await loginDropdown.getValue()).to.equal('stud');
  });
});

// chair library gives commands to compare 2 values and make assertions
// U need to run npm install chai in your project dir
// Also, u have to create variable and assign require chai command.
// After that u can easily use it, just pay attention to new syntax. Its different from Java

// chain chai expect with .to.equal || .to.be.true
