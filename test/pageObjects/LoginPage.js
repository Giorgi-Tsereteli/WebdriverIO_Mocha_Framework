class LoginPage {
  // u can create class properties by in similar way u did in Java
  // A nicer way seems to be writting getter and setter functions

  get userName() {
    return $("//input[@name='username']");
  }

  get password() {
    return $("//*[@id='password']");
  }

  get alert() {
    return $("//div[contains(@class,'alert-danger')]");
  }

  get textInfo() {
    return $('//p');
  }

  get signIn() {
    return $("//*[@id='signInBtn']");
  }

  async login(usernameInput, passwordInput) {
    // async and wait go here bcz u do actions on wdio
    // everything above is just JS, not wdio related actions
    await this.userName.setValue(usernameInput);
    await this.password.setValue(passwordInput);
    await this.signIn.click();
  }
}

// By writting this, u are exporting object of this class
// new LoginPage() is how u created object. Class name is LoginPage
module.exports = new LoginPage();
