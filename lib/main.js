import {sum, square, variable, Student} from './hello';

console.log(sum(2, 3))

console.log(square(5));

console.log(variable);

var info = {
    name: "Anthony Chen",
    id: 43352833
}

var student = new Student(info);

console.log(student.getName());

window.onload = function() {
    document.getElementById("banner").innerHTML = "Success! ";
}


