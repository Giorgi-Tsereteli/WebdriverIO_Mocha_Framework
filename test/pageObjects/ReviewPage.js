class ReviewPage {
  get cartItemPrices() {
    return $$('//tr/td[4]/strong');
  }

  get websiteCartTotal() {
    return $('//h3/strong');
  }

  get doneButton() {
    return $('(//tr//td[5]//button)[3]');
  }

  async calculatedSUM() {
    // 1. format prices, getText and split
    let formatedPriceArr = await Promise.all(
      await this.cartItemPrices.map(async (item) => await item.getText())
    );
    // 2. Add up all digits and make Sum
    let pricesSum = formatedPriceArr
      .map((price) => parseInt(price.split(' ')[1]))
      .reduce((total, eachPrice) => total + eachPrice, 0);

    // console.log(await pricesSum);
    return pricesSum;
  }

  async websiteSUM() {
    let totalFromWebsite = await this.websiteCartTotal.getText();
    return await parseInt(await totalFromWebsite.split(' ')[1]);
  }
}

module.exports = new ReviewPage();
