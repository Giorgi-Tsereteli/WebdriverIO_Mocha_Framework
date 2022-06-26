class ShopPage {
  // when u create class, try to export it right away so u don't forget

  get shopPageHeading() {
    return $('//h1');
  }

  get checkoutBtn() {
    return $("//ul//a[contains(text(),'Checkout')]");
  }

  get products() {
    return $$("//div[@class='card-body']");
  }

  async addProductsToCart(itemsToChoose) {
    // itemsToChoose will be array of same name in TC
    for (let i = 0; i < (await this.products.length); i++) {
      let eachItem = await $$("//div[@class='card-body']/h4/a");
      if (itemsToChoose.includes(await eachItem[i].getText())) {
        await console.log(await eachItem[i].getText());
        await $(
          // this locator grabs item name and inserts into path
          "//div[@class='card-body']/h4/a[text()='" +
            (await eachItem[i].getText()) +
            "']/parent::h4/parent::div/following-sibling::div/button"
        ).click();
      }
    }
  }
}

module.exports = new ShopPage();
