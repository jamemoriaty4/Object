class Product {
  constructor(id, name, price, enquatity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.enquatity = enquatity;
  }
}

const product = new Product("1", "lap", "1$", "15");

console.log(`id ${product.id} , name ${product.name} , price ${product.price}`);
