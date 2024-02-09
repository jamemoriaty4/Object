let products = [
  { id: 1, product_name: "Iphone 12", price: 20000000 },
  { id: 2, product_name: "Iphone 11", price: 10000000 },
  { id: 3, product_name: "Product 3", price: 30000000 },
];

function sapXep(products) {
  return products.sort((a, b) => a.price - b.price);
}

console.log("Mảng products trước khi sắp xếp:");
console.log(products);

console.log("Mảng products sau khi sắp xếp tăng dần theo giá:");
console.log(sapXep(products));
