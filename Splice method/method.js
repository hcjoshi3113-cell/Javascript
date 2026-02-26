let Subject = ["Maths", "Chemistry", "English", "Physics", "Computer"];

Subject.splice(2, 1);
console.log("remove English",Subject);

Subject.splice(0, 0, "Env");
console.log("add Env at beginning",Subject);

Subject.splice("replace Chemistry with Communication",2, 1, "Communication");
console.log(Subject);

Subject.splice(-1, 1);
console.log("remove last Subject",Subject);

Subject.splice(2, 0, "Hindi", "Biology");
console.log("add two Subjects in middle",Subject);

let removed = Subject.splice(1, 2);
console.log("get removed Subject",removed);
console.log(Subject);

