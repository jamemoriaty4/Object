let n = +prompt("nhap so lương sinh vien: ");

let id;
let name;
const students = {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  },
};

for (let i = 0; i < n; i++) {
  console.log("nhap thong tin cho sinh vien thư ", i);
  const studenId = prompt("nhap id sv");
  const name = prompt("nhap ten sv:");
  const student = new students(studenId, name);
  student.push(student);
}

console.log("thong tin cua các sinh vien: ");
students.forEach((student) => {
  log(`Id : ${student.id} \n tên: ${student.name}`);
});
