const Books = [
  { author: "a", name: "ax" },
  { author: "b", name: "bx" },
  { author: "c", name: "dx" },
  { author: "d", name: "dx" },
];

const nameOfBook = prompt("Nhập tên tác giả: ");
let check = false;

for (let i = 0; i < books.length; i++) {
  if (books[i].name === nameOfBook) {
    console.log("Thông tin sách của tác giả " + nameOfBook + ":");
    console.log("Tên sách: " + Books[i].name);
    found = true;
  }
}
if (!found) {
  console.log("Không tìm thấy sách của tác giả " + searchAuthor);
}
