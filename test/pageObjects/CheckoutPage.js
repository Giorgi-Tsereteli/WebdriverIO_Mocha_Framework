class CheckoutPage {
  get countryInputField() {
    return $("//*[@id='country']");
  }
  get countrySuggestions() {
    return $("//div[@class='suggestions']//a");
  }

  get indiaSuggestion() {
    return $("//div[@class='suggestions']//a[text()='India']");
  }

  get purchaseButton() {
    return $("//*[@value='Purchase']");
  }

  get successMessage() {
    return $('//strong');
  }
}
module.exports = new CheckoutPage();
