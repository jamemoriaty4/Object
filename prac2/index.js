let id = +prompt("nhap id: ");
let name = prompt("nhap ten: ");
let photo = prompt("nhap anh: ");
let address = prompt("nhap dia chi:");

const information = {
  inforID: id,
  inforName: name,
  inforPhoto: photo,
  inforAddress: address,
};
delete information.inforAddress;
information.email = "phungddang@gmail.com";
console.log(information);
